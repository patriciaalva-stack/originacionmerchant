# 🚀 Quick Start - Figma API

Guía rápida de 5 minutos para empezar a usar la Figma API.

## ✅ Checklist de Configuración

- [ ] Token de Figma generado
- [ ] File Key obtenido
- [ ] Variables de entorno configuradas
- [ ] Dependencias instaladas

---

## 📝 Pasos Rápidos

### 1️⃣ Genera tu Token de Figma (2 minutos)

1. Abre: https://www.figma.com/settings
2. Busca **"Personal access tokens"**
3. Click **"Generate new token"**
4. Nombre: `FigJam API`
5. **Copia el token** (solo se muestra una vez)

### 2️⃣ Obtén tu File Key (30 segundos)

Abre tu archivo de FigJam y copia el ID de la URL:

```
https://www.figma.com/file/ABC123XYZ456/Mi-Archivo
                              ↑↑↑↑↑↑↑↑↑↑↑↑
                           Este es tu FILE_KEY
```

### 3️⃣ Configura las Variables (1 minuto)

Edita [.env.figma](.env.figma):

```bash
FIGMA_ACCESS_TOKEN=figd_TU_TOKEN_AQUI
FIGMA_FILE_KEY=TU_FILE_KEY_AQUI
```

### 4️⃣ Instala Dependencias (1 minuto)

```bash
npm install
```

### 5️⃣ Prueba la Conexión (30 segundos)

```bash
npm run figma:test
```

**Resultado esperado:**
```
🚀 Iniciando conexión con Figma API...
✅ Archivo: Mi Flowchart
   Última modificación: 2024-01-15T10:30:00Z
```

---

## 🎯 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run figma:test` | Prueba conexión con Figma API |
| `npm run figma:mermaid` | Genera flowcharts con Mermaid |

---

## ⚡ Ejemplos Rápidos

### Ejemplo 1: Leer un Archivo

```typescript
import { FigmaAPI } from './utils/figmaAPI';

const figma = new FigmaAPI(
  'tu-token',
  'tu-file-key'
);

const file = await figma.getFile();
console.log(file.name);
```

### Ejemplo 2: Generar Flowchart con Mermaid

```bash
npm run figma:mermaid
```

Copia el output y pégalo en:
- GitHub/GitLab (se renderiza automáticamente)
- https://mermaid.live/ (para preview)
- FigJam (usando plugin "Mermaid to FigJam")

---

## ❌ Troubleshooting Común

### Error: "Access token is invalid"

**Problema:** Token incorrecto o expirado

**Solución:**
1. Regenera el token en Figma Settings
2. Actualiza `.env.figma`
3. Vuelve a ejecutar el script

### Error: "File not found"

**Problema:** File Key incorrecto

**Solución:**
1. Verifica el File Key en la URL del archivo
2. Asegúrate de tener acceso al archivo
3. Actualiza `.env.figma`

### Error: "FIGMA_ACCESS_TOKEN no definido"

**Problema:** Variables de entorno no cargadas

**Solución:**
1. Verifica que `.env.figma` existe
2. Revisa que no haya espacios en las variables
3. Reinicia tu terminal

---

## 📚 Siguiente Paso

Lee la [documentación completa](FIGMA_API_SETUP.md) para:
- Entender limitaciones de la REST API
- Explorar alternativas para crear nodos
- Ver ejemplos avanzados
- Integrar con Figma Plugins

---

## 🆘 ¿Necesitas Ayuda?

1. 📖 [Documentación Completa](FIGMA_API_SETUP.md)
2. 🌐 [Figma API Docs](https://www.figma.com/developers/api)
3. 💬 [Figma Community Forum](https://forum.figma.com/)

---

**¿Todo funcionó?** 🎉 Ahora puedes explorar la [documentación completa](FIGMA_API_SETUP.md)
