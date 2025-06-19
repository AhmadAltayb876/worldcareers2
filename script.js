let currentSearchType = 'jobs'; // القيمة الافتراضية
    // بيانات المهن
    let majors = [];
    let professions = [];
    let bestProfessions = [];
    let quizQuestions = []; // تعريف متغير فارغ سيتم ملؤه لاحقاً من الملف

document.addEventListener('DOMContentLoaded', function () {
    fetch('./jobs.json')
  .then(res => res.json())
  .then(data => {
    professions = data.professions;
    majors = data.majors;
    bestProfessions = data.bestProfessions;
    quizQuestions = data.quizQuestions;
    renderProfessions(professions);
    renderMajors(majors);
  })
  .catch(error => {
    console.error("فشل تحميل البيانات من jobs.json:", error);
  });

});
    // تعريف الماب (الربط) بين الفلاتر والمسميات
    const filterToCategoryMapping = {
    "الطب": ["الطب","هندسةوطب","العلوم والطب"],
    "الهندسة": ["الهندسة","الهندسة والطب","هندسة&AI","هندسة&IT","الهندسة والبناء","الهندسة والعلوم","الهندسة والزراعة","الهندسة والطاقة","الهندسة والفنون","الهندسة والنقل" , "الهندسة + الزراعة" , "الهندسة + AI" , "الهندسة + IT" , "الهندسة + النقل"],
    "IT & AI": ["النقل + IT","IT", "AI","هندسة&AI","هندسة&IT" , "الهندسة+ AI" , "الهندسة + IT"],
    "الأعمال": ["الأعمال","الأعمال والنقل" , "الأعمال + النقل"],
    "العلوم": ["الفيزياء", "الكيمياء", "علم الاحياء","العلوم" , "علوم","الهندسة والعلوم","العلوم والزراعة","العلوم والطب"],
    "القانون": ["القانون" , "الأمن"],
    "الزراعة": ["الزراعة","الهندسة والزراعة","العلوم والزراعة", "الهندسة + الزراعة"],
    "اللغات": ["اللغات" , "الآداب"],
    "النقل": ["النقل + IT","النقل" , "الهندسة + النقل" ,"الأعمال + النقل"],
    "الفنون": ["الفنون","الفنون وIT" , "التصميم" , "الفنون و التصميم"],
    "البناء": ["البناء","الهندسة والبناء" , "الرياضة" , "الطاقة" , "الإعلام" , "السياحة" , "الهندسة والطاقة","الهندسة والطاقة"],
    };

    // دالة تقوم بالربط حسب الفلتر
    function getCategoriesForFilter(filterName) {
    return filterToCategoryMapping[filterName] || [];
    }

    // مثال: كيف تستخدمها
    function filterProfessionsByFilterName(filterName) {
    const relatedCategories = getCategoriesForFilter(filterName);

    const filteredProfessions = professions.filter(profession =>
        relatedCategories.includes(profession.category)
    );

    // عرض النتائج
    renderProfessions(filteredProfessions);
    }
    function filterMajorsByFilterName(filterName) {
    const relatedFields = getCategoriesForFilter(filterName);

    const filteredMajors = majors.filter(major =>
        relatedFields.includes(major.field)
    );

    // عرض النتائج
    renderMajors(filteredMajors);
    }

    function handleNavLinkClick(e) {
        e.preventDefault();

        // الحصول على الـ href من الرابط
        const targetHref = this.getAttribute('href');
        const targetId = targetHref.substring(1); // إزالة # من البداية

        // إخفاء جميع الأقسام
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // إظهار القسم المطلوب
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

      if (targetId === 'home' || targetId === 'about') {
    document.querySelector('.header').style.display = 'none';
} else {
    document.querySelector('.header').style.display = 'block';
}


        // إزالة الكلاس النشط من جميع الروابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // إضافة الكلاس النشط للرابط المحدد
        // البحث عن الرابط المقابل في شريط التنقل
        const navLink = document.querySelector(`.nav-link[href="${targetHref}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }

        // مسح البحث إن وجد
        clearSearch();
    }
    // تهيئة الصفحة عند التحميل
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // إظهار القسم الرئيسي افتراضيًا
        document.getElementById('home').style.display = 'block';
        // تعيين الرابط النشط
        document.querySelector('.nav-link[href="#home"]').classList.add('active');

        // إضافة حدث النقر لجميع روابط التنقل في النافبار
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        // إضافة حدث النقر لأزرار القسم الرئيسي
        const homeButtons = document.querySelectorAll('.home-btn');
        homeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetHref = this.getAttribute('href');

                // استخدام نفس الدالة للتعامل مع النقر
                const fakeLink = {
                    getAttribute: () => targetHref,
                    preventDefault: () => {},
                    classList: { remove: () => {}, add: () => {} }
                };

                // إنشاء كائن مشابه لحدث النقر
                const fakeEvent = {
                    preventDefault: () => {},
                    target: fakeLink
                };

                handleNavLinkClick.call(fakeLink, fakeEvent);
            });
        });
       // تهيئة البيانات
        renderProfessions(professions);
        renderMajors(majors);
        document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                onFilterChange();
                // اجمع كل الفلاتر المختارة
                const selectedFilters = Array.from(document.querySelectorAll('input[type="checkbox"][data-filter]:checked'))
                .map(cb => cb.getAttribute('data-filter'));
                if (selectedFilters.length > 0) {
                    // جلب جميع التصنيفات المرتبطة بكل الفلاتر المختارة
                    const allRelatedCategories = selectedFilters.flatMap(filter => getCategoriesForFilter(filter));
                    // فلترة المهن
                    const filteredProfessions = professions.filter(profession =>
                        allRelatedCategories.includes(profession.category)
                    );
                    renderProfessions(filteredProfessions);
                    // فلترة التخصصات
                    const filteredMajors = majors.filter(major =>
                        allRelatedCategories.includes(major.field)
                    );
                    renderMajors(filteredMajors);
                } else {
                    // لو ما في ولا فلتر محدد، اعرض كل شيء
                    renderProfessions(professions);
                    renderMajors(majors);
                }

            });
        });

        // تفعيل البحث
        document.getElementById('searchInput').addEventListener('input', function(e) {
            // تصفير الفلاتر عند أول إدخال
            resetFilters();
            document.querySelector('.filter-container').style.display = 'none'; // إخفاء الفلاتر

            const currentSection = document.querySelector('.nav-link.active').getAttribute('href');
            if (currentSection !== '#jobs') {
                // السلوك الطبيعي للأقسام الأخرى
                searchResults.style.display = 'block';
                document.getElementById('search-type').style.display = 'flex';
            }
            const rawValue = e.target.value; // e معرّفة الآن
            const query = (rawValue || "").trim(); // معالجة القيم الفارغة
            if (query === "") {
                clearSearch();
                return;
            }

            const results = performSearch(query, currentSearchType);
            displaySearchResults(results);
        });
        initSearch();
        initCompareSearch();
        setCompareType('jobs');
        // تفعيل الفلتر الافتراضي إذا كان القسم النشط هو Best Jobs
        if (window.location.hash === '#best-jobs') {
            activeFilter = 'best';
            const bestFilterBtn = document.querySelector('#best-jobs .filter-item[data-filter="best"]');
            if (bestFilterBtn) document.getElementById('showProfessionsBtn').classList.add('active');
            applyFilters();
        }
        // تفعيل الفلتر الافتراضي إذا كان القسم النشط هو Best Jobs
        if (window.location.hash === '#compare') {
            document.getElementById('compareJobsBtn').classList.add('.nav-link.active')
            setCompareType();
        }
    });

    // التحكم في عرض الأقسام عند النقر على الروابط
    // التحكم في عرض الأقسام عند النقر على الروابط
    document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    // إخفاء جميع الأقسام
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    // إظهار الهيدر الأزرق في جميع الأقسام بما فيها Best Jobs
    document.querySelector('.header').style.display = 'block';
    // إزالة الفئة النشطة من جميع روابط التنقل
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
    });

    // إضافة الفئة النشطة للرابط الذي ضغط عليه المستخدم
    this.classList.add('active');
    // عرض القسم المحدد
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).style.display = 'block';
        clearSearch() ;

    // إعادة تعيين الفلاتر والأزرار الافتراضية بناءً على القسم
    if (targetId === 'best-jobs') {
        // تفعيل زر "مهن ذهبية" افتراضياً
        document.querySelectorAll('#best-jobs .filter-item').forEach(btn => {
            btn.classList.remove('active');
        });

        // تفعيل زر "المهن الذهبية" فقط
        const bestFilterBtn = document.querySelector('#best-jobs .filter-item[data-filter="best"]');
        if (bestFilterBtn) {
            bestFilterBtn.classList.add('active');
            activeFilter = 'best'; // تأكيد تعيين الفلتر النشط
        }
        setTimeout(() => {
            applyFilters();
        }, 0);
    } else if (targetId === 'compare') {
        // تفعيل زر "مقارنة المهن" افتراضياً
        setCompareType('jobs');
        const compareJobsBtn = document.getElementById('compareJobsBtn');
        if (compareJobsBtn) {
            // إزالة الكلاس active من زر مقارنة التخصصات
            document.getElementById('compareMajorsBtn').classList.remove('active');
            // إضافة الكلاس active لزر مقارنة المهن
            compareJobsBtn.classList.add('active');
        }

    } else if (targetId === 'jobs') {
    }
    resetFilters();

        // عند العودة لقسم المهن/التخصصات
        if (targetId === 'jobs') {
            const searchQuery = document.getElementById('searchInput').value.trim();


    // 1. الحصول على النتائج مع ضمان أنها مصفوفة
    let results = [];
    if (searchQuery) {
        try {
            results = performSearch(searchQuery, currentSearchType) || [];
        } catch (e) {
            console.error('Search error:', e);
            results = [];
        }
    } else {
        results = currentSearchType === 'jobs'
            ? Array.from(professions) // نسخ المصفوفة الأصلية
            : Array.from(majors);
    }

    // 2. التحقق النهائي من نوع المصفوفة
    if (!Array.isArray(results)) {
        results = [];
    }

    // 3. العرض حسب النوع مع تحقق إضافي
    if (currentSearchType === 'jobs') {
        if (typeof renderProfessions === 'function') {
            renderProfessions(results);
        }
    } else {
        if (typeof renderMajors === 'function') {
            renderMajors(results);
        }
    }

    // 4. إدارة واجهة النتائج
    const mainSearchResults = document.getElementById('mainSearchResults');
    if (mainSearchResults) {
        mainSearchResults.style.display = searchQuery ? 'block' : 'none';
        const queryTextEl = document.getElementById('searchQueryText');
        if (queryTextEl) {
            queryTextEl.textContent = searchQuery;
        }
    }
    // 5. معالجة الفلاتر بأمان
    if (typeof onFilterChange === 'function') {
        try {
            onFilterChange();
        } catch (filterError) {
            console.error('Filter error:', filterError);
        }
    }
        }

    });

    });

    // تهيئة وظيفة البحث
    function initSearch() {
        const searchResults = document.getElementById('searchResults');
        const mainSearchResults = document.getElementById('mainSearchResults');

        const searchInput = document.getElementById('searchInput');
    let timeoutId;

    searchInput.addEventListener('input', function(e) {
        clearTimeout(timeoutId); // إلغاء أي تأخير سابق
        const searchInput = document.getElementById('searchInput');
        // تنفيذ البحث فورًا مع كل تغيير
        const query = e.target.value.trim();

        if (query === '') {
            clearSearch();
            return;
        }

        // إجراء البحث مع تأخير بسيط لتحسين الأداء
        timeoutId = setTimeout(() => {
            const results = performSearch(query, currentSearchType);
            displaySearchResults(results);
        }, 300);
    });
        searchInput.addEventListener('input', (e) => {
            const searchInput = document.getElementById('searchInput');
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const query = e.target.value.trim();
                if (query === '') {
                    clearSearch();
                    return;
                }
                const results = performSearch(query, currentSearchType);
                displaySearchResults(results);
            }); // تأخير 300 مللي ثانية
        });

// 1. إخفاء الكيبورد عند الضغط على Enter
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        this.blur(); // إزالة التركيز من الحقل
        document.activeElement.blur(); // تأكيد إخفاء الكيبورد
        e.preventDefault(); // منع أي سلوك افتراضي
    }
});
        searchInput.addEventListener('input', function() {
            const searchInput = document.getElementById('searchInput');
            const queryLower = this.value.trim().toLowerCase();
            const results = performSearch(queryLower, currentSearchType);
            // نتائج البحث المنسدلة
            searchResults.style.display = 'block';
            // نتائج البحث الرئيسية
            // التحكم في ظهور قسم النتائج الرئيسي
            mainSearchResults.style.display = (results.professions.length + results.majors.length) > 0 ? 'block' : 'none';
        });

    }
    // دالة لعرض نتائج البحث الرئيسية
    function renderSearchResults(results) {
        const container = document.getElementById('searchResultsContainer');
        container.innerHTML = '';

        if (results.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #666;">لا توجد نتائج مطابقة</p>';
            return;
        }
        else{
            results.forEach(profession => {
                const card = document.createElement('div');
                card.className = 'profession-card';
                card.innerHTML = `
                    <div class="category-tag">${profession.category}</div>
                    <h3>${profession.title}</h3>
                    <p>${profession.summarize}</p>
                    <div class="salary-info">
                        <span>الراتب السنوي:</span>
                        <span class="highlight">$${profession.avgSalary}</span>
                    </div>
                `;
                card.addEventListener('click', () => showDetails(profession));
                container.appendChild(card);
            });
        }
    }

    // دالة لمسح البحث
    function clearSearch() {
        // 1. مسح نص البحث
        const mainSearchResults = document.getElementById('mainSearchResults');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const searchInput = document.getElementById('searchInput');
        searchInput.value = '';
        searchResults.innerHTML = '';
    professionsContainer.innerHTML = '';
    majorsContainer.innerHTML = '';
    const container = currentSearchType === 'jobs' ?
        document.getElementById('professionsContainer') :
        document.getElementById('majorsContainer');

    container.style.display = 'grid'; // إعادة عرض البطاقات عند الفراغ
    renderProfessions(professions); // أو renderMajors حسب النوع
        document.getElementById('searchResults').style.display = 'none';
        // 2. إخفاء نتائج البحث
        document.getElementById('searchResults').style.display = 'none';
        document.getElementById('mainSearchResults').style.display = 'none';
        resetFilters();
    // التمرير للأعلى مع احتساب ارتفاع الشريط العلوي
    window.scrollTo({
            top: mainSearchResults.offsetTop - navbarHeight - 30,
            behavior: 'smooth'
        });
        if (currentSearchType === 'majors') {
            renderMajors(majors); // عرض التخصصات الأصلية
        }
        // 3. إعادة العرض الأصلي
        if (currentSearchType === 'jobs') {
            // إظهار بطاقات المهن
            document.getElementById('professionsContainer').style.display = 'grid';
            renderProfessions(professions);
        } else {
            // إظهار بطاقات التخصصات
            document.getElementById('majorsContainer').style.display = 'grid';
            renderMajors(majors);
        }
        document.querySelector('.filter-container').style.display = 'block'; // إظهار الفلاتر بعد مسح البحث
    }
    // دالة للانتقال إلى التخصص الجامعي
    function navigateToMajor(majorName) {
        // إظهار قسم الوظائف والتخصصات
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById('jobs').style.display = 'block';

        // عرض قسم التخصصات
        showMajorsView();

        // تحديث الروابط النشطة
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });

        document.querySelector('.nav-link[href="#jobs"]').classList.add('active');

        // تصفير نتائج البحث
        document.getElementById('searchInput').value = '';
        document.getElementById('searchResults').style.display = 'none';
    }

    // دالة لعرض المهن
    function renderProfessions(professionsArray) {
        const container = document.getElementById('professionsContainer');
        container.innerHTML = '';

        professionsArray.forEach(profession => {
            const card = document.createElement('div');
            card.className = 'profession-card';
            card.innerHTML = `
                <div class="category-tag">${profession.category}</div>
                <h3>${profession.title}</h3>
                <p>${profession.summarize}</p>
                <div class="salary-info">
                    <span>الراتب السنوي:</span>
                    <span class="highlight">$${profession.avgSalary}</span>
                </div>
            `;
            card.addEventListener('click', () => showDetails(profession));
            container.appendChild(card);
        });
    }

    // دالة لعرض التخصصات الجامعية
    // دالة عرض التخصصات المعدلة

    function renderMajors(majorsList) {
        const container = document.getElementById("majorsContainer");
        container.innerHTML = "";

        majorsList.forEach(major => {
            const card = document.createElement("div");
            card.className = "profession-card";

            card.innerHTML = `
                <div class="category-tag">${major.field}</div>
                <h3>${major.name}</h3>
                <p style="margin: 1rem 0;">${major.summarize}</p>
                <div class="salary-info">
                    <span>السنوات الدراسية :</span>
                    <span class="highlight">${major.duration}</span>
                </div>
            `;

            card.addEventListener('click', () => showMajorDetails(major));
            container.appendChild(card);
        });
    }

    // دالة فلترة المهن
    function filterProfessions() {
        const checkboxes = document.querySelectorAll('#jobs input[type="checkbox"]');
        const selectedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const searchInput = document.getElementById('searchInput');
        const isSearchActive = searchInput.value.trim().length > 0;

        if (isSearchActive) {
            // إذا كان البحث نشطًا، نطبق الفلترة على نتائج البحث
            const query = searchInput.value.trim().toLowerCase();
            let filteredProfessions = professions.filter(prof =>
                (prof.category.toLowerCase().includes(query))
            );

            if (selectedCategories.length > 0) {
                filteredProfessions = filteredProfessions.filter(profession =>
                    selectedCategories.includes(profession.category)
                );
            }

            renderSearchResults(filteredProfessions);
        } else {
            // إذا لم يكن البحث نشطًا، نطبق الفلترة على القائمة الكاملة
            if (selectedCategories.length === 0) {
                renderProfessions(professions);
            } else {
                const filtered = professions.filter(profession =>
                    selectedCategories.includes(profession.category)
                );
                renderProfessions(filtered);
            }
        }
    }

    // دالة فلترة التخصصات الجامعية
    function filterMajors() {
        const checkboxes = document.querySelectorAll('#jobFieldsFilter input[type="checkbox"]');
        const selectedFields = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (selectedFields.length === 0) {
            renderMajors(majors);
        } else {
            const filteredMajors = majors.filter(major =>
                selectedFields.includes(major.field)
            );
            renderMajors(filteredMajors);
        }
    }

    // دالة لعرض تفاصيل المهنة
    function showDetails(profession) {
        const modal = document.getElementById('detailsModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');
        const category = document.getElementById('modalCategory');
        document.body.classList.add('modal-open');
        title.textContent = profession.title;
        category.textContent = profession.category;
        content.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <span>فرص العمل</span>
                    ${profession.jobo}
                </div>
                <div class="stat-item">
                    <span>السنوات الدراسية</span>
                    ${profession.experience}
                </div>
                <div class="stat-item">
                    <span>الطلب</span>
                    <span style="color: ${getDemandColor(profession.demand)}">${profession.demand}</span>
                </div>
                <div class="stat-item">
                    <span>الراتب المتوسط</span>
                    $${profession.avgSalary}
                </div>
            </div>
            <h3 style="margin: 1.5rem 0; color: var(--primary);">الوصف الوظيفي</h3>
            <p>${profession.description}</p>
            ${profession.skills ? `
            <h3 style="margin: 1.5rem 0; color: var(--primary);">المهارات المطلوبة</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${profession.skills.map(skill => `
                    <span style="background: rgba(58,175,169,0.1); color: var(--secondary); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">
                        ${skill}
                    </span>
                `).join('')}
            </div>
            ` : ''}
        `;

        modal.style.display = 'flex';
        document.getElementById('searchResults').style.display = 'none';
    }

    // دالة للحصول على لون حسب مستوى الطلب
    function getDemandColor(demand) {
        const colors = {
            'مرتفع جدًا': '#2ecc71',
            'مرتفع': '#3498db',
            'متوسط': '#f1c40f',
            'منخفض': '#e74c3c'
        };
        return colors[demand] || '#333';
    }

    // إغلاق النافذة المنبثقة عند النقر خارجها
    window.onclick = function(event) {
        const modal = document.getElementById('detailsModal');
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }
    // دالة لإغلاق النافذة المنبثقة
    function closeModal() {
        document.getElementById('detailsModal').style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    // نظام الفلترة
    let activeFilter = null;
    const demandOrder = ['مرتفع جدًا', 'مرتفع', 'متوسط', 'منخفض'];

    function toggleFilter(element, filterType) {
        const prevActive = document.querySelector('#best-jobs .filter-item.active');

        if (prevActive) {
            prevActive.classList.remove('active');
        }

        if (activeFilter === filterType) {
            activeFilter = null;
            element.classList.remove('active');
        } else {
            activeFilter = filterType;
            element.classList.add('active');
        }

        applyFilters();
    }

    function applyFilters() {
        let filteredJobs = [...bestProfessions];

        // تطبيق الفلتر النشط إذا كان موجوداً
        if (activeFilter) {
            filteredJobs = filteredJobs.filter(job => job.jobType === activeFilter);
        } else {
            // إذا لم يكن هناك فلتر نشط، نطبق الفلتر الافتراضي (أفضل المهن)
            activeFilter = 'best';
            const bestFilterBtn = document.querySelector('#best-jobs .filter-item[data-filter="best"]');
            if (bestFilterBtn) bestFilterBtn.classList.add('active');
            filteredJobs = filteredJobs.filter(job => job.jobType === 'best');
        }

        // ترتيب النتائج حسب نوع الفلتر
        switch(activeFilter) {
            case 'profit':
                filteredJobs.sort((a, b) =>
                    parseInt(b.avgSalary.replace(/\D/g,'')) - parseInt(a.avgSalary.replace(/\D/g,'')));
                break;
            case 'demand':
                filteredJobs.sort((a, b) =>
                    demandOrder.indexOf(b.demand) - demandOrder.indexOf(a.demand));
                break;
            case 'entry':
                filteredJobs.sort((a, b) =>
                    parseInt(a.experience) - parseInt(b.experience));
                break;
            case 'opportunities':
                filteredJobs.sort((a, b) =>
                    parseInt(b.growthRate) - parseInt(a.growthRate));
                break;
            default: // الحالة الافتراضية (أفضل المهن)
                filteredJobs.sort((a, b) =>
                    (parseInt(b.growthRate) * 2 + parseInt(b.avgSalary.replace(/\D/g,''))/10000) -
                    (parseInt(a.growthRate) * 2 + parseInt(a.avgSalary.replace(/\D/g,''))/10000)
                );
        }

        // عرض النتائج المصفاة
        renderBestJobs(filteredJobs);
    }
    // تعديل دالة renderMajors لعرض البطاقات بنفس نمط المهن

    // دالة عرض Best Jobs
    function renderBestJobs(jobs) {
        const container = document.getElementById('bestJobsContainer');
        container.innerHTML = '';

        jobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'profession-card';
            card.innerHTML = `
                <h3>${job.title}</h3>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span>متوسط الراتب</span>
                        <div class="highlight">$${job.avgSalary}</div>
                    </div>
                    <div class="stat-item">
                        <span>السنوات الدراسية</span>
                        <div class="highlight">${job.experience}</div>
                    </div>
                </div>
                <div class="demand-indicator">
                    <span>معدل الطلب:</span>
                    <div class="demand-bar">
                        <div class="demand-fill" style="width: ${getDemandWidth(job.demand)}"></div>
                    </div>
                    <span class="growth-rate">
                        <i class="fas fa-chart-line"></i>
                        ${job.growthRate} نمو متوقع
                    </span>
                </div>
                <h4 class="specialties-title">المهارات المطلوبة:</h4>
                <ul class="specialties-list">
                    ${job.requiredSpecialties.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
                <p class="job-description">${job.description}</p>
            `;
            container.appendChild(card);
        });
    }

    // دالة مساعدة لتحديد عرض شريط الطلب
    function getDemandWidth(demand) {
        const demandLevels = {
            'مرتفع جدًا': '95%',
            'مرتفع': '75%',
            'متوسط': '50%',
            'منخفض': '25%'
        };
        return demandLevels[demand] || '50%';
    }

    // متغيرات المقارنة
    let compareType = 'jobs'; // 'jobs' أو 'majors'
    let selectedItem1 = null;
    let selectedItem2 = null;

    // تعيين نوع المقارنة
    // تحسين وظيفة setCompareType
