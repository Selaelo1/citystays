import { useState } from "react";
import { SAMPLE_STAYS, Stay } from "../data/StayData";
import StayList from "../components/stays/StayList";

export default function Stays() {
  const [stays] = useState<Stay[]>(SAMPLE_STAYS);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Places to stay</h1>
      <StayList stays={stays} />
    </div>
  );
}