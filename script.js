
document.addEventListener('DOMContentLoaded', function() {
    // Gallery data with artist information
    const galleryData = [
        {
            img: 'all/day11.jpg',
            title: 'ALL no 001',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day12.jpg',
            title: 'ALL no 002',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day13.jpg',
            title: 'ALL no 003',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day14.jpg',
            title: 'ALL no 004',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day15.jpg',
            title: 'ALL no 005',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day21.jpg',
            title: 'ALL no 006',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day22.jpg',
            title: 'ALL no 007',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day23.jpg',
            title: 'ALL no 008',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day24.jpg',
            title: 'ALL no 009',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day25.jpg',
            title: 'ALL no 010',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day26.jpg',
            title: 'ALL no 011',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day31.jpg',
            title: 'ALL no 012',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day16.jpg',
            title: 'ALL no 013',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day27.jpg',
            title: 'ALL no 014',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day28.jpg',
            title: 'ALL no 015',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day29.jpg',
            title: 'ALL no 016',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day210.jpg',
            title: 'ALL no 017',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day17.jpg',
            title: 'ALL no 018',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day18.jpg',
            title: 'ALL no 019',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day19.jpg',
            title: 'ALL no 020',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day110.jpg',
            title: 'ALL no 021',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day111.jpg',
            title: 'ALL no 022',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day211.jpg',
            title: 'ALL no 023',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day212.jpg',
            title: 'ALL no 024',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day213.jpg',
            title: 'ALL no 025',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day214.jpg',
            title: 'ALL no 026',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day215.jpg',
            title: 'ALL no 027',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day216.jpg',
            title: 'ALL no 028',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day217.jpg',
            title: 'ALL no 029',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day218.jpg',
            title: 'ALL no 030',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day219.jpg',
            title: 'ALL no 031',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day32.jpg',
            title: 'ALL no 032',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'all/day33.jpg',
            title: 'ALL no 033',
            artist: 'all', // hoặc bất kỳ giá trị nào bạn muốn
            category: 'special',
            onlyAll: true // Thêm thuộc tính này
        },
        {
            img: 'Duong/day01.jpg',
            title: 'HD no 001',
            artist: 'duong',
            category: 'day1'
        },
        {
            img: 'Duong/day11.jpg',
            title: 'HD no 002',
            artist: 'duong',
            category: 'day1'
        },
        {
            img: 'Duong/day21.jpg',
            title: 'HD no 003',
            artist: 'duong',
            category: 'day2'
        },
        {
            img: 'Duong/day22.jpg',
            title: 'HD no 004',
            artist: 'duong',
            category: 'day2'
        },
        {
            img: 'Duong/day23.jpg',
            title: 'HD no 005',
            artist: 'duong',
            category: 'day2'
        },
        {
            img: 'Duong/day24.jpg',
            title: 'HD no 006',
            artist: 'duong',
            category: 'day2'
        },
        {
            img: 'Duong/day25.jpg',
            title: 'HD no 007',
            artist: 'duong',
            category: 'day2'
        },
        {
            img: 'Duong/day31.jpg',
            title: 'HD no 008',
            artist: 'duong',
            category: 'day3'
        },
        {
            img: 'Duong/day32.jpg',
            title: 'HD no 009',
            artist: 'duong',
            category: 'day3'
        },
        {
            img: 'Anh/day01.jpg',
            title: 'DA no 001',
            artist: 'duyanh',
            category: 'day1'
        },
        {
            img: 'Anh/day11.jpg',
            title: 'DA no 002',
            artist: 'duyanh',
            category: 'day1'
        },
        {
            img: 'Anh/day21.jpg',
            title: 'DA no 003',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day22.jpg',
            title: 'DA no.004',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day23.jpg',
            title: 'DA no.005',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day24.jpg',
            title: 'DA no.006',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day25.jpg',
            title: 'DA no.007',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day26.jpg',
            title: 'DA no.008',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day27.jpg',
            title: 'DA no.009',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day28.jpg',
            title: 'DA no.010',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day29.jpg',
            title: 'DA no.011',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day211.jpg',
            title: 'DA no.012',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day212.jpg',
            title: 'DA no.013',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day213.jpg',
            title: 'DA no.014',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day214.jpg',
            title: 'DA no.015',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day215.jpg',
            title: 'DA no.016',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day216.jpg',
            title: 'DA no.017',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day217.jpg',
            title: 'DA no.018',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day218.jpg',
            title: 'DA no.019',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day31.jpg',
            title: 'DA no.020',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day32.jpg',
            title: 'DA no.021',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day33.jpg',
            title: 'DA no.022',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Anh/day34.jpg',
            title: 'DA no.023',
            artist: 'duyanh',
            category: 'day2'
        },
        {
            img: 'Han/day31.jpg',
            title: 'NH no.023',
            artist: 'ngochan',
            category: 'day3'
        },

    ];

    const downloadBtn = document.querySelector('.download-btn')
    const gallery = document.querySelector('.gallery');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const artistBios = document.querySelectorAll('.artist-bio');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentImageIndex = 0;
    let filteredItems = [];
    let currentFilter = 'all';

    // Initialize gallery
    function initGallery() {
        const artistCounts = {
            linh: 0,
            duong: 0,
            khanh: 0,
            duyanh: 0,
            baongoc: 0,
            tungvan: 0,
            ngochan: 0
        };

        // Count works for each artist
        galleryData.forEach(item => {
            if (artistCounts.hasOwnProperty(item.artist)) {
                artistCounts[item.artist]++;
            }
        });

        // Update works count
        document.getElementById('total-works').textContent = galleryData.length;
        document.getElementById('works-linh').textContent = artistCounts.linh;
        document.getElementById('works-duong').textContent = artistCounts.duong;
        document.getElementById('works-khanh').textContent = artistCounts.khanh;
        document.getElementById('works-duyanh').textContent = artistCounts.duyanh;
        document.getElementById('works-baongoc').textContent = artistCounts.baongoc;
        document.getElementById('works-tungvan').textContent = artistCounts.tungvan;
        document.getElementById('works-ngochan').textContent = artistCounts.ngochan;

        // Create gallery for each artist
        createArtistGallery('all', galleryData);
        createArtistGallery('linh', galleryData.filter(item => item.artist === 'linh'));
        createArtistGallery('duong', galleryData.filter(item => item.artist === 'duong'));
        createArtistGallery('khanh', galleryData.filter(item => item.artist === 'khanh'));
        createArtistGallery('duyanh', galleryData.filter(item => item.artist === 'duyanh'));
        createArtistGallery('baongoc', galleryData.filter(item => item.artist === 'baongoc'));
        createArtistGallery('tungvan', galleryData.filter(item => item.artist === 'tungvan'));
        createArtistGallery('ngochan', galleryData.filter(item => item.artist === 'ngochan'));
    }

    function createArtistGallery(artistId, items) {
        const galleryContainer = document.getElementById(`gallery-${artistId}`);
        galleryContainer.innerHTML = '';
        
        // Nếu không phải là 'all', thì lọc bỏ các item có onlyAll: true
        const filteredItems = artistId === 'all' ? items : items.filter(item => !item.onlyAll);
        
        filteredItems.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${item.category}`;
            galleryItem.setAttribute('data-index', galleryData.indexOf(item));
            
            galleryItem.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="overlay">
                    <h3>${item.title}</h3>
                    <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>
            `;
            
            galleryItem.addEventListener('click', () => openLightbox(galleryData.indexOf(item)));
            galleryContainer.appendChild(galleryItem);
        });
    }
    // Get artist name from ID
    function getArtistName(artistId) {
        const names = {
            'linh': 'Lê Ngọc Bảo Linh',
            'duong': 'Nguyễn Hồng Dương',
            'khanh': 'Nguyễn Ngân Khánh',
            'duyanh': 'Trịnh Ngọc Duy Anh',
            'baongoc': 'Phạm Thị Bảo Ngọc',
            'tungvan': 'Vũ Đỗ Tùng Vân',
            'ngochan': 'Lê Ngọc Hân'
        };
        return names[artistId] || 'Unknown Artist';
    }

    // Filter gallery items by artist
    function filterGallery(artistId) {
        currentFilter = artistId;
        
        // Update active button
        filterButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.filter === artistId);
        });
        
        // Update artist bio
        artistBios.forEach(bio => {
            if (bio.dataset.artist === artistId) {
                bio.classList.add('active');
                // Scroll to the selected artist's gallery
                bio.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                bio.classList.remove('active');
            }
        });
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = getFilteredIndex(index);
        const item = galleryData[currentImageIndex];
        lightboxImg.src = item.img;
        lightboxCaption.textContent = `${item.title} by ${getArtistName(item.artist)}`;
        downloadBtn.style.display = 'block'; // Hiển thị nút tải ảnh
        downloadBtn.setAttribute('href', item.img); // Đặt href cho nút tải ảnh
        downloadBtn.setAttribute('download', item.title); // Đặt tên file cho ảnh tải về
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    downloadBtn.addEventListener('click', function() {
        const item = galleryData[currentImageIndex];
        const link = document.createElement('a');
        link.href = item.img;
        link.download = item.title; // Tên file khi tải về
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Get filtered index
    function getFilteredIndex(index) {
        if (currentFilter === 'all') return index;
        
        const filteredData = galleryData.filter(item => item.artist === currentFilter);
        const item = galleryData[index];
        return galleryData.indexOf(filteredData.find(filteredItem => 
            filteredItem.img === item.img && filteredItem.title === item.title
        ));
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        lightboxImg.classList.remove('zoomed');
        lightboxImg.style.transformOrigin = 'center center';
        isZoomed = false;
    }

    // Navigate to previous image
    function prevImage() {
        let newIndex = currentImageIndex - 1;
        if (newIndex < 0) {
            if (currentFilter === 'all') {
                newIndex = galleryData.length - 1;
            } else {
                const filteredData = galleryData.filter(item => item.artist === currentFilter);
                newIndex = filteredData.length - 1;
                currentImageIndex = galleryData.indexOf(filteredData[newIndex]);
                return;
            }
        }
        
        // Skip if filtered and not matching
        if (currentFilter !== 'all' && galleryData[newIndex].artist !== currentFilter) {
            prevImage();
            return;
        }
        
        currentImageIndex = newIndex;
        const item = galleryData[currentImageIndex];
        lightboxImg.src = item.img;
        lightboxCaption.textContent = `${item.title} by ${getArtistName(item.artist)}`;
    }

    // Navigate to next image
    function nextImage() {
        let newIndex = currentImageIndex + 1;
        if (newIndex >= galleryData.length) {
            if (currentFilter === 'all') {
                newIndex = 0;
            } else {
                newIndex = 0;
                const filteredData = galleryData.filter(item => item.artist === currentFilter);
                currentImageIndex = galleryData.indexOf(filteredData[newIndex]);
                const item = galleryData[currentImageIndex];
                lightboxImg.src = item.img;
                lightboxCaption.textContent = `${item.title} by ${getArtistName(item.artist)}`;
                return;
            }
        }
        
        // Skip if filtered and not matching
        if (currentFilter !== 'all' && galleryData[newIndex].artist !== currentFilter) {
            nextImage();
            return;
        }
        
        currentImageIndex = newIndex;
        const item = galleryData[currentImageIndex];
        lightboxImg.src = item.img;
        lightboxCaption.textContent = `${item.title} by ${getArtistName(item.artist)}`;
    }

    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => filterGallery(button.dataset.filter));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        }
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Initialize the gallery
    initGallery();
    let isZoomed = false;

    lightboxImg.addEventListener('click', function (e) {
        const rect = lightboxImg.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const percentX = (offsetX / rect.width) * 100;
        const percentY = (offsetY / rect.height) * 100;

        if (!isZoomed) {
            lightboxImg.classList.add('zoomed');
            lightboxImg.style.transformOrigin = `${percentX}% ${percentY}%`;
            isZoomed = true;
        } else {
            lightboxImg.classList.remove('zoomed');
            lightboxImg.style.transformOrigin = 'center center';
            isZoomed = false;
        }
    });

});