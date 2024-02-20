
async function getData(){
    const response = await fetch('../output/top-10-economical-bowlers-2015.json');
    let data=await response.json();
    // console.log(data);



    const seriesData = data.map((element)=>{
        const bowler=element.bowler;
        const economy=element.economyRate;
        return {
            name: bowler,
            data: [economy]
        }
    })

    Highcharts.chart("top-10-economical-bowlers-2015", {
        chart : {
            type : "column",
        },
        title : {
            text: "top-10-economical-bowlers-2015",
        },  
        xAxis : {
            categories : ["Bowler"]
        },
        yAxis : {
            title : {
                text : "Economy Rate",
            }
        },
        series : seriesData
    })
}


getData();