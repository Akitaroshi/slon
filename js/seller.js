// Получаем ID продавца из URL
const sellerId = new URLSearchParams(window.location.search).get('id');

// Загружаем данные продавца
function loadSellerData() {
    // В реальном приложении здесь был бы запрос к API
    const sellers = {
        '1': {
            name: 'John Doe',
            avatar: 'JD',
            rating: 4.9,
            trades: 1234,
            volume: '2.5M',
            reviews: [
                {
                    author: 'Alice',
                    rating: 5,
                    date: '2024-03-26',
                    text: 'Отличный продавец! Быстрая сделка, хороший курс.'
                },
                {
                    author: 'Bob',
                    rating: 5,
                    date: '2024-03-25',
                    text: 'Всё прошло гладко, рекомендую этого продавца.'
                },
                {
                    author: 'Carol',
                    rating: 4,
                    date: '2024-03-24',
                    text: 'Хороший сервис, немного медленнее, чем ожидалось.'
                }
            ]
        },
        '2': {
            name: 'Jane Smith',
            avatar: 'JS',
            rating: 4.8,
            trades: 856,
            volume: '1.8M',
            reviews: [
                {
                    author: 'David',
                    rating: 5,
                    date: '2024-03-26',
                    text: 'Профессиональный подход, быстрое исполнение.'
                },
                {
                    author: 'Eva',
                    rating: 5,
                    date: '2024-03-25',
                    text: 'Отличные курсы и быстрые ответы.'
                },
                {
                    author: 'Frank',
                    rating: 5,
                    date: '2024-03-24',
                    text: 'Надежный продавец, буду обращаться еще.'
                }
            ]
        }
    };

    return sellers[sellerId] || sellers['1'];
}

// Обновляем информацию на странице
function updateSellerProfile(seller) {
    document.querySelector('.seller-name').textContent = seller.name;
    document.querySelector('.seller-avatar').textContent = seller.avatar;
    document.querySelector('.seller-rating').textContent = `★ ${seller.rating}`;
    document.querySelector('.seller-trades').textContent = `Сделок: ${seller.trades}`;
    document.querySelector('.seller-volume').textContent = `Объем: $${seller.volume}`;

    const reviewsList = document.querySelector('.review-list');
    reviewsList.innerHTML = seller.reviews.map(review => `
        <div class="review-card glass-effect">
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const seller = loadSellerData();
    updateSellerProfile(seller);
}); 