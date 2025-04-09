class SellerReviews {
  constructor(sellerId) {
    this.sellerId = sellerId;
    this.reviews = this.getSellerReviews();
  }

  getSellerReviews() {
    // Здесь можно подключить реальные данные из API
    return {
      'seller1': [
        {
          rating: 5,
          text: "Отличный продавец, быстрая доставка",
          date: "2024-03-15",
          author: "Александр"
        },
        // Другие отзывы...
      ],
      'seller2': [
        {
          rating: 4,
          text: "Хорошие цены, но доставка могла быть быстрее",
          date: "2024-03-14",
          author: "Мария"
        }
        // Другие отзывы...
      ]
    }[this.sellerId] || [];
  }

  renderReviews() {
    const container = document.querySelector('.reviews-section');
    
    this.reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.className = 'review-card';
      reviewElement.innerHTML = `
        <div class="review-header">
          <div class="review-author">${review.author}</div>
          <div class="review-rating">
            ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
          </div>
          <div class="review-date">${new Date(review.date).toLocaleDateString()}</div>
        </div>
        <div class="review-text">${review.text}</div>
      `;
      container.appendChild(reviewElement);
    });
  }
} 