const profes = [
    {
    language: "en",
        title: "Ferran Closa Cervera",
        firstWord: "my ",
        spannedWord: "Experience",
        intro: "Enthusiast and with a thirty-year experience, on areas like commerce, showbusiness, logistics, finance and banking. Note the rating indicating how much I have enjoyed the role ",
        details: [
            { title: "Enterprise Architect", 
            subtitle: "12 years", 
            description: "Architecture is a natural progression path from a senior developper, if you have inclination to progress and ambition. As Architect I have been involved in adapting Legacy systems and making them progress forward. The use of Microservices, Web, Cloud and the digital revolution has been a constant during all these years." ,
            stars: 5},
            { title: "Back End Developer", 
            subtitle: "6 years", 
            description: "Here I developped by skills of OOP, using Java, ORM, JPA, SQL", 
            stars: 5 }, 
           
            { title: "IT Project Manager",
                subtitle: "13 years",  
                description: "As a senior developper and expert, you often have to wear more than one hat. I was no exception and I enjoyed the thrill of the project life cycle          and its implementation to success. I have used different methodoligies like SDLC and Agile " , 
                stars: 2},
            { title: "RPG & ILE developper",
                subtitle: "4 years",  
                description: "RPG is an IBM computer language used in a mid-frame server family, called iSeries or AS/400. It is used by mid/large size companies, as it is a server capable of serving fully-fledged applications. This would be the opposite of distributed computing. Having it all in one server (Database, computing engine, presentation layer) was very appealing to companies, for cost and simplicity. This simplicity has, however, become a burden and a limitator for the Digital era." , 
                stars: 4}, 
            { title: "Developper & Trainer", subtitle: "4 years", description: "My first steps on IT were on the old school languages, with COBOL and Structured Programing. I was fascinated by the Object Oriented paradigm. I self taught Object Pascal, Delphi and Visual Basic.        I worked in a Training company both as trainer and I put my new skills into practice by opening up the on-location and on-site courses to on-line and distance learning. By doing so, opening a new market for the company.",  
                stars: 3}, 
            { title: "Violinist", stars: 6, subtitle: "11 years",  description: "I have been a profesional violinist for 11 years" , 
            stars:5}, 
        ]
}, 
{
    language: "sp",
    title: "Ferran Closa Cervera",
    firstWord: "mi ",
    spannedWord: "Experiencia",
    intro: `Entusiasta, proactivo y con una experiencia de treinta años en áreas como comercio, logística, finanzas y banca. Disfruto trabajando cuando el trabajo en mano tiene valor...y sino, busco la manera de añadirle el valor que no tenga. Notese el rating para indicar lo que disfruté ejerciendo el rol`,
        details: [
        { title: "Arquitecto empresa", 
        subtitle: "12 años", 
        description: `La arquitectura es el camino de progresión natural para un desarrollador senior, si tiene inclinación al progreso y la ambición de quedarse en el mundo TI. Como arquitecto informático, he estado involucrado en la adaptación de sistemas heredados y en hacerlos progresar hacia soluciones más modernas y flexibles. El uso de Microservicios, API, Web, Cloud y la revolución digital ha sido una constante durante todos estos años.` , 
    stars:5},
        { title: "Desarrolador Back End", 
            subtitle: "6 años", 
            description: "Aquí desarrollé mis habilidades de Java, ORM, JPA, SQL, JMS, JDBC, DB2 y Oracle. Todo en IBM Websphere" , 
            stars: 4}, 
        { title: "TI Project Manager",
        subtitle: "13 años", description: "Como desarrollador senior y experto, a menudo uno tiene que usar más de un sombrero. No fui la excepción y disfruté de la emoción del ciclo de vida del proyecto y su implementación hasta el éxito. He utilizado diferentes metodologías como SDLC y Agile " , 
        stars:2},
        { title: "RPG & ILE desarrollador",subtitle: "4 años", description: "RPG es un lenguaje informático de IBM utilizado en una familia de servidores de trama media, llamado iSeries o AS/400. Es utilizado por empresas de tamaño mediano / grande, ya que es un servidor capaz de servir aplicaciones completas. Esto sería lo opuesto a la computación distribuida. Tenerlo todo en un solo servidor (base de datos, motor informático, capa de presentación) era muy atractivo para las empresas, por su costo y simplicidad. Esta simplicidad, sin embargo, se ha convertido en una carga y un limitador para la era digital." ,
    stars:4}, 
        { title: "Desarollador y Formador", subtitle: "4 años", description: "Mis primeros pasos en TI fueron en los idiomas de la vieja escuela, como COBOL y Programación Estructurada. Me fascinó el paradigma orientado a objetos. Me auto formé en Object Pascal, Delphi y Visual Basic. Trabajé en una empresa de formación tanto como formador como creador de cursos y puse en práctica mis nuevas habilidades abriendo los cursos presenciales (que eran solo presenciales) a la formación on-line y a distancia. Al hacerlo, abriendo un nuevo mercado para la empresa." , 
    stars:3}, 
        { title: "Violinista",subtitle: "11 años ", description: "He sido violinista profesional durante 11 años", stars: 5 }, 
        
    ]}, 
{
    language: "ca",
        title: "Ferran Closa Cervera",
        firstWord: "la meva  ",
        spannedWord: "Experiencia",
        intro: "Apassionat i amb trenta anys d'experiència, en àmbits com el comerç, el showbusiness, la logística, les finances i la banca. Tot i que inicialment no estava inclinat a seguir una carrera en informàtica, he arribat a estimar el seu potencial satisfactori per canviar la vida de les persones",
        details: [
            { title: "Arquitecte Empresarial", subtitle: "12 anys", description: "L'arquitectura és un camí de progressió natural d'un desenvolupador sènior, si tens inclinació al progrés i a l'ambició. Com a arquitecte he estat involucrat en l'adaptació dels sistemes heretats i fer-los avançar. L'ús de Microserveis, Web, Cloud i la revolució digital ha estat una constant durant tots aquests anys" },
            { title: "Back End Developer",subtitle: "6 anys",  description: "Aquí he desenvolupat per habilitats d'OOP, utilitzant Java, ORM, JPA, SQL" },
            { title: "Director de projectes de TI",subtitle: "13 anys",  description: "Com a desenvolupador sènior i expert, sovint heu de portar més d'un barret. No vaig ser una excepció i vaig gaudir de l'emoció del cicle de vida del projecte i la seva implementació a l'èxit. He utilitzat diferents methodoligies com SDLC i Agile " }, 
            { title: "RPG &ILE developper", subtitle: "4 anys", description: "RPG és un llenguatge informàtic d'IBM utilitzat en una família de servidors de fotogrames mitjans, anomenats iSeries o AS/400. És utilitzat per empreses de mida mitjana / gran, ja que és un servidor capaç de servir aplicacions de ple dret. Seria el contrari de la computació distribuïda. Tenir-ho tot en un sol servidor (base de dades, motor informàtic, capa de presentació) era molt atractiu per a les empreses, pel cost i la simplicitat. Aquesta simplicitat, però, s'ha convertit en una càrrega i un limitador per a l'era digital" }, 
            { title: "Developper &Trainer", subtitle: "4 anys", description: "Els meus primers passos en TI van ser en els idiomes de la vella escola, amb COBOL i programació estructurada. Em va fascinar el paradigma orientat a objectes. Sóc autodidacta Object Pascal, Delphi i Visual Basic.        Vaig treballar en una empresa de formació tant com a formador com a formador i vaig posar en pràctica les meves noves habilitats obrint els cursos presencials i presencials a l'aprenentatge en línia i a distància. En fer-ho, obrir un nou mercat per a l'empresa" }, 
            { title: "Violinista",subtitle: "11 anys",  description: "He estat violinista professional durant 11 anys" }, 
        ]
},
{
    language: "fr",
    title: " Ferran Closa Cervera ",
    firstWord : "mon ",
    spannedWord: " Expérience",
    intro: "Enthousiaste, proactif, et avec une expérience de trente ans dans des secteurs comme le commerce, la logistique, les finances et la banque. J’aime travailler quand le travail que je fais a une valeur... sinon, je trouverai la valeur à rajouter, qu’il n’a pas. Notez bien le classement, indicatif du niveau de plaisir que j’ai pris à assumer mon rôle. ",
    details: [
        { title: " Architecte d’entreprise ",stars: 5, subtitle: " 12 ans ", description: " L’architecture est la voie de progression naturelle pour un développeur senior, s’il est tourné vers le progrès et s’il veut rester dans le monde des TI. En tant qu’architecte informatique, j’ai participé à l’adaptation de systèmes hérités pour les faire évoluer vers des solutions plus modernes et flexibles. L’utilisation de microservices, API, Web, Cloud et la révolution numérique a été une constante pendant toutes ces années." },
        { title: " Développeur backend ", stars: 4, subtitle: " 6 ans ", description: " C’est ici que j’ai développé mes compétences Java, ORM, JPA, SQL, JMS, JDBC, DB2 et Oracle. Tout cela sous IBM Websphere." }, 
        { title: " Chef de projet informatique ", stars: 2, subtitle: " 13 ans ", description: "En tant que développeur senior et expert, parfois on est amené à changer de casquette. Je ne suis pas une exception, et j’ai profité de l’émotion émanant du cycle de vie du projet et de son déploiement jusqu’à la réussite. J’ai utilisé différentes méthodologies, comme SDLC et Agile.   " },
        { title: " Développeur RPG & ILE ",stars: 4, subtitle: " 4 ans ", description: "RPG est un langage informatique IBM utilisé pour une famille de serveurs de gamme moyenne appelé iSeries ou AS/400. Il est utilisé par des entreprises de taille moyenne et grande, car il s’agit d’un serveur capable de servir des applications complètes. En fait, juste le contraire du calcul distribué. Disposer de tout sur un seul serveur (base de données, moteur informatique, couche de présentation) était particulièrement attirant pour les entreprises grâce à son coût réduit et sa simplicité. Cependant, cette simplicité est devenue une charge et un facteur limitant pour l’ère numérique."}, 
        { title: " Développeur et formateur ", stars: 5, subtitle: " 4 ans ", description: "Mes premiers pas dans les TI ont été les langages de la vieille école, comme COBOL et la programmation structurée. J’étais fasciné par le paradigme de la programmation orientée objets. En auto-apprentissage je me suis formé sur Object Pascal, Delphi et Visual Basic. J’ai travaillé dans une entreprise de formation en tant que formateur et aussi en tant que créateur de cours, et j’ai mis en pratique mes nouvelles compétences pour élargir les cours (proposés exclusivement sur place) à la formation en ligne et à distance. Et j’ai ouvert, par ce biais, un nouveau marché pour l’entreprise." }, 
        { title: " Violoniste", stars: 5, subtitle: " 11 ans ", description: "J’ai été violoniste professionnel pendant 11 ans" }, 
    ]

}
]


export default profes