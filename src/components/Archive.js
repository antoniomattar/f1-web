import React, { useEffect, useState } from "react";

export default function Archive() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRaceResults, setSelectedRaceResults] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await fetch("https://ergast.com/api/f1/current.json");
        const data = await response.json();
        setRaces(data.MRData.RaceTable.Races);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch race data:", error);
        setLoading(false);
      }
    };

    fetchRaces();
  }, []);

  const fetchRaceResults = async (round) => {
    setLoadingResults(true);
    try {
      const response = await fetch(
        `https://ergast.com/api/f1/current/${round}/results.json`
      );
      const data = await response.json();
      setSelectedRaceResults(data.MRData.RaceTable.Races[0].Results);
    } catch (error) {
      console.error("Failed to fetch race results:", error);
    } finally {
      setLoadingResults(false);
    }
  };

  if (loading) {
    return <p>Loading race archive...</p>;
  }

  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Race Archive</h1>
        <p className="text-lg leading-relaxed mb-4 text-center">
          Explore past races and standings from the last Formula 1 season! 🏁
        </p>
        {loadingResults ? (
          <p className="text-center text-lg font-semibold">
            Loading race results...
          </p>
        ) : selectedRaceResults ? (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Race Results</h2>
            <table className="table-auto w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2">Position</th>
                  <th className="px-4 py-2">Driver</th>
                  <th className="px-4 py-2">Constructor</th>
                  <th className="px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {selectedRaceResults.map((result, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  >
                    <td className="border px-4 py-2 text-center">
                      {result.position}
                    </td>
                    <td className="border px-4 py-2">
                      {result.Driver.givenName} {result.Driver.familyName}
                    </td>
                    <td className="border px-4 py-2">
                      {result.Constructor.name}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {result.Time?.time || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => setSelectedRaceResults(null)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Back to Archive
            </button>
          </div>
        ) : (
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Round</th>
                <th className="px-4 py-2">Race</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Results</th>
              </tr>
            </thead>
            <tbody>
              {races.map((race, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="border px-4 py-2 text-center">{race.round}</td>
                  <td className="border px-4 py-2">{race.raceName}</td>
                  <td className="border px-4 py-2 text-center">
                    {new Date(race.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {race.Circuit.Location.locality},{" "}
                    {race.Circuit.Location.country}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => fetchRaceResults(race.round)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      View Results
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