function setCompareType(type) {
    compareType = type;

    // تحديث واجهة المستخدم مع التحقق من وجود العناصر
    const jobsBtn = document.getElementById('compareJobs');
    const majorsBtn = document.getElementById('compareMajors');

    if (jobsBtn && majorsBtn) {
        if (type === 'jobs') {
            jobsBtn.classList.add('active');
            majorsBtn.classList.remove('active');

            document.querySelectorAll('.compare-search input').forEach(input => {
                input.placeholder = "ابحث عن مهنة...";
            });
        } else {
            majorsBtn.classList.add('active');
            jobsBtn.classList.remove('active');
            document.querySelectorAll('.compare-search input').forEach(input => {
                input.placeholder = "ابحث عن تخصص...";
            });
        }
    } else {
        console.error('عناصر المقارنة غير موجودة في DOM');
    }

    resetcom();
}
function resetcom() {
    // إفراغ حقول البحث عند التبديل
    document.getElementById('compareInput1').value = '';
    document.getElementById('compareInput2').value = '';
    document.getElementById('compareResults1').innerHTML = '';
    document.getElementById('compareResults2').innerHTML = '';

    // إخفاء نتائج المقارنة السابقة إن وجدت
    document.getElementById('compareResults').style.display = 'none';
    document.getElementById('compareControls').style.display = 'none';
    selectedItem1 = null ;
    selectedItem2 = null ;
}
// تحسين وظيفة compareItems


    // تهيئة البحث في قسم المقارنة
    function initCompareSearch() {
        const input1 = document.getElementById('compareInput1');
        const input2 = document.getElementById('compareInput2');
        const results1 = document.getElementById('compareResults1');
        const results2 = document.getElementById('compareResults2');

        // البحث للحقل الأول
        input1.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            showCompareResults(results1, query, 1);
        });

        // البحث للحقل الثاني
        input2.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            showCompareResults(results2, query, 2);
        });

        // إخفاء نتائج البحث عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!input1.contains(e.target)) results1.style.display = 'none';
            if (!input2.contains(e.target)) results2.style.display = 'none';
            if (!e.target.closest('.search-container')) {
    document.getElementById('searchResults').style.display = 'none';
    }
        });
    }

    // عرض نتائج البحث في قسم المقارنة
    function showCompareResults(resultsContainer, query, inputNumber) {
        if (query.length === 0) {
            resultsContainer.style.display = 'none';
            return;
        }

        let results = [];
        if (compareType === 'jobs') {
            results = professions.filter(prof =>
                prof.title.toLowerCase().includes(query)

            );
        } else {
            results = majors.filter(major =>
                major.name.toLowerCase().includes(query)

            );
        }

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة</div>';
            resultsContainer.style.display = 'block';
            return;
        }

        let html = '';
        results.forEach(item => {
            const title = compareType === 'jobs' ? item.title : item.name;

            html += `
                <div class="search-result-item" onclick="selectCompareItem(${inputNumber}, '${title.replace(/'/g, "\\'")}')">
                    <h4>${title}</h4>
                </div>
            `;
        });

        resultsContainer.innerHTML = html;
        resultsContainer.style.display = 'block';
    }

    // اختيار عنصر للمقارنة
    function selectCompareItem(inputNumber, title) {
        const inputElement = inputNumber === 1 ?
            document.getElementById('compareInput1') :
            document.getElementById('compareInput2');

        const resultsContainer = inputNumber === 1 ?
            document.getElementById('compareResults1') :
            document.getElementById('compareResults2');

        inputElement.value = title;
        resultsContainer.style.display = 'none';

        if (compareType === 'jobs') {
            const item = professions.find(p => p.title === title);
            if (inputNumber === 1) selectedItem1 = item;
            else selectedItem2 = item;
        } else {
            const item = majors.find(m => m.name === title);
            if (inputNumber === 1) selectedItem1 = item;
            else selectedItem2 = item;
        }
    }

    // تنفيذ المقارنة
    function compareItems() {
        if (!selectedItem1 || !selectedItem2) {
            alert('الرجاء اختيار العنصرين للمقارنة');
            return;
        }
        if (selectedItem1 == selectedItem2) {
            alert('لا يمكن مقارنة العنصر مع نفسه');
            return;
        }
        const resultsDiv = document.getElementById('compareResults');
        const tableBody = document.getElementById('compareTableBody');
        const header1 = document.getElementById('compareHeader1');
        const header2 = document.getElementById('compareHeader2');

        header1.innerHTML = compareType === 'jobs' ? selectedItem1.title : selectedItem1.name;
        header2.innerHTML = compareType === 'jobs' ? selectedItem2.title : selectedItem2.name;
            // جعل العناوين قابلة للنقر
        header1.style.cursor = 'pointer';
        header2.style.cursor = 'pointer';

        header1.onclick = () => {
            if (compareType === 'jobs') {
                showDetails(selectedItem1);
            } else {
                showMajorDetails(selectedItem1);
            }
        };

        header2.onclick = () => {
            if (compareType === 'jobs') {
                showDetails(selectedItem2);
            } else {
                showMajorDetails(selectedItem2);
            }
        };

        // تعيين العناوين

        // إنشاء جدول المقارنة
        let tableHTML = '';

        if (compareType === 'jobs') {
            // مقارنة المهن
            tableHTML = `
                <tr>
                    <td>ملخص المهنة</td>
                    <td>${selectedItem1.summarize}</td>
                    <td>${selectedItem2.summarize}</td>
                </tr>
                <tr>
                    <td>فرص العمل</td>
                    <td>${selectedItem1.jobo}</td>
                    <td>${selectedItem2.jobo}</td>
                </tr>
                <tr>
                    <td>الراتب السنوي</td>
                    <td>$${selectedItem1.avgSalary}</td>
                    <td>$${selectedItem2.avgSalary}</td>
                </tr>
                <tr>
                    <td>السنوات الدراسية المطلوبة</td>
                    <td>${selectedItem1.experience}</td>
                    <td>${selectedItem2.experience}</td>
                </tr>
                <tr>
                    <td>مستوى الطلب</td>
                    <td>${selectedItem1.demand}</td>
                    <td>${selectedItem2.demand}</td>
                </tr>
            `;

            // تحديد الأفضل في كل فئة
        } else {
            // مقارنة التخصصات
            tableHTML = `
                <tr>
                    <td>ملخص التخصص</td>
                    <td>${selectedItem1.summarize}</td>
                    <td>${selectedItem2.summarize}</td>
                </tr>
                <tr>
                    <td>الطلب</td>
                    <td>${selectedItem1.jobo}</td>
                    <td>${selectedItem2.jobo}</td>
                </tr>
                <tr>
                    <td>متوسط المجموع الادني في الثانوية</td>
                    <td>${selectedItem1.jobs}</td>
                    <td>${selectedItem2.jobs}</td>
                </tr>
                <tr>
                    <td>السنوات الدرسية</td>
                    <td>${selectedItem1.duration}</td>
                    <td>${selectedItem2.duration}</td>
                </tr>
               <tr>
                    <td>المسار</td>
                    <td>${selectedItem1.mid}</td>
                    <td>${selectedItem2.mid}</td>
                </tr>
            `;

            // تحديد الأفضل في كل فئة
        }

        tableBody.innerHTML = tableHTML;

        resultsDiv.style.display = 'block';
        document.getElementById('compareControls').style.display = 'block';
        // التمرير إلى نتائج المقارنة
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    }
      let currentQuestion = 0;
    let quizAnswers = [];
    function startQuiz() {
        currentQuestion = 0;
        quizAnswers = [];
        // 1. إخفاء قسم البداية فوراً
        document.getElementById('quizWelcome').style.display = 'none';

        // 2. إظهار قسم الأسئلة
        const quizQuestions = document.getElementById('quizQuestions');
        quizQuestions.style.display = 'block';

        // 3. استخدام scrollIntoView مع خيارات مخصصة
        setTimeout(() => {
        quizQuestions.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
    }, 50);

    // 4. تهيئة الأسئلة
    currentQuestion = 0;
    quizAnswers = [];
    showQuestion();
    }

    // عرض السؤال الحالي
    // عرض السؤال الحالي
    // عرض السؤال الحالي
    function showQuestion() {
        const question = quizQuestions[currentQuestion];

        // تحديث نص السؤال مع العداد المنسق
        document.getElementById('currentQuestion').innerHTML = `
            <div style="
                background: rgba(15, 260, 200, 0.1);
                color: var(--primary);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                display: inline-block;
                margin-bottom: 1rem;
                font-size: 0.85rem;
                font-weight: 500;
            ">
                السؤال <span style="font-weight: 700;">${currentQuestion + 1}</span>
                من <span style="font-weight: 700;">${quizQuestions.length}</span>
            </div>
            <div style="margin-top: 0.5rem; font-size: 1.1rem;">${question.question}</div>
        `;

        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.innerHTML = `
                <div class="option-number" style="
                    background: var(--secondary);
                    color: white;
                ">${index + 1}</div>
                <div>${option.text}</div>
            `;
            optionElement.addEventListener('click', () => selectAnswer(option.value));
            optionsContainer.appendChild(optionElement);
        });

        // التحكم في ظهور زر السؤال السابق
        const prevBtn = document.getElementById('prevQuestionBtn');
        prevBtn.style.display = currentQuestion === 0 ? 'none' : 'flex';

        // تحديث شريط التقدم بلون الموقع الأساسي
        const progress = ((currentQuestion) / quizQuestions.length) * 100;
        const progressBar = document.getElementById('quizProgressBar');
        progressBar.style.width = `${progress}%`;
        progressBar.style.backgroundColor = 'var(--primary)';
    }
    // اختيار إجابة
    function selectAnswer(answer) {
        // إذا كان هناك إجابة مسجلة لهذا السؤال، استبدلها
        if (quizAnswers[currentQuestion] !== undefined) {
            quizAnswers[currentQuestion] = answer;
        } else {
            quizAnswers.push(answer);
        }

        // إزالة التحديد من كل الخيارات
        document.querySelectorAll('.quiz-option').forEach(opt =>
            opt.classList.remove('selected'));

        // إضافة التحديد للخيار المختار
        event.currentTarget.classList.add('selected');

        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResults();
        }
    }

    // عرض النتائج
    function showResults() {
        document.getElementById('quizQuestions').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';

        // حساب النتائج بناءً على الإجابات
        const matchedProfessions = calculateResults(quizAnswers,professions);
        const matchesContainer = document.getElementById('careerMatches');
        matchesContainer.innerHTML = '';

        if (matchedProfessions.length === 0) {
            matchesContainer.innerHTML = '<p>لا توجد مهن مطابقة لاختياراتك. حاول تعديل بعض الإجابات.</p>';
            return;
        }

        matchedProfessions.forEach(prof => {
            const matchElement = document.createElement('div');
            matchElement.className = 'career-match';
            matchElement.innerHTML = `
                <h4>${prof.title}</h4>
                <div class="match-percent">${prof.matchPercent}%</div>
                <p><strong>فرص العمل :</strong> ${prof.jobo}</p>
                <p><strong>الراتب المتوسط:</strong> $${prof.avgSalary}</p>
                <p><strong>الطلب:</strong> ${prof.demand}</p>
            `;
            matchElement.addEventListener('click', () => showDetails(prof));
            matchesContainer.appendChild(matchElement);
        });
    }

   //start Q
   function calculateResults(userResponses,professions) {
  const traitFrequency = {};
  userResponses.forEach(response => {
    traitFrequency[response] = (traitFrequency[response] || 0) + 1;
  });

  const careerScores = professions
    .filter(professions => Array.isArray(professions.traits) && professions.traits.length > 0) // تجاهل المهن بدون traits
    .map(professions => {
      const traits = professions.traits;
      const essential = Array.isArray(professions.essentialTraits) ? professions.essentialTraits : [];

      let score = 0;
      traits.forEach(trait => {
        if (traitFrequency[trait]) {
          score += traitFrequency[trait];
        }
      });
      const essentialMatch = essential.filter(t => userResponses.includes(t)).length;
      const totalScore = score + (essentialMatch * 2);
      return {
        ...professions,
        score: score + (essentialMatch * 2),
        matchPercent: Math.min(100, Math.round((score / traits.length) * 115))
      };
    });

  return careerScores.sort((a, b) => b.score - a.score).slice(0, 5);
}



