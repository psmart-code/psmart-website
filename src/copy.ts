type Service = readonly [string, string, string];
interface Copy {
  nav: string[]; eyebrow: string; title: string[]; intro: string; explore: string;
  services: string; items: Service[]; process: string; steps: string[][];
  contact: string; email: string; skip: string;
}
export const copy: Record<"es" | "en", Copy> = {
  es: {
    nav: ["Servicios", "Proceso", "Contacto"], eyebrow: "Servicios digitales para empresas",
    title: ["Desarrollo web,", "software e", "inteligencia artificial."],
    intro: "Ayudamos a empresas de Latinoamérica a vender en línea, conectar sus sistemas y reducir tareas manuales con IA. Cuéntanos qué necesita tu equipo.",
    explore: "Explorar servicios", services: "Qué podemos construir",
    items: [
      ["Desarrollo web", "Sitios corporativos, catálogos y tiendas en línea que tus clientes pueden explorar desde cualquier dispositivo.", "Web"],
      ["Software a medida", "Aplicaciones que conectan ventas, inventario y operaciones para que tu equipo trabaje con la misma información.", "Software"],
      ["Inteligencia artificial", "Asistentes que consultan tus documentos y automatizaciones que clasifican solicitudes con revisión de tu equipo.", "IA"],
    ],
    process: "Del primer diálogo al lanzamiento",
    steps: [["Entender", "Conversamos con tu equipo para conocer cómo trabaja hoy y qué necesita mejorar. Juntos definimos qué debe resolver la primera versión y cómo sabremos si cumple su objetivo."], ["Construir", "Preparamos un prototipo para que puedas recorrer la solución y ajustar los detalles antes del desarrollo. Después trabajamos por etapas, con entregas que tu equipo puede probar en tareas de su día a día."], ["Lanzar", "Antes de la puesta en marcha, probamos contigo las tareas más importantes de principio a fin. Acompañamos a tu equipo en los primeros días de uso y recogemos sus comentarios para priorizar las siguientes mejoras."]],
    contact: "¿Qué necesitas construir?", email: "Hablemos de tu proyecto", skip: "Saltar al contenido",
  },
  en: {
    nav: ["Services", "Process", "Contact"], eyebrow: "Digital services for businesses",
    title: ["Web development,", "software &", "artificial intelligence."],
    intro: "Whether your team is in the US, Canada or elsewhere, we can help customers find you online, bring scattered data into one system and automate routine work.",
    explore: "Explore services", services: "What we can build",
    items: [
      ["Web development", "Company websites, catalogs and online stores your customers can explore from any device.", "Web"],
      ["Custom software", "Applications that connect sales, inventory and operations so your team works from the same information.", "Software"],
      ["Artificial intelligence", "Assistants that search your documents and workflows that classify requests for your team to review.", "AI"],
    ],
    process: "From first conversation to launch",
    steps: [["Discover", "We sit down with your team to understand how work gets done today and where it slows down. Together, we decide what the first release needs to do and how to measure its impact."], ["Build", "We start with a prototype you can walk through and refine before development begins. We then deliver working features in stages so your team can try them on everyday tasks and give feedback along the way."], ["Launch", "Before going live, we test the most important tasks with your team from start to finish. We help your team through its first days with the solution and use feedback from real use to plan the next improvements."]],
    contact: "What would you like to build?", email: "Discuss your project", skip: "Skip to content",
  },
};

