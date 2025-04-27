let currentSearchType = 'jobs'; // القيمة الافتراضية
        // بيانات المهن
        const professions = [
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مهندس ذكاء اصطناعي",
                avgSalary: "95,000 - 250,000",
                experience: "5+ سنوات",
                demand: "مرتفع جدًا",
                description: "تطوير أنظمة الذكاء الاصطناعي وتعلم الآلة",
                summarize: "hghghghghg" ,
                category: "AI",
                skills: ["تحليلية", "تقنية", "AI", "بيانات"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "جراح تجميل",
                avgSalary: "120,000-300,000",
                experience: "12+ سنوات",
                demand: "مرتفع",
                description: "إجراء عمليات التجميل التصحيحية والجمالية",
                summarize: "hghghghghg" ,
                category: "طب",
                skills: ["طب", "يدوية", "تركيز"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "طبيب أشعة تداخلية",
                avgSalary: "280,000 - 450,000",
                experience: "8+ سنوات",
                demand: "متوسط",
                description: "تشخيص وعلاج الأمراض باستخدام التصوير الإشعاعي",
                summarize: "hghghghghg" ,
                category: "طب",
                skills: ["طب", "تحليلية", "تقنية"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مطور بلوك تشين",
                avgSalary: "120,000 - 300,000",
                experience: "4+ سنوات",
                demand: "مرتفع جدًا",
                description: "تطوير أنظمة لامركزية باستخدام تقنية البلوك تشين",
                summarize: "hghghghghg" ,
                category: "AI",
                skills: ["تقنية", "تحليلية", "أمن"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مهندس حوسبة كمومية",
                avgSalary: "80,000-150,000",
                experience: "6+ سنوات",
                demand: "مرتفع",
                description: "تصميم أنظمة الحوسبة الكمومية",
                summarize: "hghghghghg" ,
                category: "AI",
                skills: ["تقنية", "تحليلية", "رياضيات"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مهندس طاقة الرياح البحرية",
                avgSalary: "90,000 - 180,000",
                experience: "5+ سنوات",
                demand: "مرتفع",
                description: "تصميم وتنفيذ مزارع الرياح البحرية",
                summarize: "hghghghghg" ,
                category: "هندسة",
                skills: ["هندسة", "تحليلية", "بيئية"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "باحث في تقنية النانو",
                avgSalary: "85,000 - 160,000",
                experience: "4+ سنوات",
                demand: "متوسط",
                description: "بحث وتطوير مواد متقدمة بمقياس النانو",
                summarize: "hghghghghg" ,
                category: "هندسة",
                skills: ["هندسة", "بحثية", "تحليلية"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مدير استثمار العملات الرقمية",
                avgSalary: "130,000 - 400,000",
                experience: "5+ سنوات",
                demand: "مرتفع",
                description: "إدارة محافظ استثمارية في العملات المشفرة",
                summarize: "hghghghghg" ,
                category: "أعمال",
                skills: ["مالية", "تحليلية", "قيادة"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "محلل بيانات سلوكية",
                avgSalary: "95,000 - 220,000",
                experience: "3+ سنوات",
                demand: "مرتفع",
                description: "تحليل السلوك الاقتصادي للأفراد والشركات",
                summarize: "hghghghghg" ,
                category: "أعمال",
                skills: ["تحليلية", "اجتماعية", "بحثية"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مصمم واقع معزز",
                avgSalary: "70,000 - 150,000",
                experience: "3+ سنوات",
                demand: "مرتفع",
                description: "تصميم تجارب تفاعلية باستخدام تقنيات AR",
                summarize: "hghghghghg" ,
                category: "UX/UI",
                skills: ["إبداعية", "تقنية", "تصميم"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "محامي جرائم سيبرانية",
                avgSalary: "110,000 - 250,000",
                experience: "6+ سنوات",
                demand: "مرتفع",
                description: "معالجة القضايا القانونية المتعلقة بالجرائم الإلكترونية",
                summarize: "hghghghghg" ,
                category: "AI",
                skills: ["قانونية", "تحليلية", "أمن"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "جراح قلب",
                avgSalary: "200,000 - 450,000",
                experience: "10+ سنوات",
                demand: "مرتفع",
                description: "إجراء عمليات جراحية معقدة في القلب",
                summarize: "hghghghghg" ,
                category: "طب",
                skills: ["طب", "يدوية", "تركيز"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                title: "مصمم تجربة المستخدم",
                avgSalary: "65,000 - 140,000",
                experience: "3+ سنوات",
                demand: "مرتفع",
                description: "تصميم واجهات المستخدم وتحسين التجربة الرقمية",
                summarize: "hghghghghg" ,
                category: "UX/UI",
                skills: ["إبداعية", "تواصل", "تصميم"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                summarize: "hghghghghg" ,
                title: "مهندس ميكانيكي",
                avgSalary: "70,000 - 120,000",
                experience: "4+ سنوات",
                demand: "متوسط",
                description: "تصميم الأنظمة الميكانيكية والآلات",
                category: "هندسة",
                skills: ["هندسة", "تحليلية", "تقنية"]
            },
            {
                industry: "fhfhf" ,
                jobo: "كثير"  ,
                summarize: "hghghghghg" ,
                title: "مدير مشاريع تقنية",
                avgSalary: "90,000 - 160,000",
                experience: "5+ سنوات",
                demand: "مرتفع",
                description: "إدارة فرق العمل والمشاريع التقنية",
                category: "أعمال",
                skills: ["قيادة", "تنظيمية", "تواصل"]
            }
        ];

        // بيانات التخصصات الجامعية
        // بيانات التخصصات المعدلة
        const majors = [
        { 
            mid: "176" ,
            jobo: "كثير"  ,
            summarize: "hghghghghg" ,
            name: "الطب البشري", 
            field: "العلوم الطبية", 
            description: "يهدف تخصص الطب البشري إلى إعداد أطباء مؤهلين لتشخيص وعلاج الأمراض والإصابات. يتضمن الدراسة العميقة لجسم الإنسان ووظائفه والأمراض التي تصيبه وطرق علاجها.",
            duration: "6 سنوات + سنة امتياز",
            universities: ["جامعة الملك سعود", "جامعة الملك عبدالعزيز", "جامعة القصيم"],
            jobs: "3 وظائف",
            relatedJobs: [
            "طبيب عام" , "أخصائي جراحة","طبيب باطنية","طبيب أطفال"
            ]
        },
        { 
            mid: "176" ,
            jobo: "كثير"  ,
            summarize: "hghghghghg" ,
            name: "هندسة الحاسوب", 
            field: "الهندسة", 
            description: "يجمع تخصص هندسة الحاسوب بين مبادئ الهندسة الكهربائية وعلوم الحاسوب. يدرس الطلاب تصميم وتطوير أنظمة الحاسوب المادية والبرمجية.",
            duration: "4 سنوات دراسية",
            universities: ["جامعة الملك فهد للبترول", "جامعة الأميرة نورة", "جامعة الطائف"],
            jobs: "3 وظائف",
            relatedJobs: [
            "مهندس أمن سيبراني"  , "مهندس برمجيات" , "مهندس شبكات"
            ]
        },
        { 
            mid: "176" ,
            jobo: "كثير"  ,
            summarize: "hghghghghg" ,
            name: "إدارة الأعمال", 
            field: "الاعمال", 
            description: "يركز تخصص إدارة الأعمال على دراسة العمليات الإدارية في المنظمات. يشمل التخطيط والتنظيم والقيادة والرقابة على الموارد لتحقيق الأهداف التنظيمية.",
            duration: "4 سنوات دراسية",
            universities: ["جامعة الملك سعود", "جامعة الإمام محمد بن سعود", "جامعة الدمام"],
            jobs: "3 وظائف",
            relatedJobs: [
            "مدير تسويق" ,  "مدير مشاريع" , "محلل أعمال"
            ]
        },
        { 
            mid: "176" ,
            jobo: "كثير"  ,
            summarize: "hghghghghg" ,
            name: "الهندسة المعمارية", 
            field: "الهندسة", 
            description: "يتعلم طلاب الهندسة المعمارية تصميم المباني والهياكل مع مراعاة الجوانب الجمالية والوظيفية والسلامة. يجمع التخصص بين الفنون والهندسة.",
            duration: "5 سنوات دراسية",
            universities: ["جامعة الملك فهد للبترول", "جامعة الملك سعود", "جامعة جدة"],
            jobs: "3 وظائف",
            relatedJobs: [
            "مهندس معماري" , "مصمم داخلي" , "مدير موقع بناء"
            ]
        },
        { 
            mid: "176" ,
            jobo: "كثير"  ,
            summarize: "hghghghghg" ,
            name: "AI", 
            field: "AI", 
            description: "يركز تخصص الذكاء الاصطناعي على تطوير أنظمة قادرة على محاكاة الذكاء البشري. يشمل تعلم الآلة، معالجة اللغة الطبيعية، الرؤية الحاسوبية وغيرها.",
            duration: "4 سنوات دراسية",
            universities: ["جامعة الملك سعود", "جامعة الأمير مقرن", "جامعة الملك عبدالله"],
            jobs: "3 وظائف",
            relatedJobs: [
                "مهندس تعلم آلي","باحث في الذكاء الاصطناعي","مطور خوارزميات"
            ]
        }
        ];
        // تعريف الماب (الربط) بين الفلاتر والمسميات
    const filterToCategoryMapping = {
        "الطب": ["الطب"],
        "الهندسة": ["الهندسة"],
        "IT & AI": ["IT", "AI"],
        "الأعمال": ["الاعمال", "الأعمال"],
        "العلوم": ["الفيزياء", "الكيمياء", "علم الاحياء"],
        "القانون": ["القانون"],
        "الزراعة": ["الزراعة"],
        "اللغات": ["اللغات"],
        "النقل": ["النقل"],
        "الفنون": ["الفنون"],
        "السياحة": ["السياحة"],
        "علوم النفس": ["العلوم النفسية"],
        "البناء": ["البناء"],
        "الرياضة": ["الرياضة"],
        "الطاقة": ["الطاقة"]
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
      
    
        // تهيئة الصفحة عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('jobs').style.display = 'block';
           // تهيئة البيانات
            renderProfessions(professions);
            renderMajors(majors);
            
            document.querySelectorAll('input[type="checkbox"][data-filter]').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const selectedFilter = checkbox.getAttribute('data-filter');
                    if (checkbox.checked) {
                        filterProfessionsByFilterName(selectedFilter);
                        filterMajorsByFilterName(selectedFilter);
                    } else {
                        // لو ألغى التحديد، نظهر كل شيء
                        renderProfessions(professions);
                        renderMajors(majors);
                    }
                });
            });
    // تفعيل البحث
    document.getElementById('searchInput').addEventListener('input', function(e) { 
        const currentSection = document.querySelector('.nav-link.active').getAttribute('href');
    

        
    if (currentSection !== '#jobs') {
        // السلوك الطبيعي للأقسام الأخرى
        searchResults.style.display = 'block';
    }

        const rawValue = e.target.value; // e معرّفة الآن
    const query = (rawValue || "").trim(); // معالجة القيم الفارغة

    if (query === "") {
        clearSearch();
        return;
    }

    const results = performSearch(query, currentSearchType);
    resetFilters();
    displaySearchResults(results);
    });
            initSearch();
            initCompareSearch();
            setCompareType('jobs');
            // تفعيل الفلتر الافتراضي إذا كان القسم النشط هو Best Jobs
            if (window.location.hash === '#best-jobs') {
                activeFilter = 'best';
                const bestFilterBtn = document.querySelector('#best-jobs .filter-item[data-filter="best"]');
                if (bestFilterBtn) bestFilterBtn.classList.add('active');
                applyFilters();
            }
            // تفعيل الفلتر الافتراضي إذا كان القسم النشط هو Best Jobs
            if (window.location.hash === '#best-jobs') {
                activeFilter = 'best';
                const bestFilterBtn = document.querySelector('#best-jobs .filter-item[data-filter="best"]');
                if (bestFilterBtn) bestFilterBtn.classList.add('active');
                applyFilters();
            }
        
    
   
    
  
        });

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
                
                // إزالة الفئة النشطة من جميع الروابط
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // إضافة الفئة النشطة للرابط المحدد
                this.classList.add('active');
                
                // عرض القسم المحدد
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).style.display = 'block';
                
                // إذا كان القسم المحدد هو Best Jobs، نطبق الفلتر الافتراضي
                if(targetId === 'best-jobs') {
                    setTimeout(() => {
                        applyFilters();
                    }, 0);
                }
                
                // إذا كان القسم المحدد هو Jobs and Careers، نعيد عرض البطاقات
                if(targetId === 'jobs') {
                    renderProfessions(professions);
                }

             
            });
        });
        // تهيئة وظيفة البحث
        function initSearch() {
            
    const searchResults = document.getElementById('searchResults');
    const mainSearchResults = document.getElementById('mainSearchResults');
    const searchInput = document.getElementById('searchInput');
    let timeoutId;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const query = e.target.value.trim();
            if (query === '') {
                clearSearch();
                return;
            }
            const results = performSearch(query, currentSearchType);
            resetFilters();
            displaySearchResults(results);
        }, 300); // تأخير 300 مللي ثانية
    });

    searchInput.addEventListener('input', function() {
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
                        <pملخص المهنة : ${profession.summarize}</p>
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
    document.getElementById('searchResults').style.display = 'none';
    
    // 2. إخفاء نتائج البحث
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('mainSearchResults').style.display = 'none';

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
}
        
        
        // دالة لعرض تفاصيل المهنة من نتائج البحث
        function showProfessionDetails(title) {
            const profession = professions.find(p => p.title === title);
    if (profession) showDetails(profession);
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
                    <p>ملخص المهنة : ${profession.summarize}</p>
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
                    <p style="margin: 1rem 0;">ملخص التخصص : ${major.summarize}</p>
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
                    (prof.title.toLowerCase().includes(query) || 
                    prof.description.toLowerCase().includes(query) ||
                    prof.jobo.toLowerCase().includes(query) ||
                    prof.category.toLowerCase().includes(query))
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

            title.textContent = profession.title;
            category.textContent = profession.category;
            content.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-item">
                        <span>فرص العمل</span>
                        ${profession.jobo}
                    </div>
                    <div class="stat-item">
                        <span>الخبرة</span>
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
            }
        }

        // دالة لإغلاق النافذة المنبثقة
        function closeModal() {
            document.getElementById('detailsModal').style.display = 'none';
        }

        // بيانات Best Jobs المخصصة
        const bestProfessions = [
           
            // أفضل المهن (Best Careers)
            {
                industry: "fhfhf" ,
                title: "جراح الأعصاب",
                category: "طب",
                avgSalary: "350,000-$1,200,000",
                experience: "10+ سنوات",
                demand: "مرتفع جدًا",
                profitability: "عالية",
                growthRate: "12%",
                jobType: "best",
                requiredSpecialties: [
                    "الجراحة الروبوتية (دافنشي)",
                    " الجراحة المجهرية",
                ],
                description: "تشخيص وعلاج أمراض الجهاز العصبي (الدماغ، الحبل الشوكي، الأعصاب الطرفية)"
            },
            {
                industry: "fhfhf" ,
                title: "جراح الأعصاب",
                category: "طب",
                avgSalary: "350,000-$1,200,000",
                experience: "10+ سنوات",
                demand: "مرتفع جدًا",
                profitability: "عالية",
                growthRate: "12%",
                jobType: "profit",
                requiredSpecialties: [
                    "الجراحة الروبوتية (دافنشي)",
                    " الجراحة المجهرية",
                    "البورد الأميركي أو السعودي",
                ],
                description: "تشخيص وعلاج أمراض الجهاز العصبي (الدماغ، الحبل الشوكي، الأعصاب الطرفية)"
            },
            {
                title: "مهندس الحوسبة الكمومية",
                category: "هندسة",
                avgSalary: "130,000-300,000",
                experience: "7+ سنوات",
                demand: "مرتفع",
                profitability: "استثنائية",
                growthRate: "20%",
                jobType: "best",
                requiredSpecialties: [
                    "Qiskit, Cirq,Python, Q#",
                    "	ميكانيكا الكم الأساسية,	نظرية الحقل الكمومي",
                    "	شهادات من منصات مثل IBM Quantum	شهادات متقدمة مثل Quantum Machine Learning",
                ],
                description: "تصميم وتطوير أنظمة حوسبة كمومية لحل مشكلات معقدة (مثل تحسين سلاسل التوريد، اكتشاف الأدوية)."
            },
           
            
             // الأكثر ربحًا (Most Profitable)
           
            {
                title:"جراح التجميل الافتراضي",
                category: "طب",
                avgSalary: "250,000 - 500,000",
                experience: "8+ سنوات",

                demand: "مرتفع",
                profitability: "استثنائية",

                growthRate: " 45%",
                jobType: "profit",
                requiredSpecialties: [
               " استخدام تقنيات AR/VR في التصميم الجراحي",
"- شهادة Board Certified Plastic Surgeon",
                ],
                description: "تصميم عمليات تجميلية افتراضية لعملاء في المملكة العربية السعودية باستخدام تقنيات Metaverse."
            },
            {
                title:" مدير صناديق العملات الرقمية",
                category: "هندسة",
                avgSalary: "	90,000-180,000",
                experience: "5+ سنوات",
                demand: "مرتفع",
                profitability: "استثنائية",
                growthRate: "25%",
                jobType: "profit",
                requiredSpecialties: [
                "- تحليل الأسواق الرقمي",
"- شهادات مثل CAIA أو CFA",
"- معرفة بقوانين الهيئة السعودية للأسواق المالية (CMA)",
                ],
                description:"	إدارة محافظ استثمارية في بورصات مثل Binance وRain (السعودية)."
            },
            {
                title: "خبير استشارات الذكاء الاصطناعي التنظيمي",
                category: "تكنولوجيا",
                avgSalary: "150,000 - 300,000",
                experience: "3+ سنوات",
                demand: "مرتفع",
                profitability: "ممتازة",
                growthRate: "35%",
                jobType: "profit",
                requiredSpecialties: [
              "  - معرفة بقوانين مثل لائحة الذكاء الاصطناعي السعودي",
 "- تحليل مخاطر أنظمة AI",
 "- شهادة CIPP/E أو CIPM"
                ],
                description: "تقديم استشارات لشركات ناشئة في مدينة دبي للإنترنت حول تشريعات الذكاء الاصطناعي"
            },
            
            // الأكثر طلبًا (Most In-Demand)
            
    {
        title: "مطور نماذج ذكاء اصطناعي المتخصصة",
        category: "الذكاء الاصطناعي والتقنيات المتقدمة",
        avgSalary:  "90,000 - 180,000",
        
        experience:"3+ سنوات",
      
        demand: "مرتفع جدًا",
        profitability: "استثنائية",
        growthRate: "35%",
        jobType: "demand",
        requiredSpecialties: [
            "Python | PyTorch | TensorFlow",
            "معالجة اللغة الطبيعية (NLP)",
            "خبرة في تدريب النماذج الضخمة (LLMs)"
        ],
        description: "تصميم وتدريب نماذج ذكاء اصطناعي مُخصصة لحلول مثل التشخيص الطبي أو التمويل الذكي."
    },
    {
        title: "فني الصحة الرقمية",
        category: "القطاع الصحي والتكنولوجيا",
        avgSalary:  "45,000 - 80,000",
        experience: "+4 سنوات",
        demand: "مرتفع",
        profitability: "عالي",
        growthRate: "30%",
        jobType: "demand",
        requiredSpecialties: [
            "إدارة السجلات الطبية الإلكترونية (EHR)",
            "تحليل بيانات المرضى",
            "أمن المعلومات الصحية (HIPAA)"
        ],
        description: "إدارة وتطوير الأنظمة الرقمية في المستشفيات ومراكز الرعاية الصحية."
    },
    {
        title: "مهندس البنية التحتية للسيارات ذاتية القيادة",
        category: "الهندسة والتكنولوجيا",
        avgSalary:"90,000 - 150,000", 
        experience:  "5 سنوات",
        demand: "مرتفع",
        profitability: "استثنائي",
        growthRate: "25%",
        jobType: "demand",
        requiredSpecialties: [
            "LiDAR وأنظمة الاستشعار",
            "برمجة أنظمة التحكم (ROS)",
            "شبكات اتصال V2X"
        ],
        description: "تصميم البنية التحتية الذكية لدعم السيارات ذاتية القيادة في المدن المستقبلية."
    },
    {
        title: "اختصاصي زراعة العمودية الذكية",
        category: "الزراعة التكنولوجية",
        avgSalary: "50,000 - 85,000",
        experience: "3+ سنوات ",
        demand: "متوسط-مرتفع",
        profitability: "عالي",
        growthRate:" 32%",
        jobType: "demand",
        requiredSpecialties: [
            "أنظمة الري الذكية",
            "الزراعة الهيدروبونية",
            "تحليل البيانات الزراعية"
        ],
        description: "تطوير مزارع عمودية ذكية لزيادة الإنتاجية في المناطق الصحراوية."
    },
    {
        title: "مصمم الواقع الممتد (XR)",
        category: "التصميم والتكنولوجيا",
        avgSalary:  "60,000 - 110,000",
        experience: "3+سنوات ",
        demand: "مرتفع",
        profitability: "عالي",
        growthRate:"45%",
        jobType: "demand",
        requiredSpecialties: [
            "تصميم 3D متقدم",
            "برمجة تفاعلية (C#/JavaScript)",
            "خبرة في منصات Metaverse"
        ],
        description: "إنشاء عواقع افتراضية وغامرة للتطبيقات التعليمية أو الترفيهية."
    },
         
            
            // أكثر فرص عمل (Most Job Opportunities)
    
    {
        title: "مسؤول التحول الرقمي",
        "category": "التكنولوجيا والاستراتيجية الرقمية",
        "avgSalary": "100,000 - 180,000",
        experience: "5+ سنوات",
        demand: "مرتفع جدًا",
        profitability: "استثنائية",
        growthRate: "32%",
            jobType:"opportunities",
        requiredSpecialties: [
            "إدارة عمليات التحول الرقمي",
            "تحليل البيانات الضخمة",
            "معرفة بمنصات مثل SAP أو Salesforce"
        ],
        description: "قيادة التحول الرقمي للشركات وتطبيق حلول تكنولوجية متقدمة لتحسين الكفاءة."
    },
    {
        title: "فني توربينات الرياح البحرية",
        category: "الطاقة المتجددة",
        avgSalary: "55,000 - 90,000",
        experience: "3+ سنوات",
        demand: "مرتفع",
        profitability: "عالي",
        growthRate: "40%",
        jobType:"opportunities",
        requiredSpecialties: [
            "صيانة التوربينات البحرية",
            "السلامة الصناعية",
            "أنظمة التحكم الكهربائية"
        ],
        description: "تركيب وصيانة توربينات الرياح في المناطق البحرية لتوليد الطاقة النظيفة."
    },
    {
        title: "محلل بيانات الجينوم",
        category: "التكنولوجيا الحيوية",
    avgSalary: "75,000 - 130,000",
        experience: "4+ سنوات",
        demand: "متوسط-مرتفع",
        profitability: "عالي",
        growthRate: "40%",
        jobType:"opportunities",
        requiredSpecialties: [
            "تحليل تسلسل الحمض النووي",
            "أدوات مثل Python/R للبيولوجيا الحسابية",
            "فهم الأمراض الوراثية"
        ],
        description: "تحليل البيانات الجينية لاكتشاف الأمراض الوراثية وتطوير علاجات مخصصة."
    },
    {
        title: "مدرب الذكاء الاصطناعي الأخلاقي",
        category: "الأخلاقيات التكنولوجية",
        avgSalary: "80,000 - 150,000",
        experience: "5+ سنوات ",
        demand: "مرتفع",
        profitability: "استثنائي",
        growthRate: "30%",
        jobType:"opportunities",
        requiredSpecialties: [
            "فلسفة الأخلاقيات التطبيقية",
            "تشريعات الذكاء الاصطناعي العالمية",
            "تصميم برامج تدريبية تفاعلية"
        ],
        description: "تدريب الشركات على تطبيق مبادئ أخلاقية في تصميم أنظمة الذكاء الاصطناعي."
    },
    {
        "title": "أخصائي أمن سيبراني للإنترنت الصناعي (IIoT)",
        "category": "الأمن السيبراني",
        "avgSalary":  "95,000 - 160,000",
        experience: "5+ سنوات ",
        demand: "مرتفع جدًا",
        profitability: "استثنائية",
        growthRate: "45%",
        jobType: "opportunities",
        requiredSpecialties: [
            "حماية أنظمة SCADA/ICS",
            "الكشف عن تهديدات الـ OT",
            "معايير NIST SP 800-82",
        ],
        description: "حماية البنية التحتية الصناعية من الهجمات الإلكترونية مثل محطات الطاقة والمصانع."
    },

            // للمبتدئين (Entry-Level Friendly)
            {
        title: "مطور ويب / تطبيقات الهاتف (Web & Mobile Developer)",
        category: "التكنولوجيا والبرمجة",
        avgSalary: "40,000 - 70,000",
        experience: "1-3 سنوات",
        demand: "مرتفع جدًا",
        profitability: "عالي",
        growthRate: "25%",
        jobType: "entry",
        requiredSpecialties: [
            "HTML/CSS/JavaScript",
            "React, Flutter, أو Swift",
            "قواعد البيانات (SQL/MongoDB)"
        ],
        description: "تصميم وتطوير مواقع وتطبيقات متنقلة باستخدام أحدث الأدوات والتقنيات."
    },
    {
        title: "فني طاقة شمسية (Solar Energy Technician)",
        category: "الطاقة المتجددة",
        avgSalary: "35,000 - 55,000",
        experience: "1-3 سنوات",
        demand: "مرتفع",
        profitability: "عالي",
        growthRate:"35%",
        jobType: "entry",
        requiredSpecialties: [
            "تركيب الألواح الشمسية",
            "صيانة الأنظمة الكهروضوئية",
            "شهادة NABCEP (ميزة)"
        ],
        description: "تركيب وصيانة أنظمة الطاقة الشمسية للمنازل والمشاريع التجارية."
    },
    {
        title: "مصمم جرافيك (Graphic Designer)",
        category: "التصميم الإبداعي",
        "avgSalary": "25,000 - 45,000",
           
        experience: "1-3 سنوات",
        demand: "مرتفع",
        profitability: "متوسط",
        growthRate:"25%",
        jobType: "entry",
        requiredSpecialties: [
            "Adobe Photoshop/Illustrator",
            "تصميم الشعارات والمواد التسويقية",
            "فهم العلامات التجارية"
        ],
        description: "إنشاء تصاميم مرئية مبتكرة للشركات والإعلانات الرقمية."
    },
    {
        title: "فني دعم فني (IT Support Specialist)",
        category: "تكنولوجيا المعلومات",
        avgSalary: "30,000 - 50,000",
        experience:"1-3 سنوات",
        demand: "مرتفع",
        profitability: "عالي",
        growthRate: "18%",
        jobType: "entry",
        requiredSpecialties: [
            "إصلاح الشبكات والأنظمة",
            "إدارة أنظمة التشغيل (Windows/macOS)",
            "شهادة CompTIA A+"
        ],
        description: "تقديم دعم تقني وحل مشكلات الأجهزة والبرمجيات للمستخدمين."
    },
    {
        title: "أخصائي تسويق رقمي (Digital Marketer)",
        category: "التسويق الرقمي",
        avgSalary:"35,000 - 60,000",
        experience:  "1-3 سنوات",
        demand: "مرتفع جدًا",
        profitability: "عالي",
        growthRate: "28%",
        jobType: "entry",
        requiredSpecialties: [
            "إدارة حملات Google Ads/Meta",
            "تحليل البيانات (Google Analytics)",
            "إنشاء محتوى تفاعلي"
        ],
        description: "إدارة الحملات الإعلانية وتحليل أدائها على المنصات الرقمية."
    }
        ];

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
                    <div class="profitability-badge">${job.profitability}</div>
                    <h3>${job.title}</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span>متوسط الراتب</span>
                            <div class="highlight">$${job.avgSalary}</div>
                        </div>
                        <div class="stat-item">
                            <span>سنوات الخبرة</span>
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
        function setCompareType(type) {
            compareType = type;
            
            // تحديث الأزرار النشطة
            document.getElementById('compareJobsBtn').classList.toggle('active', type === 'jobs');
            document.getElementById('compareMajorsBtn').classList.toggle('active', type === 'majors');
            
            // تحديث نصوص placeholder
            const placeholderText = type === 'jobs' ? 'ابحث عن مهنة...' : 'ابحث عن تخصص...';
            document.getElementById('compareInput1').placeholder = placeholderText;
            document.getElementById('compareInput2').placeholder = placeholderText;
            
            // مسح الحقول والنتائج
            document.getElementById('compareInput1').value = '';
            document.getElementById('compareInput2').value = '';
            document.getElementById('compareResults1').style.display = 'none';
            document.getElementById('compareResults2').style.display = 'none';
            document.getElementById('compareResults').style.display = 'none';
            selectedItem1 = null;
            selectedItem2 = null;
        }

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
                    prof.title.toLowerCase().includes(query) || 
                    prof.description.toLowerCase().includes(query)
                );
            } else {
                results = majors.filter(major => 
                    major.name.toLowerCase().includes(query) || 
                    major.description.toLowerCase().includes(query)
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
                const desc = compareType === 'jobs' ? item.description : item.description;
                const type = compareType === 'jobs' ? item.jobo : item.jobo;
                
                html += `
                    <div class="search-result-item" onclick="selectCompareItem(${inputNumber}, '${title.replace(/'/g, "\\'")}')">
                        <h4>${title}</h4>
                        <p>${desc.substring(0, 60)}...</p>
                        <small style="color: var(--secondary);">${type}</small>
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
            
            const resultsDiv = document.getElementById('compareResults');
            const tableBody = document.getElementById('compareTableBody');
            const detailsDiv = document.getElementById('compareDetails');
            
            // تعيين العناوين
            document.getElementById('compareHeader1').textContent = 
                compareType === 'jobs' ? selectedItem1.title : selectedItem1.name;
            document.getElementById('compareHeader2').textContent = 
                compareType === 'jobs' ? selectedItem2.title : selectedItem2.name;
            
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
                        <td>سنوات الخبرة المطلوبة</td>
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
                highlightBest(tableBody, [3, 4]); // أعمدة الراتب والطلب
            } else {
                // مقارنة التخصصات
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
                        <td>عدد الوظائف المرتبطة</td>
                        <td>${selectedItem1.relatedJobs ? selectedItem1.relatedJobs.length : 0}</td>
                        <td>${selectedItem2.relatedJobs ? selectedItem2.relatedJobs.length : 0}</td>
                    </tr>
                    <tr>
                        <td>السنوات الدرسية/td>
                        <td>${selectedItem1.duration}</td>
                        <td>${selectedItem2.duration}</td>
                    </tr>
                   <tr>
                        <td>عدد الساعات الدراسية</td>
                        <td>${selectedItem1.mid}</td>
                        <td>${selectedItem2.mid}</td>
                    </tr>
                `;
                
                // تحديد الأفضل في كل فئة
                highlightBest(tableBody, [2]); // عمود عدد الوظائف
            }
            
            tableBody.innerHTML = tableHTML;
            
            // عرض تفاصيل كل عنصر
            let detailsHTML = '';
            if (compareType === 'jobs') {
                detailsHTML = `
                    <div class="compare-detail-card">
                        <h4>${selectedItem1.title}</h4>
                        <p><strong>فرص العمل:</strong> ${selectedItem1.jobo}</p>
                        <p><strong>ملخص المهنة:</strong> ${selectedItem1.summarize}</p>
                        <p><strong>الراتب:</strong> $${selectedItem1.avgSalary}</p>
                        <p><strong>الخبرة المطلوبة:</strong> ${selectedItem1.experience}</p>
                        <p><strong>مستوى الطلب:</strong> ${selectedItem1.demand}</p>
                    </div>
                    <div class="compare-detail-card">
                        <h4>${selectedItem2.title}</h4>
                        <p><strong>فرص العمل :</strong> ${selectedItem2.jobo}</p>
                        <p><strong>الوصف:</strong> ${selectedItem2.summarize}</p>
                        <p><strong>الراتب:</strong> $${selectedItem2.avgSalary}</p>
                        <p><strong>الخبرة المطلوبة:</strong> ${selectedItem2.experience}</p>
                        <p><strong>مستوى الطلب:</strong> ${selectedItem2.demand}</p>
                    </div>
                `;
            } else {
                detailsHTML = `
                    <div class="compare-detail-card">
                        <h4>${selectedItem1.name}</h4>
                        <p><strong>فرص العمل :</strong> ${selectedItem1.jobo}</p>
                        <p><strong>ملخص التخصص :</strong> ${selectedItem1.description}</p>
                        ${selectedItem1.relatedJobs && selectedItem1.relatedJobs.length > 0 ? `
                            <p><strong>الوظائف المرتبطة:</strong></p>
                            <ul>
                                ${selectedItem1.relatedJobs.map(job => `
                                    <li>${job.title} (${job.salary})</li>
                                `).join('')}
                            </ul>
                        ` : ''}
                    </div>
                    <div class="compare-detail-card">
                        <h4>${selectedItem2.name}</h4>
                        <p><strong>فرص العمل :</strong> ${selectedItem2.field}</p>
                        <p><strong>ملخص التخصص :</strong> ${selectedItem2.summarize}</p>
                        ${selectedItem2.relatedJobs && selectedItem2.relatedJobs.length > 0 ? `
                            <p><strong>الوظائف المرتبطة:</strong></p>
                            <ul>
                                ${selectedItem2.relatedJobs.map(job => `
                                    <li>${job.title} (${job.salary})</li>
                                `).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `;
            }
            
            detailsDiv.innerHTML = detailsHTML;
            resultsDiv.style.display = 'block';
            
            // التمرير إلى نتائج المقارنة
            resultsDiv.scrollIntoView({ behavior: 'smooth' });
        }

        // تحديد الأفضل في كل فئة
        function highlightBest(tableBody, columnsToCompare) {
            const rows = tableBody.querySelectorAll('tr');
            
            columnsToCompare.forEach(col => {
                if (col >= rows.length) return;
                
                const cells = rows[col].querySelectorAll('td');
                const value1 = cells[1].textContent;
                const value2 = cells[2].textContent;
                
                // مقارنة الراتب (تحويل إلى أرقام)
                if (col === 3) {
                    const salary1 = parseInt(value1.replace(/[^0-9]/g, '').split('-')[0]);
                    const salary2 = parseInt(value2.replace(/[^0-9]/g, '').split('-')[0]);
                    
                    if (salary1 > salary2) {
                        cells[1].classList.add('compare-winner');
                    } else if (salary2 > salary1) {
                        cells[2].classList.add('compare-winner');
                    }
                }
                // مقارنة الطلب
                else if (col === 4) {
                    const demandOrder = ['مرتفع جدًا', 'مرتفع', 'متوسط', 'منخفض'];
                    const demand1 = demandOrder.indexOf(value1);
                    const demand2 = demandOrder.indexOf(value2);
                    
                    if (demand1 < demand2) {
                        cells[1].classList.add('compare-winner');
                    } else if (demand2 < demand1) {
                        cells[2].classList.add('compare-winner');
                    }
                }
                // مقارنة عدد الوظائف (للتخصصات)
                else if (col === 2) {
                    const num1 = parseInt(value1);
                    const num2 = parseInt(value2);
                    
                    if (num1 > num2) {
                        cells[1].classList.add('compare-winner');
                    } else if (num2 > num1) {
                        cells[2].classList.add('compare-winner');
                    }
                }
            });
        }

        // متغيرات الاختبار المهني
        let currentQuestion = 0;
        let quizAnswers = [];
        const quizQuestions = [
            {
                question: "ما هو مستوى الراتب الذي تفضله؟",
                options: [
                    { text: "أكثر من 200,000 دولار سنوياً", value: "high" },
                    { text: "بين 100,000 و 200,000 دولار سنوياً", value: "medium" },
                    { text: "أقل من 100,000 دولار سنوياً", value: "low" },
                    { text: "الراتب ليس عاملاً حاسماً بالنسبة لي", value: "any" }
                ]
            },
            {
                question: "ما هو مجال العمل الذي تفضله؟",
                options: [
                    { text: "التكنولوجيا والذكاء الاصطناعي", value: "tech" },
                    { text: "الطب والرعاية الصحية", value: "medical" },
                    { text: "الهندسة والتصميم", value: "engineering" },
                    { text: "الأعمال والإدارة", value: "business" }
                ]
            },
            {
                question: "ما هي المهارات التي تمتلكها؟",
                options: [
                    { text: "مهارات تحليلية ورياضية", value: "analytical" },
                    { text: "مهارات إبداعية وتصميم", value: "creative" },
                    { text: "مهارات تواصل وقيادة", value: "leadership" },
                    { text: "مهارات يدوية وتقنية", value: "technical" }
                ]
            },
            {
                question: "ما هو مستوى الخبرة لديك؟",
                options: [
                    { text: "خبرة أكثر من 5 سنوات", value: "senior" },
                    { text: "خبرة بين 2-5 سنوات", value: "mid" },
                    { text: "خبرة أقل من سنتين", value: "junior" },
                    { text: "لا أمتلك خبرة عملية", value: "entry" }
                ]
            },
            {
        question: "ما هو نمط العمل الذي تفضله؟",
        options: [
            { text: "العمل الفردي المستقل", value: "solo" },
            { text: "العمل ضمن فريق", value: "team" },
            { text: "القيادة والإشراف", value: "leadership" },
            { text: "مزيج بين العمل الفردي والجماعي", value: "mixed" }
        ]
    },
    {
        question: "ما هي البيئة العملية المثالية لك؟",
        options: [
            { text: "مكتب تقليدي", value: "office" },
            { text: "عمل عن بُعد", value: "remote" },
            { text: "عمل ميداني", value: "field" },
            { text: "مساحة عمل مرنة", value: "flex" }
        ]
    },
    {
        question: "ما هو مستوى السفر الذي تستطيع تحمله؟",
        options: [
            { text: "لا أرغب في السفر", value: "none" },
            { text: "سفر محلي محدود", value: "local" },
            { text: "سفر دولي متكرر", value: "international" },
            { text: "أعيش في مواقع مختلفة", value: "nomad" }
        ]
    },
    {
        question: "ما هي طبيعة العمل المفضلة؟",
        options: [
            { text: "مهام روتينية منظمة", value: "routine" },
            { text: "مشاريع متغيرة", value: "dynamic" },
            { text: "عمل إبداعي", value: "creative" },
            { text: "حل مشكلات معقدة", value: "problem_solving" }
        ]
    },
    {
        question: "ما هو مستوى التفاعل الاجتماعي المفضل؟",
        options: [
            { text: "تفاعل محدود مع الناس", value: "low" },
            { text: "تفاعل مع زملاء العمل فقط", value: "medium" },
            { text: "تفاعل مع عملاء/مرضى", value: "high" },
            { text: "تفاعل مع جمهور كبير", value: "public" }
        ]
    },
    {
        question: "ما هي أولوية التوازن بين الحياة والعمل؟",
        options: [
            { text: "العمل أولاً", value: "work_first" },
            { text: "توازن صارم", value: "strict_balance" },
            { text: "مرونة حسب الظروف", value: "flexible" },
            { text: "حسب متطلبات الوظيفة", value: "job_dependent" }
        ]
    },
    {
        question: "ما هي طريقة التعلم المفضلة؟",
        options: [
            { text: "التدريب العملي", value: "hands_on" },
            { text: "الدراسة الأكاديمية", value: "academic" },
            { text: "التعلم الذاتي عبر الإنترنت", value: "online" },
            { text: "التلمذة المهنية", value: "apprenticeship" }
        ]
    },
    {
        question: "ما هو مستوى الضغط الذي تتعامل معه؟",
        options: [
            { text: "بيئة هادئة", value: "low" },
            { text: "ضغط متوسط مع فترات ذروة", value: "medium" },
            { text: "ضغط عالي دائم", value: "high" },
            { text: "أزمة/حالات طوارئ", value: "crisis" }
        ]
    },
    {
        question: "ما هي توقعاتك للتطور الوظيفي؟",
        options: [
            { text: "ترقيات سريعة", value: "fast" },
            { text: "تطور تدريجي", value: "steady" },
            { text: "استقرار في المنصب", value: "stable" },
            { text: "تغيير مجالات العمل", value: "change" }
        ]
    },
    {
        question: "ما هو مستوى الإبداع المطلوب؟",
        options: [
            { text: "اتباع تعليمات محددة", value: "low" },
            { text: "تحسين العمليات الحالية", value: "medium" },
            { text: "ابتكار حلول جديدة", value: "high" },
            { text: "بحث وتطوير مكثف", value: "rnd" }
        ]
    },
    {
        question: "ما هي طبيعة المهام المفضلة؟",
        options: [
            { text: "مهام تقنية متخصصة", value: "technical" },
            { text: "مهام إدارية", value: "managerial" },
            { text: "مهام خدمية", value: "service" },
            { text: "مهام بحثية", value: "research" }
        ]
    },
    {
        question: "ما هي أولوياتك في الوظيفة؟",
        options: [
            { text: "الراتب والمزايا", value: "salary" },
            { text: "التوازن الحياة/العمل", value: "balance" },
            { text: "التأثير الاجتماعي", value: "impact" },
            { text: "التطور الشخصي", value: "growth" }
        ]
    },
    {
        question: "ما هو نمط القيادة المفضل؟",
        options: [
            { text: "قيادة مباشرة", value: "directive" },
            { text: "قيادة تعاونية", value: "collaborative" },
            { text: "قيادة تحفيزية", value: "motivational" },
            { text: "تفويض الصلاحيات", value: "delegative" }
        ]
    },
    {
        question: "ما هي طبيعة القرارات المفضلة؟",
        options: [
            { text: "قرارات فورية", value: "instant" },
            { text: "قرارات مدروسة", value: "planned" },
            { text: "قرارات جماعية", value: "group" },
            { text: "قرارات قائمة على البيانات", value: "data_driven" }
        ]
    },
    {
        question: "ما هو مستوى المسؤولية المطلوب؟",
        options: [
            { text: "مسؤولية محددة", value: "defined" },
            { text: "مسؤولية عن فريق", value: "team" },
            { text: "مسؤولية عن مشاريع", value: "projects" },
            { text: "مسؤولية تنظيمية", value: "organizational" }
        ]
    }
        ];

        // بدء الاختبار
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
        function showQuestion() {
            const question = quizQuestions[currentQuestion];
            document.getElementById('currentQuestion').textContent = question.question;
            
            const optionsContainer = document.getElementById('quizOptions');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option';
                optionElement.innerHTML = `
                    <div class="option-number">${index + 1}</div>
                    <div>${option.text}</div>
                `;
                optionElement.addEventListener('click', () => selectAnswer(option.value));
                optionsContainer.appendChild(optionElement);
            });
            
            // تحديث شريط التقدم
            const progress = ((currentQuestion) / quizQuestions.length) * 100;
            document.getElementById('quizProgressBar').style.width = `${progress}%`;
        }

        // اختيار إجابة
        function selectAnswer(answer) {
            quizAnswers.push(answer);
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
            const matchedProfessions = calculateMatches();
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

        // حساب المهن المطابقة
        function calculateMatches() {
            const preferences = {
        work_style: quizAnswers[0],
        environment: quizAnswers[1],
        travel: quizAnswers[2],
        work_nature: quizAnswers[3],
        social: quizAnswers[4],
        balance: quizAnswers[5],
        learning: quizAnswers[6],
        stress: quizAnswers[7],
        career_growth: quizAnswers[8],
        creativity: quizAnswers[9],
        tasks: quizAnswers[10],
        priorities: quizAnswers[11],
        leadership: quizAnswers[12],
        decisions: quizAnswers[13],
        responsibility: quizAnswers[14]
    };
    const scoredProfessions = professions.map(prof => {
        let score = 0;
        
        // نظام النقاط المتقدم
        score += calculateCompatibility(prof, preferences);
        
        return {
            ...prof,
            matchPercent: Math.min(100, Math.round(score))
        };
    });

    return scoredProfessions
        .filter(prof => prof.matchPercent >= 60)
        .sort((a, b) => b.matchPercent - a.matchPercent)
        .slice(0, 5);
}

function calculateCompatibility(prof, prefs) {
    let score = 0;
    
    // مثال: تحليل التوافق مع نمط العمل
    if (prof.work_style === prefs.work_style) score += 15;
    
    // مثال: تحليل التوافق مع بيئة العمل
    if (prof.environment === prefs.environment) score += 10;
    
    // إضافة معايير أخرى بنفس المنطق...
    
    return score;
            // حساب درجة المطابقة لكل مهنة
            const scoredProfessions = professions.map(prof => {
                let score = 0;
                
                // مطابقة الراتب
                if (preferences.salary === 'high' && parseInt(prof.avgSalary.replace(/\D/g,'')) > 200000) score += 20;
                else if (preferences.salary === 'medium' && parseInt(prof.avgSalary.replace(/\D/g,'')) > 100000) score += 15;
                else if (preferences.salary === 'low' && parseInt(prof.avgSalary.replace(/\D/g,'')) < 100000) score += 10;
                else if (preferences.salary === 'any') score += 5;
                
                // مطابقة المجال
                if ((preferences.field === 'tech' && (prof.category === 'AI')) ||
                    (preferences.field === 'medical' && prof.category === 'طب') ||
                    (preferences.field === 'engineering' && prof.category === 'هندسة') ||
                    (preferences.field === 'business' && prof.category === 'أعمال')) {
                    score += 20;
                }
                
                // مطابقة المهارات
                if (prof.skills) {
                    if ((preferences.skills === 'analytical' && prof.skills.includes('تحليلية')) ||
                        (preferences.skills === 'creative' && prof.skills.includes('إبداعية')) ||
                        (preferences.skills === 'leadership' && prof.skills.includes('قيادة')) ||
                        (preferences.skills === 'technical' && prof.skills.includes('تقنية'))) {
                        score += 20;
                    }
                }
                
                // مطابقة الخبرة
                if (preferences.experience === 'senior' && prof.experience.includes('+5')) score += 20;
                    else if (preferences.experience === 'mid' && prof.experience.includes('+2')) score += 15;
                    else if (preferences.experience === 'junior' && prof.experience.includes('+1')) score += 10;
                    else if (preferences.experience === 'entry' && prof.experience.includes('0')) score += 5;

// مطابقة الطلب
                if (preferences.demand === 'high' && prof.demand === 'مرتفع جدًا') score += 20;
                    else if (preferences.demand === 'medium' && prof.demand === 'مرتفع') score += 15;
                    else if (preferences.demand === 'any') score += 5;
                return {
                    ...prof,
                    matchPercent: Math.min(100, Math.round(score))
                };
            });
            
            // تصفية وترتيب النتائج
            return scoredProfessions
                .filter(prof => prof.matchPercent >= 50)
                .sort((a, b) => b.matchPercent - a.matchPercent)
                .slice(0, 3); // أفضل 5 نتائج فقط
        }
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
                <span>عدد الوظائف</span>
                ${major.relatedJobs.length}
            </div>
            <div class="stat-item">
                <span>السنوات الدراسية</span>
                ${major.duration}
            </div>
            <div class="stat-item">
                <span>متوسط عدد الساعات الدراسية</span>
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
            document.getElementById('jobs').style.display = 'block';
            
            // تحديث الروابط النشطة
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            document.querySelector('.nav-link[href="#jobs"]').classList.add('active');
        }

        function linkSearchTypeToView(type) {
    currentSearchType = type;
    const searchInput = document.getElementById('searchInput');
    document.getElementById('mainSearchResults').style.display = 'none'; // إخفاء نتائج البحث القديمة
   // تحديث الـ placeholder حسب النوع
   if(type === 'jobs') {
        searchInput.placeholder = "ابحث عن مهنة...";
    } else {
        searchInput.placeholder = "ابحث عن تخصص...";
    }
    


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
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery) {
        const results = performSearch(searchQuery, type);
        resetFilters();
        displaySearchResults(results);
    }
}


function performSearch(query, type) {
    const normalizedQuery = query.trim().toLowerCase();
    if (type === 'jobs') {
        return {
            professions: professions.filter(prof =>
                prof.title.toLowerCase().includes(normalizedQuery) ||
                prof.description.toLowerCase().includes(normalizedQuery) ||
                prof.category.toLowerCase().includes(normalizedQuery)
            ),
            majors: []
        };
    } else {
        return {
            professions: [],
            majors: majors.filter(major =>
                major.name.toLowerCase().includes(normalizedQuery) ||
                major.description.toLowerCase().includes(normalizedQuery) ||
                major.field.toLowerCase().includes(normalizedQuery)
            )
        };
    }
    document.getElementById('showMajorsBtn').classList.toggle('active', currentSearchType === 'majors');
}
function displaySearchResults(results) {
    
    const searchInput = document.getElementById('searchInput');
    const mainSearchResults = document.getElementById('mainSearchResults');
    const activeSection = document.querySelector('.nav-link.active').getAttribute('href');
    const searchResults = document.getElementById('searchResults');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

   
    // تحديث نص البحث في العنوان
    document.getElementById('searchQueryText').textContent = searchInput.value.trim();
    
    // إظهار قسم النتائج الرئيسي
    mainSearchResults.style.display = 'block';
    const mainMajorsContainer = document.getElementById('majorsContainer'); // القسم الرئيسي للتخصصات
    searchResults.innerHTML = ''; // مسح النتائج القديمة
    if (results.professions.length > 0 || results.majors.length > 0) {
        const targetPosition = mainSearchResults.getBoundingClientRect().top + window.pageYOffset;
        setTimeout(() => {
            window.scrollTo({
                top: targetPosition - navbarHeight - 20, // 20px مسافة إضافية
                behavior: 'smooth'
            });
        }, 100);
    }


// أخفاء النافذة فقط في قسم المهن
if (activeSection === '#jobs') {
        searchResults.style.opacity = '0';
        searchResults.style.visibility = 'hidden';
        searchResults.style.pointerEvents = 'none';
        searchResults.style.height = '0';
    } else {
        searchResults.style.opacity = '1';
        searchResults.style.visibility = 'visible';
        searchResults.style.pointerEvents = 'auto';
        searchResults.style.height = 'auto';
    }




    if (currentSearchType === 'majors') {
        renderMajorsResults(results.majors); // عرض النتائج في majorsContainer
    } else {
        renderProfessions(results.professions);
    }
    
    // إذا كانت النتائج فارغة
    if ((currentSearchType === 'jobs' && results.professions.length === 0) ||
        (currentSearchType === 'majors' && results.majors.length === 0)) {
        searchResults.innerHTML = '<div class="no-results">لا توجد نتائج مطابقة</div>';
        searchResults.style.display = 'block';
        return;
    }

    // عرض النتائج حسب النوع
    if (currentSearchType === 'jobs') {
        results.professions.forEach(prof => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <h4>${prof.title}</h4>
                <p>${prof.description.substring(0, 60)}...</p>
                <small>فرص العمل: ${prof.jobo}</small>
            `;
            item.addEventListener('click', () => {
                showDetails(prof);
                searchResults.style.display = 'none'; // إخفاء النتائج بعد النقر
            });
            searchResults.appendChild(item);
        });
    } else {
        results.majors.forEach(major => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <h4>${major.name}</h4>
                <p>${major.description.substring(0, 60)}...</p>
                <small>فرص العمل: ${major.jobo}</small>
            `;
            item.addEventListener('click', () => {
                showMajorDetails(major);
                searchResults.style.display = 'none'; // إخفاء النتائج بعد النقر
            });
            searchResults.appendChild(item);
        });
    }
    searchResults.style.display = 'block';
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
                <p>ملخص التخصص : ${major.summarize}</p>
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
searchInput.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const query = e.target.value.trim();
        // ...perform search
    }, 300);
});
// إخفاء النافذة عند النقر خارجها
document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchContainer.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});
function onFilterChange() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const checkboxes = document.querySelectorAll('#jobFieldsFilter input[type="checkbox"]:checked');
    const selectedCategories = Array.from(checkboxes).map(cb => cb.value);
    const isFiltering = selectedCategories.length > 0;

    const dataSource = currentSearchType === 'jobs' ? professions : majors;
    const results = dataSource.filter(item => {
        const title = (item.title || item.name || '').toLowerCase();
        const category = item.category || item.field || '';
        const matchesSearch = !query || title.includes(query);
        const matchesFilter = !isFiltering || selectedCategories.includes(category);
        return matchesSearch && matchesFilter;
    });

    if (currentSearchType === 'jobs') {
        renderProfessions(results);
    } else {
        renderMajors(results);
    }
}

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
    // 1. إلغاء تحديد جميع الـ checkboxes
    const checkboxes = document.querySelectorAll('#jobFieldsFilter input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // 2. إزالة الكلاس active من جميع الفلاتر (باستثناء أزرار العرض)
    const activeFilters = document.querySelectorAll('.filter-item.active:not(#showProfessionsBtn):not(#showMajorsBtn)');
    activeFilters.forEach(filter => {
        filter.classList.remove('active');
    });
}
