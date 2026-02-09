
// Data Definitions
const categories = [
    { id: 'automobiles', label: 'Automobiles', icon: 'car' },
    { id: 'watches', label: 'Watches', icon: 'watch' },
    { id: 'electronics', label: 'Electronics', icon: 'smartphone' }, // Previously "Mobiles & Electronics"
    { id: 'appliances', label: 'Home Appliances', icon: 'washing-machine' },
    { id: 'bags_footwear', label: 'Bags & Footwear', icon: 'shopping-bag' },
    { id: 'home_decor', label: 'Home Decor', icon: 'armchair' },
    { id: 'fitness', label: 'Fitness', icon: 'dumbbell' },
    { id: 'sports', label: 'Sports', icon: 'trophy' },
    { id: 'kids', label: 'Kids & Toddlers', icon: 'baby' },
    { id: 'pets', label: 'Pet Supplies', icon: 'dog' },
    { id: 'men', label: 'Men', icon: 'user' },
    { id: 'women', label: 'Women', icon: 'user-check' }
];

const products = {
    'automobiles': [
        { id: 'a1', name: 'Bikes', icon: 'bike' },
        { id: 'a2', name: 'Cars', icon: 'car' },
        { id: 'a3', name: 'Helmets', icon: 'shield' },
        { id: 'a4', name: 'Bike Accessories', icon: 'settings' },
        { id: 'a5', name: 'Car Accessories', icon: 'wrench' },
        { id: 'a6', name: 'EV', icon: 'zap' }
    ],
    'watches': [
        { id: 'w1', name: 'Smart Watch', icon: 'watch' },
        { id: 'w2', name: 'Analog Watch', icon: 'clock' },
        { id: 'w3', name: 'Digital Watch', icon: 'timer' },
        { id: 'w4', name: 'Digi-Log Watch', icon: 'watch' },
        { id: 'w5', name: 'Vintage Series', icon: 'pocket-watch' } // pocket-watch might not exist in all sets, falling back to 'watch' if needed or check docs. Lucide has 'watch'. 
    ],
    'electronics': [
        { id: 'e1', name: 'Television', icon: 'tv' },
        { id: 'e2', name: 'Mobile', icon: 'smartphone' },
        { id: 'e3', name: 'Laptop', icon: 'laptop' },
        { id: 'e4', name: 'Gaming', icon: 'gamepad-2' },
        { id: 'e5', name: 'Camera', icon: 'camera' },
        { id: 'e6', name: 'Headphones', icon: 'headphones' },
        { id: 'e7', name: 'Monitor', icon: 'monitor' },
        { id: 'e8', name: 'Speaker', icon: 'speaker' }
    ],
    'appliances': [
        { id: 'ha1', name: 'Refrigerator', icon: 'box' }, // refrigerator icon not standard, using box or snowflake
        { id: 'ha2', name: 'AC', icon: 'wind' },
        { id: 'ha3', name: 'Washing Machine', icon: 'washing-machine' }, // checking availability, substitute with droplets if needed
        { id: 'ha4', name: 'Dish Washer', icon: 'droplets' },
        { id: 'ha5', name: 'Air Fryer', icon: 'flame' },
        { id: 'ha6', name: 'Kitchen Supplies', icon: 'utensils' },
        { id: 'ha7', name: 'Air Purifier', icon: 'fan' }
    ],
    'bags_footwear': [
        { id: 'bf1', name: 'Womens Footwear', icon: 'footprints' },
        { id: 'bf2', name: 'Mens Footwear', icon: 'footprints' },
        { id: 'bf3', name: 'Kids Footwear', icon: 'footprints' },
        { id: 'bf4', name: 'Women Bags', icon: 'shopping-bag' },
        { id: 'bf5', name: 'Men Bags', icon: 'briefcase' },
        { id: 'bf6', name: 'Travel Bags', icon: 'luggage' }
    ],
    'home_decor': [
        { id: 'hd1', name: 'Wood Furniture', icon: 'sofa' },
        { id: 'hd2', name: 'Kitchen Storage', icon: 'package' },
        { id: 'hd3', name: 'Home Textile', icon: 'layers' },
        { id: 'hd4', name: 'Bedroom Accessories', icon: 'bed' }
    ],
    'fitness': [
        { id: 'f1', name: 'Treadmill', icon: 'activity' },
        { id: 'f2', name: 'Fitness Bike', icon: 'bike' },
        { id: 'f3', name: 'Walking Pods', icon: 'footprints' },
        { id: 'f4', name: 'Weights', icon: 'dumbbell' },
        { id: 'f5', name: 'Home Gym', icon: 'home' },
        { id: 'f6', name: 'Gym Accessories', icon: 'circle' }
    ],
    'sports': [
        { id: 's1', name: 'Cricket', icon: 'circle-dot' }, // ball
        { id: 's2', name: 'Football', icon: 'disc' },
        { id: 's3', name: 'Badminton', icon: 'feather' },
        { id: 's4', name: 'Swimming', icon: 'waves' },
        { id: 's5', name: 'Table Tennis', icon: 'circle' },
        { id: 's6', name: 'Boxing', icon: 'swords' } // approximation
    ],
    'kids': [
        { id: 'k1', name: 'Girls Clothing', icon: 'shirt' },
        { id: 'k2', name: 'Boys Clothing', icon: 'shirt' },
        { id: 'k3', name: 'Baby Care', icon: 'heart' },
        { id: 'k4', name: 'Kids Toys', icon: 'puzzle' } // puzzle piece
    ],
    'pets': [
        { id: 'p1', name: 'Dog Food', icon: 'bone' },
        { id: 'p2', name: 'Cat Food', icon: 'fish' },
        { id: 'p3', name: 'Birds', icon: 'feather' },
        { id: 'p4', name: 'Aquarium', icon: 'droplets' }
    ],
    'men': [
        { id: 'm1', name: 'Top Wear', icon: 'shirt' },
        { id: 'm2', name: 'Bottom Wear', icon: 'scissors' }, // approximation for tailored
        { id: 'm3', name: 'Inner Wear', icon: 'layers' },
        { id: 'm4', name: 'Ethnic Wear', icon: 'star' },
        { id: 'm5', name: 'Sports Wear', icon: 'activity' },
        { id: 'm6', name: 'Winter Wear', icon: 'thermometer-snowflake' },
        { id: 'm7', name: 'Accessories', icon: 'watch' }
    ],
    'women': [
        { id: 'wm1', name: 'Top Wear', icon: 'shirt' },
        { id: 'wm2', name: 'Bottom Wear', icon: 'scissors' },
        { id: 'wm3', name: 'Inner Wear', icon: 'layers' },
        { id: 'wm4', name: 'Ethnic Wear', icon: 'star' },
        { id: 'wm5', name: 'Sports Wear', icon: 'activity' },
        { id: 'wm6', name: 'Accessories', icon: 'shopping-bag' }
    ]
};

