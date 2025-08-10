# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue.js-based educational content platform called "CIRED" designed for creating interactive digital learning resources. It's a template system for educational institutions, specifically "Tecnológica del Oriente", to build structured online courses.

## Development Commands

- `npm run serve` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run linter to check code quality

## Architecture Overview

### Core Framework Stack
- **Vue.js 2.6** - Main framework using Options API
- **Vue Router** - Client-side routing with lazy-loaded course sections
- **Vuex** - State management (minimal usage: menu state, loading indicators)
- **Pug** - Template engine for all Vue components
- **SASS** - CSS preprocessing with custom variables and mixins
- **Bootstrap 5** - UI framework with custom styling overlays
- **AOS** - Animation library for scroll-triggered effects

### Project Structure

**Configuration Layer:**
- `src/config/global.js` - Course configuration, menu structure, references, and glossary data
- `src/config/titulo.js` - Application title configuration
- `vue.config.js` - Build configuration with dynamic title injection

**Component Architecture:**
- `src/components/GlobalComponents.js` - Auto-imports all reusable components
- Component categories:
  - **Template components** (`plantilla/`): Header, AsideMenu, BannerInterno, BarraAvance
  - **Educational components**: AcordionA, TabsA/B/C, LineaTiempoA-E, SlyderA-F, etc.
  - **Activity components** (`actividad/`): Interactive learning activities

**Content Structure:**
- `src/views/` - Main course pages (Home, Introduccion, curso/Tema1-3, Glosario, Referencias)
- Each course topic is a separate route with lazy loading
- Content follows a structured template pattern starting with `BannerInterno` and `.container.tarjeta.tarjeta--blanca`

**Asset Organization:**
- `src/assets/curso/intro/` - Introduction page assets (numbered sequentially)
- `src/assets/curso/tema1/`, `tema2/`, etc. - Topic-specific assets  
- `src/assets/template/` - Shared template icons and UI elements
- `src/assets/portada/` - Branding and banner images

**Styling System:**
- `src/styles/_custom.sass` - Custom color classes following `.bg-color-1`, `.bg-color-2` pattern
- `src/styles/_variables.sass` - SASS variables automatically imported globally
- Bootstrap grid system (12 columns) with common combinations: col-lg-8/4, col-lg-7/5, col-lg-12

## ⚠️ CRITICAL CODE GENERATION RULES

**MANDATORY SNIPPET VERIFICATION PROCESS:**

Before generating ANY Pug code, Claude MUST follow this exact process:

1. **FIRST**: Always read `/docs/snippets/pug.json` to verify the exact snippet structure
2. **SECOND**: Always read the corresponding `.md` file from `/src/textos/` for content
3. **THIRD**: Use ONLY the exact snippet patterns from `pug.json` - NO modifications, NO inventions
4. **FOURTH**: Copy the snippet structure EXACTLY as documented, only replacing placeholder content
5. **FIFTH**: Verify column distribution matches the shorthand notation specified in content files

**COLUMN DISTRIBUTION NOTATION:**
Content files use shorthand notation to specify Bootstrap column distributions:
- `8:4` = `.col-lg-8` + `.col-lg-4` (**DEFAULT** - used when no notation specified)
- `7:5` = `.col-lg-7` + `.col-lg-5`
- `5:7` = `.col-lg-5` + `.col-lg-7`
- `4:8` = `.col-lg-4` + `.col-lg-8`
- `6:6` = `.col-lg-6` + `.col-lg-6`
- `12` = `.col-lg-12` (full width)

**Examples:**
```
## BLOQUE: texto-iconobloque-imagen        → Defaults to 8:4
## BLOQUE: texto-iconobloque-imagen 8:4    → Explicit 8:4
## BLOQUE: imagen-texto-color 5:7          → Explicit 5:7
## BLOQUE: iconos-color 6:6                → Explicit 6:6
```

**Default Rule:** If no column notation is specified, assume `8:4` distribution.

**CONTENT GROUPING RULES:**
Content in `.md` files follows specific grouping rules:
- **`//texto`**: Each line becomes a separate `<p>` tag, but ALL content stays within the current BLOQUE structure until next `//` marker or `## BLOQUE`
- **`//color`**: All subsequent text until the next `//` marker or `## BLOQUE` belongs to the same colored block
- **`//iconobloque`**: All subsequent text until the next `//` marker or `## BLOQUE` belongs to the same icon block

**Examples of Content Grouping:**
```
## BLOQUE: imagen-color-texto 4:8

//assets: imagen.png
//color  
Content for colored block all together.
More content for same colored block.
//texto
First paragraph content.    ← Separate <p> tag
Second paragraph content.   ← Separate <p> tag  
Third paragraph content.    ← Separate <p> tag
## BLOQUE: new-pattern
Now we start a new block pattern.
```

