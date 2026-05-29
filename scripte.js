const professionFilterMapping = {
  الطب: ["الطب", "هندسةوطب", "العلوم والطب"],
  الهندسة: [
    "الهندسة",
    "الهندسة والطب",
    "هندسة&AI",
    "هندسة&IT",
    "الهندسة والبناء",
    "الهندسة والعلوم",
    "الهندسة والزراعة",
    "الهندسة والطاقة",
    "الهندسة والفنون",
    "الهندسة والنقل",
    "الهندسة + الزراعة",
    "الهندسة + AI",
    "الهندسة + IT",
    "الهندسة + النقل",
  ],
  "IT & AI": [
    "النقل + IT",
    "IT",
    "AI",
    "هندسة&AI",
    "هندسة&IT",
    "الهندسة+ AI",
    "الهندسة + IT",
  ],
  الأعمال: ["الأعمال", "الأعمال والنقل", "الأعمال + النقل"],
  العلوم: [
    "الفيزياء",
    "الكيمياء",
    "علم الاحياء",
    "العلوم",
    "علوم",
    "الهندسة والعلوم",
    "العلوم والزراعة",
    "العلوم والطب",
  ],
  القانون: ["القانون", "الأمن"],
  الزراعة: [
    "الزراعة",
    "الهندسة والزراعة",
    "العلوم والزراعة",
    "الهندسة + الزراعة",
  ],
  اللغات: ["اللغات", "الآداب"],
  النقل: ["النقل + IT", "النقل", "الهندسة + النقل", "الأعمال + النقل"],
  الفنون: ["الفنون", "الفنون وIT", "التصميم", "الفنون و التصميم"],
  البناء: [
    "البناء",
    "الهندسة والبناء",
    "الرياضة",
    "الطاقة",
    "الإعلام",
    "السياحة",
    "الهندسة والطاقة",
    "الهندسة والطاقة",
  ],
};

// تعريف الماب (الربط) بين الفلاتر والمسميات للتخصصات فقط
const majorFilterMapping = {
  الطب: ["الطب", "هندسةوطب", "العلوم والطب"],
  الهندسة: [
    "الهندسة",
    "الهندسة والطب",
    "هندسة&AI",
    "هندسة&IT",
    "الهندسة والبناء",
    "الهندسة والعلوم",
    "الهندسة والزراعة",
    "الهندسة والطاقة",
    "الهندسة والفنون",
    "الهندسة والنقل",
    "الهندسة + الزراعة",
    "الهندسة + AI",
    "الهندسة + IT",
    "الهندسة + النقل",
  ],
  "IT & AI": [
    "النقل + IT",
    "IT",
    "AI",
    "هندسة&AI",
    "هندسة&IT",
    "الهندسة+ AI",
    "الهندسة + IT",
  ],
  الأعمال: ["الأعمال", "الأعمال والنقل", "الأعمال + النقل"],
  العلوم: [
    "الفيزياء",
    "الكيمياء",
    "علم الاحياء",
    "العلوم",
    "علوم",
    "الهندسة والعلوم",
    "العلوم والزراعة",
    "العلوم والطب",
  ],
  القانون: ["القانون", "الأمن"],
  الزراعة: [
    "الزراعة",
    "الهندسة والزراعة",
    "العلوم والزراعة",
    "الهندسة + الزراعة",
  ],
  اللغات: ["اللغات", "الآداب"],
  النقل: ["النقل + IT", "النقل", "الهندسة + النقل", "الأعمال + النقل"],
  الفنون: ["الفنون", "الفنون وIT", "التصميم", "الفنون و التصميم"],
  البناء: [
    "البناء",
    "الهندسة والبناء",
    "الرياضة",
    "الطاقة",
    "الإعلام",
    "السياحة",
    "الهندسة والطاقة",
    "الهندسة والطاقة",
  ],
};

// دالة للحصول على فئات المهن بناءً على الفلتر
function getProfessionCategoriesForFilter(filterName) {
  return professionFilterMapping[filterName] || [];
}

// دالة للحصول على مجالات التخصصات بناءً على الفلتر
function getMajorFieldsForFilter(filterName) {
  return majorFilterMapping[filterName] || [];
}

// تعريف المتغيرات العامة
let currentSearchType = "jobs";
let majors = [];
let professions = [];
let bestProfessions = [];
let quizQuestions = [];
let activeFilter = null;
let currentQuestion = 0;
let quizAnswers = [];




// تحميل البيانات وتهيئة الصفحة حسب نوعها
document.addEventListener("DOMContentLoaded", function () {
  fetch('./jobs.json')
  .then(res => res.json())
  .then(data => {
    professions = data.professions || [];
    majors = data.majors || [];
    bestProfessions = data.bestProfessions || [];
    
    // تحديد نوع البحث الافتراضي حسب القسم الحالي
    const professionsContainer = document.getElementById("professionsContainer");
    const majorsContainer = document.getElementById("majorsContainer");
    const searchInput = document.getElementById("searchInput");
    
    // تهيئة البحث أولاً وقبل كل شيء
    initSearch();
    
    // تهيئة العرض الافتراضي - عرض المهن فقط
    if (professionsContainer) {
      professionsContainer.style.display = "grid";
      professionsContainer.innerHTML = "";
      renderProfessions(professions);
    }
    if (majorsContainer) {
      majorsContainer.style.display = "none";
      majorsContainer.innerHTML = "";
    }
    
    // تعيين نوع البحث الافتراضي
    currentSearchType = "jobs";
    
    // تفعيل الزر الافتراضي
    document.getElementById("showProfessionsBtn")?.classList.add("active");
    document.querySelector('.search-type[data-type="jobs"]')?.classList.add("active");
    
    if (searchInput) {
      searchInput.placeholder = "ابحث عن مهنة...";
    }
    
    // إعداد جميع event listeners
    setupEventListeners();
    
    // تهيئة صفحة المهن الذهبية إذا كنا فيها
    if (window.location.pathname.includes("best-jobs")) {
      activeFilter = "best";
      applyFilters();
    }
  });
});
// إعداد جميع event listeners
function setupEventListeners() {
  // تهيئة البحث أولاً
  // initSearch(); // تم نقلها إلى DOMContentLoaded
  
  // زر عرض المهن
  const showProfessionsBtn = document.getElementById('showProfessionsBtn');
  if (showProfessionsBtn) {
    showProfessionsBtn.addEventListener('click', () => linkSearchTypeToView('jobs'));
  }
  
  // زر عرض التخصصات
  const showMajorsBtn = document.getElementById('showMajorsBtn');
  if (showMajorsBtn) {
    showMajorsBtn.addEventListener('click', () => linkSearchTypeToView('majors'));
  }
  
  // زر عرض المزيد من الفلاتر
  const showMoreFilters = document.getElementById('showMoreFilters');
  if (showMoreFilters) {
    showMoreFilters.addEventListener('click', toggleFilters);
  }
  
  // زر مسح البحث
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
  }
  
  // زر إغلاق المودال
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      const modal = document.querySelector('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // رابط "من نحن"
  const aboutLink = document.getElementById('about-link');
  if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      startTyping();
      setTimeout(() => {
        window.location.href = '/about.html';
      }, 1000);
    });
  }
  
  // فلاتر المجال - إضافة event listeners لجميع checkboxes
  const filterCheckboxes = document.querySelectorAll('#jobFieldsFilter input[type="checkbox"]');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', onFilterChange);
  });
}

// دالة للحصول على الفلاتر المتاحة
function getCategoriesForFilter(filterName) {
  return professionFilterMapping[filterName] || [];
}

