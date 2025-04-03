// Функции для работы с модальным окном
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Закрытие модального окна при клике вне его
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

// Функция авторизации
function login(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('username', username);
    } else {
        localStorage.setItem('isAdmin', 'false');
        localStorage.setItem('username', username);
    }

    closeModal('loginModal');
    updateUserInterface();
    location.reload();
}

// Функция выхода
function logout() {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('username');
    localStorage.removeItem('userAvatar');
    updateUserInterface();
    location.reload();
}

// Обновление кнопки авторизации
function updateAuthButton() {
    const username = localStorage.getItem('username');
    const authButton = document.querySelector('.auth-button');
    
    if (username) {
        authButton.textContent = `Выйти (${username})`;
        authButton.onclick = logout;
    } else {
        authButton.textContent = 'Войти';
        authButton.onclick = () => openModal('loginModal');
    }
}

// Функции для работы с продавцами
async function loadSellers(sort = 'rating', filter = '') {
    try {
        const response = await fetch(`/api/sellers.php?sort=${sort}&filter=${filter}`);
        const sellers = await response.json();
        
        const container = document.querySelector('.sellers-container');
        container.innerHTML = sellers.map(seller => `
            <a href="seller.php?id=${seller.id}" class="seller-item">
                <div class="seller-info">
                    <div class="seller-avatar">${seller.avatar ? `<img src="${seller.avatar}">` : seller.name[0]}</div>
                    <div class="seller-details">
                        <span class="seller-name">${seller.name}</span>
                        <div class="seller-stats">
                            <span class="seller-rating">${'★'.repeat(seller.rating)}${'☆'.repeat(5-seller.rating)}</span>
                            <span class="seller-trades">
                                <i class="ph ph-arrows-clockwise"></i>
                                ${seller.deals} сделок
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seller-limits">
                    ${seller.min_amount} ₽ - ${seller.max_amount} ₽
                </div>
            </a>
        `).join('');
    } catch (error) {
        alert('Ошибка загрузки продавцов');
    }
}

function updateUserProfile() {
    const userProfile = document.getElementById('userProfile');
    const profileAvatar = document.getElementById('profileAvatar');
    const username = localStorage.getItem('username');
    
    if (username) {
        userProfile.classList.remove('not-logged');
        // Если есть аватар в localStorage, используем его, иначе дефолтный
        const avatarSrc = localStorage.getItem('userAvatar') || 'assets/images/default-avatar.png';
        profileAvatar.src = avatarSrc;
        
        // Добавляем обработчик для открытия модального окна профиля
        userProfile.onclick = () => {
            // Здесь можно добавить логику для показа меню профиля
            logout(); // Пока просто выход
        };
    } else {
        userProfile.classList.add('not-logged');
        userProfile.onclick = () => openModal('loginModal');
    }
}

function updateUserInterface() {
    const body = document.body;
    const username = localStorage.getItem('username');
    
    if (username) {
        body.classList.add('logged-in');
        body.classList.remove('logged-out');
    } else {
        body.classList.add('logged-out');
        body.classList.remove('logged-in');
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Загружаем продавцов
    if (document.querySelector('.sellers-container')) {
        loadSellers();
    }

    // Инициализируем FAQ
    initFAQ();

    updateAuthButton();
    updateUserProfile();
    updateUserInterface();
}); 