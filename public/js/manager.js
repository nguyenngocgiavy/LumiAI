// ==========================================================================
// MÃ NGUỒN XỬ LÝ GIAO DIỆN QUẢN LÝ RẠP (MANAGER)
// ==========================================================================

// --- CHUYỂN TAB TRONG MANAGER DASHBOARD ---
function switchMpTab(tabId) {
    // 1. Ẩn tất cả nội dung tab
    document.querySelectorAll('.mp-tab-section').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });
    
    // 2. Gỡ highlight tất cả item trên sidebar
    document.querySelectorAll('.mp-nav-item').forEach(nav => {
        nav.classList.remove('active');
    });

    // 3. Kích hoạt tab và menu tương ứng được chọn
    const targetTab = document.getElementById('mp-tab-' + tabId);
    const targetNav = document.getElementById('mp-nav-' + tabId);
    
    if (targetTab) {
        targetTab.style.display = 'block';
        targetTab.classList.add('active');
    }
    if (targetNav) targetNav.classList.add('active');

    // 4. Cập nhật động Tiêu đề header trên cùng
    const titleElement = document.getElementById('mp-dynamic-title');
    if (titleElement) {
        if (tabId === 'dashboard') titleElement.innerText = "Tổng quan hoạt động rạp";
        else if (tabId === 'movies') titleElement.innerText = "Quản lý Danh mục Phim";
        else if (tabId === 'matrix') titleElement.innerText = "Ma trận Lịch chiếu";
        else if (tabId === 'fnb') titleElement.innerText = "Quản lý Kho F&B"; 
        else if (tabId === 'promo') titleElement.innerText = "Quản lý Chiến dịch Khuyến mãi";
        else if (tabId === 'audit') titleElement.innerText = "Báo cáo và Kiểm toán Tài chính";
        else titleElement.innerText = "Chức năng đang phát triển...";
    }
}

// --- XỬ LÝ MODAL XÓA PHIM CỦA MANAGER ---
function openMpDeleteModal() {
    const deleteModal = document.getElementById('mp-delete-modal');
    if (deleteModal) deleteModal.classList.add('open');
}

function closeMpDeleteModal() {
    const deleteModal = document.getElementById('mp-delete-modal');
    if (deleteModal) deleteModal.classList.remove('open');
}
// --- XỬ LÝ MODAL THÊM VOUCHER CỦA MANAGER ---

function openCreatePromoModal() { document.getElementById('mp-create-promo-modal').classList.add('open'); }
    function closeCreatePromoModal() { document.getElementById('mp-create-promo-modal').classList.remove('open'); }