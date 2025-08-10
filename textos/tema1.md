# Tema 1: 1. Estimación puntual e intervalos de confianza

<!-- 
RUTA DE ASSETS: @/assets/curso/tema1/
DISEÑO DE REFERENCIA: tema1.png
-->


## BLOQUE: texto-iconobloque-imagen
//assets: 1.svg, 2.png

//texto
En la estadística inferencial, la toma de decisiones fundamentadas en datos, requiere no solo de una descripción adecuada de la información, sino también de técnicas que permitan inferir propiedades poblacionales a partir de muestras. Dos de las herramientas más potentes en este sentido, son las **pruebas de hipótesis** y la estimación por intervalos de confianza, dado que permiten validar o refutar suposiciones, así como estimar con márgenes de error aceptables, los parámetros desconocidos de una población.

//iconobloque
Las pruebas de hipótesis pueden clasificarse en paramétricas, cuando se basan en supuestos sobre la distribución de los datos (normalidad, homogeneidad de varianzas), o en no paramétricas, cuando no requieren estos supuestos. Ambas son esenciales para analizar fenómenos empresariales, desde la evaluación de la productividad hasta el comportamiento del consumidor.

## BLOQUE

1.1 Teoría básica

La estadística inferencial, se constituye como una herramienta indispensable en el análisis de datos cuando se busca tomar decisiones informadas en contextos empresariales. Su aplicabilidad permite realizar inferencias acerca de una población a partir del estudio de una muestra, lo cual es fundamental cuando resulta inviable o costoso, acceder a toda la población objetivo. En este escenario, las técnicas de estimación puntual, los intervalos de confianza y las pruebas de hipótesis, permiten no solo describir sino también tomar decisiones a partir de los datos.


## BLOQUE: imagen-color

//assets: 3.png

//color
La estimación puntual consiste en determinar un valor específico como mejor aproximación del parámetro poblacional.

Por ejemplo, una empresa que desea conocer el ingreso promedio de sus empleados, puede calcular la media de una muestra representativa. Sin embargo, esta media puntual no refleja la incertidumbre asociada al proceso de muestreo.	 

Es aquí donde entra en juego el intervalo de confianza, que proporciona un rango de valores dentro del cual se espera que se encuentre el parámetro poblacional con una determinada probabilidad.

Por ejemplo, si una muestra de empleados arroja un salario promedio de $2.000 USD, con un intervalo de confianza del 95 % que va de $1.900 a $2.100 USD, se puede decir que existe un 95 % de confianza de que el salario real promedio, se encuentre dentro de ese rango.

## BLOQUE: texto-imagen

//assets: 4.png

En el marco de la toma de decisiones, las pruebas de hipótesis constituyen una metodología rigurosa para validar o rechazar afirmaciones sobre parámetros poblacionales. Estas pruebas se estructuran a partir de dos supuestos: la hipótesis nula (H0), que representa el estado actual o ausencia de efecto, y la hipótesis alternativa (H1), que plantea una diferencia o efecto significativo. A través de un procedimiento estadístico y la selección de un nivel de significancia (generalmente del 5 %), se analiza si los datos muestrales proporcionan suficiente evidencia para rechazar la hipótesis nula.

Las pruebas de hipótesis pueden clasificarse en dos grandes categorías: paramétricas y no paramétricas. Las pruebas paramétricas se basan en supuestos fuertes como la normalidad de los datos y la homogeneidad de varianzas. 

**Conozcamos algunas de estas pruebas:**

## BLOQUE: img-aco

//assets: 5.png

//acordeon

Prueba t de Student
Una de las pruebas más comunes es la prueba t de Student, utilizada para comparar la media de una muestra con un valor conocido, o entre dos muestras independientes. Por ejemplo, una empresa de servicios puede utilizar la prueba t para comparar si el tiempo medio de atención al cliente tras implementar un nuevo software difiere significativamente del estándar anterior. Supongamos que el tiempo promedio anterior era de 10 minutos. Luego de aplicar el software, una muestra de 30 casos arroja una media de 9,5 minutos con una desviación estándar de 1,2 minutos. La prueba t permitirá determinar si esta diferencia es estadísticamente significativa o no.

---

Análisis de Varianza
Otra prueba paramétrica ampliamente utilizada es el Análisis de Varianza (ANOVA), que permite comparar las medias de tres o más grupos independientes. En un entorno organizacional, esta prueba puede servir para analizar si existen diferencias significativas en la productividad media, entre tres plantas de producción. Si el resultado del ANOVA indica significancia estadística, se procede con pruebas post hoc para identificar qué grupos difieren entre sí.


## BLOQUE: párrafo

Cuando los datos no cumplen con los supuestos requeridos por las pruebas paramétricas, se utilizan pruebas no paramétricas. Estas no dependen de la distribución de los datos y suelen aplicarse a datos ordinales o categóricos. Entre las más conocidas están:

## BLOQUE: SlyderA

