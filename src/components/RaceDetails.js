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
      if (currentRaceDate.getTime() > today.getTime()) {
        return currentRace;
      }
    }
    return races[0];
  }

  render() {
    return (
      <div className="grid justify-center items-center align-middle">
        <h1 className="text-3xl font-bold text-center"> RACE DETAILS </h1>
        <div className=" bg-green-700 text-white rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">NAME: {this.state.closestRace ? this.state.closestRace["raceName"] : "Loading..."} </h2>
          <h3 className="text-xl font-semibold">CIRCUIT NAME: {this.state.closestRace ? this.state.closestRace["Circuit"]["circuitName"] : "Loading..."} </h3>
          <h3 className="text-xl font-semibold">LOCATION: {this.state.closestRace ? this.state.closestRace["Circuit"]["Location"]["locality"] : "Loading..."} </h3>
          <h3 className="text-xl font-semibold">COUNTRY: {this.state.closestRace ? this.state.closestRace["Circuit"]["Location"]["country"] : "Loading..."} </h3>
          <h3 className="text-xl font-semibold">DATE: {this.state.closestRace ? this.state.closestRace["date"] : "Loading..."} </h3>
          <h3 className="text-xl font-semibold">TIME: {this.state.closestRace ? this.state.closestRace["time"] : "Loading..."} </h3>
          <h3 className="text-xl font-semibold">SEASON {this.state.closestRace ? this.state.closestRace["season"] : "Loading..."} </h3>
        </div>
      </div>
      
    );
  }
}

export default RaceDetails;
