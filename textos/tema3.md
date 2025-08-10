# Tema 3: 3. Pruebas de significancia estadística


<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->


## BLOQUE: texto-iconobloque-imagen

//assets: 1.svg, 2.png

//texto
Las pruebas de significancia estadística constituyen un componente esencial del análisis inferencial, permitiendo determinar si los resultados observados en un estudio son atribuibles al azar o reflejan un efecto real en la población. En los entornos empresariales, esta herramienta cobra relevancia al facilitar la validación de estrategias, hipótesis y resultados a partir del análisis de datos muestrales. 

//iconobloque
Comprender y aplicar adecuadamente las pruebas de significancia fortalece la toma de decisiones basada en evidencia y mejora la capacidad analítica dentro del marco de la inteligencia de negocios. En este tema se desarrollan tres ejes fundamentales: el valor p y su interpretación, los errores **tipo I** y **tipo II**, y el uso de pruebas de significancia en el análisis multivariado. 

## BLOQUE

3.1 El valor p y su interpretación

## BLOQUE: imagen-texto-color

//assets: 3.png

//texto
El valor p (p-value) es la probabilidad de obtener resultados tan extremos como los observados en una muestra, suponiendo que la hipótesis nula (H0) es verdadera. Es un indicador clave en las pruebas de hipótesis, porque permite cuantificar la evidencia contra H0. Si el valor p es menor que el nivel de significancia preestablecido (α), generalmente 0.05, se rechaza la hipótesis nula.

//color 2
Por ejemplo, una empresa desea saber si su nueva estrategia de ventas ha incrementado significativamente las ventas promedio. Se realiza una prueba t con la hipótesis nula de que no hay cambio en las ventas. El análisis devuelve un valor p = 0.03. Como 0.03 < 0.05, se rechaza la hipótesis nula, concluyendo que la estrategia tuvo un efecto significativo.

//texto
En un caso aplicado, una cadena de restaurantes implementa un nuevo sistema de reservas en línea. Tras un mes de operación, analiza si hubo un cambio en el número promedio de clientes diarios. El valor p obtenido al comparar los promedios antes y después de la implementación es de 0.001. La empresa puede con confianza estadística, afirmar que el sistema tuvo un impacto positivo.


## BLOQUE: color-texto-imagen

//assets: 4.png

//color 3
Otro ejercicio de análisis es suponer que una empresa lanza una campaña publicitaria y quiere evaluar su efecto sobre las ventas. Se comparan los datos de ventas antes y después en una muestra de 50 tiendas y se obtiene un valor p de 0.07. ¿Qué se puede concluir si el nivel de significancia es 0.05?

//texto
**Respuesta esperada.** No se rechaza la hipótesis nula; no hay evidencia suficiente para afirmar que la campaña tuvo un efecto significativo.

La relación con la inteligencia de negocios es que el valor p permite tomar decisiones estratégicas sustentadas en datos, reduciendo la dependencia de la intuición. En inteligencia de negocios, el uso del valor p en dashboards y reportes, facilita la validación de tendencias o resultados esperados por la gerencia.

## BLOQUE

3.2 Errores tipo I y tipo II

## BLOQUE: imagen-texto-color

//assets: 5.png

//texto
En las pruebas de hipótesis, pueden cometerse dos tipos de errores. El error tipo I ocurre cuando se rechaza una hipótesis nula verdadera (falso positivo), mientras que el error tipo II se comete al no rechazar una hipótesis nula falsa (falso negativo). La probabilidad de cometer un error tipo I se controla mediante el nivel de significancia (α), mientras que la probabilidad de un error tipo II, se relaciona con el poder estadístico de la prueba (1 – β).

//color 4
Por ejemplo una empresa farmacéutica prueba la efectividad de un nuevo medicamento. Si el análisis rechaza la hipótesis nula cuando en realidad el medicamento no tiene efecto, comete un error tipo I. Si no detecta un efecto real del medicamento, comete un error tipo II.

//texto
Llevándolo a un caso aplicado, un banco lanza un nuevo sistema de evaluación crediticia. Se quiere comprobar si reduce el riesgo de impago. Rechazar incorrectamente la hipótesis de que no hay mejora en el sistema implicaría asumir que el nuevo modelo es superior, cuando en realidad no lo es (error tipo I). No rechazarla cuando sí hay mejora, podría llevar a desechar un sistema útil (error tipo II).

## BLOQUE: texto-color-imagen

//assets: 6.png

//texto
**Algo sencillo como un ejercicio aplicado, es indicar si se trata de un error tipo I o tipo II:**

//color 3
a) Una empresa rechaza una estrategia de marketing que en realidad habría incrementado las ventas.
b) Una empresa acepta que una nueva técnica de producción, mejora la eficiencia, pero en realidad no hay mejora.

**Respuestas esperadas:**
a) Error tipo II.
b) Error tipo I.

//texto
Con relación al Business Intelligence es que el comprender estos errores permite gestionar mejor el riesgo en decisiones empresariales. Minimizar errores tipo I y II evita adoptar estrategias ineficientes o descartar oportunidades valiosas. Esto es crucial en entornos de alta competitividad, donde cada decisión basada en datos debe ser rigurosamente evaluada.

## BLOQUE

3.3 Uso de pruebas de significancia en el análisis multivariado