//assets: 6.png, 7.png, 8.png

Prueba de Wilcoxon
La prueba de Wilcoxon para muestras relacionadas, empleada como alternativa a la prueba t pareada. Por ejemplo, si una empresa desea evaluar el efecto de una nueva política interna sobre la satisfacción de los empleados, puede aplicar esta prueba comparando las puntuaciones antes y después de la intervención.

---

Prueba U de Mann-Whitney
La prueba U de Mann-Whitney ,permite comparar dos grupos independientes cuando los datos no se distribuyen normalmente. Un ejemplo en el sector comercial podría ser comparar la percepción de servicio entre dos diferentes sucursales de una misma cadena de supermercados. Si se obtiene un valor p menor al nivel de significancia, se puede concluir que existen diferencias significativas en la percepción del servicio.

---

Prueba de Chi-cuadrado (χ²)
La prueba de Chi-cuadrado (χ²), es otra herramienta no paramétrica importante que se utiliza para comparar distribuciones de frecuencias observadas y esperadas. Esta prueba es muy últil para analizar la relación entre variables categóricas. Por ejemplo, una empresa podría estudiar si existe asociación entre el tipo de producto comprado (ropa, electrónicos, alimentos) y la franja etaria del comprador (jóvenes, adultos, adultos mayores). Si el resultado de la prueba indica significancia estadística, se puede concluir que las preferencias de compra varían, según la edad del cliente.


## BLOQUE: imagen-texto-iconobloque

//assets: 9.png, 10.svg

//texto
Como caso aplicado, imaginemos que una cadena de supermercados implementa un programa de capacitación con el objetivo de reducir el tiempo de atención al cliente. Se recolectan datos antes y después de la capacitación: antes, el tiempo promedio era de 12 minutos con una desviación estándar de 2.1 minutos; después, el promedio bajó a 10.8 minutos con una desviación estándar de 2.0. Aplicando una prueba t para muestras independientes, si el valor p es menor que 0.05, podrá concluirse que la capacitación tuvo un impacto significativo en la eficiencia operativa.

//iconobloque
Para consolidar estos conocimientos, el estudiante debe ser capaz de identificar cuándo aplicar cada tipo de prueba, interpretar sus resultados y utilizar estos para guiar decisiones empresariales. Esto se traduce en una mejora tangible en la inteligencia de negocios, puesto que permite pasar de la intuición a decisiones basadas en evidencia.


## BLOQUE: texto-color-imagen
//assets: 11.png

//texto
La obra “Estadística” de Mario F. Triola (2018), es una de las referencias más utilizadas en el ámbito académico para la comprensión de la estadística inferencial. En sus capítulos dedicados a la estimación y a las pruebas de hipótesis, Triola explica cómo utilizar los métodos estadísticos para evaluar afirmaciones sobre parámetros poblacionales, a partir de muestras. Aborda conceptos fundamentales como la estimación puntual, los intervalos de confianza, y las pruebas paramétricas y no paramétricas con ejemplos prácticos y aplicados al entorno empresarial. Su enfoque permite al lector identificar el tipo de análisis adecuado, según la naturaleza de los datos y la pregunta de investigación.

//color
Particularmente, el autor resalta la utilidad de pruebas como la t de Student, el ANOVA, y la prueba de chi-cuadrado, entre otras, presentando escenarios reales como la comparación de productividad entre departamentos o el análisis de preferencias de clientes. La claridad en la explicación y la conexión directa con problemas cotidianos, hacen que el texto sea útil tanto para estudiantes como para profesionales que buscan tomar decisiones fundamentadas en evidencia cuantitativa. Gracias a estos aportes, la obra de Triola se consolida como una herramienta esencial para quienes desean dominar el análisis de datos y su aplicación en la inteligencia empresarial. 

## BLOQUE
1.2 Estimación puntual e intervalos de confianza

## BLOQUE: imagen-color-texto

//assets: 12.png

//color
La estimación puntual de un parámetro poblacional, es un único valor numérico (como la media o la proporción) basada en datos muestrales. Por ejemplo, si el ingreso promedio de una muestra de empleados es de $2.000 USD, esta es una estimación puntual de la media poblacional.

El intervalo de confianza (IC) es un rango de valores, calculado a partir de la muestra, que se espera contenga el parámetro poblacional con cierto nivel de confianza (usualmente 95 % o 99 %).

//texto
**Ejemplo.** "Estamos 95 % seguros de que la media de ingresos poblacional está entre $1.900 y $2.100 USD".

## BLOQUE

## Formulación de pruebas de hipótesis

Las pruebas de hipótesis parten de dos supuestos:

## BLOQUE: iconos-color col-lg-6

//assets: 13.svg, 14.svg

Hipótesis nula (H₀)
Plantea que no hay efecto o diferencia (por ejemplo, H₀: μ = μ₀).

---

Hipótesis alternativa (H₁)
Afirma lo contrario de H₀ (por ejemplo, H₁: μ ≠ μ₀).

