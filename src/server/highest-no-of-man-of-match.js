const fileConvert =require("./fileconvert.js")


function highestManOfMatch(matchData){
    const manOfMatcheData=matchData.reduce((match,currMatch)=>{

        const player=currMatch.player_of_match;
        const year=currMatch.season;
        if(!match[year]){
            match[year]={};
        }

        if (!match[year][player]) {
            match[year][player] = 1;
        }
        
        else {
            match[year][player]++;
        }
        
        return match;
    },{})
    // return manOfMatcheData;
    

    const result = Object.keys(manOfMatcheData).reduce((result, season) => {
        const players = manOfMatcheData[season];
        
        const topPlayer = Object.keys(players).reduce((maxPlayer, player) => {
            return players[player] > players[maxPlayer] ? player : maxPlayer
        },Object.keys(players)[0]);

        result[season] = { player: topPlayer, count: players[topPlayer] };
        
        return result;
    }, {});

    // console.log(res);
    fileConvert.write("highest-no-of-man-of-match",result);
}


fileConvert.getSingleData("matches",highestManOfMatch);