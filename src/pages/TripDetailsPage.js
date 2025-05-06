import React from "react";
import { useParams } from "react-router-dom";

function TripDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Trip Details</h1>
      <p>Trip ID: {id}</p>
      {/* Optional: fetch more info later */}
    </div>
  );
}

export default TripDetailsPage;