//end Q
    // دالة لعرض تفاصيل التخصص في نافذة منبثقة
    function showMajorDetails(major) {
        const modal = document.getElementById('detailsModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    const category = document.getElementById('modalCategory');

    title.textContent = major.name;
    category.textContent = major.field;

    const jobsList = major.relatedJobs.map(job => `
    <li>${job.title} <span class="job-salary">${job.salary}</span></li>
    `).join('');

    content.innerHTML = `
    <div class="stats-grid">
        <div class="stat-item">
            <span>فرص العمل</span>
            ${major.jobo}
        </div>
        <div class="stat-item">
            <span>متوسط المجموع الادنى في الثانوية</span>
            ${major.jobs}
        </div>
        <div class="stat-item">
            <span>السنوات الدراسية</span>
            ${major.duration}
        </div>
        <div class="stat-item">
            <span>المسار</span>
            ${major.mid}
        </div>
    </div>
    <h3 style="margin: 1.5rem 0; color: var(--primary);">وصف التخصص</h3>
    <p>${major.description}</p>
    ${major.relatedJobs ? `
            <h3 style="margin: 1.5rem 0; color: var(--primary);">اشهر المهن المرتبطة</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${major.relatedJobs.map(relatedJobs => `
                    <span style="background: rgba(58,175,169,0.1); color: var(--secondary); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">
                        ${relatedJobs}
                    </span>
                `).join('')}
            </div>
            ` : ''}
        `;

    modal.style.display = 'flex';
    }
    // العودة إلى الصفحة الرئيسية
    function goToHome() {
        document.getElementById('quizWelcome').style.display = 'block';
        document.getElementById('quizQuestions').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';

        // إظهار قسم الوظائف
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('home').style.display = 'block';

        // تحديث الروابط النشطة
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        document.querySelector('.nav-link[href="#home"]').classList.add('active');
        scrollToResults();
    }

    function linkSearchTypeToView(type) {
        resetFilters();
        clearSearch() ;
        currentSearchType = type;
        const searchInput = document.getElementById('searchInput');
        const query = searchInput.value.trim();

        // تحديث الـ placeholder حسب النوع
        searchInput.placeholder = type === 'jobs' ? "ابحث عن مهنة..." : "ابحث عن تخصص...";

        // تحديث الأزرار النشطة
        document.querySelectorAll('.search-type').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });

        // تحديث أزرار القسم الرئيسي
        document.getElementById('showProfessionsBtn').classList.toggle('active', type === 'jobs');
        document.getElementById('showMajorsBtn').classList.toggle('active', type === 'majors');

        // إظهار/إخفاء المحتوى
        document.getElementById('professionsContainer').style.display = type === 'jobs' ? 'grid' : 'none';
        document.getElementById('majorsContainer').style.display = type === 'majors' ? 'grid' : 'none';

        // إعادة البحث إذا كان هناك نص
        if (query) {
            const results = performSearch(query, type);
            displaySearchResults(results);

            // إظهار قسم نتائج البحث الرئيسي
            document.getElementById('mainSearchResults').style.display = 'block';
            document.getElementById('searchQueryText').innerText = query;
        } else {
            document.getElementById('mainSearchResults').style.display = 'none';
        }
    }


    function performSearch(query, type) {
    const normalizedQuery = query.trim().toLowerCase();
    const checkboxes = document.querySelectorAll('#jobFieldsFilter input[type="checkbox"]:checked');
    const selectedCategories = Array.from(checkboxes).map(cb => cb.value);
    const isFiltering = selectedCategories.length > 0;
    const relatedCategories = selectedCategories.flatMap(filter => getCategoriesForFilter(filter));

    let results = { professions: [], majors: [] };

    if (type === 'jobs') {
        results.professions = professions.filter(prof => {
            const matchesQuery =
                prof.title.toLowerCase().includes(normalizedQuery) ||
                prof.summarize.toLowerCase().includes(normalizedQuery) ||
                prof.avgSalary.toLowerCase().includes(normalizedQuery);
            const matchesFilter = !isFiltering || relatedCategories.includes(prof.category);
            return matchesQuery && matchesFilter;
        });
    } else {
        results.majors = majors.filter(major => {
            const matchesQuery =
                major.name.toLowerCase().includes(normalizedQuery) ||
                major.summarize.toLowerCase().includes(normalizedQuery) ||
                major.description.toLowerCase().includes(normalizedQuery);
            const matchesFilter = !isFiltering || relatedCategories.includes(major.field);
            return matchesQuery && matchesFilter;
        });
    }

    return results;
    }
    function scrollToResults() {
        const mainSearchResults = document.getElementById('mainSearchResults');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        if (mainSearchResults) {
            window.scrollTo({
                top: mainSearchResults.offsetTop - navbarHeight - 20,
                behavior: 'smooth'
            });
        }
    }
    function displaySearchResults(results) {
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';

        const currentSection = document.querySelector('.nav-link.active')?.getAttribute('href') || '';
        const container = currentSearchType === 'jobs' ?
        document.getElementById('professionsContainer') :
        document.getElementById('majorsContainer');

    // إذا كانت النتائج فارغة، اخفِ البطاقات
    if ((currentSearchType === 'jobs' && results.professions.length === 0) ||
        (currentSearchType === 'majors' && results.majors.length === 0)) {
        container.style.display = 'none';
    } else {
        container.style.display = 'grid'; // أظهر البطاقات إذا كانت هناك نتائج
    }
        // تحقق إذا كانت لا توجد نتائج
        if (results.professions.length === 0 && results.majors.length === 0) {
            searchResults.innerHTML = '<p style="text-align: center; color: #666; padding: 1rem;">لا توجد نتائج مطابقة</p>';
            searchResults.style.display = 'block';

            // إخفاء حاويات البطاقات
            document.getElementById('professionsContainer').style.display = 'none';
            document.getElementById('majorsContainer').style.display = 'none';

            scrollToResults();
            return;
        }

        // عرض النتائج في القائمة المنسدلة إذا لم نكن في قسم المهن والتخصصات
        if (currentSection !== '#jobs') {
            results.professions.forEach(profession => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <h4>${profession.title}</h4>
                `;
                item.addEventListener('click', () => showDetails(profession));
                searchResults.appendChild(item);
            });

            results.majors.forEach(major => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <h4>${major.name}</h4>
                `;
                item.addEventListener('click', () => showMajorDetails(major));
                searchResults.appendChild(item);
            });

            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
            // عرض النتائج في الحاويات الرئيسية
            if (currentSearchType === 'jobs') {
                renderProfessions(results.professions);
            } else {
                renderMajors(results.majors);
            }

            // إظهار قسم نتائج البحث الرئيسي إذا كان هناك بحث
            if (document.getElementById('searchInput').value.trim()) {
                document.getElementById('mainSearchResults').style.display = 'block';
                document.getElementById('searchQueryText').innerText = document.getElementById('searchInput').value.trim();
            }
        }

        scrollToResults();
    }


    // حدث موحد لجميع الأزرار
    document.querySelectorAll('.search-type, #showProfessionsBtn, #showMajorsBtn').forEach(btn => {
    btn.addEventListener('click', function() {
    const type = this.dataset.type || (this.id === 'showMajorsBtn' ? 'majors' : 'jobs');
    linkSearchTypeToView(type);
    });
    });
    //فلاتر
    const checkboxes = document.querySelectorAll('#jobs input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    });

    // دالة جديدة لعرض التخصصات
    function renderMajorsResults(majors) {
    const container = document.getElementById('majorsContainer');
    container.innerHTML = ''; // نمسح المحتوى القديم

    majors.forEach(major => {
    const card = `
        <div class="profession-card">
            <div class="category-tag">${major.field}</div>
            <h3>${major.name}</h3>
            <p>${major.summarize}</p>
            <div class="salary-info">
                <span>السنوات الدراسية :</span>
                <span class="highlight">${major.duration}</span>
            </div>
        </div>
    `;
    container.innerHTML += card;
    });
    }
    function clearFilters() {
    // إعادة تعيين الفلاتر إذا كانت موجودة
    const checkboxes = document.querySelectorAll('#jobs input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    });

    // إعادة عرض البيانات الأصلية
    if (currentSearchType === 'jobs') {
    renderProfessions(professions);
    } else {
    renderMajors(majors);
    }
    }
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
    searchInput.addEventListener('input', () => {
    onFilterChange();
    document.getElementById('mainSearchResults').style.display = searchInput.value.trim() ? 'block' : 'none';
    document.getElementById('searchQueryText').innerText = searchInput.value.trim();
    });
    }
    let timeout;
    // إخفاء النافذة عند النقر خارجها
    document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.getElementById('searchResults');
    if (!searchContainer.contains(e.target)) {
        searchResults.style.display = 'none';
    }
    });
    // Modify search event to trigger onFilterChange after typing
    // أضف هذه الدالة في قسم الـ Script
    function restartQuiz() {
    // 1. إعادة تعيين جميع المتغيرات
    currentQuestion = 0;
    quizAnswers = [];
    // 2. إعادة تنسيق العناصر
    document.getElementById('quizWelcome').style.display = 'block';
    document.getElementById('quizQuestions').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    // 3. إعادة تعيين جميع خيارات الأسئلة
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
    option.classList.remove('selected');
    });
    // 4. التمرير إلى الأعلى بسلاسة
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    // 5. إعادة تعيين شريط التقدم
    document.getElementById('quizProgressBar').style.width = '0%';
    }
    function resetFilters() {
    document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(cb => cb.checked = false);

    const currentSection = document.querySelector('.nav-link.active').getAttribute('href');
    renderProfessions(professions);
    renderMajors(majors);
    }
    // دالة تبديل عرض الفلاتر
