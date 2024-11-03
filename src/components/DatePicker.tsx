import { useState } from "react";
import { Calendar } from "lucide-react";
import { format, addDays } from "date-fns";

interface DatePickerProps {
  onSelect: (dates: string) => void;
}

export default function DatePicker({ onSelect }: DatePickerProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

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
        const dateRange = `${format(startDate, "MMM d")} - ${format(
          date,
          "MMM d"
        )}`;
        onSelect(dateRange);
        setShowCalendar(false);
      }
    }
  };

  const today = new Date();
  const dates = Array.from({ length: 30 }, (_, i) => addDays(today, i));

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <Calendar className="text-gray-500" />
        <div>
          <div className="font-medium">When</div>
          <div className="text-sm text-gray-500">
            {startDate && endDate
              ? `${format(startDate, "MMM d")} - ${format(endDate, "MMM d")}`
              : "Add dates"}
          </div>
        </div>
      </div>

      {showCalendar && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-center text-sm font-medium p-2">
                  {day}
                </div>
              ))}
              {dates.map((date, i) => {
                const isSelected =
                  startDate &&
                  date >= startDate &&
                  (!endDate || date <= endDate);
                const isStart =
                  startDate &&
                  format(date, "yyyy-MM-dd") ===
                    format(startDate, "yyyy-MM-dd");
                const isEnd =
                  endDate &&
                  format(date, "yyyy-MM-dd") === format(endDate, "yyyy-MM-dd");

                return (
                  <button
                    key={i}
                    onClick={() => handleDateSelect(date)}
                    className={`
                      p-2 text-center rounded-lg transition-colors
                      ${
                        isSelected ? "bg-black text-white" : "hover:bg-gray-100"
                      }
                      ${isStart ? "rounded-l-lg" : ""}
                      ${isEnd ? "rounded-r-lg" : ""}
                    `}
                  >
                    {format(date, "d")}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
