import { Upload, FileCheck, AlertCircle } from "lucide-react";

interface IdentityVerificationProps {
  onFileSelect: (files: FileList) => void;
  type: "host" | "guest";
}

export default function IdentityVerification({
  onFileSelect,
  type,
}: IdentityVerificationProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileSelect(e.target.files);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Identity Verification Required
            </h3>
            <p className="mt-2 text-sm text-yellow-700">
              {type === "host"
                ? "To ensure the safety and trust of our community, we require hosts to verify their identity and property ownership."
                : "To create a secure environment, we require all users to verify their identity."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Government-issued ID
          </h4>
          <label className="block">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={handleFileChange}
              />
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Upload a clear photo of your ID (passport, driver's license,
                  or national ID)
                </p>
              </div>
            </div>
          </label>
        </div>

        {type === "host" && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Property Ownership Proof
            </h4>
            <label className="block">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />
                <div className="text-center">
                  <FileCheck className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Upload property deed, recent utility bill, or rental
                    agreement
                  </p>
                </div>
              </div>
            </label>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500">
        <p>Accepted file formats: PNG, JPG, PDF (max 10MB)</p>
        <p className="mt-1">
          Your documents are encrypted and securely stored. They will only be
          used for verification purposes.
        </p>
      </div>
    </div>
  );
}
