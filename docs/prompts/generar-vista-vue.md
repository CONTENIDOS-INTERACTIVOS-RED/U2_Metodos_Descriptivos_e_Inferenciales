# Prompt: Generación Automática de Vistas Vue.js

## Instrucciones para Claude Code

Genera una vista Vue.js a partir del archivo de contenido estructurado y la imagen de diseño proporcionados.

### Contexto del Proyecto
Este es un proyecto de plataforma educativa Vue.js que utiliza patrones de snippets predefinidos para crear vistas consistentes. El archivo `CLAUDE.md` contiene toda la documentación técnica necesaria.

### Archivos de Entrada Requeridos
1. **Archivo de contenido**: `/src/textos/{tema}.md` - Contenido estructurado con marcas de snippets
2. **Imagen de diseño**: `/src/textos/{tema}.png` - Mockup visual exportado desde Adobe XD/Figma

### Proceso de Generación

#### 1. Análisis del Contenido Estructurado
Analiza el archivo `.md` e identifica:
- Cada bloque marcado con `## BLOQUE: {snippet-name}` o solo `## BLOQUE` para títulos
- Assets declarados con `//assets: archivo1.png, archivo2.svg`
- Secciones marcadas con comentarios: `//texto`, `//color`, `//iconobloque`, `//acordeon`, `//tarjetas`
- Para sliders y acordeones: items separados por `---`
- Texto en **negrilla** y *cursiva* usando markdown estándar
- Contenido directo sin etiquetas especiales después de los marcadores

#### 2. Validación con Imagen de Diseño
Compara la imagen de diseño con el contenido estructurado para:
- Verificar correspondencia entre bloques y elementos visuales
- Confirmar secuencia correcta de snippets
- Identificar posibles discrepancias

#### 3. Generación del Código Vue
Genera el archivo según el tipo de contenido:
- **Para introduccion.md**: `/src/views/Introduccion.vue`
- **Para tema1.md, tema2.md, tema3.md, etc.**: `/src/views/curso/Tema{N}.vue`

Estructura del archivo:

```vue
<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'{Título del Tema}'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Insertar snippets según bloques identificados
      // Usar código exacto de CLAUDE.md para cada snippet
      // Mapear contenido a variables ${1}, ${2}, etc.

</template>

<script>
export default {
  name: '{NombreTema}',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
```

### Reglas de Implementación

#### ✅ OBLIGATORIAS
- **SNIPPETS EXACTOS**: NUNCA inventar código. SIEMPRE usar el código exacto de `/docs/snippets/pug.json`. Si existe un snippet con el nombre del bloque (ej: `video-fondo`), usarlo tal como está definido
- **Verificación de snippets**: Antes de escribir código, buscar en `pug.json` si existe el snippet correspondiente
- **Contenido fiel**: Usar texto exacto del archivo `.md`, NO inventar contenido
- **Assets secuenciales**: Nombrar assets según declaración en `//assets:` (1.png, 2.svg, etc.)
- **Ruta de assets**: Usar `@/assets/curso/{tema}/` donde {tema} corresponde al nombre del archivo
- **Ruta de salida**: 
  - `introduccion.md` → `/src/views/Introduccion.vue`
  - `tema1.md`, `tema2.md`, etc. → `/src/views/curso/Tema{N}.vue`
- **Animaciones AOS**: Aplicar según patrones establecidos
- **Grid Bootstrap**: Mantener estructura de columnas de los snippets

#### ❌ PROHIBIDO
- Inventar código cuando existe snippet en `pug.json`
- Modificar estructura de snippets establecidos
- Inventar o modificar texto del contenido  
- Omitir animaciones AOS
- Usar rutas de assets diferentes
- Crear nuevos patrones de layout

#### 🔍 PROCESO OBLIGATORIO ANTES DE CODIFICAR
1. **Identificar el tipo de bloque** del `.md` (ej: `video-fondo`)
2. **Buscar en `pug.json`** si existe snippet con ese nombre exacto
3. **Si existe**: Usar el código exacto del snippet, solo reemplazar variables ${1}, ${2}
4. **Si no existe**: Usar snippets de CLAUDE.md o crear usando patrones existentes

### Mapeo de Contenido con Formato Simplificado

**Reglas Generales:**
- `//assets: archivo.png` = lista de assets en orden secuencial
- `//texto`, `//color`, `//iconobloque` = marcadores de sección
- `//acordeon`, `//tarjetas` = marcadores de tipo de contenido
- `---` = separador entre items/slides
- **texto** → `#[strong texto]` en Pug
- *texto* → `#[em texto]` en Pug

