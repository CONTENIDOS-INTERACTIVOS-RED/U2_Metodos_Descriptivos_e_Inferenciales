# Prompt: Renderizar Tema Individual

## Instrucciones para Claude Code

Renderiza un tema específico desde archivo markdown a vista Vue.js completa.

A partir de la información de tema1.md, tema2.md y tema3.md ajusta la coleccion menu del archivo /src/config/global.js
### Comando de Ejecución

Usa el prompt @docs/prompts/generar-vista-vue.md para renderizar @src/textos/tema2.md
use el archivo @src/textos/global.md y configure el archivo @src/config/global.js    
 Actualizar cuestionario del Tema3.vue con preguntas de cuestionario.md                
```bash
# Ejemplo de uso
"Usa el prompt @docs/prompts/renderizar-tema.md para renderizar @src/textos/tema1.md"
"Renderiza el tema desde @/src/textos/tema1.md a @/src/views/Tema1.vue"
"Renderiza el tema desde @/src/textos/introduccion.md a @/src/views/Introduccion.vue"
```

### Proceso de Renderizado

#### 1. Lectura y Análisis
- Lee el archivo `.md` especificado
- Identifica todos los bloques `## BLOQUE: {tipo}`
- Extrae assets declarados con `//assets:`
- Mapea contenido según marcadores `//texto`, `//color`, `//iconobloque`, etc.

#### 2. Interpretación de Formato Simplificado

**Marcadores de Assets:**
- `//assets: 1.png, 2.svg, 3.png` = lista secuencial de archivos

**Marcadores de Contenido:**
- `//texto` = párrafos normales
- `//color` = contenido para bloques coloreados
- `//iconobloque` = contenido para bloques con icono
- `//acordeon` = marca inicio de acordeón
- `//tarjetas` = marca inicio de tarjetas

**Separadores:**
- `---` = separador entre items (slides, acordeones, tarjetas)

**Títulos:**
- `## BLOQUE` sin tipo = título de sección (h2)
- `## BLOQUE: tipo` = bloque de snippet específico
- `### Título` = h3, `#### Título` = h4

**Listas Especiales:**
- `//lista-flechas` dentro de `//color` = `ul.lista-ul--color`

#### 3. Generación del Vue

Crea `/src/views/{NombreTema}.vue` con:

```pug
template(lang="pug")
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'{Título del Tema}'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Renderizar cada bloque según su tipo
    // Usar snippets exactos de CLAUDE.md
    // Mapear contenido extraído a variables ${1}, ${2}, etc.

script
export default {
  name: '{NombreTema}',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}

style(lang="sass")
```

### Mapeo de Bloques a Snippets

**Texto Simple:**
- `## BLOQUE` (solo título) → `#t_X_Y.titulo-segundo` + `h2`
- `## BLOQUE: párrafo` → `p(data-aos="fade-left")`

**Bloques con Layout:**
- `imagen-texto-color` → snippet de CLAUDE.md con assets[0], contenido texto, contenido color
- `texto-iconobloque-imagen` → snippet con texto[0], assets[0], iconobloque, texto[1], assets[1]
- `img-aco` → imagen + AcordionA con items separados por `---`
- `SlyderA` → slider con slides separados por `---`

**Bloques Especiales:**
- `iconos-color col-lg-6` → dos bloques lado a lado con iconos
- `tabsc` → TabsC con contenido estructurado
- `infografia-1` → ImagenInfografica con hotspots
- `anexo` → bloque material complementario

### Reglas de Conversión

#### ✅ OBLIGATORIO
- **Assets secuenciales**: `//assets: 1.png, 2.svg` → `@/assets/curso/{tema}/1.png`
- **Contenido fiel**: Usar texto exacto, no inventar
- **Formato markdown**: `**texto**` → `#[strong texto]`, `*texto*` → `#[em texto]`
- **Animaciones AOS**: Aplicar según patrón del snippet
- **Comentarios Pug**: `// Bloque: {tipo}` antes de cada sección

#### ❌ PROHIBIDO
- Modificar o inventar contenido
- Cambiar estructura de snippets
- Omitir animaciones o clases CSS
- Usar rutas de assets diferentes

### Ejemplo de Ejecución

**Entrada:**
```markdown
## BLOQUE: imagen-texto-color
//assets: 1.png

En el contexto actual de transformación digital...

//color
El propósito principal es proporcionar comprensión profunda...
```

**Salida:**
```pug
// Bloque: imagen-texto-color
.row.mb-5
  .col-lg-5
    figure
      img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
  .col-lg-7
    p(data-aos="fade-left").mb-4 En el contexto actual de transformación digital...
    .bg-color-1.p-4(data-aos="fade-left")
      p.mb-0 El propósito principal es proporcionar comprensión profunda...
```

### Casos Especiales

**Lista dentro de color:**
```markdown
//color
  //lista-flechas
    - Item 1
    - Item 2
  
  Texto adicional después de la lista.
```

**Múltiples párrafos:**
Cada párrafo separado por línea en blanco se convierte en `p` separado.

**Acordeón con imágenes:**
Si hay assets en acordeón, usar patrón `img-aco` con imagen a la izquierda.

---

**Prompt de Ejecución Simple:**

"Renderiza @/src/textos/{tema}.md a @/src/views/{Tema}.vue usando el formato simplificado con comentarios // y separadores ---"