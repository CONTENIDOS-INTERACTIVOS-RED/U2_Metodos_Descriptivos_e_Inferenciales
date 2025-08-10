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

The following patterns are the most commonly used (covering 90% of all views). Complete implementations available in `/docs/claude/snippets-mas-usados.md`:

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
- **Most Used Patterns**: `/docs/claude/snippets-mas-usados.md` contains the 18 most critical snippets (90% coverage)
- **Complete Library**: `/docs/snippets/pug.json` contains all 60+ layout patterns and variants

**Design-to-Code Automation Notes:**
- Always extract actual content from designs, never invent placeholder text
- Follow asset naming conventions: sequential numbering based on left-to-right appearance
- Use appropriate AOS animations: `zoom-in` for images, `fade-left` for text, `zoom-in-up` for cards
- Maintain Bootstrap 12-column grid structure with standard combinations (4/8, 5/7, 3/9, 6/6)
- Apply color classes consistently: `bg-color-1` through `bg-color-12` as defined in `/src/styles/_custom.sass`