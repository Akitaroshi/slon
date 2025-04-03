document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sellerId = urlParams.get('id');
    
    // Здесь должен быть код для загрузки данных конкретного продавца
    // Пока используем статичные данные
    const sellerData = {
        name: 'whyhate',
        avatar: 'WH',
        rating: 4.9,
        trades: 1234,
        volume: '2.5M'
    };

    // Обновляем информацию на странице
    document.querySelector('.seller-name').textContent = sellerData.name;
    document.querySelector('.seller-avatar').textContent = sellerData.avatar;
    document.querySelector('.seller-rating').textContent = `★ ${sellerData.rating}`;
    document.querySelector('.seller-trades').textContent = `Сделок: ${sellerData.trades}`;
    document.querySelector('.seller-volume').textContent = `Объем: $${sellerData.volume}`;
});

//market-stats переделать (сейчас как-то не в том стиле всё)
//на странице продавцы стиль сделать такой же как везде
// адаптив
// переделать "продавцы" (если нет аватарки то будет просто пустой фон без буквы чёрный прозрачный цвет), сделать в целом этот блок красивее, настроить отзывы (сейчас, если нажать на продавца 3, то откроется страница продавца 1)
// feature-icon прибить к верху
//кнопка типа "начать пользоваться" с ссылкой на "продавцы"
//сделать "кошелёк"
//убрать/заменить "курсы" (например на FAQ)
// красивое модальное окно при, например, добавлении карты (всплывашка с анимацией, прозрачностью и в целом чтоб красиво было)
/* sign in/sign up (просто чтоб было создание аккаунта и проверка есть ли такой аккаунт и верны ли данные) 
+ админ панель (по логину и паролю admin) 
где можно будет добавить на сайт продавца,
 указать его аватарку, имя, отзывы,оценку, также в отзывах можно будет указать имя и оценку покупателя
 */

const sellers = {
    'whyhate': {  // Используем конкретное имя вместо цифр
        name: 'whyhate',
        avatar: 'WH',
        rating: 4.9,
        trades: 1234,
        volume: '2.5M',
        reviews: [
            // отзывы для whyhate
        ]
    },
    // другие продавцы...
};
