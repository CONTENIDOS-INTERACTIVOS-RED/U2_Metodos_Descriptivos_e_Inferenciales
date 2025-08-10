<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Regresión y correlación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: párrafo introductorio
      p(data-aos="fade-left").mb-5 Lo invitamos a ver el siguiente video, donde se estudiará la correlación lineal simple y la regresión lineal simple.

      // Bloque: video-fondo
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vkqbbR1VfH0?si=j17_tZPKru1MDJ1S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      // Bloque: titulo-segundo
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Análisis de regresión múltiple

      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Cuando intervienen más de una variable independiente, se utiliza la regresión múltiple. Su ecuación general es Y = a + b1X1 + b2X2 + ... + bnXn.
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Esta técnica permite explicar con mayor precisión la variable dependiente al considerar diversos factores. En un análisis de recursos humanos, por ejemplo, se podría modelar el nivel de satisfacción laboral (Y) en función del salario (X1), años de experiencia (X2) y formación académica (X3). Cuanto mayor sea el coeficiente de determinación R², mejor será la capacidad explicativa del modelo.
          p(data-aos="fade-left") #[strong Ejercicio aplicativo.] Supongamos que una empresa de logística desea estudiar la relación entre el número de entregas realizadas (X) y el nivel de satisfacción del cliente (Y) medido en una escala de 1 a 10. Con base en los datos recolectados de 10 zonas de entrega, se calcula la ecuación de regresión Y = 5 + 0.2X. Esto indica que por cada entrega adicional, la satisfacción promedio aumenta en 0.2 puntos. El coeficiente de correlación r = 0.85 sugiere una fuerte relación positiva. Con esta información, la empresa puede estimar niveles de satisfacción futuros y ajustar su estrategia operativa.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")

      // Bloque: imagen-color-texto
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 #[strong Caso organizacional.] Una empresa desea estimar el índice de rotación de personal (Y) en función del clima organizacional (X1) medido en una escala de 1 a 10, y el nivel de remuneración mensual (X2) en dólares. Con base en datos de 25 áreas diferentes, se obtuvo el siguiente modelo de regresión:
          p(data-aos="fade-left").mb-4 #[strong Y = 18 - 1.5X1 - 0.004X2]
          p(data-aos="fade-left") Este modelo sugiere que por cada punto de mejora en el clima organizacional, la rotación disminuye en 1.5 puntos porcentuales, y que un aumento de 1000 dólares en el salario mensual promedio reduce la rotación en 4 puntos. Estos hallazgos ofrecen evidencia útil para los departamentos de talento humano al momento de tomar decisiones sobre cultura organizacional y ajustes salariales.

      // Bloque: título h2
      h2(data-aos="fade-left").mb-4 Ejercicio de aplicación de regresión múltiple

      // Bloque: SlyderA
      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/4.png")
              .col-lg-7
                h5 Planteamiento del ejercicio
                p Un gerente de mercadeo desea proyectar las ventas mensuales (Y, en miles de dólares) en función del gasto en publicidad (X1) y el número de promotores en campo (X2). La fórmula obtenida es:
                p.mb-3 #[strong Y = 50 + 1.8X1 + 2.5X2]
                p.mb-2 a) ¿Cuál sería el nivel esperado de ventas si se invierten 10 mil USD en publicidad y se asignan 4 promotores?
                p.mb-0 b) ¿Cuál de las dos variables tiene mayor impacto marginal en las ventas?
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/5.png")
              .col-lg-7
                h5 Respuestas esperadas
                p.mb-3 #[strong a)] Y = 50 + 1.8(10) + 2.5(4) = 50 + 18 + 10 = 78 mil USD.
                p #[strong b)] La variable con mayor impacto marginal es la publicidad (por cada 1 mil USD invertido, aumentan 1.8 mil en ventas, frente a 2.5 mil por cada promotor), aunque se podría debatir dependiendo de costos y escalabilidad.

      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span Gálvez Rodríguez, J. F. Martínez Puertas, H. & Martínez Puertas, S. (2025). Estadística aplicada al ámbito económico y empresarial. Editorial Universidad de Almería.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=YuiihgsrAo8" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2020). Estadística Inferencial (video). YouTube.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
