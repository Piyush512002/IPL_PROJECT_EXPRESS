const fileConvert =require("./fileconvert.js")


function strikeRate(matchData, deliveryData) {
    const batsmanData = deliveryData.reduce((delivery, currDelivery) => {
        const matchId = currDelivery.match_id;
        const batsman = currDelivery.batsman;
        const runs = parseInt(currDelivery.batsman_runs);

        if (runs > 0) {
            delivery[matchId] = delivery[matchId] || {};
            delivery[matchId][batsman] = delivery[matchId][batsman] || { runs: 0, balls: 0 };
            delivery[matchId][batsman].runs += runs;
            delivery[matchId][batsman].balls += 1;
        }

        return delivery;
    }, {}); 
    // return batsmanData;

    const result=matchData.reduce((acc,curr)=>{
        const matchId=curr.id;

        const season=curr.season;

        if(batsmanData[matchId]){
            acc[season]=acc[season] || {};

            Object.entries(batsmanData[matchId]).forEach(([batsman, { runs, balls }]) => {
                const strikeRate = (runs / balls) * 100;
                acc[season][batsman] = strikeRate;
            });
        }
        return acc;
    },{})

    // console.log(result);
    
    fileConvert.write("strike-rate-of-batsman",result);
}

fileConvert.getBothData("matches","deliveries",strikeRate);