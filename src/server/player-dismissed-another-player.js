const fileConvert =require("./fileconvert.js")

function findDismissalsBetweenPlayers(deliveryData) {
  const dismissals = deliveryData.reduce((accumulator, delivery) => {
    
    const dismissedPlayer = delivery.player_dismissed;
    const bowler = delivery.bowler;

    if (dismissedPlayer && bowler) {
      const key = `${dismissedPlayer}-${bowler}`;
      accumulator[key] = (accumulator[key] || 0) + 1;
    }

    return accumulator;
  }, {});
  // return dismissals;

  const maxDismissals = Object.keys(dismissals).reduce((maxKey, currentKey) => {
    return dismissals[currentKey] > dismissals[maxKey] ? currentKey : maxKey;
  },  Object.keys(dismissals)[0]);
  console.log(maxDismissals);
  const result={};
  result[maxDismissals]=dismissals[maxDismissals]

  fileConvert.write("player-dismissed-another-player",result);
}

fileConvert.getSingleData("deliveries",findDismissalsBetweenPlayers);
