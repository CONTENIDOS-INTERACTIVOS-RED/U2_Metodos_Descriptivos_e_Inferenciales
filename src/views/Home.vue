<template lang="pug">
.curso-container.d-flex.flex-column.min-vh-100
  .container.d-flex.flex-column.justify-content-center.flex-grow-1.px-0.px-md-2
    div.home-content.d-flex.flex-column-reverse.flex-md-column.p-4.p-lg-0
      .bg-white
        .row.g-0
          //- Columna izquierda con imagen
          .d-none.d-md-block.d-lg-flex.mb-4.mb-md-0.col-md-4.col-xl-5.imagen-section
            img.img-fluid.h-full(
              src="@/assets/portada/banner.png"
              alt="Estudiante virtual"
              style="max-width: 672px;"
            )
          .d-block.d-md-none.mb-4.mb-md-0.col-md-6.imagen-section
            img.img-fluid.h-full(
              src="@/assets/portada/banner-mobile.png"
              alt="Estudiante virtual"
              style="max-width: 672px;"
            )
          //- Columna derecha con información
          .col-md-8.col-xl-7.info-section
            .content-wrapper.px-xl-5.pt-xl-5.text-start
              p.home-main-title FUNDAMENTACIÓN JURÍDICA
              h1.home-title.mb-4.text-uppercase Introducción a la Paz y Resolución de Conflictos - Causas y Dinámicas del Conflicto
              p.descripcion.mb-4 En esta unidad, se diferenciará entre paz negativa (ausencia de violencia) y paz positiva (justicia y bienestar), explorando la "cultura de paz" promovida por la UNESCO, que fomenta el diálogo y la cooperación para una convivencia pacífica. Con estas herramientas, el estudiante podrá identificar factores que generan conflictos y proponer soluciones basadas en la mediación y la colaboración.

              p.descripcion.mb-4.text-bold ¡Prepárate para aplicar herramientas de resolución de conflictos con confianza y eficacia!

              .button-container.mt-auto
                router-link.btn-iniciar(:to="{ name: 'tema1' }")
                  span INICIAR
                  div.icon
                    i.fas.fa-chevron-right

      //- Footer
      footer.footer.bg-white
        .container.px-4.py-3
          .row.justify-content-start.align-items-center
            .col-lg-auto
              img.logo-footer(
                src="@/assets/portada/logo-footer.png"
                alt="Logo Tecnológica del Oriente"
              )
            .col-lg.px-0.d-none.d-lg-block
              p.footer-text.mb-0 Todo el contenido de este curso es propiedad intelectual de [Nombre de la Universidad] y está protegido por derechos de autor. No puede ser reproducido, distribuido, modificado ni compartido sin su autorización por escrito.
              
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="sass">
.curso-container
  .container
    @media (min-width: 1400px)
      max-width: 1378px
  .home-title
    font-size: 26px
    font-weight: normal
  .home-main-title
    font-size: 18px
    font-weight: bold
    color: $color-sistema-d
  .home-content
    background-color: white
  .info-section
    position: relative
    min-height: 100%
    display: flex
    flex-direction: column
    border-bottom: 1px solid $color-sistema-f
    @media (min-width: 576px)
      padding-right: 2rem
      padding-bottom: 2rem

  .content-wrapper
    display: flex
    flex-direction: column
    height: 100%

  .button-container
    margin-top: auto
    text-align: right

  .btn-iniciar
    display: flex
    position: relative
    align-items: center
    width: calc(100% - 48px)
    @media (min-width: 576px)
      margin-left: auto
      width: fit-content
    span
      text-align: center
      background-color: $color-sistema-d
      display: block
      width: 100%
      padding: 12px 42px 12px 32px
      color: #fff
    .icon
      background-color: $color-sistema-e
      padding: 0px 20px
      color: #fff
      position: absolute
      right: -40px
      height: 100%
      display: flex
      align-items: center
    /* Aquí tus estilos existentes para el botón */

  .home
    padding: 20px
    text-align: center

  h1
    color: #2c3e50

  .logo
    height: 40px
    width: auto
    margin-bottom: 1.5rem
    object-fit: contain
    align-self: flex-start /* Asegura alineación izquierda incluso en contenedor flex */

  .logo-footer
    width: 250px
    object-fit: contain

  .footer
    margin-top: auto /* Empuja el footer al fondo */
    width: 100%
    .footer-text
      font-size: 14px
      border-left: solid 1px #707070
      padding-left: 20px

  .footer p
    font-size: 14px
</style>