**Color Classes Automáticas:**
- `//color` = usar `bg-color-1` (por defecto)
- `//color 2` = usar `bg-color-2` 
- `//color 3` = usar `bg-color-3`
- `//color 4` = usar `bg-color-4`
- Y así sucesivamente hasta `bg-color-12`

**Ejemplo:**
```markdown
//color
Este texto va en bg-color-1

//color 3
Este texto va en bg-color-3
```

**SlyderA/acordeon:**
- Después del marcador `//acordeon` o directamente después de assets
- Primera línea de cada sección = título
- Líneas siguientes = contenido
- Separados por `---`

**texto-iconobloque-imagen:**
- `//texto` = contenido de párrafos normales
- `//iconobloque` = contenido del bloque con icono
- Assets en orden: icono, imagen

**tarjetas-boton:**
- `//tarjetas` marca el inicio
- Primera línea = título de la tarjeta
- Segunda línea = contenido de la tarjeta
- Separadas por `---`

### Ejemplos de Formato de Contenido Simplificado

**BLOQUE: SlyderA**
```
## BLOQUE: SlyderA
//assets: 10.png, 11.png, 12.png

Análisis descriptivo
El análisis descriptivo se enfoca en resumir y presentar las características principales de un conjunto de datos.

---

Análisis inferencial
El análisis inferencial permite hacer generalizaciones sobre una población basándose en una muestra.
```

**BLOQUE: acordeon**
```
## BLOQUE: acordeon
//assets: 8.svg, 9.png

//acordeon

Prueba t de Student
Una de las pruebas más comunes es la prueba t de Student, utilizada para comparar medias.

---

Análisis de Varianza
Otra prueba paramétrica ampliamente utilizada es el ANOVA.
```

**BLOQUE: texto-iconobloque-imagen**
```
## BLOQUE: texto-iconobloque-imagen
//assets: 1.svg, 2.png

//texto
En la estadística inferencial, la toma de decisiones fundamentadas en datos requiere técnicas especializadas.

//iconobloque
Las pruebas de hipótesis pueden clasificarse en paramétricas y no paramétricas.

//texto
Ambas son esenciales para analizar fenómenos empresariales.
```

**BLOQUE: video-fondo**
```
## BLOQUE: video-fondo

//video
https://www.youtube.com/embed/vkqbbR1VfH0?si=j17_tZPKru1MDJ1S
```

**IMPORTANTE**: Para video-fondo usar EXACTAMENTE el snippet de `pug.json`:
```pug
.bg-full-width.bg-fondo-slider.mb-5
  .p-4.p-md-5
    figure
      .video
        iframe(width="560" height="315" src="URL_DEL_VIDEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
```

### Ejemplos de Uso

```bash
# Para archivos de introducción
# Entrada:
/src/textos/introduccion.md       # Contenido estructurado
/src/textos/introduccion.png      # Diseño visual
# Salida:
/src/views/Introduccion.vue       # Vista en directorio raíz

# Para archivos de temas
# Entrada:
/src/textos/tema1.md              # Contenido estructurado
/src/textos/tema1.png             # Diseño visual
# Salida:
/src/views/curso/Tema1.vue        # Vista en subdirectorio curso/

# Entrada:
/src/textos/tema2.md              # Contenido estructurado
/src/textos/tema2.png             # Diseño visual
# Salida:
/src/views/curso/Tema2.vue        # Vista en subdirectorio curso/
```

### Validación Final

Después de generar el código:
1. ✅ Verifica que todos los bloques del `.md` estén implementados
2. ✅ Confirma que el contenido coincida exactamente con el texto fuente
3. ✅ Revisa que la estructura visual coincida con la imagen de diseño
4. ✅ Asegura que las rutas de assets sigan la convención establecida

### Notas Adicionales

- Si encuentras discrepancias entre el archivo `.md` y la imagen, prioriza el contenido del archivo `.md` pero reporta la discrepancia
- Usa comentarios Pug para documentar cada bloque: `// Bloque: {snippet-name}`
- Mantén la consistencia con el estilo de código existente en el proyecto
- Siempre incluye el material complementario al final si está presente en el contenido

---

**Prompt de Ejecución:**

"A partir del archivo `@/src/textos/{tema}.md` y la imagen de diseño `@/src/textos/{tema}.png`, genera la vista Vue.js siguiendo las instrucciones de este documento y utilizando los snippets documentados en `CLAUDE.md`. 

**Rutas de salida:**
- Para `introduccion.md`: `/src/views/Introduccion.vue`
- Para `tema1.md`, `tema2.md`, etc.: `/src/views/curso/Tema{N}.vue`"