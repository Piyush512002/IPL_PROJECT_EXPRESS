async function getData() {
    const response = await fetch('../output/player-dismissed-another-player.json');
    let data = await response.json();

    const seriesData = Object.entries(data).map((entry) => {
        const players = entry[0];
        const count = entry[1];

        return {
            name: players,
            data: [count],
        };
    });

    Highcharts.chart("player-dismissed-another-player", {
        chart: {
            type: "column",
        },
        title: {
            text: "Dismissals of Player by Another Player",
        },
        xAxis: {
            categories: ["Players"],
        },
        yAxis: {
            title: {
                text: "Dismissal Count",
            },
        },
        series: seriesData,
    });
}

getData();
