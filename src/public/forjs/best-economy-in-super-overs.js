async function getData() {
    const response = await fetch('../output/best-economy-in-super-overs.json');
    let data = await response.json();
    
    const seriesData = [{
        name: data.bowler,
        data: [data.economyRate]
    }];

    Highcharts.chart("best-economy-in-super-overs", {
        chart: {
            type: "column",
        },
        title: {
            text: "Best Economy in Super Overs",
        },
        xAxis: {
            categories: ["Bowler"],
        },
        yAxis: {
            title: {
                text: "Economy Rate",
            }
        },
        series: seriesData
    });
}

getData();
