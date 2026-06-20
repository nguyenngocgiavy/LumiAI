function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-nav-item').forEach(item => item.classList.remove('active'));
    const activeNav = document.getElementById('nav-admin-' + tabName);
    if(activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.admin-tab-section').forEach(section => section.style.display = 'none');
    const activeTab = document.getElementById('admin-tab-' + tabName);
    if(activeTab) activeTab.style.display = 'block';

    if(tabName === 'ban') renderAdminBanList();
    if(tabName === 'syslog') renderAdminSysLog();
    if(tabName === 'faq') renderAdminFaq();
    if(tabName === 'webhook') renderAdminWebhook();
    if(tabName === 'db') renderAdminDbBackups();
}

function renderAdminBanList() {
    const tbody = document.getElementById('admin-ban-tbody');
    if (!tbody) return;
    const users = [
        { id: "USR-001", email: "hoang.nguyen@las.vn", role: "Manager", status: "Active" },
        { id: "USR-002", email: "nhanvien1@las.vn", role: "Staff", status: "Active" },
        { id: "USR-003", email: "khachhang_scam@gmail.com", role: "Customer", status: "Banned" }
    ];
    tbody.innerHTML = users.map(u => {
        const badge = u.status === 'Active' ? '<span class="status-badge status-now">Hoạt động</span>' : '<span class="status-badge" style="background:#e71a0f;">Bị khóa</span>';
        const action = u.status === 'Active' ? '<button class="btn-admin-action delete">Khóa (Ban)</button>' : '<button class="btn-admin-action edit">Mở (Unban)</button>';
        return `<tr><td>${u.id}</td><td><b>${u.email}</b></td><td>${u.role}</td><td>${badge}</td><td>${action}</td></tr>`;
    }).join('');
}

function renderAdminSysLog() {
    const tbody = document.getElementById('admin-syslog-tbody');
    if (!tbody) return;
    const logs = [
        { time: "10:01:45 20/06", action: "Đăng nhập hệ thống", user: "Manager (hoang.nguyen)", status: '<span style="color:green;">Thành công</span>' },
        { time: "09:45:12 20/06", action: "Tạo suất chiếu phim X", user: "System", status: '<span style="color:red;">Thất bại (Trùng lịch)</span>' },
        { time: "09:30:00 20/06", action: "Hủy đơn hàng ID 123", user: "System", status: '<span style="color:orange;">Hết TG giữ ghế</span>' }
    ];
    tbody.innerHTML = logs.map(l => `<tr><td>${l.time}</td><td>${l.action}</td><td>${l.user}</td><td>${l.status}</td></tr>`).join('');
}

function renderAdminFaq() {
    const tbody = document.getElementById('admin-faq-tbody');
    if (!tbody) return;
    const faqs = [
        { q: "Làm sao để phân biệt độ tuổi?", a: "Mang theo CCCD/Thẻ HS để chứng thực..." },
        { q: "Mua bắp nước online được không?", a: "Có, bạn có thể mua qua mục LAS Combo..." }
    ];
    tbody.innerHTML = faqs.map(f => `<tr><td><b>${f.q}</b></td><td>${f.a}</td><td><button class="btn-admin-action edit">Sửa</button><button class="btn-admin-action delete">Xóa</button></td></tr>`).join('');
}

function renderAdminWebhook() {
    const tbody = document.getElementById('admin-webhook-tbody');
    if (!tbody) return;
    const hooks = [
        { time: "10:05:00", source: "VNPAY", payload: '{"orderId":"LAS-5512","status":"00"}', http: '<span style="color:green;font-weight:bold;">200 OK</span>' },
        { time: "09:12:33", source: "MoMo", payload: '{"orderId":"LAS-4421","status":"11"}', http: '<span style="color:red;font-weight:bold;">400 Bad Req</span>' }
    ];
    tbody.innerHTML = hooks.map(h => `<tr><td>${h.time}</td><td><b>${h.source}</b></td><td style="font-family:monospace; color:#555;">${h.payload}</td><td>${h.http}</td></tr>`).join('');
}

function renderAdminDbBackups() {
    const tbody = document.getElementById('admin-db-tbody');
    if (!tbody) return;
    const backups = [
        { ver: "LAS_DB_v1.0.2", date: "19/06/2026 23:59", size: "145.2 MB", type: "Tự động" },
        { ver: "LAS_DB_v1.0.1", date: "18/06/2026 15:30", size: "144.8 MB", type: "Thủ công" }
    ];
    tbody.innerHTML = backups.map(b => `<tr><td><b>${b.ver}</b></td><td>${b.date}</td><td>${b.size}</td><td>${b.type}</td><td><button class="btn-admin-action edit">Phục hồi (Restore)</button></td></tr>`).join('');
}