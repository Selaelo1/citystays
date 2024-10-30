import { useState } from "react";
import { Upload, Home, MapPin } from "lucide-react";
import IdentityVerification from "../components/IdentityVerification";

export default function BecomeHost() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    amenities: [] as string[],
    photos: [] as string[],
    title: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Implement host registration logic here
    }
  };

  const handleFileSelect = (files: FileList) => {
    // Handle file upload logic
    console.log("Files selected:", files);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Become a CityStays Host</h1>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1/4 h-1 rounded-full ${
                  i <= step ? "bg-black" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-gray-600">Step {step} of 4</p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">
              Tell us about your place
            </h2>
            <div>
              <label className="block text-sm font-medium mb-2">
                What type of property do you have?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {["Apartment", "House", "Villa", "Studio"].map((type) => (
                  <button
                    key={type}
                    className={`p-4 border rounded-lg flex items-center space-x-3 ${
                      formData.propertyType === type
                        ? "border-black bg-gray-50"
                        : "border-gray-200"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, propertyType: type })
                    }
                    type="button"
                  >
                    <Home className="w-5 h-5" />
                    <span>{type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <div className="flex items-center space-x-2 border rounded-lg p-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="flex-1 outline-none"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">
              Add photos and details
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">
                Drag and drop your photos here, or click to upload
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Property title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">
              Verify your identity
            </h2>
            <IdentityVerification onFileSelect={handleFileSelect} type="host" />
            <button
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Set your price</h2>
            <div>
              <label className="block text-sm font-medium mb-2">
                Price per night
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  $
                </span>
                <input
                  type="number"
                  className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
              onClick={handleSubmit}
            >
              Complete registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
