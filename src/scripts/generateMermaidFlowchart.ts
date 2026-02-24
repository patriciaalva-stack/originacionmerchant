/**
 * Generador de Flowcharts usando Mermaid
 *
 * Mermaid es un formato de texto para crear diagramas que puede:
 * 1. Renderizarse en GitHub/GitLab automáticamente
 * 2. Exportarse como imagen
 * 3. Importarse a FigJam usando plugins
 */

interface MermaidNode {
  id: string;
  label: string;
  shape: 'rectangle' | 'rounded' | 'stadium' | 'subroutine' | 'cylindrical' | 'circle' | 'asymmetric' | 'rhombus' | 'hexagon';
}

interface MermaidConnection {
  from: string;
  to: string;
  label?: string;
  type: 'solid' | 'dotted' | 'thick';
}

export class MermaidFlowchartGenerator {
  private nodes: MermaidNode[] = [];
  private connections: MermaidConnection[] = [];

  /**
   * Añade un nodo al flowchart
   */
  addNode(id: string, label: string, shape: MermaidNode['shape'] = 'rectangle'): void {
    this.nodes.push({ id, label, shape });
  }

  /**
   * Conecta dos nodos
   */
  connect(from: string, to: string, label?: string, type: MermaidConnection['type'] = 'solid'): void {
    this.connections.push({ from, to, label, type });
  }

  /**
   * Obtiene la sintaxis de forma según el tipo
   */
  private getShapeSyntax(node: MermaidNode): string {
    const shapes = {
      rectangle: `[${node.label}]`,
      rounded: `(${node.label})`,
      stadium: `([${node.label}])`,
      subroutine: `[[${node.label}]]`,
      cylindrical: `[(${node.label})]`,
      circle: `((${node.label}))`,
      asymmetric: `>${node.label}]`,
      rhombus: `{${node.label}}`,
      hexagon: `{{${node.label}}}`,
    };
    return shapes[node.shape];
  }

  /**
   * Obtiene la sintaxis de conexión según el tipo
   */
  private getConnectionSyntax(conn: MermaidConnection): string {
    const arrows = {
      solid: '-->',
      dotted: '-.->',
      thick: '==>',
    };

    const arrow = arrows[conn.type];

    if (conn.label) {
      return `${conn.from} ${arrow}|${conn.label}| ${conn.to}`;
    }
    return `${conn.from} ${arrow} ${conn.to}`;
  }

  /**
   * Genera el código Mermaid
   */
  generate(): string {
    let mermaid = 'graph TD\n';

    // Añadir nodos
    this.nodes.forEach(node => {
      mermaid += `    ${node.id}${this.getShapeSyntax(node)}\n`;
    });

    mermaid += '\n';

    // Añadir conexiones
    this.connections.forEach(conn => {
      mermaid += `    ${this.getConnectionSyntax(conn)}\n`;
    });

    return mermaid;
  }

  /**
   * Genera el código Mermaid con estilos personalizados
   */
  generateWithStyles(): string {
    let mermaid = this.generate();

    // Añadir estilos
    mermaid += '\n';
    mermaid += '    %% Estilos\n';
    mermaid += '    classDef startEnd fill:#90EE90,stroke:#333,stroke-width:2px\n';
    mermaid += '    classDef process fill:#87CEEB,stroke:#333,stroke-width:2px\n';
    mermaid += '    classDef decision fill:#FFD700,stroke:#333,stroke-width:2px\n';
    mermaid += '    classDef error fill:#FFB6C1,stroke:#333,stroke-width:2px\n';

    return mermaid;
  }

  /**
   * Reinicia el generador
   */
  reset(): void {
    this.nodes = [];
    this.connections = [];
  }
}

/**
 * Ejemplo de uso
 */
