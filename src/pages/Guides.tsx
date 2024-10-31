import { User, Star, Languages, MapPin } from "lucide-react";
import { useState } from "react";
import { GUIDES } from "../data/GuidesData";
import ReviewsModal from "../components/ReviewsModal";

export default function Guides() {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null);

  const handleReviewsClick = (guideId: number) => {
    setSelectedGuide(guideId);
  };

  const selectedGuideData = GUIDES.find((guide) => guide.id === selectedGuide);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Local Guides</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {GUIDES.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-gray-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{guide.name}</h2>
                  <button
                    onClick={() => handleReviewsClick(guide.id)}
                    className="flex items-center text-gray-600 hover:text-black transition-colors"
                  >
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <span>{guide.rating}</span>
                    <span className="mx-1">·</span>
                    <span className="underline">{guide.reviews} reviews</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2 flex-grow">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{guide.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Languages className="w-5 h-5 mr-2" />
                <span>{guide.languages.join(", ")}</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Specialties:</h3>
                <div className="flex flex-wrap gap-2">
                  {guide.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end mt-4">
              <div className="text-3xl font-bold mb-2">
                ${guide.pricePerHour}
              </div>
              <div className="text-sm text-gray-600 mb-4">per hour</div>
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Book Guide
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedGuideData && (
        <ReviewsModal
          isOpen={selectedGuide !== null}
          onClose={() => setSelectedGuide(null)}
          reviews={selectedGuideData.reviewsList}
          guideName={selectedGuideData.name}
        />
      )}
    </div>
  );
}
