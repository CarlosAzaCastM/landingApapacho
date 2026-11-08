export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  image: string;
  imageFallback: string;
  alt: string;
  order: number;
  active: boolean;
  link: string;
  ctaLabel: string;
}

const whatsappPhone = "525566294454";

const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

/**
 * Catálogo centralizado de experiencias de La Casona (APAPACHO).
 * - Para cambiar el orden de aparición en el carrusel, modifica la propiedad `order`.
 * - Para ocultar temporalmente una experiencia sin eliminar su registro, cambia `active` a `false`.
 * - Para agregar una nueva experiencia, añade un nuevo objeto cumpliendo la interfaz `ExperienceItem`.
 */
export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-cuevas",
    title: "Cuevas",
    subtitle: "Experiencia Subterránea La Casona & Los Túneles",
    slug: "cuevas-experiencia-subterranea",
    description:
      "Adéntrate en los antiguos túneles subterráneos restaurados bajo nuestra finca del siglo XVIII en el Barrio del Encino. Un entorno íntimo a la luz tenue, pensado para veladas románticas, cenas especiales y maridajes con cocina de autor.",
    image: "/optimized/apapacho-subterraneo.webp",
    imageFallback: "/apapachoSubterraneo.JPG",
    alt: "Pareja disfrutando una velada íntima con vino en las cuevas y túneles subterráneos iluminados de La Casona Apapacho en Aguascalientes",
    order: 1,
    active: true,
    link: buildWhatsAppLink(
      "¡Hola APAPACHO! Me gustaría conocer más y consultar disponibilidad para la experiencia Cuevas (Experiencia Subterránea La Casona & Los Túneles).",
    ),
    ctaLabel: "Conocer más sobre Cuevas",
  },
  {
    id: "exp-tour-leyenda",
    title: "Tour de Leyenda",
    subtitle: "Historias, Leyendas y Misterios de La Casona",
    slug: "tour-de-leyenda",
    description:
      "Recorre los pasillos, patios y rincones históricos de La Casona a través de un relato guiado por las historias, leyendas y misterios que resguarda este inmueble de finales del siglo XVIII en el corazón del Barrio del Encino.",
    image: "/TourLeyendas.webp",
    imageFallback: "/TourLeyendas.webp",
    alt: "Patio central iluminado de noche con arcos y corredores históricos del siglo XVIII en La Casona Apapacho, escenario del Tour de Leyenda",
    order: 2,
    active: true,
    link: buildWhatsAppLink(
      "¡Hola APAPACHO! Me gustaría recibir información sobre el Tour de Leyenda en La Casona.",
    ),
    ctaLabel: "Descubrir el Tour de Leyenda",
  },
  {
    id: "exp-eventos-personalizados",
    title: "Eventos Personalizados",
    subtitle: "Espacios y Experiencias a la Medida en La Casona",
    slug: "eventos-personalizados",
    description:
      "Diseñamos celebraciones privadas, encuentros familiares y eventos corporativos adaptados a las necesidades de cada anfitrión, integrando nuestros salones históricos, el patio de la casona y menús de cocina hidrocálida de autor.",
    image: "/optimized/EventoPersonalizado.webp",
    imageFallback: "/Comidas/BENDITA COMUNION.jpeg",
    alt: "Mesa servida para evento personalizado en La Casona Apapacho con platillos de cocina de autor hidrocálida, cerámica de talavera y vino mexicano",
    order: 3,
    active: true,
    link: buildWhatsAppLink(
      "¡Hola APAPACHO! Me interesa recibir información para realizar un Evento Personalizado en La Casona.",
    ),
    ctaLabel: "Planear un evento personalizado",
  },
  {
    id: "exp-catas-temporada",
    title: "Noches de Cata en la Finca",
    subtitle: "Experiencia de Temporada (Inactiva de ejemplo)",
    slug: "noches-de-cata-en-la-finca",
    description:
      "Encuentros guiados de degustación gastronómica y vinícola en los salones de La Casona.",
    image: "/optimized/tesoro-de-la-casa.webp",
    imageFallback: "/Comidas/TESORO DE LA CASA.jpeg",
    alt: "Platillo de autor Tesoro de la Casa para noches de cata en La Casona",
    order: 4,
    active: false,
    link: buildWhatsAppLink(
      "¡Hola APAPACHO! Me gustaría recibir información sobre las Noches de Cata.",
    ),
    ctaLabel: "Conocer próximas fechas",
  },
];

export function getActiveExperiences(
  items: ExperienceItem[] = experiencesData,
): ExperienceItem[] {
  return items
    .filter((experience) => experience.active)
    .sort((a, b) => a.order - b.order);
}
