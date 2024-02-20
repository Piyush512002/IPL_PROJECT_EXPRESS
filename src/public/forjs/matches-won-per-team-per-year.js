async function getData() {
    const response = await fetch('../output/matches-won-per-team-per-year.json');
    let data = await response.json();

    const seriesData = Object.entries(data).map((entry) => {
        const year = entry[0];
        const teamsData = entry[1];

        return {
            name: year,
            data: Object.values(teamsData),
        };
    });

    const teams = Object.keys(data[Object.keys(data)[0]]);
    const chartCategories = teams;

    Highcharts.chart("matches-won-per-team-per-year", {
        chart: {
            type: "column",
        },
        title: {
            text: "Matches Won Per Team Per Year",
        },
        xAxis: {
            categories: chartCategories,
        },
        yAxis: {
            title: {
                text: "Number of matches won",
            },
        },
        series: seriesData,
    });
}

getData();
