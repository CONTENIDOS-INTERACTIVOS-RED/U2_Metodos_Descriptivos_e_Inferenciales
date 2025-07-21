export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Bioética y sostenibilidad en el desarrollo económico global',
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
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Subtítulo tema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Subtítulo tema',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subtítulo tema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subtítulo tema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Subtítulo tema',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
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
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Bioética',
      significado:
        'disciplina que estudia las implicaciones éticas, sociales y legales de los avances biológicos y médicos, buscando garantizar que las decisiones en estos campos respeten la dignidad humana, los derechos fundamentales y la justicia social.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'método de diseño centrado en el usuario que se basa en la comprensión de las necesidades y expectativas de los clientes, para crear soluciones innovadoras y efectivas.',
    },
  ],
}