// مثال: كيف تستخدمها
function filterProfessionsByFilterName(filterName) {  
  const relatedCategories = getProfessionCategoriesForFilter(filterName);

  const filteredProfessions = professions.filter((profession) =>
    relatedCategories.includes(profession.category)
  );

  // عرض النتائج
  renderProfessions(filteredProfessions);
}
function filterMajorsByFilterName(filterName) {
  const relatedFields = getMajorFieldsForFilter(filterName);

  const filteredMajors = majors.filter((major) =>
    relatedFields.includes(major.field)
  );

  // عرض النتائج
  renderMajors(filteredMajors);
}
// ✅ إزالة الكود القديم واستبداله بهذا

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname; // مثال: /jobs.html أو /jobs
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    // إزالة الكلاس النشط أولاً
    link.classList.remove("active");

    // معالجة الرابط
    const linkHref = link.getAttribute("href");

    // ✅ التحقق من وجود النص داخل المسار (للتوافق مع .html أو بدون)
    if (
      currentPath.includes(linkHref.replace("/", "")) ||
      (linkHref === "/" &&
        (currentPath === "/per12git.html" || currentPath === "/"))
    ) {
      link.classList.add("active");
    }
  });

  // تهيئة البيانات - عرض المهنة فقط افتراضياً
  renderProfessions(professions);
  // إخفاء التخصصات افتراضياً
  const majorsContainer = document.getElementById("majorsContainer");
  if (majorsContainer) majorsContainer.style.display = "none";
  document
    .querySelectorAll('input[type="checkbox"][data-filter]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        // فلترة حسب القسم النشط فقط
        const selectedFilters = Array.from(
          document.querySelectorAll(
            'input[type="checkbox"][data-filter]:checked'
          )
        ).map((cb) => cb.getAttribute("data-filter"));
        
        if (selectedFilters.length > 0) {
          // فلترة المهن فقط في قسم المهن
          if (currentSearchType === "jobs") {
            const allCategories = selectedFilters.flatMap(filter => getProfessionCategoriesForFilter(filter));
            const filteredProfessions = professions.filter(p => allCategories.includes(p.category));
            renderProfessions(filteredProfessions);
          }
          // فلترة التخصصات فقط في قسم التخصصات
          else if (currentSearchType === "majors") {
            const allFields = selectedFilters.flatMap(filter => getMajorFieldsForFilter(filter));
            const filteredMajors = majors.filter(m => allFields.includes(m.field));
            renderMajors(filteredMajors);
          }
        } else {
          // لو ما في ولا فلتر محدد، اعرض كل شيء حسب القسم المختار
          if (currentSearchType === "jobs") {
            renderProfessions(professions);
          } else {
            renderMajors(majors);
          }
        }
      });
    });
  // تفعيل البحث
  // تفعيل البحث
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      // تصفير الفلاتر عند أول إدخال
      if (typeof resetFilters === "function") {
        resetFilters();
      }

      const filterContainer = document.querySelector(".filter-container");
      if (filterContainer) {
        filterContainer.style.display = "none"; // إخفاء الفلاتر إذا موجودة
      }

      const rawValue = e.target.value;
      const query = (rawValue || "").trim();

      if (query === "") {
        clearSearch();
        return;
      }

      const results = performSearch(query, currentSearchType);
      displaySearchResults(results);
    });
  }

  // دالة البحث
  function performSearch(query, type) {
    const lowerQuery = query.toLowerCase();

    if (type === "jobs") {
      // بحث في المهن فقط
      const matchedProfessions = professions.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(lowerQuery)) ||
          (p.category && p.category.toLowerCase().includes(lowerQuery)) ||
          (p.summarize && p.summarize.toLowerCase().includes(lowerQuery))
      );
      return {
        professions: matchedProfessions,
        majors: [], // لا تظهر تخصصات عند البحث عن مهن
      };
    } else {
      // بحث في التخصصات فقط
      const matchedMajors = majors.filter(
        (m) =>
          (m.name && m.name.toLowerCase().includes(lowerQuery)) ||
          (m.field && m.field.toLowerCase().includes(lowerQuery)) ||
          (m.summarize && m.summarize.toLowerCase().includes(lowerQuery))
      );
      return {
        professions: [], // لا تظهر مهن عند البحث عن تخصصات
        majors: matchedMajors,
      };
    }
  }

  // دالة عرض نتائج البحث
  function displaySearchResults(results) {
    const searchResults = document.getElementById("searchResults");
    if (!searchResults) return;

    let html = "";
    
    if (results.professions && results.professions.length > 0) {
      results.professions.slice(0, 5).forEach(p => {
        html += `<div class="search-result-item" onclick="showDetailsFromSearch('${p.title.replace(/'/g, "\\'")}')">${p.title}</div>`;
      });
    }
    
    if (results.majors && results.majors.length > 0) {
      results.majors.slice(0, 5).forEach(m => {
        html += `<div class="search-result-item" onclick="showMajorDetailsFromSearch('${m.name.replace(/'/g, "\\'")}')">${m.name}</div>`;
      });
    }

    if (html === "") {
      html = '<div class="search-result-item">لا توجد نتائج مطابقة</div>';
    }

    searchResults.innerHTML = html;
    searchResults.style.display = "block";
  }
  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;

    // ✅ تفعيل الرابط النشط تلقائيًا
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        currentPath.includes(href.replace("/", "")) ||
        (href === "/" && (currentPath === "/index.html" || currentPath === "/"))
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    
    // ✅ تحميل البيانات المشتركة مرة واحدة
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => {
        professions = data.professions || [];
        majors = data.majors || [];
        bestProfessions = data.bestProfessions || [];

        // ✅ تهيئة حسب الصفحة الحالية
        if (currentPath.includes("jobs")) {
          if (document.getElementById("searchInput")) {
            initSearch();
          }
          if (typeof renderProfessions === "function") {
            renderProfessions(professions);
          }
        }

        if (currentPath.includes("best-jobs")) {
          // التأكد من تحميل البيانات قبل تطبيق الفلاتر
          if (bestProfessions && bestProfessions.length > 0) {
            activeFilter = "best";
            if (typeof applyFilters === "function") {
              applyFilters();
            }
          } else {
            // محاولة تحميل البيانات مرة أخرى
            setTimeout(() => {
              if (bestProfessions && bestProfessions.length > 0) {
                activeFilter = "best";
                applyFilters();
              } else {
                const container = document.getElementById('bestJobsContainer');
                if (container) {
                  container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">فشل تحميل البيانات. يرجى تحديث الصفحة.</p>';
                }
              }
            }, 1000);
          }
        }

        if (currentPath.includes("compare")) {
          initCompareSearch();
          setCompareType("jobs");
          const compareJobsBtn = document.getElementById("compareJobsBtn");
          const compareMajorsBtn = document.getElementById("compareMajorsBtn");
          if (compareJobsBtn && compareMajorsBtn) {
            compareJobsBtn.classList.add("active");
            compareMajorsBtn.classList.remove("active");
          }
        }
      })
      .catch((error) => console.error("فشل تحميل البيانات:", error));
  });
});

// ✅ جعل الروابط تعمل بشكل طبيعي مع تفعيل الرابط النشط
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    // السماح بالتنقل الطبيعي للصفحات
    const href = this.getAttribute("href");

    // لا نمنع السلوك الافتراضي، فقط نحدث الـ Active class
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.classList.remove("active");
    });

    this.classList.add("active");

    // التنقل للصفحة المطلوبة
    window.location.href = href;
  });
});

// ✅ عند تحميل الصفحة، تحديد الرابط النشط
document.addEventListener("DOMContentLoaded", function () {
  setActiveNavLink();
});

// دالة البحث الموحدة
function performSearch(query, type) {
  const lowerQuery = query.toLowerCase();

  if (type === "jobs") {
    // بحث في المهن فقط
    const matchedProfessions = professions.filter(
      (p) =>
        (p.title && p.title.toLowerCase().includes(lowerQuery)) ||
        (p.category && p.category.toLowerCase().includes(lowerQuery)) ||
        (p.summarize && p.summarize.toLowerCase().includes(lowerQuery))
    );
    return {
      professions: matchedProfessions,
      majors: [], // لا تظهر تخصصات عند البحث عن مهن
    };
  } else {
    // بحث في التخصصات فقط
    const matchedMajors = majors.filter(
      (m) =>
        (m.name && m.name.toLowerCase().includes(lowerQuery)) ||
        (m.field && m.field.toLowerCase().includes(lowerQuery)) ||
        (m.summarize && m.summarize.toLowerCase().includes(lowerQuery))
    );
    return {
      professions: [], // لا تظهر مهن عند البحث عن تخصصات
      majors: matchedMajors,
    };
  }
}