## BLOQUE

## Formulación de pruebas de hipótesis

## BLOQUE: texto-color-imagen

//assets: 15.png

//texto
Las pruebas de hipótesis parten de dos supuestos:

//color
1. Planteamiento de H₀ y H₁.
2. Selección del nivel de significancia (α).
3. Cálculo del estadístico de prueba (z, t, U, χ², etc.).
4. Determinación del valor p o zona crítica.
5. Decisión: rechazar o no rechazar H₀.

## BLOQUE

1.3 Pruebas paramétricas

Las pruebas paramétricas suponen que los datos siguen una distribución normal y se aplican generalmente cuando se conoce o se puede estimar el parámetro poblacional (como la varianza).

## BLOQUE: tabc

//assets: 16.png, 17.png

### Prueba t de Student

**Usos.** Comparar la media de una muestra con un valor teórico o comparar dos medias.
**Ejemplo.** Una empresa desea saber si el tiempo promedio de atención al cliente es diferente al estándar de 10 minutos. Se toma una muestra de 30 casos, y se encuentra una media de 9,5 minutos con una desviación estándar de 1,2. Se realiza una prueba t para determinar si la diferencia es significativa.

---

### Prueba ANOVA

**Usos.** Comparar más de dos medias de diferentes grupos (por ejemplo, sucursales de una empresa).
**Ejemplo empresarial.** Comparar la productividad media de tres plantas de producción, para detectar diferencias significativas.

## BLOQUE

1.4 Pruebas no paramétricas

Se utilizan cuando los datos no cumplen los supuestos de normalidad o son de tipo ordinal o categórico.

## BLQOUE: infografia-1

//assets: infografia.png

Prueba de Chi-cuadrado (χ²)

Usos. Comparar frecuencias observadas y esperadas en variables categóricas.
Ejemplo. Verificar si existe relación entre el tipo de producto comprado y la edad del consumidor.

---

Prueba de Wilcoxon

Usos. Alternativa a la prueba t para muestras relacionadas sin distribución normal.
Ejemplo. Evaluar la satisfacción de los clientes antes y después de un cambio en el sistema de atención.

---

Prueba U de Mann-Whitney

Usos. Comparar dos muestras independientes.
Caso. Determinar si hay diferencia en la percepción de servicio entre dos tiendas de una misma cadena.

---

Prueba de Chi-cuadrado (χ²)

Usos. Comparar frecuencias observadas y esperadas en variables categóricas.
Ejemplo. Verificar si existe relación entre el tipo de producto comprado y la edad del consumidor.

## BLOQUE: imagen-texto-color

//assets: 18.png

//texto
Un caso empresarial aplicado es, por ejemplo, una cadena de supermercados que implementó una nueva estrategia de capacitación y desea comprobar si esta ha mejorado el tiempo promedio de atención al cliente.

//color 
  //lista-flechas
    - Muestra **A** (antes de la capacitación): media = 12 min, n = 25, σ = 2.1
    - Muestra **B** (después): media = 10.8 min, n = 25, σ = 2.0
  
  Se aplica una **prueba t** para muestras independientes, para contrastar si hay una diferencia significativa en las medias.
  
  **Resultado.** t = 2.34, p < 0.05 → Se rechaza H₀, existe evidencia estadística de mejora en el tiempo de atención.


## BLOQUE: texto-color-imagen

//assets: 19.png

//texto
**Ejercicio propuesto.** Una empresa tecnológica afirma que el tiempo medio de respuesta a solicitudes técnicas es de 48 horas. Un analista toma una muestra de 16 casos y obtiene un promedio de 45 horas con una desviación estándar de 5 horas.

//color
  //lista-flechas
    - Nivel de significancia: 0.05.
    - ¿Existe evidencia suficiente para decir que el tiempo de respuesta ha cambiado?

  Aplica una prueba t para una media, realiza los cálculos y responde.

## BLOQUE: imagen-texto-iconobloque

//assets: 20.png, 21.svg

//texto
La toma de decisiones basada en datos, conocida como data-driven decision making, se basa en técnicas como las pruebas de hipótesis y estimaciones de intervalos. Estas herramientas permiten verificar suposiciones sobre el comportamiento del cliente, la eficiencia operativa o la rentabilidad, asegurando que las estrategias empresariales se construyan sobre evidencia estadística sólida.

//iconobloque
En Inteligencia de Negocios (BI), estas pruebas se integran en dashboards interactivos que ayudan a validar hipótesis comerciales en tiempo real, aportando valor estratégico. 


## BLOQUE: bloque-material-complementario

Klinger Angarita, R. (2024). Muestreo estadístico: métodos básicos. Programa Editorial Universidad del Valle. https://elibro.net/es/lc/tecnologicadeloriente/titulos/281985 

Muños, N. (2022). Introducción a Estadística Descriptiva (video). YouTube. https://www.youtube.com/watch?v=jcZPOv6lIc4 
