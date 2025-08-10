<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque: párrafo
    p(data-aos="fade-left").mb-5 En esta unidad, se analizarán los fundamentos de la inferencia estadística y las pruebas de hipótesis como herramientas esenciales para interpretar información y respaldar decisiones empresariales con base en evidencia cuantitativa. A través del estudio de los diferentes métodos inferenciales, se exploran procedimientos que permiten generalizar resultados a partir de muestras, contrastar supuestos estadísticos y reducir la incertidumbre en contextos organizacionales.

    // Bloque: texto-iconobloque-imagen  
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Además, se profundizará en el uso de herramientas tecnológicas como SPSS, Excel, R o Python, fundamentales para el procesamiento de datos y la ejecución de pruebas estadísticas de forma eficiente y confiable. A lo largo de la unidad, los estudiantes pondrán en práctica estos conocimientos en casos reales, fortaleciendo su capacidad de análisis crítico y toma de decisiones fundamentadas.
        
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este desarrollo temático permitirá al estudiante comprender los conceptos claves de estimación puntual y por intervalos, la formulación y contraste de hipótesis, así como el uso adecuado de distribuciones muestrales. Asimismo, se abordarán pruebas paramétricas y no paramétricas, aplicadas al análisis de diferencias entre grupos, relación entre variables y validación de supuestos, con énfasis en su pertinencia y rigor metodológico.
        
        p(data-aos="fade-left") Esta es una gran oportunidad formativa que le permitirá desarrollar habilidades analíticas, metodológicas y tecnológicas claves, para enfrentar desafíos empresariales y académicos en entornos cada vez más complejos y basados en datos. ¡Bienvenido!
        
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