**CRITICAL**: The `//texto` content must stay INSIDE the `.col-lg-8` structure, not become loose paragraphs outside the row/column layout.

## ⚠️ NUEVOS MARCADORES AVANZADOS

### Marcador `//acordeon` (para acordeon-img)
```markdown
## BLOQUE: acordeon-img 8:4

//assets: imagen-lateral.png
//acordeon
//assets: img1.png, img2.png, img3.png

Título Item 1
Párrafo 1 del item 1
Párrafo 2 del item 1

---

Título Item 2
Contenido del item 2

---

Título Item 3  
Contenido del item 3
```

**Reglas de procesamiento:**
- `//assets` antes de `//acordeon` → imagen lateral (col-lg-4)
- `//assets` después de `//acordeon` → imágenes internas mapeadas secuencialmente
- `---` → separador entre ítems del acordeón
- Primera línea después de `---` → título del ítem
- Resto del contenido → párrafos agrupados aplicando reglas existentes

### Marcador `//assets` con tamaño para figuras
```markdown
## BLOQUE: figura-completa

//assets: imagen.png (900px)

Figura 1.
Título de la figura
Nota. Descripción o fuente de la figura
```

**Reglas de procesamiento:**
- `(900px)` → se convierte en `style="max-width: 900px"`
- Línea 1: "Figura X." → `<h5>`
- Línea 2: Título → `<span>`  
- Línea 3: "Nota." → `<figcaption>`

## ⚠️ JERARQUÍA DE TÍTULOS CON #

### Marcador `#` para títulos en tarjetas y sliders
Los componentes que muestran títulos (tarjetas, sliders) ahora soportan jerarquía semántica con `#`:

```markdown
## BLOQUE: tarjetas-boton

### Título Principal          ← h3
Contenido de la tarjeta 1

#### Subtítulo Secundario     ← h4  
Contenido de la tarjeta 2

##### Detalle Específico      ← h5
Contenido de la tarjeta 3
```

**Componentes que soportan jerarquía #:**
- `tarjetas-boton` (3/4/6 cards)
- `tarjetas-numeradas`
- `SlyderA/B/C/D` (títulos de slides)
- `TabsC` (títulos de tabs)

**Reglas de conversión:**
- `### Título` → `h3.mb-2.text-center Título`
- `#### Título` → `h4.mb-2.text-center Título`  
- `##### Título` → `h5.mb-2.text-center Título`
- Sin `#` → `h5.mb-2.text-center` (comportamiento por defecto)

**Ejemplo en SlyderA:**
```markdown
## BLOQUE: SlyderA

### Slide Principal
Contenido del slide 1

#### Slide Secundario
Contenido del slide 2
```

**Genera:**
```pug
SlyderA(tipo="b").bg-white
  .row.align-items-center.p-4.p-md-5
    .col-lg-5.mb-3.mb-lg-0
      figure
        img(src="@/assets/curso/tema1/slide-1.png")
    .col-lg-7
      h3 Slide Principal           ← h3
      p Contenido del slide 1
  .row.align-items-center.p-4.p-md-5
    .col-lg-5.mb-3.mb-lg-0
      figure
        img(src="@/assets/curso/tema1/slide-2.png")
    .col-lg-7
      h4 Slide Secundario          ← h4
      p Contenido del slide 2
```

**FORBIDDEN ACTIONS:**
- ❌ NEVER invent code structures that don't exist in `pug.json`
- ❌ NEVER modify snippet structures "based on similar patterns"
- ❌ NEVER assume component attributes or CSS classes without verification
- ❌ NEVER create "improved" versions of existing snippets

**MANDATORY VERIFICATION:**
- ✅ Every pattern MUST match exactly what's in `docs/snippets/pug.json`
- ✅ All content MUST come from the appropriate `/src/textos/` markdown file
- ✅ Column distribution MUST match the shorthand notation (8:4, 5:7, etc.)
- ✅ Content grouping MUST follow `//` marker rules (group all text until next marker)
- ✅ Any deviation from this process requires explicit user permission

## Content Layout Patterns & Snippets

The project uses standardized layout patterns documented in `docs/snippets/pug.json`. These patterns are the building blocks for all course content:

### View Template Structure
All course views follow this base structure:
```pug
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Title'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
```

### Essential Layout Patterns

The following patterns are the most commonly used (covering 90% of all views). Complete implementations available in `/docs/snippets/pug.json`:

