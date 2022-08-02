export default async function getChartData(month: string[], values: Promise<number[]>) {
    let data = await values
    return {
        labels: month,
        datasets: [
            {
                fill: true,
                label: 'Dynamic',
                data: data,
                borderColor: 'rgb(26,72,189)',
                backgroundColor: 'rgba(135,206,250,0.6)',
            },
        ],
    };
}


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Dynamic of two currency',
        },
    },
};

