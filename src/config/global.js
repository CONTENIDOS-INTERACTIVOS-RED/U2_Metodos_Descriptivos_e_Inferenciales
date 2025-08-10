export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Métodos inferenciales y pruebas de hipótesis',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estimación puntual e intervalos de confianza',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teoría básica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estimación puntual e intervalos de confianza',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Pruebas paramétricas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Pruebas no paramétricas',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Regresión y correlación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Análisis de regresión múltiple',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pruebas de significancia estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'El valor p y su interpretación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Errores tipo I y tipo II',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Uso de pruebas de significancia en el análisis multivariado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Triola, M. F. (2018). Estadística (12ª ed.). Pearson Educación.',
      link: 'https://www.academia.edu/44058808/Estadistica_Mario_F_Triola_12ED',
    },
    {
      referencia:
        'Holmes, A. Illowsky, B. & Dean, S. (2023). Introductory Business Statistics. Cervantes Digital.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/268196',
    },
    {
      referencia:
        'Navidi, W. (2016). Estadística para ingenieros y científicos (4ª ed.). McGraw-Hill Education.',
      link:
        'https://archive.org/details/william-navidi-estadistica-para-ingenieros-y-cientificos-mcgraw-hill-interamericana-2006?utm',
    },
    {
      referencia:
        'Hernández, R., Fernández, C. & Baptista, P. (2014). Metodología de la investigación (6ª ed.). McGraw-Hill.',
      link: 'https://archive.org/details/metodologiadelai0002hern?utm',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de varianza (ANOVA)',
      significado:
        'Prueba estadística que compara las medias de tres o más grupos, para detectar diferencias significativas.',
    },
    {
      termino: 'Coeficiente de correlación',
      significado:
        'Medida que indica la fuerza y dirección de la relación lineal entre dos variables cuantitativas.',
    },
    {
      termino: 'Coeficiente de determinación (R²)',
      significado:
        'Indicador que muestra el porcentaje de variabilidad de la variable dependiente, explicada por el modelo de regresión.',
    },
    {
      termino: 'Correlación',
      significado:
        'Relación estadística entre dos variables, que puede ser positiva, negativa o nula.',
    },
    {
      termino: 'Error tipo I',
      significado:
        'Error que se comete al rechazar una hipótesis nula verdadera.',
    },
    {
      termino: 'Error tipo II',
      significado:
        'Error que se comete al no rechazar una hipótesis nula falsa.',
    },
    {
      termino: 'Estimación puntual',
      significado:
        'Valor específico que se utiliza como mejor aproximación del parámetro poblacional.',
    },
    {
      termino: 'Hipótesis alternativa (H₁)',
      significado:
        'Proposición que establece la existencia de un efecto o diferencia significativa.',
    },
    {
      termino: 'Hipótesis nula (H₀)',
      significado:
        'Afirmación que niega cambios o diferencias en la población; se prueba estadísticamente.',
    },
    {
      termino: 'Intervalo de confianza',
      significado:
        'Rango de valores que estima con un cierto nivel de confianza el parámetro poblacional.',
    },
    {
      termino: 'Nivel de significancia (α)',
      significado:
        'Probabilidad de cometer un error tipo I; comúnmente se usa un valor de 0.05.',
    },
    {
      termino: 'No paramétrico',
      significado:
        'Tipo de prueba estadística que no requiere supuestos sobre la distribución de los datos.',
    },
    {
      termino: 'Paramétrico',
      significado:
        'Pruebas estadísticas que suponen normalidad y otros requisitos sobre los datos muestrales.',
    },
    {
      termino: 'Prueba Chi-cuadrado',
      significado:
        'Técnica no paramétrica que analiza relaciones entre variables categóricas.',
    },
    {
      termino: 'Prueba de U Mann-Whitney',
      significado:
        'Prueba no paramétrica para comparar dos grupos independientes.',
    },
    {
      termino: 'Prueba de Wilcoxon',
      significado:
        'Prueba no paramétrica para muestras relacionadas, alternativa a la t pareada.',
    },
    {
      termino: 'Prueba t de Student',
      significado:
        'Prueba paramétrica usada para comparar medias entre una o dos muestras.',
    },
    {
      termino: 'Pruebas de hipótesis',
      significado:
        'Procedimientos que permiten decidir si aceptar o rechazar una afirmación sobre una población.',
    },
    {
      termino: 'Regresión lineal',
      significado:
        'Técnica que modela la relación entre una variable dependiente y una o más independientes.',
    },
    {
      termino: 'Valor p',
      significado:
        'Probabilidad de obtener un resultado igual o más extremo que el observado, bajo la hipótesis nula.',
    },
  ],
}
