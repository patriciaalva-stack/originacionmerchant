# Guía de Exportación: KYC Flowchart a Figma

Esta guía te ayudará a visualizar, exportar y usar el diagrama de flujo KYC en diferentes herramientas, especialmente para importarlo a Figma o FigJam.

---

## 📋 Tabla de Contenidos

1. [Visualización Rápida](#1-visualización-rápida)
2. [Exportar como Imagen (PNG/SVG)](#2-exportar-como-imagen-pngsvg)
3. [Importar a Figma](#3-importar-a-figma)
4. [Editar en FigJam](#4-editar-en-figjam)
5. [Herramientas Alternativas](#5-herramientas-alternativas)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Visualización Rápida

### Opción A: Mermaid Live Editor (Recomendado)

**Paso 1**: Abre el archivo [KYC_FLOW.md](./KYC_FLOW.md)

**Paso 2**: Copia todo el código que está entre los bloques:
```
```mermaid
[... código del diagrama ...]
```
```

**Paso 3**: Ve a [https://mermaid.live](https://mermaid.live)

**Paso 4**: Pega el código en el panel izquierdo

**Paso 5**: El diagrama se renderizará automáticamente en el panel derecho

### Opción B: Visual Studio Code

**Paso 1**: Instala la extensión "Markdown Preview Mermaid Support"
- Abre VSCode
- Ve a Extensions (Cmd+Shift+X en Mac, Ctrl+Shift+X en Windows)
- Busca "Markdown Preview Mermaid Support"
- Click en "Install"

**Paso 2**: Abre el archivo `KYC_FLOW.md`

**Paso 3**: Presiona:
- **Mac**: Cmd+Shift+V
- **Windows/Linux**: Ctrl+Shift+V

**Paso 4**: El diagrama se mostrará renderizado en el preview

### Opción C: GitHub / GitLab

Si subes este archivo a un repositorio, GitHub y GitLab renderizarán automáticamente los diagramas Mermaid.

---

## 2. Exportar como Imagen (PNG/SVG)

### Método 1: Mermaid Live Editor (Más Fácil)

**Paso 1**: Copia el código Mermaid del archivo `KYC_FLOW.md`

**Paso 2**: Ve a [https://mermaid.live](https://mermaid.live)

**Paso 3**: Pega el código en el panel izquierdo

**Paso 4**: El diagrama se renderizará en el panel derecho

**Paso 5**: Click en el botón "Actions" (arriba a la derecha)

**Paso 6**: Selecciona el formato de exportación:
- **SVG** (Recomendado para Figma): Mantiene calidad vectorial
- **PNG**: Para presentaciones o documentos
- **PDF**: Para impresión

**Paso 7**: El archivo se descargará automáticamente

#### Configuración Recomendada para Exportar:

| Formato | Uso | Calidad | Tamaño de Archivo |
|---------|-----|---------|-------------------|
| **SVG** | Figma, edición | Vectorial (infinita) | Pequeño (~50KB) |
| **PNG** | Presentaciones | 300 DPI recomendado | Medio (~500KB-2MB) |
| **PDF** | Impresión | Vectorial | Medio (~100KB) |

### Método 2: Mermaid CLI (Para usuarios avanzados)

**Paso 1**: Instala Mermaid CLI (requiere Node.js)
```bash
npm install -g @mermaid-js/mermaid-cli
```

**Paso 2**: Navega al directorio del proyecto
```bash
cd "/Users/spatricia/Prueba 1 Claude/weather-app"
```

**Paso 3**: Exporta a SVG
```bash
mmdc -i KYC_FLOW.md -o KYC_FLOW.svg
```

**Paso 4**: O exporta a PNG con alta resolución
```bash
mmdc -i KYC_FLOW.md -o KYC_FLOW.png -w 3000 -H 2000 -b white
```

Parámetros:
- `-w`: Ancho en píxeles
- `-H`: Alto en píxeles
- `-b`: Color de fondo (white, transparent, etc.)

### Método 3: VS Code con Extensión

**Paso 1**: Instala "Markdown PDF" extension

**Paso 2**: Abre `KYC_FLOW.md`

**Paso 3**: Presiona Cmd+Shift+P (Mac) o Ctrl+Shift+P (Windows)

**Paso 4**: Busca "Markdown PDF: Export (png)"

**Paso 5**: El archivo PNG se guardará en el mismo directorio

---

## 3. Importar a Figma

### Método A: Importar SVG (Recomendado)

**¿Por qué SVG?**
- Mantiene calidad vectorial perfecta
- Editables en Figma
- Tamaño de archivo pequeño
- Escalable sin pérdida de calidad

**Pasos**:

**1. Exportar el diagrama como SVG** (ver sección anterior)

**2. Abrir Figma**
- Ve a https://figma.com
- Abre o crea un proyecto

**3. Importar el SVG**
   - **Opción A**: Arrastra el archivo SVG directamente al canvas de Figma
   - **Opción B**: Menu → File → Place Image... → Selecciona el archivo SVG
   - **Opción C**: Presiona Cmd+Shift+K (Mac) o Ctrl+Shift+K (Windows) → Selecciona el SVG

**4. El diagrama aparecerá en el canvas**

**5. Ajustes post-importación recomendados**:
   - Desagrupar elementos: Click derecho → Ungroup (Cmd+Shift+G)
   - Ajustar colores si es necesario
   - Cambiar tipografías al estilo de tu marca
   - Reorganizar elementos si es necesario

### Método B: Importar PNG

**Pasos**:

**1. Exportar como PNG de alta resolución** (mínimo 300 DPI)

**2. Abrir Figma** y tu proyecto

**3. Importar PNG**:
   - Arrastra el archivo PNG al canvas
   - O usa File → Place Image...

**4. Consideraciones**:
   - ⚠️ PNG no es vectorial, puede perder calidad al escalar
   - ✅ Útil para presentaciones rápidas
   - ✅ Puedes usarlo como referencia y recrear en Figma

### Mejores Prácticas en Figma

**Después de importar el SVG**:

1. **Organizar en Frames**:
   - Selecciona todo el diagrama
   - Presiona Cmd+Option+G (Mac) o Ctrl+Alt+G (Windows)
   - Nombra el frame "KYC Flow v1.0"

2. **Crear Componentes Reutilizables**:
   - Convierte formas repetidas (decisiones, procesos) en componentes
   - Esto facilita actualizaciones futuras

3. **Ajustar Estilos**:
   - Crea estilos de color para estados (Aprobado, Rechazado, etc.)
   - Define estilos de texto consistentes

4. **Agregar Interactividad** (opcional):
   - Usa Prototype mode para crear flujos interactivos
   - Agrega hotspots en decisiones

---

## 4. Editar en FigJam

FigJam es ideal para colaboración y brainstorming de flujos.

### Importar a FigJam

**Paso 1**: Exporta el diagrama como PNG o SVG

**Paso 2**: Abre FigJam (https://figjam.com)

**Paso 3**: Crea o abre un tablero

**Paso 4**: Importa la imagen
- Arrastra el archivo al tablero
- O usa el botón "+" → Image → Upload

**Paso 5**: Usa las herramientas de FigJam para:
- Agregar sticky notes con comentarios
- Dibujar conexiones adicionales
- Colaborar en tiempo real con el equipo
- Agregar votaciones o reacciones

### Recrear Nativo en FigJam

Si prefieres recrear el diagrama nativamente en FigJam:

**1. Usa las formas built-in**:
   - Flowchart shapes disponibles en la barra lateral
   - Rectángulos para procesos
   - Rombos para decisiones
   - Círculos para inicio/fin

**2. Conecta con flechas**:
   - Usa la herramienta Connector (C)
   - Arrastra desde un elemento a otro
   - Las conexiones se actualizan automáticamente al mover elementos

**3. Colores y estilos**:
   - Verde: Aprobados
   - Rojo: Rechazados
   - Amarillo: En revisión
   - Azul: Procesos

---

## 5. Herramientas Alternativas

### A. Lucidchart

**Importar**:
1. Ve a https://lucidchart.com
2. Create New → Import
3. Selecciona tu archivo SVG/PNG
4. Edita con las herramientas de Lucidchart

### B. Draw.io (Diagrams.net)

**Importar Mermaid**:
1. Ve a https://app.diagrams.net
2. Extras → Plugins → Search for "Mermaid"
3. Install Mermaid plugin
4. Insert → Advanced → Mermaid
5. Pega el código Mermaid

**Exportar desde Draw.io**:
- File → Export as → SVG/PNG/PDF
- Luego importar a Figma

### C. Miro

**Importar**:
1. Ve a https://miro.com
2. Crea o abre un board
3. Upload image (SVG o PNG)
4. Usa como referencia o para colaboración

### D. Notion

**Embedding**:
1. Exporta como imagen
2. En Notion: `/image`
3. Upload tu imagen
4. O usa `/embed` con link a Mermaid Live

---

## 6. Troubleshooting

### Problema: El SVG no se importa correctamente en Figma

**Solución 1**: Usa Mermaid Live Editor
- Asegúrate de exportar desde https://mermaid.live
- No uses exportadores de terceros

**Solución 2**: Convierte SVG a PNG primero
- Abre el SVG en un navegador
- Click derecho → Inspect
- Screenshot de alta resolución
- Importa el PNG a Figma

**Solución 3**: Simplifica el diagrama
- Divide en secciones más pequeñas
- Exporta cada sección por separado

### Problema: Los colores no coinciden en Figma

**Solución**:
- Después de importar, selecciona elementos
- Usa el color picker de Figma para ajustar
- Guarda como estilos de color para consistencia

### Problema: El texto es muy pequeño

**Solución**:
- Antes de exportar desde Mermaid Live:
  - Agrega configuración al inicio del código Mermaid:
  ```mermaid
  %%{init: {'theme':'base', 'themeVariables': { 'fontSize':'18px'}}}%%
  ```
- O en Figma después de importar:
  - Selecciona todo el diagrama
  - Escala proporcionalmente (mantén Shift presionado)

### Problema: El diagrama es muy grande/pequeño

**Solución**:
- **Para PNG**: Exporta con dimensiones específicas usando CLI:
  ```bash
  mmdc -i KYC_FLOW.md -o KYC_FLOW.png -w 4000 -H 3000
  ```
- **Para SVG**: Escala en Figma sin pérdida de calidad

### Problema: No puedo ver el diagrama en GitHub

**Solución**:
- GitHub a veces tarda en renderizar Mermaid
- Asegúrate de que el código esté entre:
  ````
  ```mermaid
  [código]
  ```
  ````
- Si persiste, usa Mermaid Live Editor

---

## 📚 Recursos Adicionales

### Documentación Oficial
- [Mermaid Docs](https://mermaid.js.org/)
- [Figma Help Center](https://help.figma.com/)
- [FigJam Guide](https://help.figma.com/hc/en-us/categories/4404407785879-FigJam)

### Tutoriales en Video
- [Mermaid Tutorial](https://www.youtube.com/results?search_query=mermaid+flowchart+tutorial)
- [Figma Import SVG](https://www.youtube.com/results?search_query=figma+import+svg)

### Comunidad
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
- [Figma Community](https://www.figma.com/community)

---

## 🔄 Flujo de Trabajo Recomendado

**Para actualizaciones frecuentes**:

1. **Edita** el código Mermaid en `KYC_FLOW.md`
2. **Valida** en Mermaid Live Editor
3. **Exporta** como SVG
4. **Reemplaza** la imagen en Figma
5. **Ajusta** estilos si es necesario
6. **Comparte** con el equipo

**Para colaboración**:

1. Exporta versión actual como PNG
2. Importa a FigJam
3. Trabaja con el equipo
4. Documenta cambios
5. Actualiza el código Mermaid
6. Regenera y distribuye

---

## ✅ Checklist de Exportación

Antes de compartir el diagrama:

- [ ] Código Mermaid validado en Mermaid Live
- [ ] SVG exportado con alta calidad
- [ ] Importado correctamente en Figma
- [ ] Colores ajustados según brand guidelines
- [ ] Texto legible y tipografía consistente
- [ ] Diagrama organizado en frames/grupos
- [ ] Versión documentada (v1.0, v1.1, etc.)
- [ ] Compartido con stakeholders relevantes

---

## 💡 Tips y Mejores Prácticas

1. **Siempre usa SVG para Figma**: Mantiene calidad vectorial
2. **Versionado**: Guarda versiones del código Mermaid en Git
3. **Documentación**: Mantén notas de cambios en el archivo MD
4. **Colaboración**: Usa FigJam para sesiones en vivo, Figma para diseño final
5. **Backup**: Guarda tanto el código Mermaid como las exportaciones
6. **Accesibilidad**: Asegúrate de que los colores tengan suficiente contraste
7. **Responsive**: El SVG se adapta a diferentes tamaños sin perder calidad

---

## 📞 Soporte

Si tienes problemas con:

- **Mermaid syntax**: [Mermaid GitHub Issues](https://github.com/mermaid-js/mermaid/issues)
- **Figma import**: [Figma Support](https://help.figma.com/)
- **Este proyecto**: Contacta al equipo de desarrollo

---

*Última actualización: 2026-02-16*
*Versión de la guía: 1.0*
