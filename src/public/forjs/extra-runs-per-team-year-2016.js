async function getData() {
    const response = await fetch('../output/extra-runs-per-team-year-2016.json');
    let data = await response.json();

    const seriesData = Object.entries(data).map((entry) => {
        const team = entry[0];
        const teamsData = entry[1];

        return {
            name: team,
            data: [teamsData],
        };
    });

    Highcharts.chart("extra-runs-per-team-year-2016", {
        chart: {
            type: "column",
        },
        title: {
            text: "Extra runs per team in year 2016",
        },
        xAxis: {
            categories:  ["Teams"]
        },
        yAxis: {
            title: {
                text: "Number of extra runs",
            },
        },
        series: seriesData,
    });
}

getData();
