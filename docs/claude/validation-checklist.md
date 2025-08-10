# MANDATORY VALIDATION CHECKLIST

## Before Writing ANY Pug Code - STOP AND CHECK:

### ✅ STEP 1: Read Source Files
- [ ] Read `/docs/snippets/pug.json` for the EXACT snippet structure
- [ ] Read the corresponding `/src/textos/[tema].md` file for content
- [ ] Verify the snippet name matches what's in the text file
- [ ] Check for column distribution notation (8:4, 5:7, 6:6, etc.)
- [ ] Identify content grouping markers (`//texto`, `//color`, `//iconobloque`)
- [ ] **NUEVO**: Check for `//acordeon` marker and `---` separators
- [ ] **NUEVO**: Check for `//assets` with image lists or size specifications

### ✅ STEP 2: Verify Snippet Exists
- [ ] Confirm the requested pattern exists in `pug.json`
- [ ] If not found, ask user to specify which existing snippet to use
- [ ] Never create "similar" patterns - use only what exists

### ✅ STEP 3: Copy Exactly
- [ ] Copy the snippet structure EXACTLY from `pug.json`
- [ ] Replace only the placeholder variables (`${1:...}`, `${2:...}`)
- [ ] Keep ALL CSS classes, attributes, and structure identical
- [ ] Preserve exact indentation and nesting

### ✅ STEP 4: Content Integration
- [ ] Use ONLY content from the `.md` file - never invent text
- [ ] Match asset paths to the specified pattern (tema1/1.svg, etc.)
- [ ] Apply correct AOS animations as specified in the snippet
- [ ] Verify column classes match the shorthand notation:
  - `8:4` → `.col-lg-8` + `.col-lg-4` (DEFAULT if no notation)
  - `5:7` → `.col-lg-5` + `.col-lg-7`
  - `6:6` → `.col-lg-6` + `.col-lg-6`
  - `4:8` → `.col-lg-4` + `.col-lg-8`
- [ ] **CRITICAL**: Group content by markers:
  - `//texto`: Each line = separate `<p>` tag, but ALL stays within current BLOQUE structure
  - `//color`: All text until next `//` or `## BLOQUE` = single colored block
  - `//iconobloque`: All text until next `//` or `## BLOQUE` = single icon block
  - **NUEVO**: All text after `//acordeon` until `## BLOQUE` = accordion structure
  - **NUEVO**: `---` separators = individual accordion items
  - **NUEVO**: `//assets: img1.png, img2.png` = sequential mapping to accordion items
  - **NUEVO**: `###` = h3, `####` = h4, `#####` = h5 for titles in tarjetas/sliders

## RED FLAGS - NEVER DO THIS:
🚫 "This looks similar to..." → STOP, find exact snippet
🚫 "I'll improve this pattern..." → STOP, use original
🚫 "Based on the context..." → STOP, use documented structure
🚫 "Let me adapt this..." → STOP, copy exactly

## VALIDATION QUESTIONS:
1. Does this EXACTLY match a snippet in `pug.json`?
2. Is the content from the correct `.md` file?
3. Did I check for column notation (8:4, 5:7, etc.)?
4. Do the column classes match the specified ratio?
5. Did I group ALL content after `//` markers correctly?
6. **NUEVO**: For `//acordeon`, did I map images sequentially to each item?
7. **NUEVO**: For `//assets` with size, did I apply max-width correctly?
8. **NUEVO**: For titles with `###` `####` `#####`, did I convert to h3/h4/h5 correctly?
9. Did I change ANY structure from the original?
10. If yes to #9 → START OVER

## EMERGENCY PROTOCOL:
If unsure about ANY step:
1. Ask user to confirm which snippet to use
2. Show the user the exact snippet from `pug.json`
3. Get explicit approval before proceeding

Remember: The goal is ZERO deviations from documented patterns.