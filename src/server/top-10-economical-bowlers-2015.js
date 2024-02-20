const fileConvert =require("./fileconvert.js")


function topEconomicalBowlers(matchData, deliveryData) {
    const runsData = deliveryData.reduce((delivery, index) => {
        const matchId = index.match_id;

        const ifMatched = matchData.find(match => {
            return (matchId == match.id && match.season === "2015");
        });

        if (ifMatched) {
            const totalRuns = parseInt(index.total_runs);
            const bowler = index.bowler;
            const isExtra = (index.wide === '1' || index.noball === '1' || index.bye_runs > 0 || index.legbye_runs > 0);

            if (!isExtra) {
                delivery[bowler] = delivery[bowler] || { runs: 0, balls: 0 };
                delivery[bowler].runs += totalRuns;

                delivery[bowler].balls += 1;
            }
        }

        return delivery;
    }, {});
    // console.log("Runs Data:", runsData);
    const economyRates = Object.keys(runsData).map((bowler) => {
        const { runs, balls } = runsData[bowler];

        const economyRate = (runs / balls) * 6;
        return { bowler, economyRate };
    });

    const sortedEconomyRates = economyRates.sort((a, b) => a.economyRate - b.economyRate);

    const top10EconomicalBowlers = sortedEconomyRates.slice(0, 10);

    fileConvert.write("top-10-economical-bowlers-2015",top10EconomicalBowlers);
}

fileConvert.getBothData("matches","deliveries",topEconomicalBowlers);