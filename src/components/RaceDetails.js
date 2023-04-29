export default async function RaceDetails() {
    const data = await fetch('https://ergast.com/api/f1/current.json').then(res => res.json())
    const races = data["MRData"]["RaceTable"]["Races"]

    // write a function that loops over the races and check which one is the closest to the current date without being in the past

    function getClosestRace() {
        const today = new Date()
        console.log(today.getTime())

        let closestRaceDateIndex = 0
        let closestRaceDate = new Date(races[closestRaceDateIndex]['date'])
        
        for (let index = 0; index < races.length; index++) {
            const currentRace = races[index];
            const currentRaceDate = new Date(currentRace["date"]);
            console.log(currentRaceDate.getTime())
            if ((currentRaceDate.getTime() >= today.getTime())  && (Math.abs(currentRaceDate.getTime() - today.getTime()) < Math.abs(closestRaceDate.getTime() - today.getTime()))) {
                closestRaceDateIndex = index;
            }
        }
        return races[closestRaceDateIndex]
    }

    console.log(getClosestRace())


    return (
        <div className="flex justify-center mx-auto w-11/12">
            hi
        </div>
    )
}