# EJEMPLOS DE AGRUPACIÓN DE CONTENIDO

## Regla Fundamental de Agrupación

**REGLA CRÍTICA**: Todo el contenido después de `//texto`, `//color`, `//iconobloque` se agrupa **HASTA** encontrar:
- Otro marcador `//` (como `//color`, `//iconobloque`, etc.)
- Un marcador de bloque `## BLOQUE`

## Ejemplo 1: Agrupación de //texto

### ✅ CORRECTO - Cada línea = párrafo separado
```markdown
//texto
La estadística inferencial es fundamental.
Se utiliza para tomar decisiones.
Permite analizar poblaciones desde muestras.
```

**Código generado correctamente:**
```pug
p(data-aos="fade-left") La estadística inferencial es fundamental.
p(data-aos="fade-left") Se utiliza para tomar decisiones.  
p(data-aos="fade-left") Permite analizar poblaciones desde muestras.
```

### ❌ PROBLEMA COMÚN - Contenido suelto fuera del BLOQUE
```markdown
## BLOQUE: imagen-texto 4:8
//assets: imagen.png
//texto
Párrafo 1
Párrafo 2
## BLOQUE: titulo
```

**Código generado INCORRECTAMENTE:**
```pug
.row.mb-5
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/imagen.png", data-aos="zoom-in")
  .col-lg-8
    // Contenido correcto aquí

p(data-aos="fade-left") Párrafo 1    ← ❌ SUELTO, fuera de .col-lg-8
p(data-aos="fade-left") Párrafo 2    ← ❌ SUELTO, fuera de .col-lg-8
```

**Código generado CORRECTAMENTE:**
```pug
.row.mb-5
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/imagen.png", data-aos="zoom-in")
  .col-lg-8
    p(data-aos="fade-left") Párrafo 1    ← ✅ DENTRO de .col-lg-8
    p(data-aos="fade-left") Párrafo 2    ← ✅ DENTRO de .col-lg-8
```

## Ejemplo 2: Agrupación de //color con múltiples líneas

### ❌ INCORRECTO - Bloques separados
```markdown
//color
Las pruebas paramétricas requieren normalidad.
Se aplican cuando conocemos la distribución.
Son más potentes que las no paramétricas.
```

**Código generado erróneamente:**
```pug
.bg-color-1.p-4(data-aos="fade-left")
  p.mb-0 Las pruebas paramétricas requieren normalidad.
.bg-color-1.p-4(data-aos="fade-left")
  p.mb-0 Se aplican cuando conocemos la distribución.
.bg-color-1.p-4(data-aos="fade-left")
  p.mb-0 Son más potentes que las no paramétricas.
```

### ✅ CORRECTO - Un solo bloque de color
```markdown
//color
Las pruebas paramétricas requieren normalidad. Se aplican cuando conocemos la distribución. Son más potentes que las no paramétricas.
```

**Código generado correctamente:**
```pug
.bg-color-1.p-4(data-aos="fade-left")
  p.mb-3 Las pruebas paramétricas requieren normalidad. Se aplican cuando conocemos la distribución.
  p.mb-0 Son más potentes que las no paramétricas.
```

## Ejemplo 3: Agrupación de //iconobloque

### ❌ INCORRECTO - Múltiples iconobloques
```markdown
//iconobloque
La prueba t se utiliza para comparar medias.
Es útil en análisis empresariales.
Requiere distribución normal de datos.
```

**Código generado erróneamente:**
```pug
.bg-color-2.p-4(data-aos="fade-left").mb-4
  .row.align-items-start
    .col-lg-auto
      img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
    .col-lg
      p.mb-0 La prueba t se utiliza para comparar medias.
.bg-color-2.p-4(data-aos="fade-left").mb-4
  .row.align-items-start
    .col-lg-auto
      img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
    .col-lg
      p.mb-0 Es útil en análisis empresariales.
```

