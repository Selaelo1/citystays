import { useParams } from 'react-router-dom';
import { CATEGORIES } from '../data/CategoryData';
import { Star, Clock, MapPin } from 'lucide-react';

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const category = CATEGORIES.find((cat) => cat.id === id);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center space-x-3 mb-8">
        <category.icon className="w-8 h-8" />
        <h1 className="text-3xl font-bold">{category.name}</h1>
      </div>
      <p className="text-xl text-gray-600 mb-12">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {category.activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span>{activity.rating}</span>
                  <span className="text-gray-500 ml-1">
                    ({activity.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-1" />
                  <span>{activity.duration}</span>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-gray-400 mr-1" />
                <span>{activity.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">${activity.price}</div>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )};