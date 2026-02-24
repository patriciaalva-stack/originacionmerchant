import * as dotenv from 'dotenv';
import { FigmaAPI, FlowchartBuilder } from '../utils/figmaAPI';

// Cargar variables de entorno
dotenv.config({ path: '.env.figma' });

/**
 * Script de ejemplo para crear un flowchart en FigJam
 *
 * NOTA: La API de Figma actualmente NO soporta la creación directa de nodos
 * en archivos de FigJam mediante la REST API pública. Este script demuestra
 * cómo trabajar con la estructura de datos, pero la creación real requiere
 * usar el Figma Plugin API o la API de Widgets.
 */
async function main() {
  const accessToken = process.env.FIGMA_ACCESS_TOKEN;
  const fileKey = process.env.FIGMA_FILE_KEY;

  if (!accessToken || !fileKey) {
    console.error('❌ Error: FIGMA_ACCESS_TOKEN y FIGMA_FILE_KEY deben estar configurados en .env.figma');
    process.exit(1);
  }

  console.log('🚀 Iniciando conexión con Figma API...\n');

  const figma = new FigmaAPI(accessToken, fileKey);

  try {
    // 1. Obtener información del archivo
    console.log('📄 Obteniendo información del archivo...');
    const fileData = await figma.getFile();
    console.log(`✅ Archivo: ${fileData.name}`);
    console.log(`   Última modificación: ${fileData.lastModified}`);
    console.log(`   Páginas: ${fileData.document.children.length}\n`);

    // 2. Listar páginas disponibles
    console.log('📑 Páginas disponibles:');
    fileData.document.children.forEach((page: any, index: number) => {
      console.log(`   ${index + 1}. ${page.name} (ID: ${page.id})`);
    });
    console.log();

    // 3. Crear estructura de flowchart (conceptual)
    console.log('🎨 Creando estructura de flowchart...');
    const builder = new FlowchartBuilder();

    builder.addStartNode('Inicio');
    builder.addProcessNode('Procesar datos');
    builder.addDecisionNode('¿Datos válidos?');
    builder.addProcessNode('Guardar en BD');
    builder.addEndNode('Fin');

    const nodes = builder.getNodes();
    console.log(`✅ Flowchart creado con ${nodes.length} nodos\n`);

    // 4. Mostrar estructura del flowchart
    console.log('📊 Estructura del flowchart:');
    nodes.forEach((node, index) => {
      console.log(`   ${index + 1}. ${node.name}: "${node.text}" (${node.type})`);
      console.log(`      Posición: (${node.x}, ${node.y}), Tamaño: ${node.width}x${node.height}`);
    });
    console.log();

    // 5. Información sobre limitaciones
    console.log('⚠️  IMPORTANTE:');
    console.log('   La Figma REST API pública NO permite crear nodos directamente.');
    console.log('   Para crear flowcharts automáticamente en FigJam, necesitas:');
    console.log('   1. Usar el Figma Plugin API (requiere crear un plugin)');
    console.log('   2. Usar FigJam Widgets (requiere desarrollo de widget personalizado)');
    console.log('   3. Usar herramientas de terceros como Mermaid → FigJam\n');

    // 6. Operaciones disponibles con REST API
    console.log('✅ Operaciones disponibles con REST API:');
    console.log('   - Leer contenido de archivos ✓');
    console.log('   - Exportar nodos como imágenes ✓');
    console.log('   - Añadir comentarios ✓');
    console.log('   - Obtener versiones del archivo ✓');
    console.log('   - Crear nodos directamente ✗\n');

    // 7. Demostrar exportación de nodos (si existen)
    if (fileData.document.children.length > 0) {
      const firstPage = fileData.document.children[0];
      if (firstPage.children && firstPage.children.length > 0) {
        const firstNode = firstPage.children[0];
        console.log(`📸 Exportando primer nodo de la página "${firstPage.name}"...`);
        const exportData = await figma.exportNode(firstNode.id, 'png', 2);
        console.log(`✅ URL de exportación: ${exportData.images[firstNode.id]}\n`);
      }
    }

  } catch (error: any) {
    console.error('\n❌ Error:', error.response?.data || error.message);

    if (error.response?.status === 403) {
      console.error('\n💡 Sugerencia: Verifica que tu token de acceso sea válido y tenga los permisos correctos.');
    } else if (error.response?.status === 404) {
      console.error('\n💡 Sugerencia: Verifica que el FILE_KEY sea correcto en tu .env.figma');
    }

    process.exit(1);
  }
}

// Ejecutar script
main();