function toggleFilters() {
    const filtersContainer = document.querySelector('.field-filters');
    const showMoreBtn = document.getElementById('showMoreFilters');

    filtersContainer.classList.toggle('expanded');
    showMoreBtn.classList.toggle('active');

    if (filtersContainer.classList.contains('expanded')) {
        showMoreBtn.querySelector('span').textContent = 'عرض أقل';
    } else {
        showMoreBtn.querySelector('span').textContent = 'عرض المزيد';
    }
}

// تعديل دالة onFilterChange لضبط عرض الزر
function onFilterChange() {
    // الكود الحالي...

    // إظهار/إخفاء زر عرض المزيد حسب حجم الشاشة
    const showMoreBtn = document.getElementById('showMoreFilters');
    if (window.innerWidth > 768) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        // إزالة الإجابة الأخيرة
        quizAnswers.pop();
        currentQuestion--;
        showQuestion();

        // إعادة تحديد الإجابة السابقة إن وجدت
        if (quizAnswers[currentQuestion] !== undefined) {
            const options = document.querySelectorAll('.quiz-option');
            options.forEach((option, index) => {
                if (quizQuestions[currentQuestion].options[index].value === quizAnswers[currentQuestion]) {
                    option.classList.add('selected');
                }
            });
        }
    }
}
function startTyping() {
        const text = "نحو جيل واعٍ باختياراته، متمكنٍ من مساره .";
        const element = document.getElementById("profile-tagline");
        let i = 0;
        element.innerHTML = "";

        function type() {
            if (i < text.length) {
                element.innerHTML += text[i];
                i++;
                setTimeout(type, 40);
            }
        }
        type();
    }
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-link');
    const profileHeading = document.querySelector('.profile-heading');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault(); // منع السلوك الافتراضي للرابط

        // إعادة تعيين الأنيميشن
        profileHeading.classList.remove('active');
        void profileHeading.offsetWidth; // خدعة لإعادة تشغيل الأنيميشن
        profileHeading.classList.add('active');
    });
});
// في نهاية ملف script.js أضف حدث النقر للزر:
document.getElementById('prevQuestionBtn').addEventListener('click', goToPreviousQuestion);
// استدعاء الدالة عند تحميل الصفحة وتغيير حجمها
window.addEventListener('resize', onFilterChange);
document.addEventListener('DOMContentLoaded', onFilterChange);
document.addEventListener("DOMContentLoaded", function () {
    function toggleHeaderVisibility() {
        const hash = window.location.hash;
        const header = document.querySelector(".header");
        if (header) {
            header.style.display = (hash === "#home" || hash === "") ? "none" : "block";
        }
    }

    window.addEventListener("hashchange", toggleHeaderVisibility);
    toggleHeaderVisibility();
});
