
async function getData(){
    const response = await fetch('../output/matches-per-year.json');
    let data=await response.json();
    console.log(data);



    const seriesData = Object.entries(data).map((element)=>{
        return {
            name: element[0],
            data: [element[1]]
        }
    })

    Highcharts.chart("ch1", {
        chart : {
            type : "column",
        },
        title : {
            text: "matchesPerYear",
        },  
        xAxis : {
            categories : ["Teams"]
        },
        yAxis : {
            title : {
                text : "Number of extras",
            }
        },
        series : seriesData
    })
}


getData();