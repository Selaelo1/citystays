import { Star } from 'lucide-react';

interface ReviewsListProps {
  stayId: string;
  rating: number;
  reviews: number;
}

// Mock reviews data - in a real app, this would come from an API
const mockReviews = [
  {
    id: 1,
    author: "Sarah M.",
    date: "February 2024",
    rating: 5,
    comment: "Beautiful property with stunning views. The host was very accommodating and the location was perfect for our needs. Would definitely stay here again!",
    highlights: ["Clean", "Great location", "Responsive host"]
  },
  {
    id: 2,
    author: "James R.",
    date: "January 2024",
    rating: 4,
    comment: "Lovely stay overall. The property was well-maintained and comfortable. Only minor issue was the wifi being a bit slow at times.",
    highlights: ["Comfortable", "Well-equipped", "Beautiful views"]
  },
  {
    id: 3,
    author: "Emma L.",
    date: "December 2023",
    rating: 5,
    comment: "Exceeded our expectations! The photos don't do it justice. Perfect for a family getaway with all the amenities you could need.",
    highlights: ["Family-friendly", "Modern amenities", "Spacious"]
  }
];

export default function ReviewsList({ rating, reviews }: ReviewsListProps) {
  const ratingPercentages = {
    cleanliness: 98,
    communication: 95,
    checkIn: 100,
    accuracy: 92,
    location: 96,
    value: 94
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">
          <div className="flex items-center">
            <Star className="w-6 h-6 text-yellow-500 fill-current mr-2" />
            <span>{rating} · {reviews} reviews</span>
          </div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {Object.entries(ratingPercentages).map(([category, percentage]) => (
            <div key={category} className="flex items-center">
              <span className="w-32 text-gray-600 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <div className="flex-1 ml-4">
                <div className="h-1 bg-gray-200 rounded">
                  <div 
                    className="h-1 bg-black rounded"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              <span className="ml-4 text-sm text-gray-600">{percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold">{review.author}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="ml-1">{review.rating}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <div className="flex flex-wrap gap-2">
              {review.highlights.map((highlight, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}