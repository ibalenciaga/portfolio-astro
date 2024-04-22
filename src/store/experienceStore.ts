interface IExperience {
    date: string;
    title: string;
    description: string;
    technologies: string[];
    freelance?: string;
}

const EXPERIENCE:IExperience[] = [
    {
        date: "2024",
        title: "Peña Hípica Donostiarra",
        description: "Una nueva versión de la aplicación para sociedades gastronómicas. Ésta nueva plataforma incluye la posibilidad de integrarla en más de una sociedad. Además de poder crear las reservas, los socios podrán crear las facturas de los productos consumidos. Así mismo, las personas encargadas de gestionar la aplicación podrán tener la información de todos sus socios, las reservas ya sea a través de un listado o mediante un calendario con la visión global de todo el mes, el inventario de los productos que tiene su sociedad y unas gráficas con datos que pueden ayudar a tener una perspectiva objetiva de los diferentes datos relativos a las reservas, socios o consumiciones.",
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
        freelance: "Freelance"
    },
    {
        date: "Septiembre 2022 - Diciembre 2023",
        title: "Bibagu",
        description: "Mi primer trabajo en una startup. Entré muy al inicio y parte de la aplicación estaba hecha por una empresa contratada. Mi principal objetivo fue llegar a entender todas las partes de la aplicación para poder dedicarme yo sólo a la implantación de todas las nuevas funcionalidades que le íbamos añadiendo. Aprendí a trabajar por separado la parte del backend y la del frontend utilizando diferentes frameworks. El objetivo era crear una interfaz de usuario accesible que cada día iba creciendo. La parte más importante de la plataforma era mostrar diferentes gráficos obteniendo los datos desde llamadas a la API.",
        technologies: [
            "Api",
            "Php",
            "Mysql",
            "Vuejs",
            "Tailwind",
            "Github"
        ],
    },
    {
        date: "Diciembre 2021 - Marzo 2022",
        title: "OARO",
        description: "Éste ha sido por el momento el único trabajo que he realizado 100% en remoto. Aprendí a ser muy autónomo para solucionar los diferentes problemas que me encontraba en las tareas que tenía asignadas.",
        technologies: [
            "Php",
            "Symfony",
            "Mysql",
            "Github"
        ],
    },
    {
        date: "2020",
        title: "Peña Hípica Donostiarra",
        description: "Era la época de la pandemia. En mi sociedad gastronómica se realizaban las reservas yendo físicamente al establecimiento. Con el objetivo de que los socios pudiesen hacer las reservas online, se me ocurrió la idea de crear una aplicación web para que cada reserva se pudiese hacer desde el móvil. Facilitaba la tarea sin tener que ir físicamente a la sociedad. Además debía ser una aplicación muy accesible y sencilla para que todo el mundo fuese capaz de utilizarla independientemente de la edad.",
        freelance: "Freelance",
        technologies: [
            "Php",
            "Symfony",
            "Mysql",
            "Github"
        ],
    },
    {
        date: "2019",
        title: "Ilargi Berdea",
        description: "Hice la página web de una asociación del sector del circo dedicada a implantar diferentes cursos. La finalidad de la página web era dar visibilidad tanto a la asociación como al mundo del circo. Era necesario que la persona encargada de llevar la página web pudiese actualizar las fotos y los horarios de los cursos semanalmente, con lo que me decidí a hacerla con el framework Wordpress.",
        technologies: [
            "Php",
            "Wordpress",
        ],
        freelance: "Freelance"
    },
    {
        date: "Junio 2019 - Marzo 2020",
        title: "Lombok",
        description: "Fue mi primer trabajo con clientes y con la presión que ello conlleva. Trabajamos con todo tipo de sectores y eso hacía que cada web se hiciera de una manera diferente aunque la mayoría de ellas las hacíamos con Wordpress. Mi reto era llegar a las fechas de entrega. Aprendí a trabajar con los diferentes departamentos en el proceso de la creación de una página web.",
        technologies: [
            "Php",
            "Wordpress",
            "Html",
            "Css",
            "Javascript"
        ],
    },
    {
        date: "2018",
        title: "Iparki",
        description: "Mientras trabajaba en FeelFree Rentals, me surgió la oportunidad de ayudar a una amiga con la web de su empresa. Ella quería poder modificar la web en un futuro y por eso me decanté por hacerla con Wordpress. Mi principal reto fue crear una página web desde 0 y sin ningún tipo de ayuda. Tuve que aprender el funcionamiento de los hostings, compra de dominios, configuraciones DNS y creación de bases de datos en la nube.",
        technologies: [
            "Php",
            "Wordpress",
        ],
        freelance: "Freelance"
    },
    {
        date: "Octubre 2017 - Diciembre 2018",
        title: "FeelFree Rentals",
        description: "Fue mi primer trabajo en una empresa. Por un lado teníamos la web de reservas de apartamentos y por otro lado un CMS interno para los propios trabajadores para organizar el día a día. Mi reto inicial fue llegar a entender las dos aplicaciones con las que yo iba a trabajar diariamente. Además tenía que cumplir con los sprints semanales y metodologías ágiles que por ese momento eran desconocidas para mí. Tenía varias tareas semanales en cada sprint asignadas por mi responsable de departamento. Aprendí a trabajar en equipo y a utilizar los repositorios cómo manera de unificar mis tareas con las de mis compañeros.",
        technologies: [
            "Php",
            "Symfony",
            "Mysql",
            "Github"
        ],
    }
]

export { EXPERIENCE } ;