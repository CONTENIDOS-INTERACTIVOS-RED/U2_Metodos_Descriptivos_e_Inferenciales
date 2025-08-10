# Column Distribution Notation Examples

## Overview
This document provides examples of the shorthand column notation system used in content `.md` files to specify Bootstrap grid layouts.

## Default Behavior
**If no column notation is specified, always assume `8:4` distribution.**

## Notation Format
```
## BLOQUE: {snippet-name} {column-ratio}
```

## Standard Column Distributions

### 8:4 (Default)
```
## BLOQUE: texto-iconobloque-imagen
## BLOQUE: texto-iconobloque-imagen 8:4
```
**Generates:**
```pug
.row.mb-5
  .col-lg-8
    // Main content (text + icon blocks)
  .col-lg-4
    // Secondary content (image)
```

### 5:7 (Image left, content right)
```
## BLOQUE: imagen-texto-color 5:7
```
**Generates:**
```pug
.row.mb-5
  .col-lg-5
    // Image content
  .col-lg-7
    // Text and color blocks
```

### 7:5 (Content left, image right)
```
## BLOQUE: texto-color-imagen 7:5
```
**Generates:**
```pug
.row.mb-5
  .col-lg-7
    // Text and color blocks
  .col-lg-5
    // Image content
```

### 4:8 (Small image, large content)
```
## BLOQUE: imagen-texto-iconobloque 4:8
```
**Generates:**
```pug
.row.mb-5
  .col-lg-4
    // Small image
  .col-lg-8
    // Large content area
```

### 6:6 (Equal columns)
```
## BLOQUE: iconos-color 6:6
```
**Generates:**
```pug
.row.justify-content-center.align-items-stretch.mb-4
  .col-lg-6
    // First block
  .col-lg-6
    // Second block
```

### 12 (Full width)
```
## BLOQUE: acordeon 12
```
**Generates:**
```pug
.row.mb-5
  .col-lg-12
    // Full width content
```

## Real Examples from tema1.md

### Current tema1.md blocks:
```
## BLOQUE: texto-iconobloque-imagen        → 8:4 (default)
//assets: 1.svg, 2.png

## BLOQUE: imagen-color 5:7               → 5:7 (image left)
//assets: 3.png

## BLOQUE: texto-imagen 8:4               → 8:4 (explicit)
//assets: 4.png

## BLOQUE: iconos-color 6:6               → 6:6 (equal columns)
//assets: 13.svg, 14.svg

## BLOQUE: imagen-texto-color 5:7         → 5:7 (image left)
//assets: 18.png
```

## Validation Rules

1. **Always check for column notation** after the snippet name
2. **If no notation found**, default to `8:4`
3. **Apply the exact column classes** specified by the notation
4. **Never modify** the column distribution from what's specified
5. **Verify the snippet supports** the requested column distribution

## Error Prevention

❌ **WRONG:**
```
// User specifies: ## BLOQUE: texto-imagen 5:7
// But you generate: .col-lg-8 and .col-lg-4
```

✅ **CORRECT:**
```
// User specifies: ## BLOQUE: texto-imagen 5:7
// You generate: .col-lg-5 and .col-lg-7
```

Remember: The notation is **mandatory** and must be followed exactly!