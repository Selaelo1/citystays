import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/CategoryData";

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="flex space-x-8 overflow-x-auto pb-4">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex-shrink-0 bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors group"
          >
            <category.icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
