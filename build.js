const { exec } = require('child_process')
const fs = require('fs').promises
const path = require('path')

async function buildAndPackage() {
  try {
    // 1. Ejecutar npm run build
    console.log('Ejecutando build...')
    await new Promise((resolve, reject) => {
      exec('npm run build', (error, stdout) => {
        if (error) {
          console.error(`Error en el build: ${error}`)
          reject(error)
          return
        }
        console.log(stdout)
        resolve()
      })
    })

    // 2. Borrar el archivo ZIP existente en dist/downloads si existe
    const distDownloadsDir = path.join(__dirname, 'dist', 'downloads')
    const zipPathInDist = path.join(distDownloadsDir, 'material.zip')
    try {
      await fs.unlink(zipPathInDist)
      console.log('Archivo ZIP anterior eliminado de dist/downloads')
    } catch (error) {
      // Si el archivo no existe, ignoramos el error
      if (error.code !== 'ENOENT') {
        throw error
      }
    }

    // 3. Crear directorio public/downloads si no existe
    const downloadsDir = path.join(__dirname, 'public', 'downloads')
    try {
      await fs.access(downloadsDir)
    } catch {
      await fs.mkdir(downloadsDir, { recursive: true })
    }

    // 4. Crear ZIP usando el comando del sistema operativo
    console.log('Creando archivo ZIP...')
    await new Promise((resolve, reject) => {
      const zipCommand =
        process.platform === 'win32'
          ? `powershell Compress-Archive -Path "${path.join(
              __dirname,
              'dist',
              '*',
            )}" -DestinationPath "${path.join(
              downloadsDir,
              'material.zip',
            )}" -Force`
          : `cd "${path.join(__dirname, 'dist')}" && zip -r "${path.join(
              downloadsDir,
              'material.zip',
            )}" .`

      exec(zipCommand, error => {
        if (error) {
          console.error(`Error creando ZIP: ${error}`)
          reject(error)
          return
        }
        resolve()
      })
    })

    // 5. Eliminar el directorio dist
    console.log('Eliminando directorio dist...')
    await fs.rmdir(path.join(__dirname, 'dist'), { recursive: true })
    console.log('Directorio dist eliminado')

    console.log('¡Proceso completado con éxito!')
    console.log(
      `El archivo ZIP se guardó en: ${path.join(downloadsDir, 'material.zip')}`,
    )
  } catch (error) {
    console.error('Error en el proceso:', error)
    process.exit(1)
  }
}

buildAndPackage()
