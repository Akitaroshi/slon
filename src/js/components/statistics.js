import Chart from 'chart.js';

class SellerStatistics {
  constructor(sellerId) {
    this.sellerId = sellerId;
    this.initCharts();
  }

  initCharts() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [...Array(30)].map((_, i) => `День ${i + 1}`),
        datasets: [{
          label: 'Продажи',
          data: [...Array(30)].map(() => Math.random() * 100),
          borderColor: '#00ff7f',
          backgroundColor: 'rgba(0, 255, 127, 0.1)',
          tension: 0.4
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
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
} 