## BLOQUE: imagen-texto-iconobloque

//assets: 7.png, 8.svg

//texto
En el análisis multivariado, las pruebas de significancia se utilizan para determinar qué variables explicativas tienen un efecto estadísticamente significativo sobre la variable dependiente. Estas pruebas permiten construir modelos predictivos más eficientes y robustos. En la regresión múltiple, cada coeficiente asociado a una variable independiente es evaluado mediante una prueba t con su respectivo valor p.

//color
A nivel casuístico, una empresa de transporte quiere predecir la satisfacción del cliente en función del tiempo de entrega, el costo del servicio y la amabilidad del conductor. Se utiliza una regresión múltiple y se obtienen valores p para cada variable. Solo la amabilidad y el tiempo de entrega tienen valores p < 0.05, por lo tanto, son significativas en el modelo	  

Por ejemplo, una compañía aseguradora desea predecir el número de reclamaciones anuales, según variables como edad del cliente, tipo de seguro y región. Al aplicar regresión logística, encuentra que el tipo de seguro y la edad son significativos, mientras que la región no lo es (valor p > 0.1). Así, se ajusta el modelo solo con las variables significativas.

## BLOQUE

Otro caso para abordar, es que una empresa realiza una regresión múltiple para predecir el nivel de productividad (Y) a partir del número de horas de capacitación (X1), años de experiencia (X2) y grado académico (X3). Obtiene los siguientes resultados:

## BLOQUE: color-texto-imagen

//assets: 9.png

//color
- Coeficiente X1: p = 0.04
- Coeficiente X2: p = 0.18
- Coeficiente X3: p = 0.01

//texto
¿Cuáles variables deben mantenerse en el modelo si el criterio de significancia es p < 0.05?

**Respuesta esperada: **
Se deben mantener X1 y X3.

En materia de inteligencia de negocios determina que el análisis multivariado con pruebas de significancia, permite a los analistas filtrar las variables que realmente impactan en los resultados empresariales, optimizando recursos y enfoques estratégicos. Este enfoque orientado a datos, es fundamental en sistemas de apoyo a la toma de decisiones.

La unidad actual abordó tres ejes fundamentales de la estadística inferencial que constituyen pilares para el análisis de datos y la toma de decisiones estratégicas en contextos empresariales: las pruebas de hipótesis (paramétricas y no paramétricas), el análisis de regresión y correlación, y las pruebas de significancia estadística. Cada uno de estos temas provee herramientas metodológicas que permiten transformar datos en información valiosa para gestionar eficientemente procesos, recursos y resultados organizacionales:

## BLOQUE: img-aco

//assets: 10.png

//acordeon

Primero
El estudio de las pruebas de hipótesis permite someter a verificación afirmaciones sobre parámetros poblacionales, utilizando evidencia proveniente de muestras. Tanto las pruebas paramétricas como las no paramétricas encuentran múltiples aplicaciones en el ámbito empresarial, ya sea para evaluar cambios en productividad, comparar niveles de satisfacción del cliente o verificar el impacto de nuevas estrategias comerciales. Comprender los supuestos de cada tipo de prueba es esencial para garantizar la validez de los resultados y minimizar errores en la toma de decisiones.

---

Segundo
La regresión y correlación, profundizó en el análisis de relaciones entre variables. A través del coeficiente de correlación, se puede determinar la existencia y fuerza de vínculos lineales entre variables relevantes para el negocio, como ventas y campañas publicitarias. Por su parte, los modelos de regresión permiten no solo explicar, sino también predecir comportamientos futuros a partir de factores claves, optimizando procesos como la planificación financiera, la gestión del talento humano o la logística operativa. En este sentido, el análisis de regresión múltiple amplía las posibilidades al incorporar varias variables independientes que interactúan entre sí.

---

Tercero
El estudio de las pruebas de significancia estadística ofreció los fundamentos para validar con rigor científico las conclusiones derivadas del análisis de datos. Saber interpretar el valor p, los intervalos de confianza y el nivel de significancia, fortalece la capacidad analítica en entornos empresariales altamente competitivos y cambiantes. La aplicación correcta de estos conceptos permite distinguir entre hallazgos relevantes y fluctuaciones aleatorias, asegurando que las decisiones se basen en evidencia robusta.


## BLOQUE: bg-full-icono-texto

//assets: 11.svg

En conclusión, la Unidad 2 proporciona un conjunto de herramientas estadísticas esenciales para el desarrollo de una inteligencia de negocios efectiva. Desde la formulación de hipótesis hasta la predicción de resultados futuros, cada técnica aquí abordada potencia la toma de decisiones informadas, reduce la incertidumbre y contribuye a una gestión más eficiente de las organizaciones. El dominio de estos métodos no solo enriquece el perfil profesional de los estudiantes, sino que los convierte en agentes estratégicos en la transformación digital y analítica de las empresas modernas.


## BLOQUE: bloque-material-complementario

Illowsky, B. Dean, S. & Birmajer, D. (2023). Introducción a la Estadística Empresarial. Cervantes Digital. 
https://elibro.net/es/lc/tecnologicadeloriente/titulos/268197

Bioestadística (Cursos de Máster). (2020). Sesión 2, 4/7, Significación estadística. (video). YouTube. https://youtu.be/CUSX48F-QWg?si=l-A2H3CDVjj7EBtl 

