<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'FUNDAMENTACIÓN JURÍDICA - unidad 1'" :subTitulo="'NOMBRE TEMA 2'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t_2_1.titulo-segundo
      h2 2.1 Texto destacado
    .row.mb-4
      .col-12.col-md-7
        .bloque-texto-e.color-primario.p-4
          .bloque-texto-e__texto
            h3 El Código Civil colombiano, en el Artículo 74, establece que son personas “… todos los individuos de la especia humana cualquiera que sea su edad, sexo, estirpe o condición”.
            span.bloque-texto-e__autor El Código Civil colombiano, en el Artículo 74
    .row.mb-5
      .col-12.col-md-4
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-left
          h3.mb-2 Then you’ll prove to yourself that you can survive anything.
          span - The graphic designer
      .col-12.col-md-4
        .bloque-texto-e.color-primario.p-4
          .bloque-texto-e__texto
            h3 "Design is thinking made visual"
            span.bloque-texto-e__autor Saul Bass
    
    #t_2_2.titulo-segundo
      h2 2.2 Llamado a la acción - Recursos externos
    .row.mb-5
      .col-lg-6.mb-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo: </strong>Nombre del documento
          
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono(:style="{'background-color': '#DBE7FC'}")
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p <strong>Anexo: </strong>Nombre del documento
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono(:style="{'background-color': '#DCFCDB'}")
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <strong>Anexo: </strong>Nombre del documento
        a.anexo.mb-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono(:style="{'background-color': '#FCF3DB'}")
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p <strong>Anexo: </strong>Nombre del documento
        a.anexo.mb-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono(:style="{'background-color': '#DBE7FC'}")
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <strong>Anexo: </strong>Nombre del documento
      .col-12
        .row.p-4.p-xxl-5(:style="{'background-color': '#E5F0F6'}")
          .col-12.col-md-6.col-lg-8
            h2 ¿Sabía que la costumbre, aunque no esté escrita, puede ser una fuente de derecho? 
            p Surge dentro de la comunidad y regula relaciones estableciendo derechos y deberes, integrándose al orden jurídico cuando se practica de forma constante y aceptada. En Colombia, la costumbre complementa la ley, especialmente cuando no hay una norma escrita que aplique a una situación específica.
            p Los invitamos a profundizar en el siguiente documento y descubrir su papel en el derecho colombiano y su influencia en la identidad cultural.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo: </strong>La costumbre
          .offset-2.offset-md-0.col-8.col-md-6.col-lg-4.d-flex.align-items-center
            figure
              img(src='@/assets/componentes/tema-2-test-img.png', alt='Texto que describa la imagen')
    #t_2_3.titulo-segundo
      h2 2.3 Audios
    .row.mb-5
      .col-12.col-md-6
        TarjetaAudio.color-primario.mb-3(
          texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
          tiempo
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
    )

    #t_2_4.titulo-segundo
      h2 2.4 Listado
      
    .row.mb-5
      .col-12.col-md-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Interlineado de 33pt 
            i Texto en Italica
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Texto base de 16pt
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Color del cuadro basado en la paleta del programa
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Puede estar acompañador de recuadro color de fondo
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Pellentesque vel felis posuere, molestie metus id

    #t_2_5.titulo-segundo
      h2 2.5 Línea de tiempo
    
    .row.mb-5
      .col-12.col-md-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="2014 - 2022" subtitulo="Título del hito")
            .col-md-4.col-xl-3
              figure
                img(src='@/assets/componentes/tema-2-test-img-2.svg', alt='Texto que describa la imagen')
            .col-md-8.col-xl-9.mb-4.mb-lg-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          div(titulo="2000 - 2014" subtitulo="Title, Company")
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          .row(titulo="1990 - 2000" subtitulo="Título del hito")
            .col-lg-6.mb-4.mb-lg-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-lg-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
