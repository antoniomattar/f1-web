import React, { Component } from "react";

export default class RaceDetails extends Component {
  state = {
    closestRace: null,
  };

  async componentDidMount() {
    const data = await fetch("https://ergast.com/api/f1/current.json").then((res) =>
      res.json()
    );
    const races = data["MRData"]["RaceTable"]["Races"];
    const closestRace = this.getClosestRace(races);
    this.setState({ closestRace });
  }

  getClosestRace(races) {
    const today = new Date();
    for (let index = 0; index < races.length; index++) {
      const currentRace = races[index];
      const currentRaceDate = new Date(currentRace["date"]);
      if (currentRaceDate.getTime() >= today.getTime()) {
        return currentRace;
      }
    }
    return races[0];
  }

  convertTimeTo12HFormat(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const suffix = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${suffix}`;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    let dayWithSuffix;
    switch (day) {
      case 1:
      case 21:
      case 31:
        dayWithSuffix = `${day}st`;
        break;
      case 2:
      case 22:
        dayWithSuffix = `${day}nd`;
        break;
      case 3:
      case 23:
        dayWithSuffix = `${day}rd`;
        break;
      default:
        dayWithSuffix = `${day}th`;
        break;
    }

    return `${dayWithSuffix} of ${month} ${year}`;
  }

  render() {
    const { closestRace } = this.state;

    if (!closestRace) {
      return <p>Loading race details...</p>;
    }

    return (
      <div className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md my-4">
        <h2 className="text-xl font-bold mb-2">Race Details</h2>
        <p className="text-lg">
          <strong>Race:</strong> {closestRace.raceName} 🏁
        </p>
        <p className="text-lg">
          <strong>Date:</strong> {this.formatDate(closestRace.date)} 📅
        </p>
        <p className="text-lg">
          <strong>Time:</strong> {this.convertTimeTo12HFormat(closestRace.time)} ⏰
        </p>
        <p className="text-lg">
          <strong>Location:</strong> {closestRace.Circuit.Location.locality}, {" "}
          {closestRace.Circuit.Location.country} 🌍
        </p>
      </div>
    );
  }
}