// دالة البحث الموحدة - محسنة للعمل باحترافية
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mainSearchResults = document.getElementById("mainSearchResults");
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");

  if (!searchInput) return;

  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.trim();
    
    // عند مسح البحث، ارجع للقسم المختار
    if (query === "") {
      if (mainSearchResults) mainSearchResults.style.display = "none";
      if (searchResults) searchResults.innerHTML = "";
      
      if (currentSearchType === "jobs") {
        // عرض المهن فقط
        if (professionsContainer && professions) {
          professionsContainer.innerHTML = "";
          professionsContainer.style.display = "grid";
          renderProfessions(professions);
        }
        if (majorsContainer) majorsContainer.style.display = "none";
      } else {
        // عرض التخصصات فقط
        if (majorsContainer && majors) {
          majorsContainer.innerHTML = "";
          majorsContainer.style.display = "grid";
          renderMajors(majors);
        }
        if (professionsContainer) professionsContainer.style.display = "none";
      }
      return;
    }

    const results = performSearch(query, currentSearchType);

    // عرض النتائج المنسدلة
    if (searchResults) {
      let dropdownHTML = "";
      if (currentSearchType === "jobs" && results.professions.length > 0) {
        dropdownHTML = results.professions
          .slice(0, 5)
          .map(
            (p) =>
              `<div class="search-result-item" onclick="showDetailsFromSearch('${p.title.replace(
                /'/g,
                "\\'"
              )}')">${p.title}</div>`
          )
          .join("");
      } else if (currentSearchType === "majors" && results.majors.length > 0) {
        dropdownHTML = results.majors
          .slice(0, 5)
          .map(
            (m) =>
              `<div class="search-result-item" onclick="showMajorDetailsFromSearch('${m.name.replace(
                /'/g,
                "\\'"
              )}')">${m.name}</div>`
          )
          .join("");
      } else {
        dropdownHTML = `<div class="search-result-item">لا توجد نتائج مطابقة</div>`;
      }
      searchResults.innerHTML = dropdownHTML;
      searchResults.style.display = "block";
    }

    // عرض النتائج الرئيسية في القسم المختار فقط
    if (mainSearchResults) {
      if (professionsContainer) professionsContainer.innerHTML = "";
      if (majorsContainer) majorsContainer.innerHTML = "";

      if (currentSearchType === "jobs") {
        // عرض نتائج المهن فقط
        if (results.professions.length > 0 && professionsContainer) {
          professionsContainer.style.display = "grid";
          renderProfessions(results.professions);
        } else if (professionsContainer) {
          professionsContainer.innerHTML = '<p style="text-align:center;">لا توجد مهن مطابقة</p>';
          professionsContainer.style.display = "grid";
        }
        if (majorsContainer) majorsContainer.style.display = "none";
      } else {
        // عرض نتائج التخصصات فقط
        if (results.majors.length > 0 && majorsContainer) {
          majorsContainer.style.display = "grid";
          renderMajors(results.majors);
        } else if (majorsContainer) {
          majorsContainer.innerHTML = '<p style="text-align:center;">لا توجد تخصصات مطابقة</p>';
          majorsContainer.style.display = "grid";
        }
        if (professionsContainer) professionsContainer.style.display = "none";
      }

      mainSearchResults.style.display = "block";
    }
  });
}

// حدث موحد لجميع الأزرار
document
  .querySelectorAll(".search-type, #showProfessionsBtn, #showMajorsBtn")
  .forEach((btn) => {
    btn.addEventListener("click", function () {
      const type =
        this.dataset.type || (this.id === "showMajorsBtn" ? "majors" : "jobs");
      linkSearchTypeToView(type);
    });
  });
//فلاتر
const checkboxes = document.querySelectorAll('#jobs input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.checked = false;
});

// دالة جديدة لعرض التخصصات
function renderMajorsResults(majors) {
  const container = document.getElementById("majorsContainer");
  if (container) container.innerHTML = ""; // نمسح المحتوى القديم

  majors.forEach((major) => {
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
    if (container) container.innerHTML += card;
  });
}
function clearFilters() {
  // إعادة تعيين الفلاتر إذا كانت موجودة
  const checkboxes = document.querySelectorAll('#jobs input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // إعادة عرض البيانات الأصلية
  if (currentSearchType === "jobs") {
    renderProfessions(professions);
  } else {
    renderMajors(majors);
  }
}
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    onFilterChange();
    const mainSearchResults = document.getElementById("mainSearchResults");
    if (mainSearchResults) mainSearchResults.style.display =
      searchInput.value.trim() ? "block" : "none";
    const searchQueryText = document.getElementById("searchQueryText");
    if (searchQueryText) searchQueryText.innerText =
      searchInput.value.trim();
  });
}
let timeout;
// إخفاء النافذة عند النقر خارجها
document.addEventListener("click", (e) => {
  const searchContainer = document.querySelector(".search-container");
  const searchResults = document.getElementById("searchResults");
  if (searchContainer && searchResults) {
    if (!searchContainer.contains(e.target)) {
      searchResults.style.display = "none";
    }
  }
});
// Modify search event to trigger onFilterChange after typing
// أضف هذه الدالة في قسم الـ Script
function restartQuiz() {
  // 1. إعادة تعيين جميع المتغيرات
  currentQuestion = 0;
  quizAnswers = [];
  // 2. إعادة تنسيق العناصر
  const quizWelcome = document.getElementById("quizWelcome");
  if (quizWelcome) quizWelcome.style.display = "block";
  const quizQuestions = document.getElementById("quizQuestions");
  if (quizQuestions) quizQuestions.style.display = "none";
  const quizResults = document.getElementById("quizResults");
  if (quizResults) quizResults.style.display = "none";
  // 3. إعادة تعيين جميع خيارات الأسئلة
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((option) => {
    option.classList.remove("selected");
  });
  // 4. التمرير إلى الأعلى بسلاسة
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // 5. إعادة تعيين شريط التقدم
  const quizProgressBar = document.getElementById("quizProgressBar");
  if (quizProgressBar) quizProgressBar.style.width = "0%";
}
function resetFilters() {
  document
    .querySelectorAll('input[type="checkbox"][data-filter]')
    .forEach((cb) => (cb.checked = false));

  // عرض المحتوى حسب القسم النشط
  if (currentSearchType === "jobs") {
    renderProfessions(professions);
  } else {
    renderMajors(majors);
  }
}

// دالة تبديل عرض الفلاتر
function toggleFilters() {
  const filtersContainer = document.querySelector(".field-filters");
  const showMoreBtn = document.getElementById("showMoreFilters");

  if (filtersContainer) filtersContainer.classList.toggle("expanded");
  if (showMoreBtn) showMoreBtn.classList.toggle("active");

  if (showMoreBtn) {
    if (filtersContainer.classList.contains("expanded")) {
      showMoreBtn.querySelector("span").textContent = "عرض أقل";
    } else {
      showMoreBtn.querySelector("span").textContent = "عرض المزيد";
    }
  }
}

// تعديل دالة onFilterChange لضبط عرض الزر
function onFilterChange() {
  // الكود الحالي...

  // إظهار/إخفاء زر عرض المزيد حسب حجم الشاشة
  const showMoreBtn = document.getElementById("showMoreFilters");
  if (!showMoreBtn) return; // أضف هذا السطر لمنع الخطأ إذا لم يوجد العنصر
  if (window.innerWidth > 768) {
    if (showMoreBtn) showMoreBtn.style.display = "none";
  } else {
    if (showMoreBtn) showMoreBtn.style.display = "block";
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
      const options = document.querySelectorAll(".quiz-option");
      options.forEach((option, index) => {
        if (
          quizQuestions[currentQuestion].options[index].value ===
          quizAnswers[currentQuestion]
        ) {
          option.classList.add("selected");
        }
      });
    }
  }
}
// دالة كتابة النص حرف بحرف
function startTyping() {
  const tagline = document.getElementById("profile-tagline");
  if (!tagline) return;

  const text = "نحو جيل واعٍ باختياره , متمكن من مساره .";
  let i = 0;
  tagline.textContent = "";

  function typeChar() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 60); // السرعة بالمللي ثانية
    }
  }
  typeChar();
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const profileHeading = document.querySelector(".profile-heading");

  if (aboutLink) aboutLink.addEventListener("click", function (e) {
    e.preventDefault(); // منع السلوك الافتراضي للرابط

    // إعادة تعيين الأنيميشن
    if (profileHeading) profileHeading.classList.remove("active");
    void profileHeading.offsetWidth; // خدعة لإعادة تشغيل الأنيميشن
    if (profileHeading) profileHeading.classList.add("active");
  });

  // تهيئة صفحة المهن الذهبية
  if (window.location.pathname.includes("best-jobs")) {
    // التأكد من أن فلتر "المهن ذهبية" نشط افتراضياً
    setTimeout(() => {
      const bestFilterBtn = document.querySelector('.filter-item[data-filter="best"]');
      if (bestFilterBtn) {
        // إزالة الفئة النشطة من جميع أزرار الفلتر
        document.querySelectorAll('.filter-item').forEach(item => {
          item.classList.remove('active');
        });
        // إضافة الفئة النشطة لزر المهن الذهبية
        bestFilterBtn.classList.add('active');
        
        // تطبيق الفلتر الافتراضي
        activeFilter = "best";
        applyFilters();
      }
    }, 100);
  }
});
// في نهاية ملف script.js أضف حدث النقر للزر:
// استدعاء الدالة عند تحميل الصفحة وتغيير حجمها
window.addEventListener("resize", onFilterChange);
document.addEventListener("DOMContentLoaded", onFilterChange);
document.addEventListener("DOMContentLoaded", () => {
  const mainSearchResults = document.getElementById("mainSearchResults");
  if (mainSearchResults) {
    mainSearchResults.style.display = "none"; // إخفاء القسم عند فتح الصفحة
  }
});