### ✅ CORRECTO - Un solo iconobloque
```markdown
//iconobloque
La prueba t se utiliza para comparar medias. Es útil en análisis empresariales. Requiere distribución normal de datos.
```

**Código generado correctamente:**
```pug
.bg-color-2.p-4(data-aos="fade-left").mb-4
  .row.align-items-start
    .col-lg-auto
      img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
    .col-lg
      p.mb-3 La prueba t se utiliza para comparar medias. Es útil en análisis empresariales.
      p.mb-0 Requiere distribución normal de datos.
```

## Ejemplo 4: Agrupación hasta encontrar otro marcador

### Archivo tema.md
```markdown
## BLOQUE: texto-iconobloque-imagen 8:4

//texto
La estadística inferencial permite tomar decisiones fundamentadas.
Utiliza técnicas como pruebas de hipótesis.
Es esencial en el análisis empresarial.

//iconobloque
Las pruebas pueden ser paramétricas o no paramétricas.
Su elección depende de los supuestos de los datos.

//imagen
tema1/estadistica.png
```

### ✅ Código Vue generado correctamente:
```pug
.row.mb-5
  .col-lg-8
    p(data-aos="fade-left").mb-4 La estadística inferencial permite tomar decisiones fundamentadas. Utiliza técnicas como pruebas de hipótesis. Es esencial en el análisis empresarial.
    .bg-color-2.p-4(data-aos="fade-left").mb-4
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-3 Las pruebas pueden ser paramétricas o no paramétricas.
          p.mb-0 Su elección depende de los supuestos de los datos.
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/estadistica.png", data-aos="zoom-in")
```

## Ejemplo 5: Contenido largo con saltos de línea

### Archivo tema.md
```markdown
//texto
En la estadística inferencial, la toma de decisiones fundamentadas en datos, requiere no solo de una descripción adecuada de la información, sino también de técnicas que permitan inferir propiedades poblacionales a partir de muestras.

Dos de las herramientas más potentes en este sentido, son las pruebas de hipótesis y la estimación por intervalos de confianza, dado que permiten validar o refutar suposiciones.

También permiten estimar con márgenes de error aceptables, los parámetros desconocidos de una población.

## BLOQUE: imagen-color 4:8
```

### ✅ Código Vue generado correctamente:
```pug
p(data-aos="fade-left").mb-3 En la estadística inferencial, la toma de decisiones fundamentadas en datos, requiere no solo de una descripción adecuada de la información, sino también de técnicas que permitan inferir propiedades poblacionales a partir de muestras.
p(data-aos="fade-left").mb-3 Dos de las herramientas más potentes en este sentido, son las pruebas de hipótesis y la estimación por intervalos de confianza, dado que permiten validar o refutar suposiciones.
p(data-aos="fade-left").mb-5 También permiten estimar con márgenes de error aceptables, los parámetros desconocidos de una población.
```

## Puntos Clave de Validación

### ✅ Siempre hacer:
1. **Agrupar TODO** el contenido después de `//texto` hasta el próximo `//` o `## BLOQUE`
2. **Un solo bloque** de color por cada `//color`
3. **Un solo iconobloque** por cada `//iconobloque`
4. **Respetar saltos de párrafo** naturales en contenido largo
5. **Verificar límites** antes de generar código

### ❌ Nunca hacer:
1. Crear múltiples `<p>` para líneas consecutivas de `//texto`
2. Crear múltiples bloques de color para una sola sección `//color`
3. Generar iconobloques separados para contenido continuo
4. Ignorar la agrupación natural del contenido
5. Inventar divisiones que no existen en el archivo fuente

## Comando de Verificación

**Antes de generar código Pug, siempre preguntarse:**
1. ¿Dónde termina este contenido `//texto`?
2. ¿Hay otro marcador `//` que lo interrumpe?
3. ¿Hay un `## BLOQUE` que lo separa?
4. ¿Estoy agrupando TODO el contenido relacionado?

Si la respuesta a #4 es NO, **DETENER y reagrupar correctamente**.