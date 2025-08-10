<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Pruebas de significancia estadística'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque: texto-iconobloque-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Las pruebas de significancia estadística constituyen un componente esencial del análisis inferencial, permitiendo determinar si los resultados observados en un estudio son atribuibles al azar o reflejan un efecto real en la población. En los entornos empresariales, esta herramienta cobra relevancia al facilitar la validación de estrategias, hipótesis y resultados a partir del análisis de datos muestrales.
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Comprender y aplicar adecuadamente las pruebas de significancia fortalece la toma de decisiones basada en evidencia y mejora la capacidad analítica dentro del marco de la inteligencia de negocios. En este tema se desarrollan tres ejes fundamentales: el valor p y su interpretación, los errores #[strong tipo I] y #[strong tipo II], y el uso de pruebas de significancia en el análisis multivariado.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] El valor p y su interpretación

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 El valor p (p-value) es la probabilidad de obtener resultados tan extremos como los observados en una muestra, suponiendo que la hipótesis nula (H0) es verdadera. Es un indicador clave en las pruebas de hipótesis, porque permite cuantificar la evidencia contra H0. Si el valor p es menor que el nivel de significancia preestablecido (α), generalmente 0.05, se rechaza la hipótesis nula.
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 Por ejemplo, una empresa desea saber si su nueva estrategia de ventas ha incrementado significativamente las ventas promedio. Se realiza una prueba t con la hipótesis nula de que no hay cambio en las ventas. El análisis devuelve un valor p = 0.03. Como 0.03 < 0.05, se rechaza la hipótesis nula, concluyendo que la estrategia tuvo un efecto significativo.
          p(data-aos="fade-left") En un caso aplicado, una cadena de restaurantes implementa un nuevo sistema de reservas en línea. Tras un mes de operación, analiza si hubo un cambio en el número promedio de clientes diarios. El valor p obtenido al comparar los promedios antes y después de la implementación es de 0.001. La empresa puede con confianza estadística, afirmar que el sistema tuvo un impacto positivo.

      // Bloque: color-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-0 Otro ejercicio de análisis es suponer que una empresa lanza una campaña publicitaria y quiere evaluar su efecto sobre las ventas. Se comparan los datos de ventas antes y después en una muestra de 50 tiendas y se obtiene un valor p de 0.07. ¿Qué se puede concluir si el nivel de significancia es 0.05?
          p(data-aos="fade-left").mb-4 #[strong Respuesta esperada.] No se rechaza la hipótesis nula; no hay evidencia suficiente para afirmar que la campaña tuvo un efecto significativo.
          p(data-aos="fade-left") La relación con la inteligencia de negocios es que el valor p permite tomar decisiones estratégicas sustentadas en datos, reduciendo la dependencia de la intuición. En inteligencia de negocios, el uso del valor p en dashboards y reportes, facilita la validación de tendencias o resultados esperados por la gerencia.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Errores tipo I y tipo II

      // Bloque: imagen-texto-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En las pruebas de hipótesis, pueden cometerse dos tipos de errores. El error tipo I ocurre cuando se rechaza una hipótesis nula verdadera (falso positivo), mientras que el error tipo II se comete al no rechazar una hipótesis nula falsa (falso negativo). La probabilidad de cometer un error tipo I se controla mediante el nivel de significancia (α), mientras que la probabilidad de un error tipo II, se relaciona con el poder estadístico de la prueba (1 – β).
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            p.mb-0 Por ejemplo una empresa farmacéutica prueba la efectividad de un nuevo medicamento. Si el análisis rechaza la hipótesis nula cuando en realidad el medicamento no tiene efecto, comete un error tipo I. Si no detecta un efecto real del medicamento, comete un error tipo II.
          p(data-aos="fade-left") Llevándolo a un caso aplicado, un banco lanza un nuevo sistema de evaluación crediticia. Se quiere comprobar si reduce el riesgo de impago. Rechazar incorrectamente la hipótesis de que no hay mejora en el sistema implicaría asumir que el nuevo modelo es superior, cuando en realidad no lo es (error tipo I). No rechazarla cuando sí hay mejora, podría llevar a desechar un sistema útil (error tipo II).

      // Bloque: texto-color-imagen
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 #[strong Algo sencillo como un ejercicio aplicado, es indicar si se trata de un error tipo I o tipo II:]
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-2 a) Una empresa rechaza una estrategia de marketing que en realidad habría incrementado las ventas.
            p.mb-3 b) Una empresa acepta que una nueva técnica de producción, mejora la eficiencia, pero en realidad no hay mejora.
            p.mb-2 #[strong Respuestas esperadas:]
            p.mb-1 a) Error tipo II.
            p.mb-0 b) Error tipo I.
          p(data-aos="fade-left") Con relación al Business Intelligence es que el comprender estos errores permite gestionar mejor el riesgo en decisiones empresariales. Minimizar errores tipo I y II evita adoptar estrategias ineficientes o descartar oportunidades valiosas. Esto es crucial en entornos de alta competitividad, donde cada decisión basada en datos debe ser rigurosamente evaluada.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Uso de pruebas de significancia en el análisis multivariado

      // Bloque: imagen-texto-iconobloque
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En el análisis multivariado, las pruebas de significancia se utilizan para determinar qué variables explicativas tienen un efecto estadísticamente significativo sobre la variable dependiente. Estas pruebas permiten construir modelos predictivos más eficientes y robustos. En la regresión múltiple, cada coeficiente asociado a una variable independiente es evaluado mediante una prueba t con su respectivo valor p.
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 A nivel casuístico, una empresa de transporte quiere predecir la satisfacción del cliente en función del tiempo de entrega, el costo del servicio y la amabilidad del conductor. Se utiliza una regresión múltiple y se obtienen valores p para cada variable. Solo la amabilidad y el tiempo de entrega tienen valores p < 0.05, por lo tanto, son significativas en el modelo
          p(data-aos="fade-left") Por ejemplo, una compañía aseguradora desea predecir el número de reclamaciones anuales, según variables como edad del cliente, tipo de seguro y región. Al aplicar regresión logística, encuentra que el tipo de seguro y la edad son significativos, mientras que la región no lo es (valor p > 0.1). Así, se ajusta el modelo solo con las variables significativas.

      // Bloque: párrafo
      p(data-aos="fade-left").mb-5 Otro caso para abordar, es que una empresa realiza una regresión múltiple para predecir el nivel de productividad (Y) a partir del número de horas de capacitación (X1), años de experiencia (X2) y grado académico (X3). Obtiene los siguientes resultados:

      // Bloque: color-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-1 - Coeficiente X1: p = 0.04
            p.mb-1 - Coeficiente X2: p = 0.18
            p.mb-0 - Coeficiente X3: p = 0.01
          p(data-aos="fade-left").mb-4 ¿Cuáles variables deben mantenerse en el modelo si el criterio de significancia es p < 0.05?
          p(data-aos="fade-left").mb-4 #[strong Respuesta esperada: ] Se deben mantener X1 y X3.
          p(data-aos="fade-left") En materia de inteligencia de negocios determina que el análisis multivariado con pruebas de significancia, permite a los analistas filtrar las variables que realmente impactan en los resultados empresariales, optimizando recursos y enfoques estratégicos. Este enfoque orientado a datos, es fundamental en sistemas de apoyo a la toma de decisiones.
          // Bloque: párrafo de conclusión
          p(data-aos="fade-left").mb-5 La unidad actual abordó tres ejes fundamentales de la estadística inferencial que constituyen pilares para el análisis de datos y la toma de decisiones estratégicas en contextos empresariales: las pruebas de hipótesis (paramétricas y no paramétricas), el análisis de regresión y correlación, y las pruebas de significancia estadística. Cada uno de estos temas provee herramientas metodológicas que permiten transformar datos en información valiosa para gestionar eficientemente procesos, recursos y resultados organizacionales:
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")


      // Bloque: img-aco
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
        .col-lg-7
          AcordionA(tipo="b")
            .div(titulo="Primero")
              p El estudio de las pruebas de hipótesis permite someter a verificación afirmaciones sobre parámetros poblacionales, utilizando evidencia proveniente de muestras. Tanto las pruebas paramétricas como las no paramétricas encuentran múltiples aplicaciones en el ámbito empresarial, ya sea para evaluar cambios en productividad, comparar niveles de satisfacción del cliente o verificar el impacto de nuevas estrategias comerciales. Comprender los supuestos de cada tipo de prueba es esencial para garantizar la validez de los resultados y minimizar errores en la toma de decisiones.
            .div(titulo="Segundo")
              p La regresión y correlación, profundizó en el análisis de relaciones entre variables. A través del coeficiente de correlación, se puede determinar la existencia y fuerza de vínculos lineales entre variables relevantes para el negocio, como ventas y campañas publicitarias. Por su parte, los modelos de regresión permiten no solo explicar, sino también predecir comportamientos futuros a partir de factores claves, optimizando procesos como la planificación financiera, la gestión del talento humano o la logística operativa. En este sentido, el análisis de regresión múltiple amplía las posibilidades al incorporar varias variables independientes que interactúan entre sí.
            .div(titulo="Tercero")
              p El estudio de las pruebas de significancia estadística ofreció los fundamentos para validar con rigor científico las conclusiones derivadas del análisis de datos. Saber interpretar el valor p, los intervalos de confianza y el nivel de significancia, fortalece la capacidad analítica en entornos empresariales altamente competitivos y cambiantes. La aplicación correcta de estos conceptos permite distinguir entre hallazgos relevantes y fluctuaciones aleatorias, asegurando que las decisiones se basen en evidencia robusta.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-1.mb-4
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la Unidad 2 proporciona un conjunto de herramientas estadísticas esenciales para el desarrollo de una inteligencia de negocios efectiva. Desde la formulación de hipótesis hasta la predicción de resultados futuros, cada técnica aquí abordada potencia la toma de decisiones informadas, reduce la incertidumbre y contribuye a una gestión más eficiente de las organizaciones. El dominio de estos métodos no solo enriquece el perfil profesional de los estudiantes, sino que los convierte en agentes estratégicos en la transformación digital y analítica de las empresas modernas.


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>


      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre pruebas de significancia estadística y su aplicación en la inteligencia de negocios.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/268197" target="_blank" rel="noopener noreferrer") Illowsky, B. Dean, S. & Birmajer, D. (2023). Introducción a la Estadística Empresarial. Cervantes Digital.
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/CUSX48F-QWg?si=l-A2H3CDVjj7EBtl" target="_blank" rel="noopener noreferrer") Bioestadística (Cursos de Máster). (2020). Sesión 2, 4/7, Significación estadística.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Métodos inferenciales y pruebas de hipótesis',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos sobre estadística inferencial.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Una empresa de tecnología en Medellín, desea evaluar si la implementación de un nuevo sistema de gestión de inventarios ha reducido el tiempo de respuesta en la entrega de productos. Se realiza una prueba t para comparar los tiempos promedio de entrega antes y después de la implementación. ¿Qué hipótesis se establecería para esta prueba t?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'H₀: el tiempo de entrega es el mismo antes y después de la implementación del sistema.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'H₀: el tiempo de entrega es mayor después de la implementación del sistema.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'H₀: el tiempo de entrega ha aumentado después de la implementación del sistema.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'H₀: el tiempo de entrega ha disminuido después de la implementación del sistema.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Una empresa de distribución de productos alimenticios ZENÚ desea analizar si existe una relación lineal entre el número de ventas diarias y el presupuesto destinado a marketing. ¿Qué tipo de análisis estadístico sería más adecuado para este estudio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Correlación lineal simple.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Regresión lineal múltiple.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Análisis de varianza (ANOVA).',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Prueba de chi-cuadrado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La empresa EPM de servicios en Medellín, ha realizado una encuesta sobre la satisfacción de sus clientes con respecto a la calidad de su servicio. Los resultados antes y después de implementar una nueva estrategia de atención al cliente son comparados utilizando la prueba de Wilcoxon. ¿En qué tipo de datos se puede aplicar esta prueba no paramétrica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Datos ordinales o numéricos.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Datos continuos de distribución normal.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Datos categóricos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Datos binarios.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'La empresa Ecomoda realiza un estudio para verificar si la edad de los consumidores influye en sus preferencias de productos (ropa, calzado, accesorios). Se utiliza una prueba de chi-cuadrado para analizar la relación entre la edad (variable categórica) y las preferencias de compra (categorías de productos). ¿Qué representa el valor p en este análisis?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La probabilidad de que no exista una relación entre las variables.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'La probabilidad de que las variables estén relacionadas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La media de las preferencias de los consumidores.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La varianza de las preferencias de los consumidores.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'La empresa Metro de Medellín quiere predecir el tiempo de llegada de sus vagones a partir de la distancia recorrida y las condiciones de las líneas del metro. Utiliza un modelo de regresión lineal múltiple para realizar esta predicción. Si el coeficiente de determinación (R²) es 0.85, ¿qué se puede inferir sobre la relación entre las variables?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El modelo no es útil para hacer predicciones.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El modelo explica el 85% de la variabilidad del tiempo de llegada.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'El modelo explica el 85% de la variabilidad de la distancia recorrida.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'El modelo tiene una relación débil entre las variables.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