function showDetailsFromSearch(title) {
  const profession = professions.find(p => p.title === title);
  if (profession) {
    const slug = profession.title.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    window.location.href = `/professions/${slug}.html`;
  }
}

function showMajorDetailsFromSearch(name) {
  const major = majors.find((m) => m.name === name);
  if (major) {
    const slug = major.name.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    window.location.href = `/majors/${slug}.html`;
  }
}

// دالة showDetails للمقارنة
function showDetails(professionTitle) {
  const profession = professions.find(p => p.title === professionTitle);
  if (profession) {
    const slug = profession.title.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    window.location.href = `/professions/${slug}.html`;
  }
}

// دالة لتحديد الرابط النشط في النافبار
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkHref = link.getAttribute("href");
    
    // إزالة الفئة النشطة من جميع الروابط أولاً
    link.classList.remove("active");
    
    // مطابقة دقيقة بدلاً من includes لتجنب التداخل
    if (linkHref === "/" || linkHref === "/per12git.html") {
      // للصفحة الرئيسية
      if (currentPath === "/" || currentPath === "/per12git.html" || currentPath === "/index.html") {
        link.classList.add("active");
      }
    } else if (linkHref === "/best-jobs.html" || linkHref === "best-jobs.html") {
      // لصفحة أفضل المهن
      if (currentPath.includes("best-jobs")) {
        link.classList.add("active");
      }
    } else if (linkHref === "/jobs.html" || linkHref === "jobs.html") {
      // لصفحة المهن والتخصصات
      if (currentPath.includes("jobs") && !currentPath.includes("best-jobs")) {
        link.classList.add("active");
      }
    } else if (linkHref === "/compare.html" || linkHref === "compare.html") {
      // لصفحة المقارنة
      if (currentPath.includes("compare")) {
        link.classList.add("active");
      }
    } else if (linkHref === "/quiz.html" || linkHref === "quiz.html") {
      // لصفحة الاختبار
      if (currentPath.includes("quiz")) {
        link.classList.add("active");
      }
    } else if (linkHref === "/about.html" || linkHref === "about.html") {
      // لصفحة من نحن
      if (currentPath.includes("about")) {
        link.classList.add("active");
      }
    } else {
      // للروابط الأخرى
      if (currentPath.includes(linkHref)) {
        link.classList.add("active");
      }
    }
  });

  // التأكد من أن فلتر profile-tagline"المهن ذهبية" نشط في صفحة best-jobs
  if (currentPath.includes("best-jobs")) {
    const bestFilterBtn = document.querySelector('.filter-item[data-filter="best"]');
    if (bestFilterBtn) {
      // إزالة الفئة النشطة من جميع أزرار الفلتر
      document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.remove('active');
      });
      // إضافة الفئة النشطة لزر المهن الذهبية
      bestFilterBtn.classList.add('active');
    }
  }
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", setActiveNavLink);

// دالة عرض المهن
function renderProfessions(professionsArray) {
  const container = document.getElementById("professionsContainer");
  if (!container) return;
  container.innerHTML = "";

  professionsArray.forEach((profession) => {
    const card = document.createElement("div");
    card.className = "profession-card";
    card.innerHTML = `
                <div class="category-tag">${profession.category || 'غير محدد'}</div>
                <h3>${profession.title || 'غير محدد'}</h3>
                <p>${profession.summarize || 'لا يوجد وصف'}</p>
                <div class="salary-info">
                    <span>الراتب السنوي:</span>
                    <span class="highlight">${profession.avgSalary || 'غير محدد'}</span>
                </div>
                <button class="details-btn">عرض المهنة</button>
            `;
    
    const detailsBtn = card.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => {
      const slug = profession.title.toLowerCase()
        .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      window.location.href = `/professions/${slug}.html`;
    });
    
    container.appendChild(card);
  });
}

function showProfessionDetails(profession) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${profession.title || 'غير محدد'}</h2>
      <div class="category-tag">${profession.category || 'غير محدد'}</div>
      <p><strong>الوصف:</strong> ${profession.summarize || 'لا يوجد وصف'}</p>
      <p><strong>الراتب السنوي:</strong> ${profession.avgSalary || 'غير محدد'}</p>
      <p><strong>الخبرة المطلوبة:</strong> ${profession.experience || 'غير محدد'}</p>
      <p><strong>الصناعة:</strong> ${profession.industry || 'غير محدد'}</p>
      <p><strong>الوصف الكامل:</strong> ${profession.description || 'لا يوجد وصف كامل'}</p>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  modal.style.display = 'block';
}
function renderMajors(majorsArray) {
  const container = document.getElementById("majorsContainer");
  if (!container) return;
  container.innerHTML = "";

  majorsArray.forEach((major) => {
    const card = document.createElement("div");
    card.className = "profession-card";
    card.innerHTML = `
                <div class="category-tag">${major.field || 'غير محدد'}</div>
                <h3>${major.name || 'غير محدد'}</h3>
                <p>${major.summarize || 'لا يوجد وصف'}</p>
                <div class="salary-info">
                    <span>السنوات الدراسية:</span>
                    <span class="highlight">${major.duration || 'غير محدد'}</span>
                </div>
                <button class="details-btn">عرض التخصص</button>
            `;
    
    const detailsBtn = card.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => {
      const slug = major.name.toLowerCase()
        .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      window.location.href = `/majors/${slug}.html`;
    });
    
    container.appendChild(card);
  });
}

function showMajorDetails(major) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${major.name || 'غير محدد'}</h2>
      <div class="category-tag">${major.field || 'غير محدد'}</div>
      <p><strong>الوصف:</strong> ${major.summarize || 'لا يوجد وصف'}</p>
      <p><strong>السنوات الدراسية:</strong> ${major.duration || 'غير محدد'}</p>
      <p><strong>الوصف الكامل:</strong> ${major.description || 'لا يوجد وصف كامل'}</p>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  modal.style.display = 'block';
}
function clearSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mainSearchResults = document.getElementById("mainSearchResults");
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");
  const filterContainer = document.querySelector(".filter-container");

  if (searchInput) searchInput.value = "";
  if (searchResults) searchResults.innerHTML = "";
  if (mainSearchResults) mainSearchResults.style.display = "none";
  
  // عرض المحتوى حسب القسم النشط
  if (currentSearchType === "jobs") {
    if (professionsContainer) {
      professionsContainer.innerHTML = "";
      professionsContainer.style.display = "grid";
      renderProfessions(professions);
    }
    if (majorsContainer) majorsContainer.style.display = "none";
  } else {
    if (majorsContainer) {
      majorsContainer.innerHTML = "";
      majorsContainer.style.display = "grid";
      renderMajors(majors);
    }
    if (professionsContainer) professionsContainer.style.display = "none";
  }
  
  if (filterContainer) filterContainer.style.display = "block";
}

// دالة تبديل نوع البحث والعرض - ارتباط تام بين الأزرار والبحث
function linkSearchTypeToView(type) {
  currentSearchType = type;
  
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");
  const filterContainer = document.querySelector(".filter-container");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mainSearchResults = document.getElementById("mainSearchResults");
  
  // تحديث الأزرار النشطة - كل الأزرار
  document.querySelectorAll("#showProfessionsBtn, #showMajorsBtn, .search-type").forEach(btn => {
    btn.classList.remove("active");
  });
  
  // إخفاء كل الحاويات أولاً
  if (professionsContainer) professionsContainer.style.display = "none";
  if (majorsContainer) majorsContainer.style.display = "none";
  if (searchResults) searchResults.style.display = "none";
  if (mainSearchResults) mainSearchResults.style.display = "none";
  
  if (type === "jobs") {
    // تفعيل قسم المهن بالكامل
    document.getElementById("showProfessionsBtn")?.classList.add("active");
    document.querySelector('.search-type[data-type="jobs"]')?.classList.add("active");
    
    if (professionsContainer) {
      professionsContainer.style.display = "grid";
      professionsContainer.innerHTML = ""; // مسح المحتوى القديم
      renderProfessions(professions); // عرض المهن
    }
    
    if (filterContainer) filterContainer.style.display = "block";
    if (searchInput) {
      searchInput.placeholder = "ابحث عن مهنة...";
      searchInput.value = ""; // مسح البحث
      searchInput.focus(); // تنشيط البحث
    }
    
  } else {
    // تفعيل قسم التخصصات بالكامل
    document.getElementById("showMajorsBtn")?.classList.add("active");
    document.querySelector('.search-type[data-type="majors"]')?.classList.add("active");
    
    if (majorsContainer) {
      majorsContainer.style.display = "grid";
      majorsContainer.innerHTML = ""; // مسح المحتوى القديم
      renderMajors(majors); // عرض التخصصات
    }
    
    if (filterContainer) filterContainer.style.display = "block";
    if (searchInput) {
      searchInput.placeholder = "ابحث عن تخصص...";
      searchInput.value = ""; // مسح البحث
      searchInput.focus(); // تنشيط البحث
    }
  }
  
  // إعادة تعيين الفلاتر والبحث
  clearSearch();
  resetFilters();
}

