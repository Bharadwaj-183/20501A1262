import React, { useState, useEffect } from "react";
import { getAllTrains } from "./Api";

function AllTrains() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MjIxMzcsImNvbXBhbnlOYW1lIjoiUFZQIENlbnRyYWwiLCJjbGllbnRJRCI6IjFiM2E2NWQ5LTBlYjQtNGFkNC05ZWM4LWVlOWQxZGI1ZjJjNCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMDUwMUExMjYyIn0.SlZ_WR-jKSQTsGPYdiefe1aapgQe77plavEyZ5ohkFQ"; // Get the access token from the API
        const trainData = await getAllTrains(token);
        setTrains(trainData);
        setLoading(false);
      } catch (error) {
        y;
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {trains.map((train) => (
        <li>{train}</li>
      ))}
    </div>
  );
}

export default AllTrains;
