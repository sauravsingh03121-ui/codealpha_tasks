// Sample image data with categories (using Unsplash for aesthetic images)
const images = [
    // Nature (unique images)
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', category: 'nature', alt: 'Beautiful landscape' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', category: 'nature', alt: 'Forest view' },
    { src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop', category: 'nature', alt: 'Beach' },
    { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400&h=300&fit=crop', category: 'nature', alt: 'Lake reflection' },
    { src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop', category: 'nature', alt: 'Autumn forest' },

    // Animals (unique images)
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'animals', alt: 'Cute animal' },
    { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop', category: 'animals', alt: 'Wildlife' },
    { src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop', category: 'animals', alt: 'Pet' },
    { src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop', category: 'animals', alt: 'Bird' },

    // City (unique images)
    { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop', category: 'city', alt: 'Urban scene' },
    { src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop', category: 'city', alt: 'Skyline' },
    { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop', category: 'city', alt: 'Street' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop', category: 'city', alt: 'Building' },

    // Mountains (unique images)
    { src: 'https://images.unsplash.com/photo-1464822759844-d150f38e8b0?w=400&h=300&fit=crop', category: 'mountains', alt: 'Mountain' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', category: 'mountains', alt: 'Mountain landscape' },
];

let currentImageIndex = 0;
let filteredImages = [...images];

// DOM elements
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const filterBtnLightbox = document.querySelectorAll('.filter-btn-lightbox');

// Initialize gallery
function initGallery() {
    renderGallery(filteredImages);
}

// Render gallery items
function renderGallery(imageArray) {
    gallery.innerHTML = '';
    imageArray.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" data-index="${index}">
            <div class="overlay">
                <p>${image.alt}</p>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(galleryItem);
    });
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = filteredImages[currentImageIndex].src;
    lightboxImg.alt = filteredImages[currentImageIndex].alt;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    lightboxImg.src = filteredImages[currentImageIndex].src;
    lightboxImg.alt = filteredImages[currentImageIndex].alt;
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    lightboxImg.src = filteredImages[currentImageIndex].src;
    lightboxImg.alt = filteredImages[currentImageIndex].alt;
}

// Filter images by category
function filterImages(category) {
    if (category === 'all') {
        filteredImages = [...images];
    } else {
        filteredImages = images.filter(image => image.category === category);
    }
    renderGallery(filteredImages);
    currentImageIndex = 0; // Reset to first image in filtered list
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterImages(btn.dataset.category);
    });
});

// Apply image filter
function applyImageFilter(filter) {
    if (filter === 'none') {
        lightboxImg.style.filter = 'none';
    } else {
        lightboxImg.style.filter = filter;
    }
}

// Event listeners for lightbox filters
filterBtnLightbox.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtnLightbox.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyImageFilter(btn.dataset.filter);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('show')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