#### **imagen-texto-color**
Layout: col-lg-5 (image) + col-lg-7 (text + colored block)
```pug
.row.mb-5
  .col-lg-5
    figure
      img(src="@/assets/curso/${1:tema1/imagen}.png", data-aos="zoom-in")
  .col-lg-7
    p(data-aos="fade-left").mb-4 ${2:Texto principal}
    .bg-color-1.p-4(data-aos="fade-left")
      p.mb-0 ${3:Contenido caja de color}
```

#### **texto-iconobloque-imagen**
Layout: col-lg-8 (text + icon block) + col-lg-4 (image)
```pug
.row.mb-5
  .col-lg-8
    p(data-aos="fade-left").mb-4 ${1:Primer párrafo}
    .bg-color-2.p-4(data-aos="fade-left").mb-4
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/${2:tema1/icono}.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 ${3:Contenido del bloque con icono}
    p(data-aos="fade-left") ${4:Segundo párrafo}
  .col-lg-4
    figure
      img(src="@/assets/curso/${5:tema1/imagen}.png", data-aos="zoom-in")
```

#### **tarjetas-boton** (3 cards)
Icon + title + text cards with shadow
```pug
.row.justify-content-center.align-items-stretch.mb-5
  .col-lg-4.mb-4(data-aos="zoom-in-up")
    .bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/${1:tema1/icono-1}.svg" style="width: 90px")
      h5.mb-2.text-center ${2:Título tarjeta 1}
      p.mb-0.text-center ${3:Contenido tarjeta 1}
  // ... repeat for tarjeta 2 and 3
```

#### **bg-full-icono-texto**
Full-width background + icon + text
```pug
.bg-full-width.bg-color-3
  .px-4.px-md-5.py-4
    .row.align-items-center
      .col-lg-auto
        img(src="@/assets/curso/${1:tema1/icono}.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-3 ${2:Primer párrafo}
        p.mb-0 ${3:Segundo párrafo}
```

#### **acordeon**
Expandable content sections
```pug
AcordionA(tipo="b")
  .div(titulo="${1:Título item 1}")
    p ${2:Contenido item 1}
  .div(titulo="${3:Título item 2}")
    p ${4:Contenido item 2}
```

#### **slyder-a** (SlyderA)
Horizontal slider with image/text slides
```pug
.bg-full-width.bg-fondo-slider
  .p-4.p-md-5
    SlyderA(tipo="b").bg-white
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/${1:tema1/slide-1}.png")
        .col-lg-7
          h5 ${2:Título del slide 1}
          p ${3:Contenido del slide 1}
```

#### **titulo-segundo**
Section titles with numbering
```pug
#t_${1:1_1}.titulo-segundo(data-aos="flip-up")
  h2 #[span ${2:1.1}] ${3:Descripción del subtema}
```

#### **bloque-material-complementario**
Material complementario section (always at end)
```pug
.bg-full-width.border-top.color-primario
  .p-4.p-md-5
    h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
    .row.material-complementario
      .col-12.col-md-6.col-lg-7
        p ${1:Los invitamos a explorar el material complementario...}
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="${2:URL}" target="_blank" rel="noopener noreferrer") ${3:Título del enlace}
      .col-12.col-md-6.col-lg-3.offset-lg-1
        figure
          img(src='@/assets/componentes/material-complementario.svg', alt='')
```

**Additional High-Usage Patterns:**
- **imagen-infografica**: Interactive infographics with clickable hotspots using `ImagenInfografica` component
- **tarjetas-numeradas**: 4-column cards with numbered icons (01, 02, 03, 04)
- **anexo-descarga**: PDF download sections with custom anexo styling
- **lista-flechas**: Lists with arrow icons (`ul.lista-ul--color` + `i.far.fa-arrow-alt-circle-right`)
- **tabla**: Educational tables with caption, thead, tbody structure

### Asset & Styling Conventions

**Asset Naming:**
- Images numbered sequentially: `1.png`, `2.svg`, `3.png`
- Based on left-to-right appearance in design mockups
- Path structure: `@/assets/curso/intro/`, `@/assets/curso/tema1/`

**Color Classes:**
```sass
.bg-color-1  // #FEE3D8 (light peach)
.bg-color-2  // #D7E7F8 (light blue) 
.bg-color-3  // #E5F8F8 (light teal)
.bg-color-4  // #FEF3D1 (light yellow)
.bg-color-5  // #FEF0EA (light coral)
.bg-color-info // #E8EEFD (info blue)
```

**Animation Standards:**
- `data-aos="zoom-in"` for images
- `data-aos="fade-left"` for text blocks
- `data-aos="zoom-in-up"` for cards/components

### Available Components

**Navigation & Organization:**
- `AcordionA` - Expandible accordion (types 'a' and 'b')
- `LineaTiempoD` - Numbered timeline with expandable content
- `TabsC` - Icon-based tab navigation

