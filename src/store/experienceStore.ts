interface IExperience {
    id: string,
    date: string;
    title: string;
    description: string;
    technologies: string[];
    freelance?: string;
    show: string;
}

const EXPERIENCE:IExperience[] = [
    {
        id:"e-008",
        date: "Enero 2024 - Actualidad",
        title: "Peña Hípica Donostiarra",
        description: "<p class='text-4xl md:text-base mb-5'>Una nueva versión de la <span class='text-sky-600 font-bold'>aplicación para la gestión de sociedades gastronómicas</span> que desarrollé en años anteriores. Ésta nueva plataforma incluye la posibilidad de integrarla en más de una sociedad.</p><p class='text-4xl md:text-base mb-5'>Además de poder crear las <span class='text-sky-600 font-bold'>reservas</span>, los socios podrán <span class'text-sky-600 font-bold'>crear las facturas</span> de los productos consumidos.</p><p class='text-4xl md:text-base mb-5'>Así mismo, las personas encargadas de gestionar la aplicación podrán tener la información de todos sus <span class='text-sky-600 font-bold'>socios</span>, las reservas ya sea a través de un listado o mediante un <span class='text-sky-600 font-bold'>calendario</span> con la visión global de todo el mes, el <span class='text-sky-600 font-bold'>inventario de los productos</span> que tiene su sociedad y unas <span class='text-sky-600 font-bold'>gráficas</span> con datos que pueden ayudar a tener una perspectiva objetiva de los diferentes datos relativos a las reservas, socios o <span class='text-sky-600 font-bold'>consumiciones</span>.</p>",
        technologies: [
            "Api",
            "Php",
            "Symfony",
            "Mysql",
            "Astro",
            "Vuejs",
            "Tailwind",
            "Github"
        ],
        freelance: "Freelance",
        show: "show"
    },
    {
        id:"e-007",
        date: "Septiembre 2022 - Diciembre 2023",
        title: "Bibagu",
        description: "<p class='text-4xl md:text-base mb-5'>Mi primer <span class='text-sky-600 font-bold'>trabajo en una startup</span>. Entré muy al inicio y parte de la aplicación estaba hecha por una empresa contratada.</p><p class='text-4xl md:text-base mb-5'>Mi principal objetivo fue llegar a entender todas las partes de la aplicación para poder dedicarme yo sólo a la implantación de todas las nuevas funcionalidades que le íbamos añadiendo. Aprendí a <span class='text-sky-600 font-bold'>trabajar por separado la parte del backend y la del frontend</span> utilizando diferentes frameworks.</p><p class='text-4xl md:text-base mb-5'>El objetivo era crear una interfaz de usuario accesible que cada día iba creciendo. La parte más importante de la plataforma era <span class='text-sky-600 font-bold'>mostrar diferentes gráficos obteniendo los datos desde llamadas a la API</span>.</p>",
        technologies: [
            "Api",
            "Php",
            "Mysql",
            "Vuejs",
            "Tailwind",
            "Github"
        ],
        show: "show"
    },
    {
        id:"e-006",
        date: "Diciembre 2021 - Marzo 2022",
        title: "OARO",
        description: "<p class='text-4xl md:text-base mb-5'>Éste ha sido por el momento el único trabajo que he realizado <span class='text-sky-600 font-bold'>100% en remoto</span>. Aprendí a ser muy autónomo para solucionar los diferentes problemas que me encontraba en las tareas que tenía asignadas.</p>",
        technologies: [
            "Php",
            "Symfony",
            "Mysql",
            "Github"
        ],
        show: "show"
    },
    {
        id:"e-005",
        date: "Abril 2020 - Octubre 2020",
        title: "Peña Hípica Donostiarra",
        description: "<p class='text-4xl md:text-base mb-5'>Era la época de la pandemia. En mi sociedad gastronómica se realizaban las reservas yendo físicamente al establecimiento.</p><p class='text-4xl md:text-base mb-5'>Con el <span class='text-sky-600 font-bold'>objetivo</span> de que los socios pudiesen hacer las <span class='text-sky-600 font-bold'>reservas online</span>, se me ocurrió la idea de <span class='text-sky-600 font-bold'>crear una aplicación web para que cada reserva se pudiese hacer desde el móvil</span>. Facilitaba la tarea sin tener que ir físicamente a la sociedad.</p><p class='text-4xl md:text-base mb-5'>Además debía ser una aplicación muy accesible y sencilla para que todo el mundo fuese capaz de utilizarla independientemente de la edad.</p>",
        freelance: "Freelance",
        technologies: [
            "Php",
            "Symfony",
            "Mysql",
            "Github"
        ],
        show: "show"
    },
    {
        id:"e-004",
        date: "Julio 2019 - Agosto 2019",
        title: "Ilargi Berdea",
        description: "<p class='text-4xl md:text-base mb-5'>Hice la <span class='text-sky-600 font-bold'>página web</span> de una asociación del sector del circo <span class='text-sky-600 font-bold'>dedicada a implantar diferentes cursos</span>.</p><p class='text-4xl md:text-base mb-5'>La finalidad de la página web era dar visibilidad tanto a la asociación como al mundo del circo.</p><p class='text-4xl md:text-base mb-5'>Era necesario que la persona encargada de llevar la página web pudiese actualizar las fotos y los horarios de los cursos semanalmente, con lo que me decidí a hacerla con el framework Wordpress.</p>",
        technologies: [
            "Php",
            "Wordpress",
        ],
        freelance: "Freelance",
        show: "hide hidden"
    },
    {
        id:"e-003",
        date: "Junio 2019 - Marzo 2020",
        title: "Lombok",
        description: "<p class='text-4xl md:text-base mb-5'>Fue mi primer trabajo con clientes y con la presión que ello conlleva. Trabajamos con todo tipo de sectores y eso hacía que cada web se hiciera de una manera diferente aunque la mayoría de ellas las hacíamos con Wordpress.</p><p class='text-4xl md:text-base mb-5'>Mi reto era llegar a las <span class='text-sky-600 font-bold'>fechas de entrega</span>. Aprendí a <span class='text-sky-600 font-bold'>trabajar con los diferentes departamentos</span> en el proceso de la creación de una página web.</p>",
        technologies: [
            "Php",
            "Wordpress",
            "Html",
            "Css",
            "Javascript"
        ],
        show: "hide hidden"
    },
    {
        id:"e-002",
        date: " Marzo 2018 - Mayo 2018",
        title: "Iparki",
        description: "<p class='text-4xl md:text-base mb-5'>Mientras trabajaba en FeelFree Rentals, me surgió la oportunidad de ayudar a una amiga con la web de su empresa. Ella quería poder modificar la web en un futuro y por eso me decanté por hacerla con Wordpress.</p><p class='text-4xl md:text-base mb-5'>Mi principal reto fue <span class='text-sky-600 font-bold'>crear una página web desde 0</span> y sin ningún tipo de ayuda. Tuve que <span class='text-sky-600 font-bold'>aprender el funcionamiento de los hostings, compra de dominios, configuraciones DNS y creación de bases de datos en la nube.</p>",
        technologies: [
            "Php",
            "Wordpress",
        ],
        freelance: "Freelance",
        show: "hide hidden"
    },
    {
        id:"e-001",
        date: "Octubre 2017 - Diciembre 2018",
        title: "FeelFree Rentals",
        description: "<p class='text-4xl md:text-base mb-5'>Fue mi primer trabajo en una empresa. Por un lado teníamos la web de reservas de apartamentos y por otro lado un <span class='text-sky-600 font-bold'>CMS interno</span> para los propios trabajadores para organizar el día a día.</p><p class='text-4xl md:text-base mb-5'>Mi reto inicial fue llegar a entender las dos aplicaciones con las que yo iba a trabajar diariamente.</p><p class='text-4xl md:text-base mb-5'>Además tenía que cumplir con los <span class='text-sky-600 font-bold'>sprints semanales</span> y <span class='text-sky-600 font-bold'>metodologías ágiles</span> que por ese momento eran desconocidas para mí. Tenía varias tareas semanales en cada sprint asignadas por mi responsable de departamento. Aprendí a <span class='text-sky-600 font-bold'>trabajar en equipo</span> y a <span class='text-sky-600 font-bold'>utilizar los repositorios</span> cómo manera de unificar mis tareas con las de mis compañeros.</p>",
        technologies: [
            "Php",
            "Symfony",
            "Mysql",
            "Github"
        ],
        show: "hide hidden"
    }
]

export { EXPERIENCE } ;