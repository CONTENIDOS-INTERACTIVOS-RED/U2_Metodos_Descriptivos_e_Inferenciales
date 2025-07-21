<template lang="pug">
.curso-container.d-flex.flex-column.min-vh-100
  .container.flex-grow-1
    .bg-white.mt-5
      .row.g-0
        //- Columna izquierda con imagen
        .col-md-6.imagen-section
          img.img-fluid(
            src="@/assets/portada/banner.png"
            alt="Estudiante virtual"
            style="max-width: 672px;"
          )
        //- Columna derecha con información
        .col-md-6.info-section
          .content-wrapper.p-5.text-start
            img.logo(
              src="@/assets/portada/logo-xs.png"
              alt="Logo Tecnológica del Oriente"
            )
            h1.mb-5 DERECHO CIVIL GENERAL PERSONAS
            p.descripcion.mb-4 La Unidad 1 introduce los fundamentos esenciales del Derecho Civil, una rama del derecho privado que regula las relaciones entre personas bajo un principio de igualdad. Se estudian los conceptos clave, las fuentes del Derecho Civil, y se distingue entre personas naturales y jurídicas, sentando una base sólida para entender su relevancia en la vida cotidiana, en ámbitos como el familiar, contractual y patrimonial.

            p.descripcion.mb-4 Este conocimiento permite al estudiante comprender los principios que rigen el Derecho Civil y aplicar estos conceptos en situaciones prácticas, consolidando una formación jurídica que facilitará su desarrollo profesional en el campo legal.

            .button-container
              router-link.btn-iniciar(:to="{ name: 'tema1' }")
                span INICIAR
                div.icon
                  i.fas.fa-chevron-right

  //- Footer
  footer.footer.bg-white
    .container.px-4.py-4
      .row.justify-content-start.align-items-center
        .col-lg-auto
          img.logo-footer(
            src="@/assets/portada/logo-footer.png"
            alt="Logo Tecnológica del Oriente"
          )
        .col-lg.px-0
          p.footer-text.mb-0 Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.curso-container {
  background-color: #80a5be;
}

.info-section {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.button-container {
  margin-top: auto;
  text-align: right;
}

.btn-iniciar {
  display: flex;
  position: relative;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  span {
    background-color: #1172b3;
    display: block;
    padding: 12px 42px 12px 32px;
    color: #fff;
  }
  .icon {
    background-color: #083e61;
    padding: 0px 20px;
    color: #fff;
    position: absolute;
    right: -40px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  /* Aquí tus estilos existentes para el botón */
}

.home {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #2c3e50;
}

.logo {
  height: 40px;
  width: auto;
  margin-bottom: 1.5rem;
  object-fit: contain;
  align-self: flex-start; /* Asegura alineación izquierda incluso en contenedor flex */
}

.logo-footer {
  width: auto;
  object-fit: contain;
}

.footer {
  margin-top: auto; /* Empuja el footer al fondo */
  width: 100%;
  .footer-text {
    font-size: 14px;
    border-left: solid 1px #707070;
    padding-left: 20px;
  }
}

.footer p {
  font-size: 14px;
}
</style>
