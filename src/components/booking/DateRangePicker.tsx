import { useState } from 'react';
import { format, addDays, isBefore, isAfter, isSameDay } from 'date-fns';

interface DateRangePickerProps {
  onSelect: (dates: { start: Date; end: Date }) => void;
}

export default function DateRangePicker({ onSelect }: DateRangePickerProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const today = new Date();
  const dates = Array.from({ length: 60 }, (_, i) => addDays(today, i));

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (isBefore(date, startDate)) {
        setStartDate(date);
        setEndDate(null);
      } else {
        setEndDate(date);
        onSelect({ start: startDate, end: date });
      }
    }
  };

  const isInRange = (date: Date) => {
    if (startDate && !endDate && hoverDate) {
      return (
        (isAfter(date, startDate) && isBefore(date, hoverDate)) ||
        isSameDay(date, startDate) ||
        isSameDay(date, hoverDate)
      );
    }
    if (startDate && endDate) {
      return (
        (isAfter(date, startDate) && isBefore(date, endDate)) ||
        isSameDay(date, startDate) ||
        isSameDay(date, endDate)
      );
    }
    return false;
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-sm font-medium p-2">
            {day}
          </div>
        ))}
        {dates.map((date, i) => {
          const isSelected = startDate && endDate && isInRange(date);
          const isStart = startDate && isSameDay(date, startDate);
          const isEnd = endDate && isSameDay(date, endDate);

          return (
            <button
              key={i}
              onClick={() => handleDateClick(date)}
              onMouseEnter={() => setHoverDate(date)}
              onMouseLeave={() => setHoverDate(null)}
              className={`
                p-2 text-center rounded-lg transition-colors
                ${isSelected ? 'bg-black text-white' : 'hover:bg-gray-100'}
                ${isStart ? 'rounded-l-lg' : ''}
                ${isEnd ? 'rounded-r-lg' : ''}
                ${isBefore(date, today) ? 'text-gray-300 cursor-not-allowed' : ''}
              `}
              disabled={isBefore(date, today)}
            >
              {format(date, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}