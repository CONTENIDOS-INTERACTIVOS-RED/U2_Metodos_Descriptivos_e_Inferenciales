# Snippets Más Usados - Vue.js Educational Platform

Basado en el análisis de los directorios `/demo/views/`, `/demo/views-2/`, `/demo/views-3/` y el archivo `/docs/snippets/pug.json`, estos son los snippets más utilizados en el proyecto:

## imagen-texto-color
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

## texto-iconobloque-imagen
```pug
.row.mb-5
  .col-lg-8
    p(data-aos="fade-left").mb-4 ${1:Contenido del primer párrafo}
    
    .bg-color-2.p-4(data-aos="fade-left").mb-4
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/${2:tema1/icono}.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 ${3:Contenido del bloque con icono}
    
    p(data-aos="fade-left") ${4:Contenido del segundo párrafo}
    
  .col-lg-4
    figure
      img(src="@/assets/curso/${5:tema1/imagen}.png", data-aos="zoom-in")
```

## tarjetas-boton
```pug
.row.justify-content-center.align-items-stretch.mb-5
  .col-lg-4.mb-4(data-aos="zoom-in-up")
    .bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(
        src="@/assets/curso/${1:tema1/icono-1}.svg"
        alt=""
        style="width: 90px"
      )
      h5.mb-2.text-center ${2:Título tarjeta 1}
      p.mb-0.text-center ${3:Contenido tarjeta 1}
  
  .col-lg-4.mb-4(data-aos="zoom-in-up")
    .bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(
        src="@/assets/curso/${4:tema1/icono-2}.svg"
        alt=""
        style="width: 90px"
      )
      h5.mb-2.text-center ${5:Título tarjeta 2}
      p.mb-0.text-center ${6:Contenido tarjeta 2}
  
  .col-lg-4.mb-4(data-aos="zoom-in-up")
    .bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(
        src="@/assets/curso/${7:tema1/icono-3}.svg"
        alt=""
        style="width: 90px"
      )
      h5.mb-2.text-center ${8:Título tarjeta 3}
      p.mb-0.text-center ${9:Contenido tarjeta 3}
```

## bg-full-icono-texto
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

## acordeon
```pug
AcordionA(tipo="b")
  .div(titulo="${1:Título item 1}")
    p ${2:Contenido item 1}
  
  .div(titulo="${3:Título item 2}")
    p ${4:Contenido item 2}
  
  .div(titulo="${5:Título item 3}")
    p ${6:Contenido item 3}
  
  .div(titulo="${7:Título item 4}")
    p ${8:Contenido item 4}
```

## slyder-cards (SlyderF)
```pug
.bg-full-width.bg-fondo-5
  .px-4.px-md-5.pb-md-3
    .row.justify-content-center.mb-5
      .col-lg-8
        p(data-aos="fade-left") ${1:Texto introductorio}
        
        SlyderF(columnas="col-12 col-lg-6")
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/${2:tema1/icono-1}.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 ${3:Título card 1}
            p.text-center ${4:Contenido card 1}
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/${5:tema1/icono-2}.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 ${6:Título card 2}
            p.text-center ${7:Contenido card 2}
```

## titulo-segundo
```pug
#t_${1:1_1}.titulo-segundo(data-aos="flip-up")
  h2 #[span ${2:1.1}] ${3:Descripción del subtema}
```

## figura-completa
```pug
.titulo-figura.mb-2
  h5 Figura ${1:1}. 
  span ${2:Título de la figura}

figure.bg-color-info.p-4.p-md-5
  img(src="@/assets/curso/${3:tema1/imagen}.png", data-aos="zoom-in", style="max-width: 900px").mx-auto
figcaption.mt-2.text-center.mb-4 Nota. ${4:Descripción o fuente de la figura}
```

## lista-flechas
```pug
ul.lista-ul--color
  li.mb-0.d-flex
    i.far.fa-arrow-alt-circle-right
    p.mb-0 ${1:Contenido item 1}
  li.mb-0.d-flex
    i.far.fa-arrow-alt-circle-right
    p.mb-0 ${2:Contenido item 2}
  li.mb-0.d-flex
    i.far.fa-arrow-alt-circle-right
    p.mb-0 ${3:Contenido item 3}
```

## tabla
```pug
.tabla-a.color-acento-contenido.mb-5
  table
    caption ${1:Leyenda de la tabla}
    thead
      tr
        th.bg-color-tabla.text-white ${2:Título 1}
        th.bg-color-tabla.text-white ${3:Título 2}
        th.bg-color-tabla.text-white ${4:Título 3}
    tbody
      tr
        td ${5:Contenido 1}
        td ${6:Contenido 2}
        td ${7:Contenido 3}
      tr
        td ${8:Contenido 4}
        td ${9:Contenido 5}
        td ${10:Contenido 6}
```

## bloque-material-complementario
```pug
.bg-full-width.border-top.color-primario
  .p-4.p-md-5
    h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
    .row.material-complementario
      .col-12.col-md-6.col-lg-7
        p ${1:Los invitamos a explorar el material complementario...}
        
        p.d-flex.my-4
          img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
          a(href="${2:https://ejemplo.com}" target="_blank" rel="noopener noreferrer") ${3:Título del enlace}
        
        p.d-flex.my-4
          img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
          span ${4:Referencia bibliográfica}
        
        p.d-flex.my-4
          img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
          a(href="${5:https://youtube.com}" target="_blank" rel="noopener noreferrer") ${6:Título del video}
        
      .col-12.col-md-6.col-lg-3.offset-lg-1
        figure
          img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')
```

