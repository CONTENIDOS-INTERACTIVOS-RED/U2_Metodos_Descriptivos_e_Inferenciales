<template lang="pug">
.curso-container.d-flex.flex-column.min-vh-100
  .container.d-flex.flex-column.justify-content-center.flex-grow-1.px-0.px-md-2
    div.home-content.d-flex.flex-column-reverse.flex-lg-column.p-4.p-lg-0
      .bg-white
        .row.g-0
          //- Columna izquierda con imagen
          .d-none.d-xl-block.d-xl-flex.mb-4.mb-md-0.col-md-4.col-xl-6.imagen-section
            img.img-fluid.h-full(
              src="@/assets/portada/banner.png"
              alt="Estudiante virtual"
              style="max-width: 672px;"
            )
          .d-block.d-lg-none.mx-auto.mb-4.mb-lg-0.col-md-8.col-lg-6.imagen-section
            img.img-fluid.h-full(
              src="@/assets/portada/banner-mobile.png"
              alt="Estudiante virtual"
              style="max-width: 672px;"
            )
          //- Columna derecha con información
          .col-xl-6.info-section
            .content-wrapper.px-lg-4.pt-lg-4.px-xxl-5.py-xxl-5.text-start
              p.home-main-title UNIDAD {{ `${globalData.numeroUnidad}` }}
              h1.home-title.mb-4 {{ globalData.tituloUnidad }}
              p.descripcion.mb-4 La estadística inferencial se ha convertido en una herramienta clave para la toma de decisiones basada en datos, al permitir realizar estimaciones, contrastar suposiciones y validar hipótesis en contextos empresariales. En esta unidad, se explorarán técnicas como la estimación puntual, los intervalos de confianza, las pruebas paramétricas y no paramétricas, así como modelos de regresión y correlación que fortalecen el análisis crítico y estratégico. Además, se hará uso de herramientas tecnológicas como Excel, R o Power BI, aplicando los conceptos en casos reales que preparan al estudiante para enfrentar con solidez los desafíos de la analítica avanzada.
              
              p #[b ¡Prepárese para convertir los datos en decisiones estratégicas con rigor y confianza!]

              .button-container.mt-auto
                router-link.btn-iniciar.w-100.w-md-auto(:to="{ name: 'introduccion' }")
                  .iniciar-btn-container.w-100.w-md-auto
                    span.iniciar-btn-text INICIAR
                    .icon
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
              p.footer-text.mb-0 Todo el contenido de este curso es propiedad intelectual de Corporación Tecnológica del Oriente y está protegido por derechos de autor. No puede ser reproducido, distribuido, modificado ni compartido sin su autorización por escrito.
              
</template>

<script>
export default {
  name: 'Home',
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.curso-container
  background-color: $color-fondo-home
  .container
    @media (min-width: 1400px)
      max-width: 1378px
  .home-title
    font-size: 26px !important
    font-weight: bold
    @media (min-width: 992px)
      font-size: 38px !important
  .home-main-title
    font-size: 18px
    font-weight: bold
    color: $color-acento-contenido
  .home-content
    background-color: white
  .info-section
    position: relative
    min-height: 100%
    display: flex
    flex-direction: column
    @media (min-width: 1200px)
      border-bottom: 1px solid $color-sistema-f

  .content-wrapper
    display: flex
    flex-direction: column
    height: 100%

  .button-container
    margin-top: auto
    text-align: right

  .btn-iniciar
    display: flex
    align-items: center
    width: calc(100% - 48px)
    @media (min-width: 576px)
      margin-left: auto
      width: fit-content !important
    .iniciar-btn-container
      text-align: center
      display: flex
      .iniciar-btn-text
        background-color: $color-acento-botones
        padding: 12px 42px 12px 32px
        width: 100%
        color: #fff !important
    .icon
      background-color: #496406
      padding: 0px 20px
      color: #fff
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

.iniciar-btn-container
  .iniciar-btn-text
    transition: all 0.25s ease-in-out
    background-color: $color-acento-botones !important
    color: #0B0A0A !important
  .icon
    transition: all 0.25s ease-in-out
    // background-color: #083E61 !important
    background-color: #496406 !important
  &:hover
    .icon
      transform: scale(1.06)
</style>
