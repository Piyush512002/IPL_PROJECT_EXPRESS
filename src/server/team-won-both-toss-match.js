const fileConvert =require("./fileconvert.js")



function teamWonBoth(matchData){
    const winCount=matchData.reduce((match,currMatch)=>{

        const tossWinner=currMatch.toss_winner;
        const winner=currMatch.winner;

        if(tossWinner === winner){

            if(!match[winner]){
                match[winner]=0;
            }
            match[winner]+=1;

        }

        return match;

    },{})
    
    // console.log(winCount);

    fileConvert.write("team-won-both-toss-match",winCount);
}

fileConvert.getSingleData("matches",teamWonBoth);