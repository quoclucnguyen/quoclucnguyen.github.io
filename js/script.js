/* =============================================
   PORTFOLIO — INTERACTIONS & DATA
   ============================================= */

// ─── Project Data ───
const projects = [
    {
        id: 1,
        name: 'Bonito',
        client: 'Wavenet HQ',
        clientGroup: 'wavenet',
        timeframe: '06/2025 – 12/2025',
        year: 2025,
        role: 'Full-Stack Developer',
        team: '5 thành viên (3 Web, 2 AI Services)',
        context: 'Nền tảng phân tích dữ liệu mạng xã hội (Social Listening) — theo dõi và đánh giá phản ứng cộng đồng theo thời gian thực.',
        impacts: [
            'Xây dựng toàn bộ ứng dụng và hệ thống Backend',
            'Phát triển luồng dữ liệu real-time hiển thị phản ứng từ internet',
            'Tối ưu giao tiếp giữa Web và AI Services'
        ],
        tech: ['NestJS', 'ReactJS', 'MySQL']
    },
    {
        id: 2,
        name: 'OMO — Online Merge Offline',
        client: 'Wavenet HQ',
        clientGroup: 'wavenet',
        timeframe: '02/2025 – 06/2025',
        year: 2025,
        role: 'Full-Stack Developer',
        team: '3 thành viên',
        context: 'Ứng dụng tích hợp hệ sinh thái Shopify — đồng bộ dữ liệu bán hàng giữa cửa hàng online và offline.',
        impacts: [
            'Xây dựng cầu nối dữ liệu giải quyết phân mảnh thông tin',
            'Đồng bộ tồn kho, đơn hàng và khách hàng liền mạch',
            'Giúp merchant kiểm soát toàn bộ kênh bán hàng'
        ],
        tech: ['NestJS', 'ReactJS', 'Remix', 'MySQL', 'Redis']
    },
    {
        id: 3,
        name: 'FMS — Field Management System',
        client: 'OUTCOME MARKETING',
        clientGroup: 'outcome',
        timeframe: '10/2023 – 12/2024',
        year: 2023,
        role: 'Full-Stack Developer',
        team: '3 thành viên (1 Backend, 1 Frontend, 1 Mobile)',
        context: 'Hệ thống quản lý chiến dịch quy mô lớn (Sabeco PA MT Tet, Malto, Sting, Rockstar, Boss Coffee...) — xử lý dữ liệu PG/PB, báo cáo hình ảnh và doanh số.',
        impacts: [
            'Thiết kế kiến trúc DB và hệ thống Admin CMS tập trung',
            'RESTful API ổn định cho Mobile app chấm công, báo cáo hiện trường',
            'Tự động hóa toàn bộ quy trình quản lý sự kiện và quảng bá'
        ],
        tech: ['NestJS', 'ReactJS', 'MySQL', 'Flutter']
    },
    {
        id: 4,
        name: 'CellphoneS Campus Tour',
        client: 'CellphoneS',
        clientGroup: 'cellphones',
        timeframe: '07/2023 – 09/2023',
        year: 2023,
        role: 'Full-Stack Developer',
        team: '2 thành viên (1 Backend, 1 Frontend)',
        context: 'Ứng dụng hướng dẫn sinh viên trong chuỗi sự kiện Campus Tour — giới thiệu tiện ích, sự kiện và khuyến mãi.',
        impacts: [
            'Thiết kế DB và Admin CMS cập nhật real-time',
            'RESTful API hiệu suất cao cho trải nghiệm mượt mà'
        ],
        tech: ['NestJS', 'React', 'MySQL']
    },
    {
        id: 5,
        name: 'MOS — Marketing Operating System',
        client: 'OUTCOME MARKETING',
        clientGroup: 'outcome',
        timeframe: '10/2022 – 12/2023',
        year: 2022,
        role: 'Full-Stack Developer',
        team: '5 thành viên (2 Backend, 2 Frontend, 1 Mobile)',
        context: 'Hệ thống quản lý tài sản vật lý (tủ lạnh Coca-Cola) tại điểm bán — theo dõi doanh số, thu thập hình ảnh, quản lý nhân sự.',
        impacts: [
            'Thiết kế cấu trúc dữ liệu phức tạp ánh xạ tài sản với điểm bán',
            'Chuẩn hóa quy trình báo cáo hiện trường (chấm công, ảnh, doanh số)',
            'Kiểm soát trưng bày tài sản, chống gian lận tại điểm bán'
        ],
        tech: ['Node.js', 'React', 'MySQL']
    },
    {
        id: 6,
        name: 'FIELD CHECK',
        client: 'OUTCOME MARKETING',
        clientGroup: 'outcome',
        timeframe: '06/2022 – 05/2023',
        year: 2022,
        role: 'Full-Stack Developer',
        team: '2 thành viên (1 Fullstack, 1 Mobile)',
        context: 'Hệ thống Audit đánh giá địa điểm chạy chương trình khuyến mãi và chấm điểm nhân viên theo tiêu chí động.',
        impacts: [
            'Admin CMS linh hoạt — tự định nghĩa tiêu chí chấm điểm không cần code',
            'Biểu mẫu đánh giá động cho Mobile Audit team',
            'Tăng tính linh hoạt, thích ứng nhanh với thay đổi chiến dịch'
        ],
        tech: ['NestJS', 'React', 'MySQL']
    },
    {
        id: 7,
        name: 'SP FESTIVE 2022',
        client: 'Heineken',
        clientGroup: 'heineken',
        timeframe: '08/2021 – 08/2022',
        year: 2021,
        role: 'Backend Developer',
        team: '5 thành viên (1 Backend, 1 Frontend, 3 Mobile)',
        context: 'Hệ thống quản lý sự kiện quy mô lớn — nhân sự, hoạt động điểm bán, thu thập dữ liệu khách hàng, đổi quà tặng và quản lý kho vận.',
        impacts: [
            'Thiết kế DB quy mô lớn cho nhiều luồng nghiệp vụ đồng thời',
            'Xây dựng GraphQL server tối ưu truy vấn, giảm over-fetching',
            'Đảm bảo luồng đổi quà và tồn kho chính xác, chống thất thoát'
        ],
        tech: ['NestJS', 'React', 'MySQL', 'GraphQL']
    },
    {
        id: 8,
        name: 'SP FESTIVE 2021',
        client: 'Heineken',
        clientGroup: 'heineken',
        timeframe: '06/2020 – 05/2021',
        year: 2020,
        role: 'Fullstack Developer',
        team: '4 thành viên (1 Fullstack, 3 Mobile)',
        context: 'Phiên bản tiền nhiệm Festive 2022 — điều phối nhân sự, đổi quà và quản lý kho vận tại điểm bán.',
        impacts: [
            'Một mình đảm nhiệm toàn bộ Backend và Admin CMS',
            'Số hóa toàn bộ quy trình chạy sự kiện truyền thống của Heineken'
        ],
        tech: ['PHP', 'Yii2', 'MySQL']
    },
    {
        id: 9,
        name: 'SP TOFTT',
        client: 'Heineken',
        clientGroup: 'heineken',
        timeframe: '12/2020 – 02/2021',
        year: 2020,
        role: 'Fullstack Developer',
        team: '4 thành viên (2 Fullstack, 2 Mobile)',
        context: 'Hệ thống quản lý sự kiện — luồng đổi quà qua hóa đơn mua hàng và thu thập thông tin khách hàng tại điểm bán.',
        impacts: [
            'Xây dựng Admin CMS và API điều phối nhân sự',
            'Logic xác thực hóa đơn và quy trình đổi quà minh bạch'
        ],
        tech: ['PHP', 'Yii2', 'MySQL']
    },
    {
        id: 10,
        name: 'SITE CHECK',
        client: 'Heineken',
        clientGroup: 'heineken',
        timeframe: '04/2020 – 04/2021',
        year: 2020,
        role: 'Full-Stack Developer',
        team: '2 thành viên (1 Fullstack, 1 Mobile)',
        context: 'Hệ thống thu thập, xác minh và làm sạch dữ liệu thông tin cửa hàng — chuẩn bị Master Data cho các chiến dịch sau.',
        impacts: [
            'Xây dựng Backend và CMS xử lý, đối soát dữ liệu từ Mobile',
            'Tạo nguồn Master Data sạch — tiền đề cho các chiến dịch tiếp theo'
        ],
        tech: ['PHP', 'Yii2', 'MySQL']
    }
];

