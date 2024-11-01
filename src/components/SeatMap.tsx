import { useState } from "react";

interface SeatMapProps {
  selectedSeats: string[];
  onSeatSelect: (seat: string) => void;
  maxSeats: number;
  travelClass: "economy" | "business" | "firstClass";
}

export default function SeatMap({
  selectedSeats,
  onSeatSelect,
  maxSeats,
  travelClass,
}: SeatMapProps) {
  const rows =
    travelClass === "economy"
      ? ["A", "B", "C", "D", "E", "F"]
      : travelClass === "business"
      ? ["A", "B", "C", "D"]
      : ["A", "B"];

  const columns = Array.from(
    {
      length:
        travelClass === "economy" ? 30 : travelClass === "business" ? 15 : 10,
    },
    (_, i) => i + 1
  );

  // Simulate some randomly occupied seats
  const [occupiedSeats] = useState(() => {
    const seats = new Set<string>();
    const numOccupied = Math.floor(
      Math.random() * (travelClass === "economy" ? 50 : 20)
    );
    for (let i = 0; i < numOccupied; i++) {
      const row = rows[Math.floor(Math.random() * rows.length)];
      const col = columns[Math.floor(Math.random() * columns.length)];
      seats.add(`${row}${col}`);
    }
    return seats;
  });

  const handleSeatClick = (seat: string) => {
    if (occupiedSeats.has(seat)) return;
    if (selectedSeats.includes(seat)) {
      onSeatSelect(seat);
    } else if (selectedSeats.length < maxSeats) {
      onSeatSelect(seat);
    }
  };

  const getSeatStatus = (seat: string) => {
    if (occupiedSeats.has(seat)) return "occupied";
    if (selectedSeats.includes(seat)) return "selected";
    return "available";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-400 rounded"></div>
          <span>Occupied</span>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto pb-4">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-8 bg-gray-300 rounded-t-xl flex items-center justify-center text-sm">
            FRONT
          </div>
        </div>

        <div
          className="grid grid-flow-col gap-2"
          style={{ width: "max-content" }}
        >
          {columns.map((col) => (
            <div
              key={col}
              className="grid gap-2"
              style={{
                gridTemplateRows: `repeat(${rows.length}, minmax(0, 1fr))`,
              }}
            >
              {rows.map((row) => {
                const seat = `${row}${col}`;
                const status = getSeatStatus(seat);
                return (
                  <button
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    disabled={status === "occupied"}
                    className={`
                      w-8 h-8 rounded flex items-center justify-center text-sm
                      ${
                        status === "occupied"
                          ? "bg-gray-400 cursor-not-allowed"
                          : ""
                      }
                      ${status === "selected" ? "bg-black text-white" : ""}
                      ${
                        status === "available"
                          ? "bg-gray-200 hover:bg-gray-300"
                          : ""
                      }
                      ${travelClass !== "economy" ? "w-12 h-12" : ""}
                    `}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
