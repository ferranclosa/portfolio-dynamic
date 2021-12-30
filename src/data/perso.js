const perso = [
    {
        language: "sp",
        title: "Ferran Closa Cervera",
        firstWord: "quien ",
        spannedWord: "Soy",
        intro: "Hola, soy Ferran. Espero poder ofrecer una pequena vision de mi persona y que esto le ayude a tomar una decision sobre su relacion conmigo.",
        details: [
            { title: "Español", description: "Esto fue un accidente, pero uno afortunado. Tengo 59 anos y contando. He vivido una gran parte de mi vida en otros lugares, pero my casa sigue siendo mi tierra, mi gente y mis lugares." },
            { title: "Musico", description: "Mi historial educacional siguio de muy pronto una vocacion por la musica, muy especialemente por el estudio del violin." },
            { title: "Informatico", description: "Otro afortunado accidente. Lo que me atrajo, en principio fue la curiosidad y pronto, las capacidades creativas que le son associadas, como el hecho de crear algo a partir de una idea, sin mas misterios que la adopcion y combinacion de diferentes algoritmos. Esta es la faceta de my trabajo con la que mas disfruto y que me aporta mas satisfacion." },
            { title: "Padre", description: "No exactamente un accidente, pero sea lo que fuere, el mas feliz de los episodios de my existencia. Devenir padre debe de ser lo que menos esfuerzo require, pero ser uno de bueno, eso ya es otro cantar. La informatica, a su lado, es pan comido. Tengo tres hijas y un hijastro, por aquello de los tumbos que damos en la vida" },
            { title: "Amigos", description: "Soy hombre de pocos amigos, en el sentido literal de la expresión, pero los que tengo, no hay de mejores. A los amigos uno los escoge, es una relación de libertad que puede estar ausente en las relaciones impuestas, y esta libertad es maravillosa" },
            { title: "Curioso", description: "La curiosidad es uno de mis vicios. Todo me interesa. Me gusta aprender, buscar y disfruto de los saltos que provoca el descubrir algo que no sabias. Las fronteras de mi ignorancia son mi terreno inexplorado, mi espacio, mis Américas." },

        ]
    }
    ,
    {
        language: "en",
        title: "Ferran Closa Cervera",
        firstWord: "who  ",
        spannedWord: "am I",
        intro: "Hi I'm Ferran. I hope to provide you with a little view into my universe, not only professional, but also personal. This should, I hope, ensure that you'll understand you are you dealing with when doing it with me.",
        details: [
            { title: "Spanish", description: "This was an accident, but a happy one. I'm 59 years old and I have lived a great number of years in other countries, but Spain remains my land, my people, my roots. You English have a wonderful word for that: Home." },
            { title: "Musician", description: "My early beginnings where pasionnetely around music. Specially the violin, which for me, holds a magical and mystic element that, in my case it does last." },
            { title: "Informatician", description: "Another lucky accident. What attracted me, in principle, was curiosity and soon, the creative capacities that are associated with it, such as the fact of creating something from an idea, with no more tools than the adoption and combination of different algorithms. This is the part of my work which I enjoy the most and that gives me the most pleasure." },
            { title: "Father", description: "Not exactly an accident, but whatever it was, the happiest of the episodes of my existence. Becoming a father must be what requires the least effort, but being a good one, that is another matter. Computer science, by his side, is easy. I have three daughters and a stepson, because of the stumbles we give in life" },
            { title: "Friends", description: "I am a man of few friends, in the literal sense of the expression, but the ones I have, there are none that are better. One chooses his/her friends. it is a free relationship with that freedom elements that may be absent in imposed relationships, and this freedom is wonderful." },
            { title: "Curious", description: "Curiosity is one of my vices. Everything interests me. I like to learn, search, and enjoy the jumps caused by discovering something you didn't know. The frontiers of my ignorance are my uncharted terrain, my space, my Americas." },

        ]
    }
    ,
    {
        language: "fr",
        firstWord: "qui je ",
        spannedWord: "Suis",
        intro: "J'espère pouvoir vous offrir une fenêtre dans mon univers. Ainsi, vous saurez avec qui vous établissez une relation...",
        details: [
            { title: "Espagnol", subtitle: "", description: "C’était un accident, mais un accident chanceux. J’ai 59 ans et je compte. J’ai vécu une grande partie de ma vie dans d’autres endroits, mais ma maison est toujours ma terre, mon peuple et mes lieux." },
            { title: "Musicien", subtitle: "", description: "Mon histoire éducative a suivi très soudainement une vocation pour la musique, en particulier pour l’étude du violon." },
            { title: "Informaticien", subtitle: "", description: "Encore un accident chanceux. Ce qui m’a attiré, en principe, c’est la curiosité et bientôt, les capacités créatives qui lui sont associées, comme le fait de créer quelque chose à partir d’une idée, sans plus de mystères que l’adoption et la combinaison de différents algorithmes. C’est la facette de mon travail avec laquelle j’apprécie le plus et qui me donne le plus de satisfaction." },
            { title: "Papà", subtitle: "", description: "Pas exactement un accident, mais quoi qu’il en soit, le plus heureux des épisodes de mon existence. Devenir père doit être ce qui demande le moins d’effort, mais être bon, c’est une autre chanson. L’informatique, à ses côtés, est un jeu d’enfant. J’ai trois filles et un beau-fils, à cause des trébuchements que nous donnons dans la vie" },
            { title: "Amis", subtitle: "", description: "Je suis un homme de peu d’amis, au sens littéral de l’expression, mais ceux que j’ai, il n’y en a pas de meilleur. On choisit des amis, c’est une relation de liberté qui peut être absente dans les relations imposées, et cette liberté est merveilleuse." },
            { title: "Curieux", subtitle: "", description: "La curiosité est l’un de mes vices. Tout m’intéresse. J’aime apprendre, chercher et profiter des sauts causés par la découverte de quelque chose que vous ne saviez pas. Les frontières de mon ignorance sont mon terrain inexploré." }
        ]
    }
    ,
    {
        language: "ca",
        title: "Ferran Closa Cervera",
        firstWord: "qui ",
        spannedWord: "jo Soc",
        intro: "Espero poder obrir una finestra al meu univers... Així, sabràs amb qui estàs establint una relació...",
        details: [
            { title: "Català", subtitle: "", description: "Va ser un accident, però un accident afortunat. Tinc els meus anys i continuo a comptar. He viscut gran part de la meva vida en altres llocs, però la meva llar segueix sent la meva terra, la meva gent i els meus llocs" },
            { title: "Músic", subtitle: "", description: "La meva història educativa va seguir molt de sobte una vocació per la música, especialment per a l'estudi del violí." },
            { title: "Informàtic", subtitle: "", description: "Un altre accident afortunat. El que em va atreure, en principi, va ser la curiositat i aviat, les habilitats creatives associades a ella, com crear alguna cosa a partir d'una idea, sense més misteris que adoptar i combinar diferents algoritmes. Aquesta és la faceta del meu treball amb la qual més aprecio i la que em dóna més satisfacció" },
            { title: "Papà", subtitle: "", description: "No exactament un accident, però de totes maneres, l'episodi més feliç de la meva existència. Ser pare ha de ser el menys esforç que consumeix, però ser bo és una altra cançó. La informàtica, al seu costat, és un joc de nens. Tinc tres filles i un gendre, per les ensopegades que donem a la vida" },
            { title: "Amics", subtitle: "", description: "Sóc un home de pocs amics, en el sentit literal de l'expressió, però els que tinc, no hi ha millor. Triem amics, és una relació de llibertat que pot estar absent en les relacions imposades, i aquesta llibertat és meravellosa" },
            { title: "Curiós", subtitle: "", description: "La curiositat és un dels meus vicis. M'interessa tot. M'encanta aprendre, buscar i gaudir dels salts causats per descobrir alguna cosa que no sabies. Els límits de la meva ignorància són el meu terreny inexplorat" }
        ]
    },


]

export default perso; 