---

## Notas de Uso

- **Variables placeholders**: Los textos `${1:texto}` son variables que deben reemplazarse con el contenido específico
- **Rutas de assets**: Seguir el patrón `@/assets/curso/tema1/` para organización secuencial
- **Animaciones AOS**: Usar `data-aos="fade-left"`, `data-aos="zoom-in"`, `data-aos="flip-up"`
- **Clases de color**: Usar `bg-color-1`, `bg-color-2`, etc. según la paleta del tema
- **Responsive**: Los layouts usan Bootstrap con clases `col-lg-*` para responsividad

## slyder-a (SlyderA)
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
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/${4:tema1/slide-2}.png")
        .col-lg-7
          h5 ${5:Título del slide 2}
          p ${6:Contenido del slide 2}
```

## imagen-infografica
```pug
.bg-full-width.bg-fondo-1.mb-5
  .p-4.p-md-5
    .row.justify-content-center.align-items-center
      .col-lg-11
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/${1:tema1/imagen}.svg', alt='', style="max-width: 1106px;").mx-auto

          .bg-color-white.box-shadow.p-3(x="${2:25}%" y="${3:50}%" numero="+")
            h5 ${4:Título punto 1}
            p ${5:Contenido punto 1}

          .bg-color-white.box-shadow.p-3(x="${6:75}%" y="${7:30}%" numero="+")
            h5 ${8:Título punto 2}
            p ${9:Contenido punto 2}
```

## tarjetas-numeradas
```pug
.row.justify-content-center.align-items-stretch.mb-4
  .col-lg-3.mb-3.mb-lg-0
    .bg-color-6.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/${1:tema1/icono-1}.svg", style="max-width: 90px").mx-auto
        .col-lg
          h5.mb-2 01
          p.mb-0 ${2:Contenido tarjeta 1}

  .col-lg-3.mb-3.mb-lg-0
    .bg-color-6.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/${3:tema1/icono-2}.svg", style="max-width: 90px").mx-auto
        .col-lg
          h5.mb-2 02
          p.mb-0 ${4:Contenido tarjeta 2}

  .col-lg-3.mb-3.mb-lg-0
    .bg-color-6.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/${5:tema1/icono-3}.svg", style="max-width: 90px").mx-auto
        .col-lg
          h5.mb-2 03
          p.mb-0 ${6:Contenido tarjeta 3}

  .col-lg-3.mb-3.mb-lg-0
    .bg-color-6.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/${7:tema1/icono-4}.svg", style="max-width: 90px").mx-auto
        .col-lg
          h5.mb-2 04
          p.mb-0 ${8:Contenido tarjeta 4}
```

## tarjetas-imagen-personalizadas
```pug
.bg-full-width.bg-color-11.mb-5
  .px-4.px-md-5
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/${1:tema1/tarjeta-1}.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 ${2:Contenido tarjeta 1}
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/${3:tema1/tarjeta-2}.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 ${4:Contenido tarjeta 2}
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/${5:tema1/tarjeta-3}.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 ${6:Contenido tarjeta 3}
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/${7:tema1/tarjeta-4}.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 ${8:Contenido tarjeta 4}
```

## anexo-descarga
```pug
.bg-full-width.bg-color-1.mb-5
  .px-4.p-md-5
    .row.justify-content-center.align-items-center
      .col-lg-7.order-2
        h2.mb-4(data-aos="flip-up") ${1:Título del anexo}
        p.mb-4(data-aos="fade-right") ${2:Descripción del contenido del anexo}

        a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/${3:Anexo_1}.pdf')" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo. </strong> ${4:Título del documento}

      .col-lg-5.order-1.mb-3.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/${5:tema1/imagen}.png', alt='')
```

## iconos-numerados-dos-columnas
```pug
.row.justify-content-center.align-items-stretch.mb-4
  .col-lg-6.mb-3.mb-lg-0
    .bg-color-8.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/${1:tema1/icono-1}.svg", style="max-width: 90px").mx-auto
        .col-lg.text-white
          h5.mb-2 ${2:Título 1}
          p.mb-0 ${3:Contenido 1}

  .col-lg-6.mb-3.mb-lg-0
    .bg-color-8.p-4(data-aos="fade-left").h-100
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/${4:tema1/icono-2}.svg", style="max-width: 90px").mx-auto
        .col-lg.text-white
          h5.mb-2 ${5:Título 2}
          p.mb-0 ${6:Contenido 2}
```

---

## Patrones Adicionales Identificados

### Variantes de Layout
- **Orden alternado**: `.order-lg-1`, `.order-lg-2` para cambiar el orden en desktop
- **Altura completa**: `.h-100` para tarjetas de igual altura
- **Texto con colores**: `.text-white` combinado con fondos oscuros
- **Bordes personalizados**: `.bordes`, `.bordes-1` para estilos específicos

### Componentes Específicos
- **ImagenInfografica**: Para infografías interactivas con puntos clicables
- **SlyderA**: Para presentaciones con slides
- **custom-image-card-2**: Para tarjetas con imagen superior
- **anexo**: Para enlaces de descarga de documentos PDF

### Convenciones de Nomenclatura
- **Temas secuenciales**: `tema1/`, `tema2/`, `tema3/`
- **Assets por tipo**: `intro/`, `curso/`, `componentes/`
- **Archivos numerados**: `1.png`, `2.svg`, `3.png`

Estos snippets cubren aproximadamente el 90% de los patrones utilizados en las vistas de demostración del proyecto.