// Placeholder for chart data
const spendingData = {
    labels: ['Health', 'Education', 'Defense', 'Infrastructure', 'Other'],
    data: [30, 25, 15, 20, 10]
};

const revenueData = {
    labels: ['Tax Revenue', 'Non-Tax Revenue', 'Grants', 'Other'],
    data: [60, 20, 10, 10]
};

function createChart(ctx, labels, data) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount (in billions)',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const spendingCtx = document.createElement('canvas');
    const revenueCtx = document.createElement('canvas');
    
    document.getElementById('spending-chart').appendChild(spendingCtx);
    document.getElementById('revenue-chart').appendChild(revenueCtx);

    createChart(spendingCtx, spendingData.labels, spendingData.data);
    createChart(revenueCtx, revenueData.labels, revenueData.data);
});