// دالة تطبيق الفلاتر
function applyFilters() {
  // التحقق إذا كنا في صفحة best-jobs.html
  if (window.location.pathname.includes("best-jobs")) {
    applyBestJobsFilters();
    return;
  }
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-filter]:checked');
  const selectedFilters = Array.from(checkboxes).map(cb => cb.dataset.filter);
  
  if (selectedFilters.length === 0) {
    if (currentSearchType === "jobs") {
      renderProfessions(professions);
    } else {
      renderMajors(majors);
    }
    return;
  }
  
  if (currentSearchType === "jobs") {
    // فلترة المهن فقط باستخدام خريطة المهن
    const allCategories = selectedFilters.flatMap(filter => getProfessionCategoriesForFilter(filter));
    const filtered = professions.filter(p => allCategories.includes(p.category));
    renderProfessions(filtered);
  } else {
    // فلترة التخصصات فقط باستخدام خريطة التخصصات
    const allFields = selectedFilters.flatMap(filter => getMajorFieldsForFilter(filter));
    const filtered = majors.filter(m => allFields.includes(m.field));
    renderMajors(filtered);
  }
}

// نظام الفلترة للمهن الذهبية - بنفس النظام المطلوب
const demandOrder = ["مرتفع جدًا", "مرتفع", "متوسط", "منخفض"];

function applyBestJobsFilters() {
  // التأكد من وجود البيانات
  if (!bestProfessions || bestProfessions.length === 0) {
    console.log("لا توجد بيانات للمهن الذهبية");
    return;
  }

  let filteredJobs = [...bestProfessions];

  // تطبيق الفلتر النشط إذا كان موجوداً
  if (activeFilter) {
    // تصفية المهن حسب نوع الفلتر
    switch (activeFilter) {
      case "best":
        // المهن الذهبية - أفضل المهن بشكل عام
        filteredJobs = filteredJobs.filter((job) => 
          job.jobType === "best" || 
          job.category === "هندسة&AI" || 
          job.category === "IT" || 
          job.category === "AI" ||
          job.category === "الطب" ||
          job.category === "الهندسة"
        );
        break;
      case "profit":
        // الأكثر ربحاً - حسب الراتب
        filteredJobs = filteredJobs.filter((job) => 
          job.jobType === "profit" || 
          parseInt(job.avgSalary.replace(/\D/g, "")) > 50000
        );
        break;
      case "demand":
        // الأكثر طلباً - حسب الطلب
        filteredJobs = filteredJobs.filter((job) => 
          job.jobType === "demand" || 
          job.demand === "مرتفع جداً" || 
          job.demand === "مرتفع"
        );
        break;
      case "opportunities":
        // أكثر فرص عمل - حسب النمو
        filteredJobs = filteredJobs.filter((job) => 
          job.jobType === "opportunities" || 
          parseInt(job.growthRate) > 15
        );
        break;
      case "entry":
        // وظائف سريعة التأهيل - حسب الخبرة
        filteredJobs = filteredJobs.filter((job) => 
          job.jobType === "entry" || 
          parseInt(job.experience) <= 3
        );
        break;
      default:
        // الحالة الافتراضية - المهن الذهبية
        filteredJobs = filteredJobs.filter((job) => 
          job.jobType === "best" || 
          job.category === "هندسة&AI" || 
          job.category === "IT" || 
          job.category === "AI"
        );
    }
  } else {
    // إذا لم يكن هناك فلتر نشط، نطبق الفلتر الافتراضي (أفضل المهن)
    activeFilter = "best";
    const bestFilterBtn = document.querySelector(
      '#best-jobs .filter-item[data-filter="best"]'
    );
    if (bestFilterBtn) bestFilterBtn.classList.add("active");
    filteredJobs = filteredJobs.filter((job) => 
      job.jobType === "best" || 
      job.category === "هندسة&AI" || 
      job.category === "IT" || 
      job.category === "AI"
    );
  }

  // ترتيب النتائج حسب نوع الفلتر
  switch (activeFilter) {
    case "profit":
      filteredJobs.sort(
        (a, b) =>
          parseInt(b.avgSalary.replace(/\D/g, "")) -
          parseInt(a.avgSalary.replace(/\D/g, ""))
      );
      break;
    case "demand":
      const demandOrder = ["مرتفع جداً", "مرتفع", "متوسط", "منخفض"];
      filteredJobs.sort(
        (a, b) => demandOrder.indexOf(b.demand) - demandOrder.indexOf(a.demand)
      );
      break;
    case "entry":
      filteredJobs.sort(
        (a, b) => parseInt(a.experience) - parseInt(b.experience)
      );
      break;
    case "opportunities":
      filteredJobs.sort(
        (a, b) => parseInt(b.growthRate) - parseInt(a.growthRate)
      );
      break;
    default: // الحالة الافتراضية (أفضل المهن)
      filteredJobs.sort(
        (a, b) =>
          parseInt(b.growthRate) * 2 +
          parseInt(b.avgSalary.replace(/\D/g, "")) / 10000 -
          (parseInt(a.growthRate) * 2 +
            parseInt(a.avgSalary.replace(/\D/g, "")) / 10000)
      );
  }

  // عرض النتائج المصفاة
  renderBestJobs(filteredJobs);
}

// دالة عرض Best Jobs - بنفس النظام المطلوب
function renderBestJobs(jobs) {
  const container = document.getElementById("bestJobsContainer");
  if (!container) {
    console.error("لم يتم العثور على حاوية البطاقات");
    return;
  }
  
  container.innerHTML = "";

  if (!jobs || jobs.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #666;">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary);"></i>
        <h3>لا توجد نتائج</h3>
        <p>جرب تغيير الفلتر للحصول على نتائج مختلفة</p>
      </div>
    `;
    return;
  }

  // عرض فقط أول 5 بطاقات
  const limitedJobs = jobs.slice(0, 5);
  
  limitedJobs.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "profession-card";
    
    // تحضير المهارات المطلوبة
    const skills = job.skills || job.requiredSpecialties || [];
    const skillsList = skills.length > 0 
      ? skills.map((spec) => `<li>${spec}</li>`).join("")
      : '<li>مهارات تقنية متقدمة</li><li>قدرات تحليلية</li><li>مهارات التواصل</li>';

    // تحضير معدل النمو
    const growthRate = job.growthRate || "15%";
    
    // تحضير وصف المهنة
    const description = job.description || job.summarize || "مهنة مطلوبة في سوق العمل مع فرص نمو ممتازة";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <span>متوسط الراتب</span>
          <div class="highlight">${job.avgSalary || "غير محدد"}</div>
        </div>
        <div class="stat-item">
          <span>السنوات الدراسية</span>
          <div class="highlight">${job.experience || "غير محدد"}</div>
        </div>
      </div>
      <div class="demand-indicator">
        <span>معدل الطلب:</span>
        <div class="demand-bar">
          <div class="demand-fill" style="width: ${getDemandWidth(job.demand)}"></div>
        </div>
        <span class="growth-rate">
          <i class="fas fa-chart-line"></i>
          ${growthRate} نمو متوقع
        </span>
      </div>
      <h4 class="specialties-title">المهارات المطلوبة:</h4>
      <ul class="specialties-list">
        ${skillsList}
      </ul>
      <p class="job-description">${description}</p>
    `;

    // إضافة تأثير النقر لفتح التفاصيل
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      showDetails(job);
    });

    // إضافة تأثير hover
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });

    container.appendChild(card);
  });

  // إضافة رسالة توضيحية
  const messageDiv = document.createElement("div");
  messageDiv.style.textAlign = "center";
  messageDiv.style.padding = "2rem";
  messageDiv.style.color = "#666";
  messageDiv.style.marginTop = "2rem";
  
  if (jobs.length > 5) {
    messageDiv.innerHTML = `
      <p><i class="fas fa-info-circle"></i> تم عرض أفضل 5 مهن من ${jobs.length} مهنة متاحة في هذا القسم</p>
    `;
  } else if (limitedJobs.length > 0) {
    messageDiv.innerHTML = `
      <p><i class="fas fa-info-circle"></i> تم عرض ${limitedJobs.length} مهنة من أفضل المهن المطلوبة</p>
    `;
  } else {
    messageDiv.innerHTML = `
      <p><i class="fas fa-info-circle"></i> لا توجد نتائج متاحة في هذا القسم</p>
    `;
  }
  
  container.appendChild(messageDiv);
}

