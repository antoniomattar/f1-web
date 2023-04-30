import React, { Component } from "react";


class RaceDetails extends Component {
  state = {
    closestRace: null,
  };

  async componentDidMount() {
    const data = await fetch("https://ergast.com/api/f1/current.json").then(
      (res) => res.json()
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
      if (currentRaceDate.getFullYear() === today.getFullYear()) {
        if (currentRaceDate.getMonth() === today.getMonth()) {
          if (currentRaceDate.getDate() === today.getDate()) {
            return currentRace;
          }
        }
      }
      if (currentRaceDate.getTime() >= today.getTime()) {
        return currentRace;
      }
    }
    return races[0];
  }

  convertTimeTo12HFormat(timeString) {
    // Split the time string into its hours, minutes, and seconds components
    const [hours, minutes, seconds] = timeString.split(":").map(Number);

    // Determine whether it's AM or PM
    const suffix = hours >= 12 ? "PM" : "AM";

    // Convert the hours component to 12-hour format
    const hours12 = hours % 12 || 12;

    // Return the time in 12-hour format
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${suffix}`;
  }

  formatDate(dateString) {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Get the day, month, and year components of the date
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Format the day component with the appropriate suffix
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

    // Return the formatted date string
    return `${dayWithSuffix} of ${month} ${year}`;
  }

  render() {
    return (
      <div className="grid justify-center items-center align-middle">
        <h1 className="text-3xl font-bold text-center">🏎️ RACE DETAILS 🏎️</h1>
        <div className=" bg-green-700 text-white rounded-2xl p-6">
          <h3 className=" text-xl font-bold m-2 top-11">
            {this.state.closestRace
              ? this.state.closestRace["raceName"] +
                " " +
                this.state.closestRace["season"]
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            🏟️ :{" "}
            {this.state.closestRace
              ? this.state.closestRace["Circuit"]["circuitName"]
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            📍 :{" "}
            {this.state.closestRace
              ? this.state.closestRace["Circuit"]["Location"]["locality"]
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            🗺️ :{" "}
            {this.state.closestRace
              ? this.state.closestRace["Circuit"]["Location"]["country"]
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            Quali 🗓️:{" "}
            {this.state.closestRace
              ? this.formatDate(this.state.closestRace["Qualifying"]["date"])
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            <span className="underline">LOCAL</span> TIME ⏰:{" "}
            {this.state.closestRace
              ? this.convertTimeTo12HFormat(
                  this.state.closestRace["Qualifying"]["time"].substring(
                    0,
                    this.state.closestRace["time"].length - 1
                  )
                )
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            Race 🗓️:{" "}
            {this.state.closestRace
              ? this.formatDate(this.state.closestRace["date"])
              : "Loading..."}
          </h3>

          <h3 className=" text-sm font-semibold">
            <span className="underline">LOCAL</span> TIME ⏰:{" "}
            {this.state.closestRace
              ? this.convertTimeTo12HFormat(
                  this.state.closestRace["time"].substring(
                    0,
                    this.state.closestRace["time"].length - 1
                  )
                )
              : "Loading..."}
          </h3>
        </div>
      </div>
    );
  }
}

export default RaceDetails;