// ─── Client class mapping ───
const clientClasses = {
    wavenet: 'client-wavenet',
    outcome: 'client-outcome',
    heineken: 'client-heineken',
    cellphones: 'client-cellphones'
};

// ─── Render Functions ───

function renderGrid(filteredProjects) {
    const grid = document.getElementById('projectGrid');
    grid.innerHTML = filteredProjects.map((p, i) => `
        <div class="project-card" style="animation-delay: ${i * 0.08}s" data-group="${p.clientGroup}">
            <div class="card-header">
                <span class="card-client ${clientClasses[p.clientGroup]}">${p.client}</span>
                <span class="card-time">${p.timeframe}</span>
            </div>
            <h3 class="card-name">${p.name}</h3>
            <p class="card-role">${p.role} | ${p.team}</p>
            <p class="card-context">${p.context}</p>
            <div class="card-impact">
                <div class="card-impact-title">Tác động</div>
                <ul>${p.impacts.map(imp => `<li>${imp}</li>`).join('')}</ul>
            </div>
            <div class="card-tech">
                ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderTimeline(filteredProjects) {
    const timeline = document.getElementById('projectTimeline');
    const sorted = [...filteredProjects].sort((a, b) => a.year - b.year);

    let html = '<div class="timeline-line"></div>';
    let currentYear = null;

    sorted.forEach((p, i) => {
        if (p.year !== currentYear) {
            currentYear = p.year;
            html += `<div class="timeline-year-marker"><span>${p.year}</span></div>`;
        }
        html += `
            <div class="timeline-item" style="animation-delay: ${i * 0.1}s">
                <div class="timeline-node"></div>
                <div class="timeline-card">
                    <span class="card-client ${clientClasses[p.clientGroup]}">${p.client}</span>
                    <h3 class="card-name">${p.name}</h3>
                    <p class="card-time" style="margin-bottom:6px">${p.timeframe}</p>
                    <p class="card-role">${p.role}</p>
                    <p class="card-context">${p.context}</p>
                    <div class="card-tech" style="margin-top:10px">
                        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    timeline.innerHTML = html;
}

// ─── Filter Logic ───

let currentFilter = 'all';
let currentView = 'grid';

function applyFilter(filter) {
    currentFilter = filter;
    const filtered = filter === 'all' ? projects : projects.filter(p => p.clientGroup === filter);

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    if (currentView === 'grid') {
        renderGrid(filtered);
    } else {
        renderTimeline(filtered);
    }
}

function switchView(view) {
    currentView = view;

    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    const grid = document.getElementById('projectGrid');
    const timeline = document.getElementById('projectTimeline');

    const filtered = currentFilter === 'all' ? projects : projects.filter(p => p.clientGroup === currentFilter);

    if (view === 'grid') {
        grid.classList.remove('hidden');
        timeline.classList.add('hidden');
        renderGrid(filtered);
    } else {
        grid.classList.add('hidden');
        timeline.classList.remove('hidden');
        renderTimeline(filtered);
    }
}

// ─── Typing Effect ───

function typeText(element, texts, typeSpeed = 80, deleteSpeed = 40, pauseDuration = 2000) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
        const current = texts[textIndex];
        if (isDeleting) {
            element.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === current.length) {
            delay = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            delay = 500;
        }

        setTimeout(tick, delay);
    }

    tick();
}

// ─── Counter Animation ───

function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        if (el.dataset.animated) return;
        const target = parseInt(el.dataset.target);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(update);
        }

        el.dataset.animated = 'true';
        requestAnimationFrame(update);
    });
}

// ─── Scroll Reveal ───

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger counters when about section is visible
                if (entry.target.closest('.about')) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Skills Progress Bar ───

function initProgressBar() {
    const track = document.querySelector('.progress-fill');
    if (!track) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                track.style.width = '100%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(track.parentElement);
}

// ─── Navigation ───

function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const navLinkEls = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });

    // Close menu on link click
    navLinkEls.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            links.classList.remove('open');
        });
    });

    // Active link tracking
    const sections = document.querySelectorAll('.section');
    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinkEls.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(s => observerNav.observe(s));
}

// ─── Init ───

document.addEventListener('DOMContentLoaded', () => {
    // Render projects
    renderGrid(projects);

    // Typing effect
    const typingEl = document.getElementById('typingText');
    if (typingEl) {
        typeText(typingEl, [
            'Full-Stack Developer',
            'Database Architect',
            'Backend Specialist',
            'System Builder'
        ]);
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // Init systems
    initScrollReveal();
    initProgressBar();
    initNavigation();
});