// دالة مساعدة لتحديد عرض شريط الطلب
function getDemandWidth(demand) {
  const demandLevels = {
    "مرتفع جدًا": "95%",
    مرتفع: "75%",
    متوسط: "50%",
    منخفض: "25%",
  };
  return demandLevels[demand] || "50%";
}

// إضافة حدث onChange للفلاتر
document.addEventListener("DOMContentLoaded", function() {
  const filterCheckboxes = document.querySelectorAll('input[type="checkbox"][data-filter]');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', onFilterChange);
  });
});

// دالة onFilterChange
function onFilterChange() {
  // فلترة حسب القسم النشط فقط
  const selectedFilters = Array.from(
    document.querySelectorAll(
      'input[type="checkbox"][data-filter]:checked'
    )
  ).map((cb) => cb.getAttribute("data-filter"));
  
  if (selectedFilters.length > 0) {
    // فلترة المهن فقط في قسم المهن
    if (currentSearchType === "jobs") {
      const allCategories = selectedFilters.flatMap(filter => getProfessionCategoriesForFilter(filter));
      const filteredProfessions = professions.filter(p => allCategories.includes(p.category));
      renderProfessions(filteredProfessions);
    }
    // فلترة التخصصات فقط في قسم التخصصات
    else if (currentSearchType === "majors") {
      const allFields = selectedFilters.flatMap(filter => getMajorFieldsForFilter(filter));
      const filteredMajors = majors.filter(m => allFields.includes(m.field));
      renderMajors(filteredMajors);
    }
  } else {
    // لو ما في ولا فلتر محدد، اعرض كل شيء حسب القسم المختار
    if (currentSearchType === "jobs") {
      renderProfessions(professions);
    } else {
      renderMajors(majors);
    }
  }
  
  // إظهار/إخفاء زر عرض المزيد حسب حجم الشاشة
  const showMoreBtn = document.getElementById("showMoreFilters");
  if (window.innerWidth > 768) {
    if (showMoreBtn) showMoreBtn.style.display = "none";
  } else {
    if (showMoreBtn) showMoreBtn.style.display = "block";
  }
}

// دالة تهيئة البحث في صفحة المقارنة
function initCompareSearch() {
  const compareSearchInput = document.getElementById("compareSearchInput");
  if (!compareSearchInput) return;
  
  compareSearchInput.addEventListener("input", function(e) {
    const query = e.target.value.trim();
    const results = performSearch(query, currentSearchType);
    displayCompareSearchResults(results);
  });
}

// دالة عرض نتائج البحث في المقارنة
function displayCompareSearchResults(results) {
  const container = document.getElementById("compareSearchResults");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (currentSearchType === "jobs") {
    results.professions.forEach(profession => {
      const item = document.createElement("div");
      item.className = "compare-search-item";
      item.innerHTML = `
        <div class="compare-item-title">${profession.title}</div>
        <div class="compare-item-category">${profession.category}</div>
        <div class="compare-item-salary">${profession.avgSalary}</div>
      `;
      item.addEventListener("click", () => addToCompare(profession, "profession"));
      container.appendChild(item);
    });
  } else {
    results.majors.forEach(major => {
      const item = document.createElement("div");
      item.className = "compare-search-item";
      item.innerHTML = `
        <div class="compare-item-title">${major.name}</div>
        <div class="compare-item-category">${major.field}</div>
        <div class="compare-item-duration">${major.duration}</div>
      `;
      item.addEventListener("click", () => addToCompare(major, "major"));
      container.appendChild(item);
    });
  }
}

// دالة إضافة عنصر للمقارنة
function addToCompare(item, type) {
  const compareList = document.getElementById("compareList");
  if (!compareList) return;
  
  const existingItems = compareList.querySelectorAll(".compare-item");
  if (existingItems.length >= 2) {
    alert("يمكنك مقارنة عنصرين كحد أقصى");
    return;
  }
  
  const compareItem = document.createElement("div");
  compareItem.className = "compare-item";
  
  if (type === "profession") {
    compareItem.innerHTML = `
      <div class="compare-item-header">
        <h4>${item.title}</h4>
        <button class="remove-compare" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
      <div class="compare-item-details">
        <p><strong>الفئة:</strong> ${item.category}</p>
        <p><strong>الراتب:</strong> ${item.avgSalary}</p>
        <p><strong>الوصف:</strong> ${item.summarize}</p>
      </div>
    `;
  } else {
    compareItem.innerHTML = `
      <div class="compare-item-header">
        <h4>${item.name}</h4>
        <button class="remove-compare" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
      <div class="compare-item-details">
        <p><strong>المجال:</strong> ${item.field}</p>
        <p><strong>المدة:</strong> ${item.duration}</p>
        <p><strong>الوصف:</strong> ${item.summarize}</p>
      </div>
    `;
  }
  
  compareList.appendChild(compareItem);
}

// دالة تحديد نوع المقارنة
function setCompareType(type) {
  currentSearchType = type;
  
  const compareJobsBtn = document.getElementById("compareJobsBtn");
  const compareMajorsBtn = document.getElementById("compareMajorsBtn");
  
  if (type === "jobs") {
    compareJobsBtn?.classList.add("active");
    compareMajorsBtn?.classList.remove("active");
  } else {
    compareMajorsBtn?.classList.add("active");
    compareJobsBtn?.classList.remove("active");
  }
}