// DOM Elements
const categoryNav = document.querySelector('.category-nav');
const productGrid = document.querySelector('.product-grid');
const categoryTitle = document.getElementById('category-title');

// Render Sidebar
function renderSidebar() {
    categoryNav.innerHTML = categories.map((cat, index) => `
        <div class="nav-item ${index === 0 ? 'active' : ''}" data-id="${cat.id}">
            <div class="nav-icon"><i data-lucide="${cat.icon}"></i></div>
            <span class="nav-label">${cat.label}</span>
        </div>
    `).join('');
    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    addNavListeners();
}

// Render Products
function renderProducts(categoryId) {
    const items = products[categoryId] || [];
    const category = categories.find(c => c.id === categoryId);

    if (category) {
        categoryTitle.textContent = category.label;
    }

    productGrid.innerHTML = items.map(item => `
        <div class="product-card">
            <div class="product-icon"><i data-lucide="${item.icon}" size="32"></i></div>
            <span class="product-label">${item.name}</span>
        </div>
    `).join('');

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Add Click Listeners
function addNavListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked
            item.classList.add('active');

            // Render content
            const catId = item.getAttribute('data-id');
            renderProducts(catId);
        });
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    // Load the first category ('automobiles') by default
    renderProducts('automobiles');
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}// ===== Theme Toggle (FIXED) =====
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (!themeToggle || !themeIcon) return;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeIcon.setAttribute("data-lucide", "sun");
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
        lucide.createIcons();
    });
});


