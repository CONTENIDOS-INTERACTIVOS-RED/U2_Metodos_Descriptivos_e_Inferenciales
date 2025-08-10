# SNIPPETS PARA ARCHIVOS .MD

## Instalación en VS Code

1. **Abrir VS Code**
2. **Ir a:** File > Preferences > Configure User Snippets
3. **Seleccionar:** `markdown.json` 
4. **Copiar** el contenido de `markdown-shortcuts.json` en el archivo
5. **Guardar**

## Atajos Disponibles

### 🚀 BLOQUES PRINCIPALES

| Atajo | Descripción | Genera |
|-------|-------------|---------|
| `bb` | Bloque básico | `## BLOQUE: + //assets: + //texto` |
| `bc` | Bloque con color | `## BLOQUE: + //color + //texto` |
| `bi` | Bloque con iconobloque | `## BLOQUE: + //iconobloque` |
| `tarj` | Tarjetas con jerarquía | `## BLOQUE: tarjetas-boton + ### #### #####` |
| `sly` | Slider con slides | `## BLOQUE: slyder-X + ### ####` |
| `aco` | Acordeón básico | `## BLOQUE: img-aco + ---` |
| `acoi` | Acordeón con imágenes | `## BLOQUE: acordeon-img + //assets lista` |
| `fig` | Figura académica | `## BLOQUE: figura-completa + Figura X.` |
| `tit` | Título de sección | `## BLOQUE: titulo-segundo + 1.1` |
| `mat` | Material complementario | `## BLOQUE: bloque-material-complementario` |

### 🎯 MARCADORES RÁPIDOS

| Atajo | Descripción | Genera |
|-------|-------------|---------|
| `//a` | Assets simple | `//assets: imagen.png` |
| `//at` | Assets con tamaño | `//assets: imagen.png (900px)` |
| `//al` | Assets múltiples | `//assets: img1.png, img2.png` |
| `//t` | Texto | `//texto` + párrafos |
| `//c` | Color | `//color` + contenido |
| `//i` | Iconobloque | `//iconobloque` + contenido |
| `//ac` | Acordeón | `//acordeon` + ítems con `---` |
| `---` | Separador | `---` + nuevo ítem |

## Ejemplos de Uso

### Crear bloque básico:
1. Escribe `bb` + TAB
2. Completa los campos:
   ```markdown
   ## BLOQUE: imagen-texto 8:4
   
   //assets: estadistica.png
   //texto
   La estadística es fundamental...
   Los datos nos permiten...
   ```

### Crear tarjetas:
1. Escribe `tarj` + TAB
2. Completa con jerarquía:
   ```markdown
   ## BLOQUE: tarjetas-boton
   
   ### Concepto Principal
   Descripción del concepto
   
   #### Aplicación
   Uso práctico
   
   ##### Caso Específico
   Ejemplo detallado
   ```

### Crear acordeón con imágenes:
1. Escribe `acoi` + TAB
2. Mapea imágenes secuencialmente:
   ```markdown
   ## BLOQUE: acordeon-img 8:4
   
   //assets: lateral.png
   //acordeon
   //assets: item1.svg, item2.svg, item3.svg
   
   Primer Item
   Contenido del primer item
   
   ---
   
   Segundo Item
   Contenido del segundo item
   ```

## Tips de Productividad

### 🔥 Flujo Rápido:
1. `bb` → Bloque básico
2. TAB → Navegar entre campos
3. `//c` → Agregar contenido de color
4. `//i` → Agregar iconobloque
5. `---` → Separar ítems en acordeones

### ⚡ Combinaciones Útiles:
- `bb` + `//c` = Bloque con texto y color
- `aco` + `---` = Acordeón con múltiples ítems
- `sly` + `### ####` = Slider con jerarquía
- `fig` + `//at` = Figura con tamaño específico

### 🎯 Atajos de Marcadores:
- `//a` imagen.png → Assets rápido
- `//t` → Párrafos de texto
- `//c` → Bloque de color
- `//i` → Bloque con icono

## Instalación en Otros Editores

### **Sublime Text:**
1. Tools → Developer → New Snippet
2. Adaptar formato Sublime
3. Guardar como `markdown-shortcuts.sublime-snippet`

### **Atom:**
1. File → Snippets
2. Agregar bajo `'.source.gfm':`
3. Adaptar sintaxis Atom

### **IntelliJ/WebStorm:**
1. File → Settings → Live Templates
2. Crear grupo "Markdown"
3. Agregar templates individuales

## Beneficios

### ✅ **Velocidad:**
- 10x más rápido escribir bloques
- No recordar sintaxis completa
- Autocompletado de estructuras

### ✅ **Consistencia:**
- Siempre usa snippets correctos
- Evita errores de sintaxis
- Estructura uniforme

### ✅ **Productividad:**
- Focus en contenido, no sintaxis
- Menos tiempo en formato
- Flujo de escritura continuo

**¡Con estos snippets puedes escribir archivos .md 10x más rápido!** 🚀