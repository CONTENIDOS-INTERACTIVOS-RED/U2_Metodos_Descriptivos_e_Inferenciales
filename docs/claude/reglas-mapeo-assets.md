# REGLAS DE MAPEO //assets PARA ACORDEONES

## Lógica de Mapeo Secuencial

### Estructura Base:
```markdown
## BLOQUE: acordeon-img 8:4

//assets: imagen-lateral.png           ← Imagen lateral (col-lg-4)
//acordeon
//assets: img1.png, img2.png, img3.png  ← Imágenes internas (secuencial)

Título Item 1
Contenido item 1

---

Título Item 2  
Contenido item 2

---

Título Item 3
Contenido item 3
```

### Mapeo Automático:

**Imagen lateral (antes de //acordeon):**
- `//assets: imagen-lateral.png` → `src="@/assets/curso/tema1/imagen-lateral.png"`
- Posición: `.col-lg-4` (columna derecha)

**Imágenes internas (después de //acordeon):**
- `img1.png` → Primer ítem del acordeón
- `img2.png` → Segundo ítem del acordeón  
- `img3.png` → Tercer ítem del acordeón

## Ejemplos de Mapeo

### ✅ Ejemplo 1: 3 ítems con imágenes
```markdown
//assets: lateral.png
//acordeon
//assets: a1.png, a2.png, a3.png

Homicidio doloso
Contenido sobre homicidio doloso

---

Homicidio culposo
Contenido sobre homicidio culposo  

---

Homicidio preterintencional
Contenido sobre homicidio preterintencional
```

**Resultado:**
```pug
.row.align-items-start.mb-5
  .col-lg-8
    AcordionA(tipo="b").mb-5
      .div(titulo="Homicidio doloso")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/a1.png', alt='')  ← img1
          .col-lg-9
            p Contenido sobre homicidio doloso
      .div(titulo="Homicidio culposo")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/a2.png', alt='')  ← img2
          .col-lg-9
            p Contenido sobre homicidio culposo
      .div(titulo="Homicidio preterintencional")
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/a3.png', alt='')  ← img3
          .col-lg-9
            p Contenido sobre homicidio preterintencional
  .col-lg-4
    figure
      img(src="@/assets/curso/tema1/lateral.png", alt="", data-aos="zoom-in")
```

### ✅ Ejemplo 2: Diferentes cantidades de ítems
```markdown
//assets: grafico-principal.png
//acordeon
//assets: icono1.svg, icono2.svg

Concepto 1
Descripción del concepto 1

---

Concepto 2
Descripción del concepto 2
```

**Mapeo automático:**
- `grafico-principal.png` → imagen lateral
- `icono1.svg` → primer ítem acordeón
- `icono2.svg` → segundo ítem acordeón

## Validaciones Importantes

### ✅ VERIFICAR SIEMPRE:
1. **Cantidad de imágenes = Cantidad de ítems**
   - 3 imágenes en `//assets` → exactamente 3 ítems separados por `---`
   
2. **Orden secuencial correcto**
   - Primera imagen → primer ítem (después del primer `---`)
   - Segunda imagen → segundo ítem
   - etc.

3. **Paths correctos**
   - `//assets: img1.png` → `@/assets/curso/tema1/img1.png`
   - Aplicar ruta del tema actual automáticamente

### ❌ ERRORES COMUNES:
- Diferente cantidad de imágenes vs ítems
- Mapeo fuera de orden 
- Olvidar aplicar la ruta base del tema
- Confundir imagen lateral con imágenes internas

## Procesamiento de Contenido por Ítem

### Regla de Agrupación por Ítem:
```markdown
Título Item 1                    ← Línea 1 = título
Párrafo 1 del contenido         ← Resto = párrafos agrupados
Párrafo 2 del contenido         ← Aplicar reglas existentes
Párrafo 3 del contenido

---                             ← Separador = nuevo ítem

Título Item 2                   ← Nueva línea 1 = nuevo título  
Contenido del item 2            ← Nuevo contenido agrupado
```

**Resultado esperado:**
```pug
.div(titulo="Título Item 1")
  .row.justify-content-center.align-items-center
    .col-lg-3.mb-3.mb-lg-0
      figure
        img(src='@/assets/curso/tema1/img1.png', alt='')
    .col-lg-9
      p Párrafo 1 del contenido
      p Párrafo 2 del contenido  
      p Párrafo 3 del contenido

.div(titulo="Título Item 2")
  .row.justify-content-center.align-items-center
    .col-lg-3.mb-3.mb-lg-0
      figure
        img(src='@/assets/curso/tema1/img2.png', alt='')
    .col-lg-9
      p Contenido del item 2
```

## Casos Especiales

### Con texto introductorio:
```markdown
## BLOQUE: acordeon-img 8:4

//assets: lateral.png

//texto
Texto introductorio antes del acordeón

//acordeon
//assets: a1.png, a2.png

Item 1
Contenido 1

---

Item 2  
Contenido 2
```

**Resultado:**
```pug
.row.align-items-start.mb-5
  .col-lg-8
    p(data-aos="fade-left").mb-4 Texto introductorio antes del acordeón
    
    AcordionA(tipo="b").mb-5
      // ... ítems del acordeón
```

### Sin imagen lateral:
```markdown
## BLOQUE: acordeon-img 12

//acordeon
//assets: a1.png, a2.png

Item 1
Contenido 1

---

Item 2
Contenido 2  
```

**Resultado:** Solo columna `.col-lg-12` con acordeón, sin imagen lateral.

## Comando de Verificación Pre-Generación

**ANTES de generar código Pug para acordeon-img, verificar:**

1. ¿Cuántas imágenes hay en `//assets` después de `//acordeon`?
2. ¿Cuántos ítems hay separados por `---`?  
3. ¿Las cantidades coinciden exactamente?
4. ¿El mapeo es secuencial (img1→ítem1, img2→ítem2)?
5. ¿Cada ítem tiene título + contenido agrupado correctamente?

**Si alguna respuesta es NO → DETENER y corregir antes de continuar.**