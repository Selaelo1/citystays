import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface CalendarProps {
  onSelect: (dates: { start: Date | null; end: Date | null }) => void;
}

export default function Calendar({ onSelect }: CalendarProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setStartDate(date);
        setEndDate(null);
      } else {
        setEndDate(date);
        onSelect({ start: startDate, end: date });
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Select dates</h3>
          <p className="text-sm text-gray-500">
            Add your travel dates for exact pricing
          </p>
        </div>
        <CalendarIcon className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check-in
          </label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            onChange={(e) => handleDateSelect(new Date(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check-out
          </label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            onChange={(e) => handleDateSelect(new Date(e.target.value))}
          />
        </div>
      </div>

      <div className="text-sm text-gray-500">
        {startDate && endDate
          ? `${format(startDate, "MMM d, yyyy")} - ${format(
              endDate,
              "MMM d, yyyy"
            )}`
          : "Select check-in and check-out dates"}
      </div>
    </div>
  );
}
