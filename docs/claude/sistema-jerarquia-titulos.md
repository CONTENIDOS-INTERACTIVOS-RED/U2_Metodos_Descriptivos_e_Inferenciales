# SISTEMA DE JERARQUÍA DE TÍTULOS CON #

## Objetivo

Permitir jerarquía semántica en componentes con títulos (tarjetas, sliders) para mejorar SEO, accesibilidad y estructura del contenido académico.

## Componentes que Soportan Jerarquía

### ✅ Componentes Actualizados:

1. **tarjetas-boton**
2. **slyder-2** (SlyderA con 2 slides)  
3. **slyder-3** (SlyderA con 3 slides)
4. **slyder-4** (SlyderA con 4 slides)
5. **tarjetas-numeradas** (cuando se implemente)

### ❌ Componentes que NO soportan:
- **AcordionA** (usa `div(titulo="...")`, no tiene jerarquía HTML)
- **TabsC** (estructura fija del componente)

## Sintaxis de Uso

### En archivos tema.md:

```markdown
## BLOQUE: tarjetas-boton

### Título Principal          ← h3
Contenido de la tarjeta 1

#### Subtítulo               ← h4  
Contenido de la tarjeta 2

##### Detalle Específico     ← h5
Contenido de la tarjeta 3
```

### Código Pug generado:

```pug
div.row.justify-content-center.align-items-stretch.mb-5
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-1.svg" style="width: 90px")
      h3.mb-2.text-center Título Principal          ← h3
      p.mb-0.text-center Contenido de la tarjeta 1
  
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-2.svg" style="width: 90px")
      h4.mb-2.text-center Subtítulo                ← h4
      p.mb-0.text-center Contenido de la tarjeta 2
      
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-3.svg" style="width: 90px")
      h5.mb-2.text-center Detalle Específico       ← h5
      p.mb-0.text-center Contenido de la tarjeta 3
```

## Reglas de Conversión

### **Mapeo Exacto:**
- `### Título` → `h3.mb-2.text-center Título`
- `#### Título` → `h4.mb-2.text-center Título`  
- `##### Título` → `h5.mb-2.text-center Título`
- **Sin #** → `h5.mb-2.text-center` (comportamiento por defecto)

### **Clases CSS Consistentes:**
- Siempre usar `.mb-2.text-center` para títulos en tarjetas
- Mantener `.mb-0.text-center` para contenido/párrafos

## Ejemplos por Componente

### 1. SlyderA con Jerarquía

**Input tema.md:**
```markdown
## BLOQUE: SlyderA

### Concepto Principal
Definición fundamental del tema

#### Aplicación Práctica  
Ejemplo de uso en contexto empresarial

##### Caso Específico
Estudio de caso detallado
```

**Output Pug:**
```pug
.bg-full-width.bg-fondo-slider.mb-5
  .p-4.p-md-5
    SlyderA(tipo="b").bg-white
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.order-lg-2
          figure
            img(src="@/assets/curso/tema1/slide-1.png")
        .col-lg-7.order-lg-1
          h3 Concepto Principal          ← h3
          p Definición fundamental del tema
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.order-lg-2
          figure
            img(src="@/assets/curso/tema1/slide-2.png")
        .col-lg-7.order-lg-1
          h4 Aplicación Práctica         ← h4
          p Ejemplo de uso en contexto empresarial
      .row.align-items-center.p-4.p-md-5
        .col-lg-5.order-lg-2
          figure
            img(src="@/assets/curso/tema1/slide-3.png")
        .col-lg-7.order-lg-1
          h5 Caso Específico             ← h5
          p Estudio de caso detallado
```

### 2. Tarjetas con Jerarquía Mixta

**Input tema.md:**
```markdown
## BLOQUE: tarjetas-boton

### Análisis Cuantitativo
Métodos estadísticos para análisis numérico

#### Análisis Cualitativo
Técnicas para datos no numéricos

Validación de Datos
Procesos de verificación y limpieza
```

**Output Pug:**
```pug
div.row.justify-content-center.align-items-stretch.mb-5
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-1.svg" style="width: 90px")
      h3.mb-2.text-center Análisis Cuantitativo    ← h3
      p.mb-0.text-center Métodos estadísticos para análisis numérico
      
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-2.svg" style="width: 90px")
      h4.mb-2.text-center Análisis Cualitativo     ← h4
      p.mb-0.text-center Técnicas para datos no numéricos
      
  div.col-lg-4.mb-4(data-aos="zoom-in-up")
    div.bg-color-white.box-shadow.px-4.py-5.h-100
      img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/tarjeta-3.svg" style="width: 90px")
      h5.mb-2.text-center Validación de Datos      ← h5 (default)
      p.mb-0.text-center Procesos de verificación y limpieza
```

## Ventajas Implementadas

### **SEO & Accesibilidad:**
- Jerarquía semántica correcta (h3 > h4 > h5)
- Screen readers pueden navegar por estructura
- Motores de búsqueda entienden importancia relativa

### **Flexibilidad de Contenido:**
- Títulos principales (h3) para conceptos clave
- Subtítulos (h4) para aplicaciones
- Detalles (h5) para casos específicos
- Comportamiento por defecto (h5) cuando no se especifica

### **Consistencia:**
- Clases CSS uniformes (`.mb-2.text-center`)
- Compatibilidad con sistema existente
- No rompe código previo

## Proceso de Interpretación

### **Al procesar tema.md con tarjetas/sliders:**

1. **Detectar marcador `#`** al inicio de línea
2. **Contar cantidad** (`###` = 3, `####` = 4, `#####` = 5)
3. **Convertir a tag HTML** correspondiente
4. **Aplicar clases estándar** (`.mb-2.text-center`)
5. **Continuar con contenido** en párrafo siguiente

### **Validación obligatoria:**
- ✅ Solo usar h3, h4, h5 (no h1, h2, h6)
- ✅ Mantener clases CSS exactas de snippet
- ✅ No inventar nuevas estructuras
- ✅ Respetar comportamiento por defecto (h5) cuando no hay #

## Casos Edge

### **Solo algunos títulos con jerarquía:**
```markdown
### Título Principal    ← h3
Contenido 1

Título Normal          ← h5 (default)  
Contenido 2

#### Subtítulo         ← h4
Contenido 3
```

### **Títulos consecutivos (evitar):**
```markdown
### Título Principal
#### Subtítulo inmediato    ← Válido pero no recomendado
```
**Mejor práctica:** Siempre incluir contenido entre títulos jerárquicos.

## Estado de Implementación

### ✅ **Completado:**
- Documentación en `CLAUDE.md`
- Snippets actualizados en `pug.json`
- Validaciones en `validation-checklist.md`
- Ejemplos detallados

### 🔄 **Próximos pasos:**
- Probar con contenido real
- Confirmar funcionamiento en todos los componentes
- Extender a `tarjetas-numeradas` si es necesario

**El sistema está listo para uso inmediato con máxima flexibilidad y manteniendo compatibilidad total con código existente.**