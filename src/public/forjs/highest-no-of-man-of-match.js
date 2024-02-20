// highest-no-of-man-of-match



async function getData(){
    const response = await fetch('../output/highest-no-of-man-of-match.json');
    let data=await response.json();
    



    const seriesData = Object.entries(data).map((entry) => {
        const year = entry[0];
        const playerData = entry[1];

        return {
            name: year,
            data: [{
                name: playerData.player,
                y: playerData.count,
            }],
        };
    });

    Highcharts.chart("highest-no-of-man-of-match", {
        chart: {
            type: "bar",
        },
        title: {
            text: "Highest Number of Man of the Match Awards Per Year",
        },
        xAxis: {
            type: "category",
            title: {
                text: "Player",
            },
        },
        yAxis: {
            title: {
                text: "Number of Man of the Match Awards",
            },
        },
        series: seriesData,
    });
}


getData();