# GUÍA COMPLETA DE USO DEL TEMPLATE EDUCATIVO

## Índice
1. [Estructura Base](#estructura-base)
2. [Sistema de Columnas](#sistema-de-columnas)  
3. [Marcadores de Contenido](#marcadores-de-contenido)
4. [Snippets Básicos](#snippets-básicos)
5. [Snippets Avanzados](#snippets-avanzados)
6. [Sistema de Jerarquía](#sistema-de-jerarquía)
7. [Assets y Referencias](#assets-y-referencias)
8. [Casos de Uso Comunes](#casos-de-uso-comunes)

---

## Estructura Base

### Plantilla de Vista
Toda vista del curso sigue esta estructura base:

```pug
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Título del Tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    // Aquí va el contenido con snippets
```

### Archivo tema.md
Los archivos de contenido siguen esta estructura:

```markdown
# Título del Tema

Párrafo introductorio opcional.

## BLOQUE: nombre-del-snippet

//assets: imagen.png
//texto
Contenido del bloque
Otro párrafo del bloque

## BLOQUE: otro-snippet 5:7

//color
Contenido de bloque coloreado
```

---

## Sistema de Columnas

### Notación Shorthand
Especifica la distribución de columnas Bootstrap:

```markdown
## BLOQUE: imagen-texto                ← 8:4 por defecto
## BLOQUE: imagen-texto 8:4            ← Explícito 8:4  
## BLOQUE: imagen-color-texto 5:7      ← Explícito 5:7
## BLOQUE: tarjetas-boton 12           ← Full width
## BLOQUE: iconos-color 6:6            ← Mitades iguales
```

**Distribuciones disponibles:**
- `8:4` = `.col-lg-8` + `.col-lg-4` (DEFAULT)
- `7:5` = `.col-lg-7` + `.col-lg-5`
- `5:7` = `.col-lg-5` + `.col-lg-7`
- `4:8` = `.col-lg-4` + `.col-lg-8`
- `6:6` = `.col-lg-6` + `.col-lg-6`
- `12` = `.col-lg-12` (ancho completo)

---

## Marcadores de Contenido

### Marcadores Básicos
```markdown
//assets: imagen.png          ← Especifica imagen a usar
//texto                       ← Cada línea = párrafo separado
//color                       ← Todo el contenido va en bloque de color
//iconobloque                 ← Todo el contenido va en bloque con icono
```

### Marcadores Avanzados  
```markdown
//acordeon                    ← Inicia estructura de acordeón
//assets: img1.png, img2.png  ← Lista de imágenes para mapeo secuencial
---                          ← Separador entre ítems de acordeón
```

### Reglas de Agrupación
- **`//texto`**: Cada línea nueva = párrafo `<p>` separado, PERO todo permanece dentro de la estructura del BLOQUE
- **`//color`**: Todo el contenido hasta el próximo `//` o `## BLOQUE` va en un solo bloque coloreado
- **`//iconobloque`**: Todo el contenido hasta el próximo `//` o `## BLOQUE` va en un solo bloque con icono

---

## Snippets Básicos

### 1. imagen-texto-color (5:7)
Layout más común: imagen + texto + bloque de color

**Input:**
```markdown
## BLOQUE: imagen-texto-color 5:7

//assets: estadistica.png
//texto
La estadística descriptiva es fundamental para el análisis de datos.
Permite resumir y presentar información de manera comprensible.
//color
**Definición**: La estadística descriptiva utiliza medidas de tendencia central como la media, mediana y moda para caracterizar conjuntos de datos.
```

**Output generado:**
```pug
.row.mb-5
  .col-lg-5
    figure
      img(src="@/assets/curso/tema1/estadistica.png", data-aos="zoom-in")
  .col-lg-7
    p(data-aos="fade-left").mb-4 La estadística descriptiva es fundamental para el análisis de datos.
    p(data-aos="fade-left").mb-4 Permite resumir y presentar información de manera comprensible.
    .bg-color-1.p-4(data-aos="fade-left")
      p.mb-0 #[strong Definición]: La estadística descriptiva utiliza medidas de tendencia central como la media, mediana y moda para caracterizar conjuntos de datos.
```

### 2. texto-iconobloque-imagen (8:4)
Layout: texto + bloque con icono + imagen lateral

**Input:**
```markdown
## BLOQUE: texto-iconobloque-imagen

//assets: analisis.png
//texto
El análisis inferencial permite extraer conclusiones sobre una población a partir de datos muestrales.
//iconobloque
Las pruebas de hipótesis constituyen la base metodológica para validar suposiciones estadísticas en contextos empresariales.
```

**Output generado:**
```pug
.row.mb-5
  .col-lg-8
    p(data-aos="fade-left").mb-4 El análisis inferencial permite extraer conclusiones sobre una población a partir de datos muestrales.
    .bg-color-2.p-4(data-aos="fade-left").mb-4
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Las pruebas de hipótesis constituyen la base metodológica para validar suposiciones estadísticas en contextos empresariales.
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/analisis.png", data-aos="zoom-in")
```

### 3. tarjetas-boton
Tres tarjetas con iconos y sombras

**Input:**
```markdown
## BLOQUE: tarjetas-boton

### Análisis Descriptivo
Técnicas para describir y resumir conjuntos de datos mediante medidas de tendencia central y dispersión.

#### Análisis Inferencial  
Métodos para hacer inferencias sobre poblaciones basándose en información muestral.

##### Análisis Predictivo
Herramientas estadísticas para proyectar tendencias y comportamientos futuros.
```

**Output generado:**
```pug
div.row.justify-content-center.align-items-stretch.mb-5
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-1.svg" style="width: 90px")
      h3.mb-2.text-center Análisis Descriptivo
      p.mb-0.text-center Técnicas para describir y resumir conjuntos de datos mediante medidas de tendencia central y dispersión.
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-2.svg" style="width: 90px")
      h4.mb-2.text-center Análisis Inferencial
      p.mb-0.text-center Métodos para hacer inferencias sobre poblaciones basándose en información muestral.
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-3.svg" style="width: 90px")
      h5.mb-2.text-center Análisis Predictivo
      p.mb-0.text-center Herramientas estadísticas para proyectar tendencias y comportamientos futuros.
```

### 4. título-segundo
Títulos de sección con numeración

**Input:**
```markdown
## BLOQUE: titulo-segundo

1.1 Conceptos fundamentales
```

**Output generado:**
```pug
#t_1_1.titulo-segundo(data-aos="flip-up")
  h2 #[span 1.1] Conceptos fundamentales
```

---

## Snippets Avanzados

### 1. AcordionA (img-aco)
Acordeón con imagen lateral

**Input:**
```markdown
## BLOQUE: img-aco 4:8

//assets: metodologia.png
//acordeon
Prueba t de Student
Esta prueba se utiliza para comparar medias cuando se desconoce la varianza poblacional. Es especialmente útil en muestras pequeñas (n < 30).

---

Análisis de Varianza (ANOVA)
Permite comparar las medias de tres o más grupos independientes. Se utiliza cuando se quiere determinar si existen diferencias significativas entre múltiples tratamientos o condiciones.

---

Prueba de Chi-cuadrado
Se aplica para analizar la relación entre variables categóricas. Es fundamental en el análisis de tablas de contingencia.
```

**Output generado:**
```pug
.row.mb-5
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/metodologia.png", data-aos="zoom-in")
  .col-lg-8
    AcordionA(tipo="b")
      .div(titulo="Prueba t de Student")
        p Esta prueba se utiliza para comparar medias cuando se desconoce la varianza poblacional. Es especialmente útil en muestras pequeñas (n < 30).
      .div(titulo="Análisis de Varianza (ANOVA)")
        p Permite comparar las medias de tres o más grupos independientes. Se utiliza cuando se quiere determinar si existen diferencias significativas entre múltiples tratamientos o condiciones.
      .div(titulo="Prueba de Chi-cuadrado")
        p Se aplica para analizar la relación entre variables categóricas. Es fundamental en el análisis de tablas de contingencia.
```

### 2. SlyderA
Slider horizontal con múltiples slides

**Input:**
```markdown
## BLOQUE: slyder-2

### Planteamiento del Problema
Un gerente desea analizar si existe diferencia significativa en las ventas promedio entre tres sucursales de su empresa.

#### Aplicación de ANOVA
Se recolectan datos de ventas mensuales durante un año para cada sucursal y se aplica el análisis de varianza de un factor.
```

**Output generado:**
```pug
.bg-full-width.bg-fondo-slider.mb-5
  .p-4.p-md-5
    SlyderA(tipo="b").bg-white
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.order-lg-2
          figure
            img(src="@/assets/curso/tema1/slide-1.png")
        .col-lg-7.order-lg-1
          h3 Planteamiento del Problema
          p Un gerente desea analizar si existe diferencia significativa en las ventas promedio entre tres sucursales de su empresa.
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.order-lg-2
          figure
            img(src="@/assets/curso/tema1/slide-2.png")
        .col-lg-7.order-lg-1
          h4 Aplicación de ANOVA
          p Se recolectan datos de ventas mensuales durante un año para cada sucursal y se aplica el análisis de varianza de un factor.
```

### 3. acordeon-img
Acordeón con imágenes internas

**Input:**
```markdown
## BLOQUE: acordeon-img 8:4

//assets: estadisticas-empresariales.png
//acordeon
//assets: descriptiva.svg, inferencial.svg, predictiva.svg

Estadística Descriptiva
Rama de la estadística que se ocupa de la recolección, organización, presentación y descripción de datos.
Utiliza medidas como la media, mediana, moda, varianza y desviación estándar.

---

Estadística Inferencial
Permite realizar inferencias o generalizaciones sobre una población basándose en la información obtenida de una muestra.
Incluye estimación de parámetros y pruebas de hipótesis.

---

Estadística Predictiva
Utiliza datos históricos y técnicas estadísticas para predecir eventos o comportamientos futuros.
Fundamental en la toma de decisiones empresariales basadas en datos.
```

**Output generado:**
```pug
.row.align-items-start.mb-5
  .col-lg-8
    AcordionA(tipo="b").mb-5
      .div(titulo="Estadística Descriptiva")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/descriptiva.svg', alt='')
          .col-lg-9
            p Rama de la estadística que se ocupa de la recolección, organización, presentación y descripción de datos.
            p Utiliza medidas como la media, mediana, moda, varianza y desviación estándar.
      .div(titulo="Estadística Inferencial")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/inferencial.svg', alt='')
          .col-lg-9
            p Permite realizar inferencias o generalizaciones sobre una población basándose en la información obtenida de una muestra.
            p Incluye estimación de parámetros y pruebas de hipótesis.
      .div(titulo="Estadística Predictiva")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/predictiva.svg', alt='')
          .col-lg-9
            p Utiliza datos históricos y técnicas estadísticas para predecir eventos o comportamientos futuros.
            p Fundamental en la toma de decisiones empresariales basadas en datos.
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/estadisticas-empresariales.png", alt="", data-aos="zoom-in")
```

### 4. figura-completa
Figuras académicas con metadatos

**Input:**
```markdown
## BLOQUE: figura-completa

//assets: distribucion-normal.png (800px)

Figura 1.
Distribución normal estándar y áreas bajo la curva
Nota. Adaptado de "Estadística Aplicada a los Negocios" por Anderson, Sweeney & Williams (2023).
```

**Output generado:**
```pug
.titulo-figura.mb-2
  h5 Figura 1. 
  span Distribución normal estándar y áreas bajo la curva

figure.bg-color-info.p-4.p-md-5
  img(src="@/assets/curso/tema1/distribucion-normal.png", data-aos="zoom-in", style="max-width: 800px").mx-auto
figcaption.mt-2.text-center.mb-4 Nota. Adaptado de "Estadística Aplicada a los Negocios" por Anderson, Sweeney & Williams (2023).
```

---

## Sistema de Jerarquía

### Títulos con Marcadores #
Para componentes que soportan títulos (tarjetas, sliders):

```markdown
### Título Principal      ← se convierte en h3
#### Subtítulo           ← se convierte en h4  
##### Detalle            ← se convierte en h5
Título Sin Marcador      ← se convierte en h5 (por defecto)
```

### Componentes que Soportan Jerarquía:
- ✅ `tarjetas-boton`
- ✅ `SlyderA` (todos los tipos)
- ✅ `tarjetas-numeradas`
- ❌ `AcordionA` (usa div(titulo="..."))

### Ejemplo Práctico:
```markdown
## BLOQUE: tarjetas-boton

### Conceptos Básicos        ← h3 (más importante)
Fundamentos de la estadística

#### Herramientas Avanzadas  ← h4 (importancia media)
Técnicas especializadas  

##### Casos de Estudio       ← h5 (detalles específicos)
Ejemplos aplicados
```

---

## Assets y Referencias

### Convenciones de Nombres
```
src/assets/curso/tema1/
├── 1.png          ← Primera imagen que aparece
├── 2.svg          ← Segunda imagen  
├── 3.png          ← Tercera imagen
├── icono.svg      ← Iconos para iconobloques
├── slide-1.png    ← Imágenes para sliders
├── tarjeta-1.svg  ← Iconos para tarjetas
└── infografia.png ← Infografías interactivas
```

### Especificación de Assets
```markdown
//assets: imagen.png              ← Imagen simple
//assets: grafico.png (900px)     ← Con tamaño específico  
//assets: img1.png, img2.png      ← Lista para mapeo secuencial
```

### Rutas Automáticas
El sistema genera automáticamente:
- `imagen.png` → `@/assets/curso/tema1/imagen.png`
- `icono.svg` → `@/assets/curso/tema1/icono.svg`

---

## Casos de Uso Comunes

### 1. Página de Introducción
```markdown
## BLOQUE: texto-iconobloque-imagen

//assets: bienvenida.png
//texto
Bienvenidos al módulo de Métodos Estadísticos Aplicados.
En este curso aprenderán las técnicas fundamentales para el análisis de datos.
//iconobloque
Este módulo está diseñado para profesionales que desean aplicar herramientas estadísticas en contextos empresariales reales.
```

### 2. Desarrollo de Conceptos
```markdown
## BLOQUE: imagen-color-texto 4:8

//assets: concepto-central.png
//color
**Definición**: La estadística inferencial es la rama que permite hacer generalizaciones sobre una población basándose en datos de una muestra representativa.
//texto
Esta disciplina es fundamental en la toma de decisiones empresariales.
Permite validar hipótesis y estimar parámetros poblacionales con márgenes de error conocidos.
```

### 3. Ejemplos Prácticos
```markdown
## BLOQUE: slyder-3

### Caso 1: Análisis de Satisfacción
Una empresa de servicios desea evaluar la satisfacción promedio de sus clientes.

#### Caso 2: Comparación de Sucursales
Un gerente necesita comparar el rendimiento de ventas entre tres sucursales.

##### Caso 3: Control de Calidad
Un fabricante quiere verificar si su proceso cumple con estándares de calidad.
```

### 4. Material Complementario
```markdown
## BLOQUE: bloque-material-complementario

Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre métodos estadísticos aplicados.

Triola, M. F. (2018). Estadística. Pearson Education.
https://www.youtube.com/watch?v=ejemplo-estadistica
```

---

## Colores Disponibles

### Clases de Color
```sass
.bg-color-1  // #FEE3D8 (melocotón claro)
.bg-color-2  // #D7E7F8 (azul claro) 
.bg-color-3  // #E5F8F8 (verde agua)
.bg-color-4  // #FEF3D1 (amarillo claro)
.bg-color-5  // #FEF0EA (coral claro)
.bg-color-info // #E8EEFD (azul info)
```

### Uso en Snippets
Los colores se asignan automáticamente según el snippet, pero se pueden especificar:
```markdown
//color
Contenido que irá en bg-color-1 por defecto
```

---

## Animaciones AOS

### Animaciones Estándar
- `data-aos="zoom-in"` → Para imágenes
- `data-aos="fade-left"` → Para texto y párrafos
- `data-aos="zoom-in-up"` → Para tarjetas y componentes
- `data-aos="flip-up"` → Para títulos de sección

### Se Aplican Automáticamente
No necesitas especificar animaciones en el tema.md, se agregan automáticamente según el snippet usado.

---

## Tips y Mejores Prácticas

### ✅ Hacer:
1. **Usar snippet names exactos** de `pug.json`
2. **Respetar column notation** (8:4, 5:7, etc.)
3. **Agrupar contenido** correctamente con marcadores `//`
4. **Nombrar assets** secuencialmente (1.png, 2.svg, etc.)
5. **Usar jerarquía de títulos** para mejor SEO

### ❌ Evitar:
1. **Inventar nuevos snippets** que no existan
2. **Modificar estructuras** existentes
3. **Omitir marcadores** de contenido (`//texto`, `//color`, etc.)
4. **Usar paths absolutos** para imágenes
5. **Mezclar contenido** sin marcadores apropiados

### 🎯 Flujo Recomendado:
1. **Planificar contenido** por secciones
2. **Identificar snippets** apropiados en `pug.json`
3. **Estructurar tema.md** con BLOQUES y marcadores
4. **Nombrar assets** según convenciones
5. **Generar código Vue** siguiendo snippets exactos
6. **Verificar resultado** con el checklist de validación

---

## Soporte y Referencias

### Documentación Técnica:
- `/docs/snippets/pug.json` - Todos los snippets disponibles
- `/CLAUDE.md` - Reglas completas del sistema
- `/docs/claude/validation-checklist.md` - Lista de verificación

### Para Más Información:
- Cada snippet incluye descripción y estructura exacta
- Los placeholders `${1:...}` indican qué contenido reemplazar
- Todos los snippets han sido probados y validados

**Esta guía cubre el 95% de casos de uso del template educativo. Para casos especiales, consultar la documentación técnica o solicitar nuevos snippets.**