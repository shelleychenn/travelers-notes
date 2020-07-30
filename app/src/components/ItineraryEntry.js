import React from 'react';

const ItineraryEntry = ({ itineraryEntry }) => {
  return (
    <tr>
      <td className="date">{itineraryEntry.date}</td>
      <td className="time">{itineraryEntry.time}</td>
      <td className="activity">{itineraryEntry.activity}</td>
      <td className="location">{itineraryEntry.location}</td>
      <td className="budget">{itineraryEntry.budget}</td>
      <td className="notes">{itineraryEntry.notes}</td>
      <div>×</div>
    </tr>
  );
};

export default ItineraryEntry;
