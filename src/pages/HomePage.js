import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from '../components/Map';

function HomePage() {
  const [trips, setTrips] = useState([]);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const addTrip = (e) => {
    e.preventDefault();
    if (!destination || !startDate || !endDate) return;

    const newTrip = {
      id: Date.now(),
      destination,
      startDate,
      endDate,
    };

    setTrips([...trips, newTrip]);
    setDestination("");
    setStartDate("");
    setEndDate("");
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  const goToDetails = (id) => {
    navigate(`/trip/${id}`);
  };

  return (
    <div className="homepage">
      <h1>Plan Your Trip</h1>
      
      <form onSubmit={addTrip}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Add Trip</button>
      </form>

      <div className="trip-list">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-item">
            <h2>{trip.destination}</h2>
            <p>{trip.startDate} to {trip.endDate}</p>
            <button onClick={() => goToDetails(trip.id)}>View Details</button>
            <button onClick={() => deleteTrip(trip.id)}>Delete</button>
          </div>
        ))}
      </div>

      <h2>Route Preview</h2>
      <Map />
    </div>
  );
}

export default HomePage;
