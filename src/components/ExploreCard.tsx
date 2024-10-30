interface ExploreCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ExploreCard({
  title,
  description,
  image,
  link,
}: ExploreCardProps) {
  return (
    <a
      href={link}
      className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </a>
  );
}
