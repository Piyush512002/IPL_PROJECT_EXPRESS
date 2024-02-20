async function getData() {
    const response = await fetch('../output/strike-rate-of-batsman.json');
    let data = await response.json();

    const chartsContainer = document.getElementById('strike-rate-of-batsman');

    
    Object.entries(data).forEach((element, index) => {
        const year = element[0];
        const batsman = element[1];

        
        const chartDiv = document.createElement('div');
        chartDiv.id = `strike-rate-chart-${index}`;

       
        chartsContainer.appendChild(chartDiv);
        Highcharts.chart(`strike-rate-chart-${index}`, {
            chart: {
                type: "line",
            },
            title: {
                text: `Strike Rate Of Batsman - ${year}`,
            },
            xAxis: {
                categories: ["Batsman"]
            },
            yAxis: {
                title: {
                    text: "Strike Rate",
                }
            },
            series: [{
                name: Object.keys(batsman),
                data: Object.values(batsman),
            }]
        });
    });
}

getData();