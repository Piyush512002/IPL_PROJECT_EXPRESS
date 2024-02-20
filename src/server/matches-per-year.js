const fileConvert =require("./fileconvert.js")

function matchesPerYear(matchesData) {

    const result=matchesData.reduce((acc,ele)=>{
        const year=ele.season; 

        if(acc[year]){
            acc[year]++;
        }
        else {
            acc[year]=1;
        }

        return acc;
        
    },{});

    // console.log(result);

    fileConvert.write("matches-per-year",result);
}

fileConvert.getSingleData("matches",matchesPerYear);