function main() {
  console.log('🎨 Generador de Flowcharts con Mermaid\n');
  console.log('=' .repeat(60) + '\n');

  // Ejemplo 1: Flowchart simple de proceso de login
  console.log('📊 Ejemplo 1: Proceso de Login\n');

  const loginFlow = new MermaidFlowchartGenerator();

  loginFlow.addNode('A', 'Inicio', 'stadium');
  loginFlow.addNode('B', 'Ingresar credenciales', 'rectangle');
  loginFlow.addNode('C', '¿Credenciales válidas?', 'rhombus');
  loginFlow.addNode('D', 'Acceso concedido', 'rectangle');
  loginFlow.addNode('E', 'Mostrar error', 'rectangle');
  loginFlow.addNode('F', 'Fin', 'stadium');

  loginFlow.connect('A', 'B');
  loginFlow.connect('B', 'C');
  loginFlow.connect('C', 'D', 'Sí');
  loginFlow.connect('C', 'E', 'No');
  loginFlow.connect('D', 'F');
  loginFlow.connect('E', 'B', 'Reintentar');

  console.log('```mermaid');
  console.log(loginFlow.generate());
  console.log('```\n');

  // Ejemplo 2: Flowchart de procesamiento de pagos
  console.log('=' .repeat(60) + '\n');
  console.log('📊 Ejemplo 2: Procesamiento de Pagos\n');

  const paymentFlow = new MermaidFlowchartGenerator();

  paymentFlow.addNode('START', 'Iniciar pago', 'stadium');
  paymentFlow.addNode('VALIDATE', 'Validar datos', 'rectangle');
  paymentFlow.addNode('CHECK_FUNDS', '¿Fondos suficientes?', 'rhombus');
  paymentFlow.addNode('PROCESS', 'Procesar pago', 'rectangle');
  paymentFlow.addNode('CONFIRM', 'Enviar confirmación', 'rectangle');
  paymentFlow.addNode('ERROR', 'Error: Fondos insuficientes', 'rectangle');
  paymentFlow.addNode('END', 'Fin', 'stadium');

  paymentFlow.connect('START', 'VALIDATE', undefined, 'thick');
  paymentFlow.connect('VALIDATE', 'CHECK_FUNDS');
  paymentFlow.connect('CHECK_FUNDS', 'PROCESS', 'Sí');
  paymentFlow.connect('CHECK_FUNDS', 'ERROR', 'No');
  paymentFlow.connect('PROCESS', 'CONFIRM', undefined, 'thick');
  paymentFlow.connect('CONFIRM', 'END', undefined, 'thick');
  paymentFlow.connect('ERROR', 'END', undefined, 'dotted');

  console.log('```mermaid');
  console.log(paymentFlow.generateWithStyles());
  console.log('```\n');

  // Ejemplo 3: Flowchart de sistema de notificaciones
  console.log('=' .repeat(60) + '\n');
  console.log('📊 Ejemplo 3: Sistema de Notificaciones\n');

  const notificationFlow = new MermaidFlowchartGenerator();

  notificationFlow.addNode('START', 'Evento del sistema', 'circle');
  notificationFlow.addNode('CHECK_USER', 'Verificar preferencias de usuario', 'rectangle');
  notificationFlow.addNode('PREF_CHECK', '¿Notificaciones activas?', 'rhombus');
  notificationFlow.addNode('CHOOSE_CHANNEL', 'Seleccionar canal', 'hexagon');
  notificationFlow.addNode('EMAIL', 'Enviar email', 'subroutine');
  notificationFlow.addNode('PUSH', 'Enviar push', 'subroutine');
  notificationFlow.addNode('SMS', 'Enviar SMS', 'subroutine');
  notificationFlow.addNode('LOG', 'Registrar en log', 'cylindrical');
  notificationFlow.addNode('END', 'Fin', 'circle');

  notificationFlow.connect('START', 'CHECK_USER');
  notificationFlow.connect('CHECK_USER', 'PREF_CHECK');
  notificationFlow.connect('PREF_CHECK', 'CHOOSE_CHANNEL', 'Sí');
  notificationFlow.connect('PREF_CHECK', 'END', 'No', 'dotted');
  notificationFlow.connect('CHOOSE_CHANNEL', 'EMAIL', 'Email');
  notificationFlow.connect('CHOOSE_CHANNEL', 'PUSH', 'Push');
  notificationFlow.connect('CHOOSE_CHANNEL', 'SMS', 'SMS');
  notificationFlow.connect('EMAIL', 'LOG');
  notificationFlow.connect('PUSH', 'LOG');
  notificationFlow.connect('SMS', 'LOG');
  notificationFlow.connect('LOG', 'END');

  console.log('```mermaid');
  console.log(notificationFlow.generate());
  console.log('```\n');

  // Instrucciones de uso
  console.log('=' .repeat(60) + '\n');
  console.log('📝 Cómo usar estos diagramas:\n');
  console.log('1. Copia el código Mermaid (entre ```mermaid y ```)');
  console.log('2. Pégalo en un archivo .md de GitHub/GitLab');
  console.log('3. O usa https://mermaid.live/ para visualizarlo');
  console.log('4. Exporta como PNG/SVG si lo necesitas');
  console.log('5. Importa a FigJam usando el plugin "Mermaid to FigJam"\n');

  console.log('🔗 Recursos:');
  console.log('   • Mermaid Live Editor: https://mermaid.live/');
  console.log('   • Mermaid Docs: https://mermaid.js.org/');
  console.log('   • Figma Plugin: Busca "Mermaid" en Figma Community\n');
}

// Ejecutar ejemplos
main();

export default MermaidFlowchartGenerator;
