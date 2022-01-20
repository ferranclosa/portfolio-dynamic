const events
 = [
  {
    language: "en",
    events: [
      {
        when: "January, 1962",
        where: "Terrassa, Barcelona Spain",
        header: "Born",

        type: "LIVE", 
        url: "https://www.terrassa.cat/es",
        order : 1, 
        description:
          'One of those things that happen.',
      },

      {
        when: "1970- 1981",
        where: "Barcelona Spain",
        header: "Music and Violin Studies. Graduation",
        type: "EDUC", 
        url: "https://ajuntament.barcelona.cat/conservatori/es",
        order : 2, 
        description:
          'That followed a dream, after seeing a 9 year old, playing a Sarasate piece on TV. What a journey!',
      },
      {
        when: "June, 1983",
        where: "Sevilla, Spain",
        header: "Violinist",
        type:"MUSI",
        url: "https://rossevillatv.com",
        order : 3, 

        description:
          'I applied and got a place in the Sinfonica de la Maestranza, in Seville. It was my first Musician job.',
      },
      {
        when: "June, 1984",
        where: "Barcelona, Spain",
        header: "Violin Professor, Conservatori Liceu Mataro",
        type:"MUSI",
        url: "https://www.conservatoriliceu.es/escoles/vinculades/escola-de-musica-liceu-mataro/",
        order : 4, 
        description:
          'A professor position opened up in Mataro, near my home town, and I applied and got the place and moved back to Barcelona',
      },
      {
        when: "1987-1992",
        where: "Barcelona, Spain",
        header: "Violinist, Orchestra Sinfonica del Vallés, Sabadell",
        type:"MUSI",
        order : 5, 
        url: "http://www.osvalles.com/es",
        description:
          'A newly created orchestra provided opportunities. This started a period in my life where I was both a exercing musicien, and a Music Professor.',
      },
      {
        when: "1992",
        where: "London, United Kingdom",
        header: "The Mistery, and move to London",
        url: "https://www.enthealth.org/conditions/cholesteatoma/",
        type:"TRAV",
        order : 6, 
        description:
          'All stories have a mistery. This is mine. I decided to move to London, to get some space between my past and what would my future become.',
      },
      {
        when: "1992-1994",
        where: "London, United Kingdom",
      
        header: "IT Student",
        type:"EDUC",
        order : 7, 
        url: "http://www.osvalles.com/es",
        description: `I decided to invest into learning a programming language, like COBOL, RPG, Object Pascal and Visual Basic, hoping to find a job. `
      },
      {
        when: "1994-1997",
        where: "London, United Kingdom",
      
        header: "IT Trainer",
        type: "TRAIN",
        order : 8, 
        url: "http://www.forbes.com/es",
        description: `This was a job for both training and preparing training material for on-site training. I had the initiative to open up the courses to on-line and distance learning candidates. Due to 
    the huge demand, it proved to be new market for the company ` },

      {
        when: "1998-2007",
        header: "Software Developper",
        where: "(Malta, Athens, Bermuda, Vancouver, Istanbul, Madrid, London)",
        type:"DEVE",
        order : 9, 
        url: "https://www.hsbc.co.uk/",
        description: `I was head-hunted by one of my previous students at Forbes. Started as a developper, moving up the ladder to more and more senior positions.  `
      },
      {
        when: "2007- now",
        where: "Paris, France",
        header: "Commercial Banking Architecte",
        type:"ARCH",
        order : 10, 
        url: "https://www.hsbc.fr/",
        description: `In France I arrived from HSBC UK, as ETL expert and following a 5 year stay in France as expatriate, they offered me a position as HSBC systems expert and 
    and Commercial Banking Architect. `
      },
    ],
  },
  {
    language: "sp",
    events: [
      {
        when: "January, 1962",
        where: "Terrassa, Barcelona",
        type: "LIVE",
        header: "Nacimiento",
        url: "https://www.terrassa.cat/es",
        order : 20, 
        description:
          'Una de esas cosas que pasan.',
      },

      {
        when: "1970- 1981",
        where: "Barcelona",
        type: "EDUC",
        header: "Studios de Musica y Violin. Graduación",
        order : 22, 
        url: "https://ajuntament.barcelona.cat/conservatori/es",
        description:
          'Eso siguió a un sueño, después de ver a un niño de 9 años, tocando una pieza de Sarasate en la televisión. ¡Qué viaje!',
      },
      {
        when: "June, 1983",
        type: "MUSI",
        where: "Sevilla",
        header: "Violinista, Orquesta Sinfónica de Sevilla",
        order : 33, 
        url: "https://rossevillatv.com",
        description:
          'Solicité y conseguí una plaza en la Sinfónica de la Maestranza, en Sevilla. Fue mi primer trabajo como músico',
      },
      {
        when: "June, 1984",
        where: "Mataro, Barcelona",
        type: "MUSI",
        order : 44, 
        header: "Profesor de Violín, Conservatorio Liceu Mataro, Barcelona",
        url: "https://www.conservatoriliceu.es/escoles/vinculades/escola-de-musica-liceu-mataro/",
        description:
          'Se abrió un puesto de profesor en Mataró, cerca de mi ciudad natal, y solicité y conseguí la plaza y me mudé de nuevo a Barcelona',
      },
      {
        when: "1987-1992",
        where: "Sabadell, Barcelona",
        order : 55, 
        header: "Violinista, Orquesta Sinfónica del Vallés, Sabadell",
        url: "http://www.osvalles.com/es",
        type: "MUSI",
        description:
          'Una orquesta de nueva creación brindó oportunidades. Esto comenzó un período en mi vida en el que fui a la vez un musicien y un profesor de música',
      },
      {
        when: "1992",
        where: "Londres, Inglaterra",
        type: "TRAV",
        order : 66, 
        header: "The Mistery, and move to London",
        url: "https://www.enthealth.org/conditions/cholesteatoma/",
        description:
          'Todas las historias tienen un misterio. Esta es la mía. Decidí mudarme a Londres, para conseguir un espacio entre mi pasado y en qué se convertiría mi futuro',
      },
      {
        when: "1992-1994",
        where: "Londres, Inglaterra",
        order : 77, 
        header: "IT Student, London",
        type: "EDUC",
        url: "http://www.osvalles.com/es",
        description: `Decidí invertir en aprender un lenguaje de programación, como COBOL, RPG, Object Pascal y Visual Basic, con la esperanza de encontrar un trabajo.  `
      },
      {
        when: "1994-1997",
        where: "Londres, Inglaterra",
        type: "TRAIN",
        order : 88, 
        header: "IT Trainer, Forbes UK, London",
        url: "http://www.forbes.com/es",
        description: `Este fue un trabajo tanto de formacion de estudiantes como de creacion del material didactico. Tuve la iniciativa de crear un sistema de Distance Learning que de hecho abrio un nuevo mercado a la empresa. Debido a 
            Fue el primer curso de este tipe en Inglaterra `

      },

      {
        when: "1998-2007",
        where: "Londres, Malta, Atenas, Istanbul, Vancouver, Bermuda, Madrid",
        order : 99, 
        type: "DEVE",
        header: "Software Developper, HSBC UK, London",
        url: "https://www.hsbc.co.uk/",
        description: `Fui cazado por uno de mis estudiantes anteriores en Forbes. Comenzó como un desarrollador, ascendiendo en la escalera a puestos cada vez más altos.    `

      },
      {
        when: "2007- now",
        where: "Paris, Francia",
        order : 100, 
        type: "ARCH",
        header: "Commercial Banking Architecte, HSBC FR, Paris",
        url: "https://www.hsbc.fr/",
        description: `'En Francia llegué de HSBC UK, como experto en ETL y después de una estancia de 5 años en Francia como expatriado, me ofrecieron un puesto como experto en sistemas de HSBC y 
            y Arquitecto de Banca Comercial.      `

      },
    ],
  },
  {
    language: "ca",
    events: [
      {
        when: "January, 1962",
        header: "Naixement, Terrassa, 1962",
        url: "https://www.terrassa.cat/es",
        description:
          'Una de esas cosas que pasan.',
      },

      {
        when: "1970- 1981",
        header: "Estudis de Musica y Violî.  Graduació",
        url: "https://ajuntament.barcelona.cat/conservatori/es",
        description:
          `Això va seguir a un somni, després de veure un nen de 9 anys, tocant una peça de Sarasate a la televisió. ¡Quin viatge!`,
      },
      {
        when: "June, 1983",
        header: "Violinista, Orquesta Sinfónica de Sevilla",
        url: "https://rossevillatv.com",
        description:
          'Demano i aconsegueixo una plaça a la Simfònica de la Maestranza, a Sevilla. Va ser el meu primer treball com a músic',
      },
      {
        when: "June, 1984",
        header: "Profesor de Violín, Conservatorio Liceu Mataro, Barcelona",
        url: "https://www.conservatoriliceu.es/escoles/vinculades/escola-de-musica-liceu-mataro/",
        description:
          'Es va obrir una plaça de professor a Mataró, a prop de la meva ciutat natal, on vaig postular i obtenir la plaça i em moc de nou a Barcelona',
      },
      {
        when: "1987-1992",
        header: "Violinista, Orquesta Sinfónica del Vallés, Sabadell",
        url: "http://www.osvalles.com/es",
        description:
          'Una orquesta de nueva creación brindó oportunidades. Esto comenzó un período en mi vida en el que fui a la vez musico y profesor de música',
      },
      {
        when: "1992",
        header: "The Mistery, and move to London",
        url: "https://www.enthealth.org/conditions/cholesteatoma/",
        description:
          'Totes les històries tenen un misteri. Aquesta és la meva. Decidí mudar-me a Londres, per aconseguir un espai entre el meu passat i en què es convertiria el meu futur',
      },
      {
        when: "1992-1994",
        header: "IT Student, London",
        url: "http://www.osvalles.com/es",
        description: `Decideixo invertir en aprendre un llenguatge de programació, com COBOL, RPG,  Object  Pascal i Visual Basic, amb l'esperança de trobar una feina `
      },
      {
        when: "1994-1997",
        header: "IT Trainer, Forbes UK, London",
        url: "http://www.forbes.com/es",
        description: `E'Aquest va ser un treball tant per a la capacitació com per a la preparació de material de capacitació per a la capacitació al lloc. Vaig tenir la iniciativa d'obrir els cursos a candidats en línia i a distància. A causa de 
        l'enorme demanda, va resultar ser un nou mercat per a l'empresa `

      },

      {
        when: "1998-2007",
        header: "Software Developper, HSBC UK, London",
        url: "https://www.hsbc.co.uk/",
        description: `Vaig esser 'head-hunted' per un dels meus ex-estudiants a Forbes. Vaig començar com un desenvolupador, pujant a l'escala a llocs cada vegada més alts.     `

      },
      {
        when: "2007- now",
        header: "Commercial Banking Architecte, HSBC FR, Paris",
        url: "https://www.hsbc.fr/",
        description: `A França vaig arrivar d'HSBC UK, com a expert en ETL i després d'una estada de 5 anys a França com a expatriat, em van oferir un lloc com a expert en sistemes d'HSBC i 
        i Arquitecte de Banca Comercial.`

      },
    ]
  }

]

export default events
