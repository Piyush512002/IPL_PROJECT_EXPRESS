const fileConvert =require("./fileconvert.js")


function findBestEconomySuperOver(deliveryData) {
  const superOverData = deliveryData.filter((delivery) => delivery.is_super_over === '1');

  const runsByBowler = superOverData.reduce((accumulator, delivery) => {

    const bowler = delivery.bowler;
    const totalRuns = parseInt(delivery.total_runs, 10);
    const isWide = delivery.wide_runs === '1';
    const isNoBall = delivery.noball_runs === '1';

    if (!isWide && !isNoBall) {

      accumulator[bowler] = accumulator[bowler] || { runs: 0, balls: 0 };
      accumulator[bowler].runs += totalRuns;
      accumulator[bowler].balls += 1;
    }

    return accumulator;
  }, {});
//   return runsByBowler;

  const economyRates = Object.keys(runsByBowler).map((bowler) => {

    const { runs, balls } = runsByBowler[bowler];
    const economyRate = (runs / balls) * 6;
    return { bowler, economyRate };
    
  });

  const sortedEconomyRates=economyRates.sort((a,b)=>a.economyRate-b.economyRate);

  // console.log(sortedEconomyRates[0]);

  fileConvert.write("best-economy-in-super-overs",sortedEconomyRates[0]);
}


fileConvert.getSingleData("deliveries",findBestEconomySuperOver);
