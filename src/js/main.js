import '../styles/index.css' 

document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем отзывы для каждого продавца
    const sellers = document.querySelectorAll('.seller-card');
    
    sellers.forEach((seller, index) => {
        const sellerId = `seller${index + 1}`;
        new SellerReviews(sellerId).renderReviews();
        new SellerStatistics(sellerId);
    });
}); 