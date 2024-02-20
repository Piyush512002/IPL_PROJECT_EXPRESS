const fileConvert =require("./fileconvert.js")


function getExtraRuns(matchData,deliveryData){
 
    const runsData=deliveryData.reduce((delivery,index)=>{
        const matchId=index.match_id;
        const extraRuns=index.extra_runs;
        const intExtraRuns = parseInt(extraRuns);
        const teamBowling=index.bowling_team;

        const ifMatched=matchData.find(match=>{
            return (match.id===matchId && match.season=== '2016')
        })

        if (ifMatched) {

            if (!delivery[teamBowling]) {
              delivery[teamBowling] = 0;
            }
            delivery[teamBowling] += intExtraRuns;
        }
        
        return delivery;
    },{})

    // console.log(runsData);

    fileConvert.write("extra-runs-per-team-year-2016",runsData);
}

fileConvert.getBothData("matches","deliveries",getExtraRuns);