function startQuiz() {
  currentQuestion = 0;
  quizAnswers = [];
  // 1. إخفاء قسم البداية فوراً
  const quizWelcome = document.getElementById("quizWelcome");
  if (quizWelcome) quizWelcome.style.display = "none";

  // 2. إظهار قسم الأسئلة
  const quizQuestions = document.getElementById("quizQuestions");
  if (quizQuestions) quizQuestions.style.display = "block";

  // 3. استخدام scrollIntoView مع خيارات مخصصة
  setTimeout(() => {
    if (quizQuestions) quizQuestions.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
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
  const currentQuestionElement = document.getElementById("currentQuestion");
  if (currentQuestionElement) currentQuestionElement.innerHTML = `
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
            <div style="margin-top: 0.5rem; font-size: 1.1rem;">${
              question.question
            }</div>
        `;

  const optionsContainer = document.getElementById("quizOptions");
  if (optionsContainer) optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "quiz-option";
    optionElement.innerHTML = `
                <div class="option-number" style="
                    background: var(--secondary);
                    color: white;
                ">${index + 1}</div>
                <div>${option.text}</div>
            `;
    optionElement.addEventListener("click", () => selectAnswer(option.value));
    if (optionsContainer) optionsContainer.appendChild(optionElement);
  });

  // التحكم في ظهور زر السؤال السابق
  const prevBtn = document.getElementById("prevQuestionBtn");
  if (prevBtn) prevBtn.style.display = currentQuestion === 0 ? "none" : "flex";

  // تحديث شريط التقدم بلون الموقع الأساسي
  const progressBar = document.getElementById("quizProgressBar");
  if (progressBar) {
    const progress = (currentQuestion / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.style.backgroundColor = "var(--primary)";
  }
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
  document
    .querySelectorAll(".quiz-option")
    .forEach((opt) => opt.classList.remove("selected"));

  // إضافة التحديد للخيار المختار
  event.currentTarget.classList.add("selected");

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

// عرض النتائج
function showResults() {
  const quizQuestionsElement = document.getElementById("quizQuestions");
  if (quizQuestionsElement) quizQuestionsElement.style.display = "none";
  const quizResults = document.getElementById("quizResults");
  if (quizResults) quizResults.style.display = "block";

  // حساب النتائج بناءً على الإجابات
  const matchedProfessions = calculateResults(quizAnswers, professions);
  const matchesContainer = document.getElementById("careerMatches");
  if (matchesContainer) matchesContainer.innerHTML = "";

  if (matchedProfessions.length === 0) {
    matchesContainer.innerHTML =
      "<p>لا توجد مهن مطابقة لاختياراتك. حاول تعديل بعض الإجابات.</p>";
    return;
  }

  matchedProfessions.forEach((prof) => {
    const matchElement = document.createElement("div");
    matchElement.className = "career-match";
    matchElement.innerHTML = `
                <h4>${prof.title}</h4>
                <div class="match-percent">${prof.matchPercent}%</div>
                <p><strong>فرص العمل :</strong> ${prof.jobo}</p>
                <p><strong>الراتب المتوسط:</strong> $${prof.avgSalary}</p>
                <p><strong>الطلب:</strong> ${prof.demand}</p>
                <button class="details-btn" onclick="window.open('/professions/${generateSlug(prof.title)}.html', '_blank')">عرض المهنة</button>
            `;
    if (matchesContainer) matchesContainer.appendChild(matchElement);
  });
}

//start Q
function calculateResults(userResponses, professions) {
  const traitFrequency = {};
  userResponses.forEach((response) => {
    traitFrequency[response] = (traitFrequency[response] || 0) + 1;
  });

  const careerScores = professions
    .filter(
      (professions) =>
        Array.isArray(professions.traits) && professions.traits.length > 0
    ) // تجاهل المهن بدون traits
    .map((professions) => {
      const traits = professions.traits;
      const essential = Array.isArray(professions.essentialTraits)
        ? professions.essentialTraits
        : [];

      let score = 0;
      traits.forEach((trait) => {
        if (traitFrequency[trait]) {
          score += traitFrequency[trait];
        }
      });
      const essentialMatch = essential.filter((t) =>
        userResponses.includes(t)
      ).length;
      const totalScore = score + essentialMatch * 2;
      return {
        ...professions,
        score: score + essentialMatch * 2,
        matchPercent: Math.min(100, Math.round((score / traits.length) * 115)),
      };
    });

  return careerScores.sort((a, b) => b.score - a.score).slice(0, 5);
}

// دالة إنشاء slug من عنوان المهنة
function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// دالة عرض تفاصيل المهنة من نتائج الاختبار
function showProfessionDetails(professionTitle) {
  const profession = professions.find(p => p.title === professionTitle);
  if (!profession) return;
  
  const modal = document.getElementById('detailsModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalContent = document.getElementById('modalContent');
  
  modalTitle.textContent = profession.title;
  modalCategory.textContent = profession.category;
  
  modalContent.innerHTML = `
    <div class="modal-body">
      <div class="stats-grid">
        <div class="stat-item">
          <span>الراتب المتوسط</span>
          <strong>$${profession.avgSalary}</strong>
        </div>
        <div class="stat-item">
          <span>فرص العمل</span>
          <strong>${profession.jobo}</strong>
        </div>
        <div class="stat-item">
          <span>الطلب في السوق</span>
          <strong>${profession.demand}</strong>
        </div>
        <div class="stat-item">
          <span>الخبرة المطلوبة</span>
          <strong>${profession.experience}</strong>
        </div>
      </div>
      
      <div class="description-section">
        <h2>وصف المهنة</h2>
        <p>${profession.description || profession.summarize}</p>
      </div>
      
      ${profession.skills && profession.skills.length > 0 ? `
        <div class="skills-section">
          <h2>المهارات المطلوبة</h2>
          <ul class="skills-list">
            ${profession.skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      <div class="action-buttons">
        <button class="btn btn-primary" onclick="closeModal()">إغلاق</button>
      </div>
    </div>
  `;
  
  modal.style.display = 'flex';
}

// دالة إغلاق النافذة المنبثقة
function closeModal() {
  const modal = document.getElementById('detailsModal');
  if (modal) modal.style.display = 'none';
}

// دالة العودة للسؤال السابق
function goToPreviousQuestion() {
  if (currentQuestion > 0) {
    // إزالة الإجابة الأخيرة
    quizAnswers.pop();
    currentQuestion--;
    showQuestion();

    // إعادة تحديد الإجابة السابقة إن وجدت
    if (quizAnswers[currentQuestion] !== undefined) {
      const options = document.querySelectorAll(".quiz-option");
      options.forEach((option, index) => {
        if (
          quizQuestions[currentQuestion].options[index].value ===
          quizAnswers[currentQuestion]
        ) {
          option.classList.add("selected");
        }
      });
    }
  }
}

// دالة العودة للصفحة الرئيسية
function goToHome() {
  window.location.href = "/per12git.html";
}

// متغيرات المقارنة
let compareType = "jobs"; // 'jobs' أو 'majors'
let selectedItem1 = null;
let selectedItem2 = null;

// تعيين نوع المقارنة
// تحسين وظيفة setCompareType
function setCompareType(type) {
  compareType = type;

  // تحديث واجهة المستخدم مع التحقق من وجود العناصر
  const jobsBtn = document.getElementById("compareJobs");
  const majorsBtn = document.getElementById("compareMajors");

  if (jobsBtn && majorsBtn) {
    if (type === "jobs") {
      jobsBtn.classList.add("active");
      majorsBtn.classList.remove("active");

      document.querySelectorAll(".compare-search input").forEach((input) => {
        input.placeholder = "ابحث عن مهنة...";
      });
    } else {
      majorsBtn.classList.add("active");
      jobsBtn.classList.remove("active");
      document.querySelectorAll(".compare-search input").forEach((input) => {
        input.placeholder = "ابحث عن تخصص...";
      });
    }
  } else {
    console.error("عناصر المقارنة غير موجودة في DOM");
  }

  resetcom();
}

function resetcom() {
  // إفراغ حقول البحث عند التبديل
  const compareInput1 = document.getElementById("compareInput1");
  const compareInput2 = document.getElementById("compareInput2");
  const compareResults1 = document.getElementById("compareResults1");
  const compareResults2 = document.getElementById("compareResults2");
  if (compareInput1) compareInput1.value = "";
  if (compareInput2) compareInput2.value = "";
  if (compareResults1) compareResults1.innerHTML = "";
  if (compareResults2) compareResults2.innerHTML = "";

  // إخفاء نتائج المقارنة السابقة إن وجدت
  const compareResults = document.getElementById("compareResults");
  if (compareResults) {
    compareResults.style.display = "none";
    compareResults.classList.remove("show-results");
  }
  const compareControls = document.getElementById("compareControls");
  if (compareControls) compareControls.style.display = "none";
  selectedItem1 = null;
  selectedItem2 = null;
}

// تهيئة البحث في قسم المقارنة
function initCompareSearch() {
  console.log("تهيئة البحث في قسم المقارنة...");
  console.log("عدد المهن:", professions ? professions.length : 0);
  console.log("عدد التخصصات:", majors ? majors.length : 0);
  
  // التحقق من وجود البيانات
  if (!professions || !majors || professions.length === 0 || majors.length === 0) {
    console.log("البيانات لم يتم تحميلها بعد، إعادة المحاولة بعد ثانية...");
    setTimeout(initCompareSearch, 1000);
    return;
  }
  
  const input1 = document.getElementById("compareInput1");
  const input2 = document.getElementById("compareInput2");
  const results1 = document.getElementById("compareResults1");
  const results2 = document.getElementById("compareResults2");

  if (!input1 || !input2 || !results1 || !results2) {
    console.error("عناصر البحث في المقارنة غير موجودة");
    return;
  }

  console.log("تم العثور على عناصر البحث");

  // البحث للحقل الأول
  input1.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    console.log("بحث في الحقل الأول:", query);
    showCompareResults(results1, query, 1);
  });

  // البحث للحقل الثاني
  input2.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    console.log("بحث في الحقل الثاني:", query);
    showCompareResults(results2, query, 2);
  });

  // إخفاء نتائج البحث عند النقر خارجها
  document.addEventListener("click", function (e) {
    if (!input1.contains(e.target)) results1.style.display = "none";
    if (!input2.contains(e.target)) results2.style.display = "none";
    if (document.getElementById("searchResults")) {
      document.getElementById("searchResults").style.display = "none";
    }
  });

  console.log("تم تهيئة البحث في قسم المقارنة بنجاح");
}

// عرض نتائج البحث في قسم المقارنة
function showCompareResults(resultsContainer, query, inputNumber) {
  if (!resultsContainer) {
    console.error("حاوية النتائج غير موجودة");
    return;
  }

  if (query.length === 0) {
    resultsContainer.style.display = "none";
    return;
  }

  let results = [];
  if (compareType === "jobs") {
    if (professions && professions.length > 0) {
      results = professions.filter((prof) =>
        prof.title && prof.title.toLowerCase().includes(query)
      );
    } else {
      console.log("لا توجد بيانات للمهن");
    }
  } else {
    if (majors && majors.length > 0) {
      results = majors.filter((major) =>
        major.name && major.name.toLowerCase().includes(query)
      );
    } else {
      console.log("لا توجد بيانات للتخصصات");
    }
  }

  if (results.length === 0) {
    resultsContainer.innerHTML =
      '<div class="search-result-item">لا توجد نتائج مطابقة</div>';
    resultsContainer.style.display = "block";
    return;
  }

  let html = "";
  results.slice(0, 10).forEach((item) => {
    const title = compareType === "jobs" ? item.title : item.name;
    const safeTitle = title.replace(/'/g, "\\'").replace(/"/g, '\\"');
    html += `
      <div class="search-result-item" onclick="selectCompareItem(${inputNumber}, '${safeTitle}')">
        ${title}
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
  resultsContainer.style.display = "block";
}

// اختيار عنصر للمقارنة
function selectCompareItem(inputNumber, title) {
  const inputElement =
    inputNumber === 1
      ? document.getElementById("compareInput1")
      : document.getElementById("compareInput2");

  const resultsContainer =
    inputNumber === 1
      ? document.getElementById("compareResults1")
      : document.getElementById("compareResults2");

  if (inputElement) inputElement.value = title;
  if (resultsContainer) resultsContainer.style.display = "none";

  if (compareType === "jobs") {
    const item = professions.find((p) => p.title === title);
    if (item) {
      if (inputNumber === 1) {
        selectedItem1 = item;
        console.log("تم اختيار المهنة الأولى:", item.title);
      } else {
        selectedItem2 = item;
        console.log("تم اختيار المهنة الثانية:", item.title);
      }
    } else {
      console.error("لم يتم العثور على المهنة:", title);
    }
  } else {
    const item = majors.find((m) => m.name === title);
    if (item) {
      if (inputNumber === 1) {
        selectedItem1 = item;
        console.log("تم اختيار التخصص الأول:", item.name);
      } else {
        selectedItem2 = item;
        console.log("تم اختيار التخصص الثاني:", item.name);
      }
    } else {
      console.error("لم يتم العثور على التخصص:", title);
    }
  }
}

// تنفيذ المقارنة
function compareItems() {
  console.log("بدء المقارنة...");
  console.log("selectedItem1:", selectedItem1);
  console.log("selectedItem2:", selectedItem2);
  console.log("compareType:", compareType);

  if (!selectedItem1 || !selectedItem2) {
    alert("الرجاء اختيار العنصرين للمقارنة");
    return;
  }
  
  if (selectedItem1 === selectedItem2) {
    alert("لا يمكن مقارنة العنصر مع نفسه");
    return;
  }

  const resultsDiv = document.getElementById("compareResults");
  const tableBody = document.getElementById("compareTableBody");
  const header1 = document.getElementById("compareHeader1");
  const header2 = document.getElementById("compareHeader2");

  if (!resultsDiv || !tableBody || !header1 || !header2) {
    console.error("عناصر المقارنة غير موجودة");
    return;
  }

  // تعيين العناوين
  if (compareType === "jobs") {
    header1.innerHTML = selectedItem1.title || "غير محدد";
    header2.innerHTML = selectedItem2.title || "غير محدد";
  } else {
    header1.innerHTML = selectedItem1.name || "غير محدد";
    header2.innerHTML = selectedItem2.name || "غير محدد";
  }

  // جعل العناوين قابلة للنقر
  header1.style.cursor = "pointer";
  header2.style.cursor = "pointer";

  header1.onclick = () => {
    if (compareType === "jobs") {
      showDetails(selectedItem1);
    } else {
      showMajorDetails(selectedItem1);
    }
  };

  header2.onclick = () => {
    if (compareType === "jobs") {
      showDetails(selectedItem2);
    } else {
      showMajorDetails(selectedItem2);
    }
  };

  // إنشاء جدول المقارنة
  let tableHTML = "";

  if (compareType === "jobs") {
    // مقارنة المهن
    tableHTML = `
      <tr>
        <td>ملخص المهنة</td>
        <td>${selectedItem1.summarize || "غير محدد"}</td>
        <td>${selectedItem2.summarize || "غير محدد"}</td>
      </tr>
      <tr>
        <td>فرص العمل</td>
        <td>${selectedItem1.jobo || "غير محدد"}</td>
        <td>${selectedItem2.jobo || "غير محدد"}</td>
      </tr>
      <tr>
        <td>الراتب السنوي</td>
        <td>${selectedItem1.avgSalary || "غير محدد"}</td>
        <td>${selectedItem2.avgSalary || "غير محدد"}</td>
      </tr>
      <tr>
        <td>السنوات الدراسية المطلوبة</td>
        <td>${selectedItem1.experience || "غير محدد"}</td>
        <td>${selectedItem2.experience || "غير محدد"}</td>
      </tr>
      <tr>
        <td>مستوى الطلب</td>
        <td>${selectedItem1.demand || "غير محدد"}</td>
        <td>${selectedItem2.demand || "غير محدد"}</td>
      </tr>
    `;
  } else {
    // مقارنة التخصصات
    tableHTML = `
      <tr>
        <td>ملخص التخصص</td>
        <td>${selectedItem1.summarize || "غير محدد"}</td>
        <td>${selectedItem2.summarize || "غير محدد"}</td>
      </tr>
      <tr>
        <td>الطلب</td>
        <td>${selectedItem1.jobo || "غير محدد"}</td>
        <td>${selectedItem2.jobo || "غير محدد"}</td>
      </tr>
      <tr>
        <td>متوسط المجموع الأدنى في الثانوية</td>
        <td>${selectedItem1.jobs || "غير محدد"}</td>
        <td>${selectedItem2.jobs || "غير محدد"}</td>
      </tr>
      <tr>
        <td>السنوات الدراسية</td>
        <td>${selectedItem1.duration || "غير محدد"}</td>
        <td>${selectedItem2.duration || "غير محدد"}</td>
      </tr>
      <tr>
        <td>المسار</td>
        <td>${selectedItem1.mid || "غير محدد"}</td>
        <td>${selectedItem2.mid || "غير محدد"}</td>
      </tr>
    `;
  }

  // إضافة أزرار عرض التفاصيل
  let detailsHTML = '';
  if (compareType === "jobs") {
    const slug1 = selectedItem1.title.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const slug2 = selectedItem2.title.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    detailsHTML = `
      <div class="details-section">
        <h4 التفاصيل</h4>
        <div class="details-links">
          <a href="/professions/${slug1}.html" class="detail-link">
            عرض تفاصيل ${selectedItem1.title} <i class="fas fa-arrow-left"></i>
          </a>
          <a href="/professions/${slug2}.html" class="detail-link">
            عرض تفاصيل ${selectedItem2.title} <i class="fas fa-arrow-left"></i>
          </a>
        </div>
      </div>
    `;
  } else {
    const slug1 = selectedItem1.name.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const slug2 = selectedItem2.name.toLowerCase()
      .replace(/[^a-z0-9\u0621-\u064a]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    detailsHTML = `
      <div class="details-section">
        <h4 التفاصيل</h4>
        <div class="details-links">
          <a href="/majors/${slug1}.html" class="detail-link">
            عرض تفاصيل ${selectedItem1.name} <i class="fas fa-arrow-left"></i>
          </a>
          <a href="/majors/${slug2}.html" class="detail-link">
            عرض تفاصيل ${selectedItem2.name} <i class="fas fa-arrow-left"></i>
          </a>
        </div>
      </div>
    `;
  }

  tableBody.innerHTML = tableHTML;
  resultsDiv.style.display = "block";
  
  // إضافة كلاس للنتائج في الموبايل
  if (window.innerWidth <= 768) {
    resultsDiv.classList.add("show-results");
  }
  
  // إضافة روابط التفاصيل
  const compareDetails = document.getElementById("compareDetails");
  if (compareDetails) {
    compareDetails.innerHTML = detailsHTML;
  }
  
  const compareControls = document.getElementById("compareControls");
  if (compareControls) {
    compareControls.style.display = "block";
  }

  // التمرير إلى نتائج المقارنة
  resultsDiv.scrollIntoView({ behavior: "smooth" });
  
  console.log("تم إنشاء جدول المقارنة بنجاح");
}
// للصفحة الخاصة بالاختبار فقط - حل منفصل
if (window.location.pathname.includes("quiz") || window.location.href.includes("quiz")) {
  document.addEventListener("DOMContentLoaded", function () {
    fetch('./quiz.json')
    .then(res => res.json())
    .then(data => {
      professions = data.professions || [];
      quizQuestions = data.quizQuestions || [];
      
      // تهيئة الاختبار فقط
      console.log("بيانات الاختبار تم تحميلها من quiz.json");
    })
    .catch(error => console.error("فشل تحميل بيانات الاختبار:", error));
  });
}

// تهيئة المقارنة لصفحة المقارنة
if (window.location.pathname.includes("compare") || window.location.href.includes("compare")) {
  document.addEventListener("DOMContentLoaded", function() {
    // انتظر حتى يتم تحميل البيانات
    setTimeout(function() {
      console.log("بدء تهيئة المقارنة...");
      console.log("المهن:", professions ? professions.length : 0);
      console.log("التخصصات:", majors ? majors.length : 0);
      
      if (professions && majors) {
        initCompareSearch();
        setCompareType("jobs");
      } else {
        console.error("البيانات لم يتم تحميلها بعد");
        // حاول مرة أخرى بعد ثانية
        setTimeout(arguments.callee, 1000);
      }
    }, 500);
  });
}




// استدعاء الدوال عند تحميل الصفحة
window.addEventListener("resize", onFilterChange);
document.addEventListener("DOMContentLoaded", onFilterChange)