**Visual Presentation:**
- `SlyderA` - Horizontal slider with bullets and navigation
- `SlyderF` - Card carousel with arrow navigation
- `ImagenInfografica` - Interactive images with hotspots
- `ModalA` - Modal dialogs

**Media Components:**
- `TarjetaAudio` - Audio player with progress bar
- `Audio` - Basic audio component

**Activity Components:**
- `Actividad` - Interactive learning activities
- `ActividadPregunta` - Question components
- `ActividadResultados` - Results display

### Additional Key Snippets

**iconos-color (Two-column icon blocks):**
Two colored blocks side by side (col-lg-6 each) with icons and content:
```pug
.row.justify-content-center.align-items-stretch.mb-4
  .col-lg-6
    .bg-color-1.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/icono-1.svg", style="max-width: 90px").mx-auto
        .col-lg
          h5.mb-2 Título bloque 1
          p.mb-0 Contenido del bloque 1
  .col-lg-6
    .bg-color-2.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/icono-2.svg", style="max-width: 90px").mx-auto
        .col-lg
          h5.mb-2 Título bloque 2
          p.mb-0 Contenido del bloque 2
```

**TabsC (tabsc pattern):**
Tabbed content with images and structured information:
```pug
TabsC.color-acento-contenido.mb-5
  .tabs-content.border.px-4.p-md-5.py-3(titulo="Título tab 1" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
    .row
      .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
        h4 Título tab 1
        p Contenido del tab 1
      .col-md-6.col-lg-5.col-xl-4.order-1
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/tab-1.png', alt='')
```

**infografia-1 (Interactive infographic):**
Full-width interactive infographic with clickable hotspots:
```pug
.bg-full-width.bg-color-info.mb-5
  .p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/infografia.png', alt='', style="max-width: 1106px;").mx-auto
          .tarjeta.color-primario.p-3(x="0%" y="0%" numero="+")
            p.mb-0 Punto interactivo 1
```

**lista-flechas (Arrow list):**
Styled list with arrow icons (used within color blocks):
```pug
ul.lista-ul--color.color-dark.mb-4
  li.mb-0
    i.fas.fa-arrow-circle-right
    | Item 1
  li.mb-0
    i.fas.fa-arrow-circle-right
    | Item 2
```

### Development Workflow

**Design-to-Code Process:**
1. Adobe XD/Figma designs delivered with 12-column grid
2. Identify visual patterns and map to available snippets
3. Extract text content and image assets
4. Generate Pug code using established patterns
5. Follow asset naming conventions (sequential numbering)
6. Apply appropriate color classes and animations

**Automation Goal:**
The system aims to automate Vue.js view generation from design screenshots by:
- Using only approved components and patterns
- Respecting 12-column grid structure and layout standards  
- Reducing design-to-code conversion time
- Maintaining visual and structural consistency across all course views

### Key Development Patterns

**Component Registration:**
All components are globally registered via `GlobalComponents.js` for immediate availability in templates.

**State Management:**
Minimal Vuex store managing only menu toggle state and loading indicators.

**Snippet Reference:**
- **Most Used Patterns**: `/docs/snippets/summary.md` contains the 18 most critical snippets (90% coverage)
- **Complete Library**: `/docs/snippets/pug.json` contains all 60+ layout patterns and variants

**Design-to-Code Automation Notes:**
- Always extract actual content from designs, never invent placeholder text
- Follow asset naming conventions: sequential numbering based on left-to-right appearance
- Use appropriate AOS animations: `zoom-in` for images, `fade-left` for text, `zoom-in-up` for cards
- Maintain Bootstrap 12-column grid structure with standard combinations (4/8, 5/7, 3/9, 6/6)
- Apply color classes consistently: `bg-color-1` through `bg-color-12` as defined in `/src/styles/_custom.sass`

## 🔒 MANDATORY COMPLIANCE CHECKPOINT

**BEFORE ANY CODE GENERATION, CLAUDE MUST:**

1. **REFERENCE CHECK**: Verify `/docs/claude/validation-checklist.md` has been consulted
2. **SNIPPET VALIDATION**: Confirm exact pattern exists in `/docs/snippets/pug.json`
3. **CONTENT VERIFICATION**: Ensure all text comes from appropriate `/src/textos/` file
4. **ZERO DEVIATION RULE**: Any modification from documented patterns requires explicit user approval

**FAILURE TO FOLLOW THIS PROCESS CONSTITUTES A CRITICAL ERROR**

This system exists because previous instances have incorrectly invented code structures instead of using documented patterns. Strict adherence to this process is mandatory for maintaining project consistency and avoiding rework.