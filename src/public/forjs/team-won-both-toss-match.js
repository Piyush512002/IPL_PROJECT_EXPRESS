

async function getData(){
    const response = await fetch('../output/team-won-both-toss-match.json');
    let data=await response.json();
    // console.log(data);



    const seriesData = Object.entries(data).map((entry) => {
        const team = entry[0];
        const count = entry[1];
        return {
            name: team,
            data: [count]
        }
    })

    Highcharts.chart("team-won-both-toss-match", {
        chart : {
            type : "column",
        },
        title : {
            text: "team-won-both-toss-match",
        },  
        xAxis : {
            categories : ["Teams"]
        },
        yAxis : {
            title : {
                text : "winners",
            }
        },
        series : seriesData
    })
}


getData();