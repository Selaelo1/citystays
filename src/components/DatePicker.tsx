import { useState } from "react";
import { Calendar } from "lucide-react";

export default function DatePicker() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startDate, setStartDate] = useState<Date | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="relative">
      <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
        <Calendar className="text-gray-500" />
        <div>
          <div className="font-medium">Check in - Check out</div>
          <div className="text-sm text-gray-500">
            {startDate && endDate
              ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : "Add dates"}
          </div>
        </div>
      </div>
    </div>
  );
}
