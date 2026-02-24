# Instrucciones para Crear Flowchart KYC en FigJam

## 🔗 Link Directo
Abre: **https://www.figma.com/figjam/new**

---

## 🎨 Configuración Inicial

1. **Nombra el archivo**: "Flujo KYC - Validación de Créditos"
2. **Activa la grilla** (Grid): View → Show Grid
3. **Zoom**: Ajusta a 100% para empezar

---

## 📦 Elementos a Crear

### 🎯 Inicio (Centro Superior)

**Elemento 1: Óvalo de Inicio**
- Shape: Oval/Circle
- Texto: "Solicitud de Crédito"
- Color: Azul (#60a5fa)
- Posición: Centro superior
- Tamaño: 200x100px

---

## 📍 Columna Izquierda: Flujo KYC 6

### Decisión Principal
**Rombo 1**
- Shape: Diamond
- Texto: "¿Es Compliant?"
- Color: Naranja (#fb923c)
- Conectar desde Inicio con flecha "NO" hacia la izquierda

### Proceso KYC 6
**Rectángulo 1**
- Shape: Rectangle (bordes redondeados)
- Texto: "Iniciar KYC 6"
- Color: Azul (#60a5fa)
- Conectar desde Rombo 1

**Rombo 2**
- Texto: "¿Usuario completa?"
- Color: Naranja (#fb923c)

### Rama de Abandono (hacia la izquierda)
**Rectángulo 2**
- Texto: "Enviar Comunicación"
- Color: Naranja (#fb923c)
- Conectar con "NO"

**Rectángulo 3**
- Texto: "Recordatorio"
- Color: Naranja (#fb923c)

**Rectángulo 4**
- Texto: "Reintentar"
- Color: Naranja (#fb923c)
- **Flecha curva de vuelta** a "¿Usuario completa?"

### Rama de Completado (hacia abajo)
**Rectángulo 5**
- Texto: "Validar Información"
- Color: Azul (#60a5fa)
- Conectar con "SÍ"

**Rombo 3**
- Texto: "¿Info Completa?"
- Color: Naranja (#fb923c)

**Rectángulo 6** (si NO)
- Texto: "Revisión Manual\n⏱️ 48 horas"
- Color: Amarillo (#fbbf24)

**Rombo 4** (si SÍ)
- Texto: "¿Red Flag?"
- Color: Naranja (#fb923c)

**Óvalo Final 1** (si NO en Red Flag)
- Texto: "✓ Aprobar"
- Color: Verde (#4ade80)
- Borde grueso (3px)

**Óvalo Final 2** (si SÍ en Red Flag)
- Texto: "✗ Rechazar/\nRevisión Manual"
- Color: Rojo (#f87171)
- Borde grueso (3px)

---

## 📍 Columna Derecha: Flujo KYC 7

### Decisión Monto
**Rombo 5**
- Texto: "¿Monto > $2,000?"
- Color: Naranja (#fb923c)
- Conectar desde Inicio con flecha "SÍ" hacia la derecha

### Proceso KYC 7
**Rectángulo 7**
- Texto: "Iniciar KYC 7"
- Color: Azul (#60a5fa)

**Rectángulo 8**
- Texto: "Validar Información"
- Color: Azul (#60a5fa)

**Rombo 6**
- Texto: "¿Info Completa?"
- Color: Naranja (#fb923c)

### Rama Información Incompleta (si NO)
**Rectángulo 9**
- Texto: "Solicitar Documentos"
- Color: Azul (#60a5fa)

**Rectángulo 10**
- Texto: "Revisión Manual\n⏱️ 48 horas"
- Color: Amarillo (#fbbf24)

### Rama Información Completa (si SÍ)
**Rombo 7**
- Texto: "¿Red Flag?"
- Color: Naranja (#fb923c)

**Óvalo Final 3** (si NO)
- Texto: "✓ Aprobar"
- Color: Verde (#4ade80)

**Rectángulo 11** (si SÍ)
- Texto: "Revisión Manual\n⏱️ 48 horas"
- Color: Amarillo (#fbbf24)

**Óvalo Final 4**
- Texto: "Decisión Final"
- Color: Gris (#94a3b8)

---

## 📍 Flujo Normal (Centro-Derecha)

**Óvalo Final 5**
- Texto: "Flujo Normal\nContinuar Proceso"
- Color: Gris (#94a3b8)
- Conectar desde "¿Es Compliant?" con "SÍ" y "¿Monto > $2,000?" con "NO"

---

## 🔗 Conectores y Flechas

### Tipos de Conectores:
1. **Flechas rectas**: Para flujo secuencial
2. **Flechas con etiquetas**: "SÍ", "NO", "Abandona", "Completa"
3. **Flecha curva**: Desde "Reintentar" de vuelta a "¿Usuario completa?"

### Etiquetas en Flechas:
- Decisiones: Siempre etiquetar con "SÍ" o "NO"
- Acciones específicas: "Abandona", "Completa", "Red Flag"

---

## 🎨 Paleta de Colores

Copia estos códigos hex exactos:

| Color | Hex Code | Uso |
|-------|----------|-----|
| 🟢 Verde | `#4ade80` | Aprobaciones |
| 🔴 Rojo | `#f87171` | Rechazos |
| 🟡 Amarillo | `#fbbf24` | Revisión Manual |
| 🔵 Azul | `#60a5fa` | Procesos Normales |
| 🟠 Naranja | `#fb923c` | Abandono/Decisiones |
| ⚪ Gris | `#94a3b8` | Flujo Normal |

---

## ✍️ Tipografía

- **Fuente**: Inter (default de FigJam)
- **Tamaño títulos**: 16-18pt
- **Tamaño decisiones**: 14pt
- **Peso**: Medium (500) para títulos
- **Alineación**: Centro

---

## 📐 Layout y Espaciado

### Medidas Recomendadas:
- **Distancia entre elementos**: 80-100px vertical
- **Ancho de columnas**: 300px para KYC 6 y KYC 7
- **Separación de columnas**: 400px
- **Tamaño de rombos**: 180x120px
- **Tamaño de rectángulos**: 200x80px
- **Tamaño de óvalos finales**: 160x80px

### Distribución:
```
[Inicio]
    ↓
[¿Compliant?] ←→ [¿Monto>2000?]
    ↓                    ↓
[KYC 6]              [KYC 7]
    ↓                    ↓
[Flujo             [Flujo
 Izquierda]         Derecha]
```

---

## 🎯 Tips de FigJam

1. **Shortcuts útiles:**
   - `R` = Rectángulo
   - `O` = Óvalo
   - `C` = Conector/Flecha
   - `T` = Texto
   - `Shift + Click` = Selección múltiple

2. **Alineación:**
   - Usa `Cmd/Ctrl + Alt + A` para alinear al centro
   - Usa la grilla para espaciado uniforme

3. **Duplicar elementos:**
   - `Cmd/Ctrl + D` para duplicar
   - `Alt + Drag` para duplicar arrastrando

4. **Conectores inteligentes:**
   - Los conectores se pegan automáticamente a los bordes
   - Ajusta los puntos de anclaje arrastrando

5. **Agrupación:**
   - Selecciona múltiples elementos
   - `Cmd/Ctrl + G` para agrupar por sección

---

## ✅ Checklist Final

Antes de terminar, verifica:

- [ ] Todos los elementos tienen el color correcto
- [ ] Todas las decisiones (rombos) tienen flechas con "SÍ" y "NO"
- [ ] La flecha de "Reintentar" vuelve correctamente al proceso
- [ ] Los textos están centrados y son legibles
- [ ] El espaciado es uniforme
- [ ] Los estados finales (óvalos) están claramente marcados
- [ ] Las revisiones manuales muestran "48 horas"
- [ ] El título del archivo es correcto

---

## 🚀 Exportar y Compartir

Una vez terminado:

1. **Nombrar frames**: Selecciona todo y crea un Frame (Cmd/Ctrl + Alt + G)
2. **Añadir título**: Agrega un text box grande arriba con "Flujo KYC - Validación de Créditos"
3. **Exportar**: File → Export → PNG o PDF
4. **Compartir**: Share → Copy link

---

## 💡 Notas Adicionales

- **Tiempo estimado**: 15-20 minutos
- **Dificultad**: Media
- **Requerimientos**: Cuenta de Figma (gratis funciona)

---

**¿Necesitas ayuda?** Comparte el link del FigJam y puedo darte feedback específico.

---

*Generado por Claude Code - 2026-02-16*
