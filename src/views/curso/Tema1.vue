<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Estimación puntual e intervalos de confianza'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En la estadística inferencial, la toma de decisiones fundamentadas en datos, requiere no solo de una descripción adecuada de la información, sino también de técnicas que permitan inferir propiedades poblacionales a partir de muestras. Dos de las herramientas más potentes en este sentido, son las #[strong pruebas de hipótesis] y la estimación por intervalos de confianza, dado que permiten validar o refutar suposiciones, así como estimar con márgenes de error aceptables, los parámetros desconocidos de una población.
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las pruebas de hipótesis pueden clasificarse en paramétricas, cuando se basan en supuestos sobre la distribución de los datos (normalidad, homogeneidad de varianzas), o en no paramétricas, cuando no requieren estos supuestos. Ambas son esenciales para analizar fenómenos empresariales, desde la evaluación de la productividad hasta el comportamiento del consumidor.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Teoría básica

      // Bloque: párrafo
      p(data-aos="fade-left").mb-5 La estadística inferencial, se constituye como una herramienta indispensable en el análisis de datos cuando se busca tomar decisiones informadas en contextos empresariales. Su aplicabilidad permite realizar inferencias acerca de una población a partir del estudio de una muestra, lo cual es fundamental cuando resulta inviable o costoso, acceder a toda la población objetivo. En este escenario, las técnicas de estimación puntual, los intervalos de confianza y las pruebas de hipótesis, permiten no solo describir sino también tomar decisiones a partir de los datos.

      // Bloque: imagen-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4.p-lg-5(data-aos="fade-left")
            p.mb-3 La estimación puntual consiste en determinar un valor específico como mejor aproximación del parámetro poblacional.
            p.mb-3 Por ejemplo, una empresa que desea conocer el ingreso promedio de sus empleados, puede calcular la media de una muestra representativa. Sin embargo, esta media puntual no refleja la incertidumbre asociada al proceso de muestreo.
            p.mb-3 Es aquí donde entra en juego el intervalo de confianza, que proporciona un rango de valores dentro del cual se espera que se encuentre el parámetro poblacional con una determinada probabilidad.
            p.mb-0 Por ejemplo, si una muestra de empleados arroja un salario promedio de $2.000 USD, con un intervalo de confianza del 95 % que va de $1.900 a $2.100 USD, se puede decir que existe un 95 % de confianza de que el salario real promedio, se encuentre dentro de ese rango.

      // Bloque: texto-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el marco de la toma de decisiones, las pruebas de hipótesis constituyen una metodología rigurosa para validar o rechazar afirmaciones sobre parámetros poblacionales. Estas pruebas se estructuran a partir de dos supuestos: la hipótesis nula (H0), que representa el estado actual o ausencia de efecto, y la hipótesis alternativa (H1), que plantea una diferencia o efecto significativo. A través de un procedimiento estadístico y la selección de un nivel de significancia (generalmente del 5 %), se analiza si los datos muestrales proporcionan suficiente evidencia para rechazar la hipótesis nula.
          p(data-aos="fade-left").mb-4 Las pruebas de hipótesis pueden clasificarse en dos grandes categorías: paramétricas y no paramétricas. Las pruebas paramétricas se basan en supuestos fuertes como la normalidad de los datos y la homogeneidad de varianzas.
          p(data-aos="fade-left") #[strong Conozcamos algunas de estas pruebas:]
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")

      // Bloque: img-aco
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Prueba t de Student")
              p Una de las pruebas más comunes es la prueba t de Student, utilizada para comparar la media de una muestra con un valor conocido, o entre dos muestras independientes. Por ejemplo, una empresa de servicios puede utilizar la prueba t para comparar si el tiempo medio de atención al cliente tras implementar un nuevo software difiere significativamente del estándar anterior. Supongamos que el tiempo promedio anterior era de 10 minutos. Luego de aplicar el software, una muestra de 30 casos arroja una media de 9,5 minutos con una desviación estándar de 1,2 minutos. La prueba t permitirá determinar si esta diferencia es estadísticamente significativa o no.
            .div(titulo="Análisis de Varianza")
              p Otra prueba paramétrica ampliamente utilizada es el Análisis de Varianza (ANOVA), que permite comparar las medias de tres o más grupos independientes. En un entorno organizacional, esta prueba puede servir para analizar si existen diferencias significativas en la productividad media, entre tres plantas de producción. Si el resultado del ANOVA indica significancia estadística, se procede con pruebas post hoc para identificar qué grupos difieren entre sí.

      // Bloque: párrafo
      p(data-aos="fade-left").mb-5 Cuando los datos no cumplen con los supuestos requeridos por las pruebas paramétricas, se utilizan pruebas no paramétricas. Estas no dependen de la distribución de los datos y suelen aplicarse a datos ordinales o categóricos. Entre las más conocidas están:

      // Bloque: SlyderA
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/6.png")
              .col-lg-8
                h5 Prueba de Wilcoxon
                p La prueba de Wilcoxon para muestras relacionadas, empleada como alternativa a la prueba t pareada. Por ejemplo, si una empresa desea evaluar el efecto de una nueva política interna sobre la satisfacción de los empleados, puede aplicar esta prueba comparando las puntuaciones antes y después de la intervención.
            .row.align-items-center.p-4.p-md-5
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/7.png")
              .col-lg-8
                h5 Prueba U de Mann-Whitney
                p La prueba U de Mann-Whitney ,permite comparar dos grupos independientes cuando los datos no se distribuyen normalmente. Un ejemplo en el sector comercial podría ser comparar la percepción de servicio entre dos diferentes sucursales de una misma cadena de supermercados. Si se obtiene un valor p menor al nivel de significancia, se puede concluir que existen diferencias significativas en la percepción del servicio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/8.png")
              .col-lg-8
                h5 Prueba de Chi-cuadrado (χ²)
                p La prueba de Chi-cuadrado (χ²), es otra herramienta no paramétrica importante que se utiliza para comparar distribuciones de frecuencias observadas y esperadas. Esta prueba es muy últil para analizar la relación entre variables categóricas. Por ejemplo, una empresa podría estudiar si existe asociación entre el tipo de producto comprado (ropa, electrónicos, alimentos) y la franja etaria del comprador (jóvenes, adultos, adultos mayores). Si el resultado de la prueba indica significancia estadística, se puede concluir que las preferencias de compra varían, según la edad del cliente.

      // Bloque: imagen-texto-iconobloque
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Como caso aplicado, imaginemos que una cadena de supermercados implementa un programa de capacitación con el objetivo de reducir el tiempo de atención al cliente. Se recolectan datos antes y después de la capacitación: antes, el tiempo promedio era de 12 minutos con una desviación estándar de 2.1 minutos; después, el promedio bajó a 10.8 minutos con una desviación estándar de 2.0. Aplicando una prueba t para muestras independientes, si el valor p es menor que 0.05, podrá concluirse que la capacitación tuvo un impacto significativo en la eficiencia operativa.
          .bg-color-2.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Para consolidar estos conocimientos, el estudiante debe ser capaz de identificar cuándo aplicar cada tipo de prueba, interpretar sus resultados y utilizar estos para guiar decisiones empresariales. Esto se traduce en una mejora tangible en la inteligencia de negocios, puesto que permite pasar de la intuición a decisiones basadas en evidencia.

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La obra "Estadística" de Mario F. Triola (2018), es una de las referencias más utilizadas en el ámbito académico para la comprensión de la estadística inferencial. En sus capítulos dedicados a la estimación y a las pruebas de hipótesis, Triola explica cómo utilizar los métodos estadísticos para evaluar afirmaciones sobre parámetros poblacionales, a partir de muestras. Aborda conceptos fundamentales como la estimación puntual, los intervalos de confianza, y las pruebas paramétricas y no paramétricas con ejemplos prácticos y aplicados al entorno empresarial. Su enfoque permite al lector identificar el tipo de análisis adecuado, según la naturaleza de los datos y la pregunta de investigación.
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-0 Particularmente, el autor resalta la utilidad de pruebas como la t de Student, el ANOVA, y la prueba de chi-cuadrado, entre otras, presentando escenarios reales como la comparación de productividad entre departamentos o el análisis de preferencias de clientes. La claridad en la explicación y la conexión directa con problemas cotidianos, hacen que el texto sea útil tanto para estudiantes como para profesionales que buscan tomar decisiones fundamentadas en evidencia cuantitativa. Gracias a estos aportes, la obra de Triola se consolida como una herramienta esencial para quienes desean dominar el análisis de datos y su aplicación en la inteligencia empresarial.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Estimación puntual e intervalos de confianza

      // Bloque: imagen-color-texto
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-3 La #[strong estimación puntual] de un parámetro poblacional, es un único valor numérico (como la media o la proporción) basada en datos muestrales. Por ejemplo, si el ingreso promedio de una muestra de empleados es de $2.000 USD, esta es una estimación puntual de la media poblacional.
            hr.my-4
            p.mb-0 El #[strong intervalo de confianza (IC)] es un rango de valores, calculado a partir de la muestra, que se espera contenga el parámetro poblacional con cierto nivel de confianza (usualmente 95 % o 99 %).
          p(data-aos="fade-left") #[strong Ejemplo.] "Estamos 95 % seguros de que la media de ingresos poblacional está entre $1.900 y $2.100 USD".

      // Bloque: título h2
      h2(data-aos="fade-left").mb-4 Formulación de pruebas de hipótesis

      // Bloque: párrafo
      p(data-aos="fade-left").mb-5 Las pruebas de hipótesis parten de dos supuestos:

      // Bloque: iconos-color col-lg-6
      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Hipótesis nula (H₀)
                p.mb-0 Plantea que no hay efecto o diferencia (por ejemplo, H₀: μ = μ₀).
        .col-lg-6
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Hipótesis alternativa (H₁)
                p.mb-0 Afirma lo contrario de H₀ (por ejemplo, H₁: μ ≠ μ₀).

      // Bloque: título h2
      h2(data-aos="fade-left").mb-4 Formulación de pruebas de hipótesis

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Las pruebas de hipótesis parten de dos supuestos:
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-2 1. Planteamiento de H₀ y H₁.
            p.mb-2 2. Selección del nivel de significancia (α).
            p.mb-2 3. Cálculo del estadístico de prueba (z, t, U, χ², etc.).
            p.mb-2 4. Determinación del valor p o zona crítica.
            p.mb-0 5. Decisión: rechazar o no rechazar H₀.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Pruebas paramétricas

      // Bloque: párrafo
      p(data-aos="fade-left").mb-5 Las pruebas paramétricas suponen que los datos siguen una distribución normal y se aplican generalmente cuando se conoce o se puede estimar el parámetro poblacional (como la varianza).

      // Bloque: tabc
      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Prueba t de Student" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-8.col-xl-8.mb-4.mb-md-0.order-2
              h4 Prueba t de Student
              p #[strong Usos.] Comparar la media de una muestra con un valor teórico o comparar dos medias.
              p #[strong Ejemplo.] Una empresa desea saber si el tiempo promedio de atención al cliente es diferente al estándar de 10 minutos. Se toma una muestra de 30 casos, y se encuentra una media de 9,5 minutos con una desviación estándar de 1,2. Se realiza una prueba t para determinar si esta diferencia es significativa.
            .col-md-6.col-lg-4.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/16.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Prueba ANOVA" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-8.col-xl-8.mb-4.mb-md-0.order-2
              h4 Prueba ANOVA
              p #[strong Usos.] Comparar más de dos medias de diferentes grupos (por ejemplo, sucursales de una empresa).
              p #[strong Ejemplo empresarial.] Comparar la productividad media de tres plantas de producción, para detectar diferencias significativas.
            .col-md-6.col-lg-4.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/17.png', alt='')

      // Bloque: titulo-segundo
      #t_1_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.4] Pruebas no paramétricas

      // Bloque: párrafo
      p(data-aos="fade-left").mb-5 Se utilizan cuando los datos no cumplen los supuestos de normalidad o son de tipo ordinal o categórico.

      // Bloque: infografia-1
      .row.mb-5
        .col-lg-12
          figure
            ImagenInfografica.color-acento-botones
              template(v-slot:imagen)
                img(src='@/assets/curso/tema1/infografia.png', alt='')
              .tarjeta.color-primario.p-3(x="15%" y="35%" numero="+")
                .h5.mb-2 Prueba de Chi-cuadrado (χ²)
                p.mb-2 #[strong Usos.] Comparar frecuencias observadas y esperadas en variables categóricas.
                p.mb-0 #[strong Ejemplo.] Verificar si existe relación entre el tipo de producto comprado y la edad del consumidor.
              .tarjeta.color-primario.p-3(x="48%" y="25.5%" numero="+")
                .h5.mb-2 Prueba de Wilcoxon
                p.mb-2 #[strong Usos.] Alternativa a la prueba t para muestras relacionadas sin distribución normal.
                p.mb-0 #[strong Ejemplo.] Evaluar la satisfacción de los clientes antes y después de un cambio en el sistema de atención.
              .tarjeta.color-primario.p-3(x="70%" y="20%" numero="+")
                .h5.mb-2 Prueba U de Mann-Whitney
                p.mb-2 #[strong Usos.] Comparar dos muestras independientes.
                p.mb-0 #[strong Caso.] Determinar si hay diferencia en la percepción de servicio entre dos tiendas de una misma cadena.


      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Un caso empresarial aplicado es, por ejemplo, una cadena de supermercados que implementó una nueva estrategia de capacitación y desea comprobar si esta ha mejorado el tiempo promedio de atención al cliente.
          .bg-color-4.p-4(data-aos="fade-left")
            ul.lista-ul--color
              li 
                i.far.fa-arrow-alt-circle-right
                | Muestra #[strong A] (antes de la capacitación): media = 12 min, n = 25, σ = 2.1
              li 
                i.far.fa-arrow-alt-circle-right
                | Muestra #[strong B] (después): media = 10.8 min, n = 25, σ = 2.0
            p.mb-3 Se aplica una #[strong prueba t] para muestras independientes, para contrastar si hay una diferencia significativa en las medias.
            p.mb-0 #[strong Resultado.] t = 2.34, p < 0.05 → Se rechaza H₀, existe evidencia estadística de mejora en el tiempo de atención.

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 #[strong Ejercicio propuesto.] Una empresa tecnológica afirma que el tiempo medio de respuesta a solicitudes técnicas es de 48 horas. Un analista toma una muestra de 16 casos y obtiene un promedio de 45 horas con una desviación estándar de 5 horas.
          .bg-color-3.p-4(data-aos="fade-left")
            ul.lista-ul--color
              li 
                i.far.fa-arrow-alt-circle-right
                | Nivel de significancia: 0.05.
              li 
                i.far.fa-arrow-alt-circle-right
                | ¿Existe evidencia suficiente para decir que el tiempo de respuesta ha cambiado?
            p.mb-0 Aplica una prueba t para una media, realiza los cálculos y responde.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")

      // Bloque: imagen-texto-iconobloque
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La toma de decisiones basada en datos, conocida como data-driven decision making, se basa en técnicas como las pruebas de hipótesis y estimaciones de intervalos. Estas herramientas permiten verificar suposiciones sobre el comportamiento del cliente, la eficiencia operativa o la rentabilidad, asegurando que las estrategias empresariales se construyan sobre evidencia estadística sólida.
          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En Inteligencia de Negocios (BI), estas pruebas se integran en dashboards interactivos que ayudan a validar hipótesis comerciales en tiempo real, aportando valor estratégico.

      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-8
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre estimación puntual e intervalos de confianza aplicados a la inteligencia de negocios.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/281985" target="_blank" rel="noopener noreferrer") Klinger Angarita, R. (2024). Muestreo estadístico: métodos básicos. Programa Editorial Universidad del Valle.
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=jcZPOv6lIc4" target="_blank" rel="noopener noreferrer") Muños, N. (2022). Introducción a Estadística Descriptiva (video). YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
