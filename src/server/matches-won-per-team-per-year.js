const fileConvert =require("./fileconvert.js")


function matchesPerYear(matchesData) {

    const result= matchesData.reduce((prevMatch, currMatch) => {
        
        const year = currMatch.season;
        const winner = currMatch.winner;

        if (!prevMatch[year]) {
            prevMatch[year] = {};
        }

        if (winner === '') {
            return prevMatch;
        }

        else if (!prevMatch[year][winner]) {
            prevMatch[year][winner] = 1;
        }
        
        else {
            prevMatch[year][winner]++;
        }

        return prevMatch;
    }, {});

    // console.log(res);

    fileConvert.write("matches-won-per-team-per-year",result);
}


fileConvert.getSingleData("matches",matchesPerYear);