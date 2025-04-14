// Конфигурация графиков
const chartConfig = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Цена',
            data: [],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
};

// Инициализация графиков
function initCharts() {
    const btcChart = new Chart(
        document.getElementById('btcChart'),
        chartConfig
    );

    const ethChart = new Chart(
        document.getElementById('ethChart'),
        chartConfig
    );

    // Имитация данных
    const now = new Date();
    const labels = [];
    const btcData = [];
    const ethData = [];

    for (let i = 24; i >= 0; i--) {
        const date = new Date(now - i * 3600000);
        labels.push(date.toLocaleTimeString());
        
        // Генерация случайных данных
        btcData.push(45000 + Math.random() * 1000);
        ethData.push(3000 + Math.random() * 100);
    }

    // Обновление данных
    btcChart.data.labels = labels;
    btcChart.data.datasets[0].data = btcData;
    btcChart.update();

    ethChart.data.labels = labels;
    ethChart.data.datasets[0].data = ethData;
    ethChart.update();

    // Обновление цен
    updatePrices(btcData[btcData.length - 1], ethData[ethData.length - 1]);
}

// Обновление цен
function updatePrices(btcPrice, ethPrice) {
    const btcPriceElement = document.querySelector('.chart-card:first-child .price');
    const btcChangeElement = document.querySelector('.chart-card:first-child .change');
    const ethPriceElement = document.querySelector('.chart-card:last-child .price');
    const ethChangeElement = document.querySelector('.chart-card:last-child .change');

    if (btcPriceElement && btcChangeElement) {
        btcPriceElement.textContent = `$${btcPrice.toFixed(2)}`;
        const btcChange = ((btcPrice - 45000) / 45000 * 100).toFixed(2);
        btcChangeElement.textContent = `${btcChange > 0 ? '+' : ''}${btcChange}%`;
        btcChangeElement.className = `change ${btcChange >= 0 ? 'positive' : 'negative'}`;
    }

    if (ethPriceElement && ethChangeElement) {
        ethPriceElement.textContent = `$${ethPrice.toFixed(2)}`;
        const ethChange = ((ethPrice - 3000) / 3000 * 100).toFixed(2);
        ethChangeElement.textContent = `${ethChange > 0 ? '+' : ''}${ethChange}%`;
        ethChangeElement.className = `change ${ethChange >= 0 ? 'positive' : 'negative'}`;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initCharts); 