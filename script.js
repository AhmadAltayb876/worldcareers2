// تعريف المتغيرات العامة
let currentSearchType = "jobs";
let majors = [];
let professions = [];
let bestProfessions = [];
let quizQuestions = [];

// تحميل البيانات وتهيئة الصفحة حسب نوعها
document.addEventListener("DOMContentLoaded", function () {
  fetch("./jobs.json")
    .then((res) => res.json())
    .then((data) => {
      professions = data.professions || [];
      majors = data.majors || [];
      bestProfessions = data.bestProfessions || [];
      quizQuestions = data.quizQuestions || [];

      const path = window.location.pathname;

      // تهيئة البحث إذا كان موجودًا
      if (document.getElementById("searchInput")) {
        initSearch();
      }

      // تهيئة المهن والتخصصات إذا كانت الحاويات موجودة
      if (document.getElementById("professionsContainer")) {
        renderProfessions(professions);
      }
      if (document.getElementById("majorsContainer")) {
        renderMajors(majors);
      }

      // تهيئة الفلاتر إذا كانت موجودة
      if (document.querySelector(".filter-container")) {
        // يمكنك هنا تهيئة الفلاتر إذا أردت
      }

      // تهيئة الاختبار إذا كنا في صفحة الاختبار
      if (path.includes("quiz")) {
        // تهيئة الاختبار فقط إذا كنا في صفحة quiz
      }

      // تهيئة المقارنة إذا كنا في صفحة المقارنة
      if (path.includes("compare")) {
        // تهيئة المقارنة فقط إذا كنا في صفحة compare
        setTimeout(() => {
          initCompareSearch();
          setCompareType("jobs");
        }, 100);
      }
    })
    .catch((error) => {
      console.error("فشل تحميل البيانات من jobs.json:", error);
    });

  // تفعيل الرابط النشط في النافبار
  setActiveNavLink();
});

// تعريف الماب (الربط) بين الفلاتر والمسميات
const filterToCategoryMapping = {
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

// دالة تقوم بالربط حسب الفلتر
function getCategoriesForFilter(filterName) {
  return filterToCategoryMapping[filterName] || [];
}

// مثال: كيف تستخدمها
function filterProfessionsByFilterName(filterName) {  
  const relatedCategories = getCategoriesForFilter(filterName);

  const filteredProfessions = professions.filter((profession) =>
    relatedCategories.includes(profession.category)
  );

  // عرض النتائج
  renderProfessions(filteredProfessions);
}
function filterMajorsByFilterName(filterName) {
  const relatedFields = getCategoriesForFilter(filterName);

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

  // إضافة حدث النقر لأزرار القسم الرئيسي
  const homeButtons = document.querySelectorAll(".home-btn");
  homeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetHref = this.getAttribute("href");

      // استخدام نفس الدالة للتعامل مع النقر
      const fakeLink = {
        getAttribute: () => targetHref,
        preventDefault: () => {},
        classList: { remove: () => {}, add: () => {} },
      };

      // إنشاء كائن مشابه لحدث النقر
      const fakeEvent = {
        preventDefault: () => {},
        target: fakeLink,
      };

      handleNavLinkClick.call(fakeLink, fakeEvent);
    });
  });
  // تهيئة البيانات
  renderProfessions(professions);
  renderMajors(majors);
  document
    .querySelectorAll('input[type="checkbox"][data-filter]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        onFilterChange();
        // اجمع كل الفلاتر المختارة
        const selectedFilters = Array.from(
          document.querySelectorAll(
            'input[type="checkbox"][data-filter]:checked'
          )
        ).map((cb) => cb.getAttribute("data-filter"));
        if (selectedFilters.length > 0) {
          // جلب جميع التصنيفات المرتبطة بكل الفلاتر المختارة
          const allRelatedCategories = selectedFilters.flatMap((filter) =>
            getCategoriesForFilter(filter)
          );
          // فلترة المهن
          const filteredProfessions = professions.filter((profession) =>
            allRelatedCategories.includes(profession.category)
          );
          renderProfessions(filteredProfessions);
          // فلترة التخصصات
          const filteredMajors = majors.filter((major) =>
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
        quizQuestions = data.quizQuestions || [];

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
          activeFilter = "best";
          if (typeof applyFilters === "function") {
            applyFilters();
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
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mainSearchResults = document.getElementById("mainSearchResults");
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");

  if (!searchInput) return;

  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.trim();
    if (query === "") {
      if (mainSearchResults) mainSearchResults.style.display = "none";
      if (searchResults) searchResults.innerHTML = "";
      // إعادة عرض كل شيء عند مسح البحث
      if (professionsContainer && professions) renderProfessions(professions);
      if (majorsContainer && majors) renderMajors(majors);
      return;
    }
    const results = performSearch(query, currentSearchType);
    displaySearchResults(results);
  });
}
// دالة لعرض نتائج البحث الرئيسية
function renderSearchResults(results) {
  const container = document.getElementById("searchResultsContainer");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; color: #666;">لا توجد نتائج مطابقة</p>';
    return;
  } else {
    results.forEach((profession) => {
      const card = document.createElement("div");
      card.className = "profession-card";
      card.innerHTML = `
                    <div class="category-tag">${profession.category}</div>
                    <h3>${profession.title}</h3>
                    <p>${profession.summarize}</p>
                    <div class="salary-info">
                        <span>الراتب السنوي:</span>
                        <span class="highlight">$${profession.avgSalary}</span>
                    </div>
                `;
      card.addEventListener("click", () => showDetails(profession));
      container.appendChild(card);
    });
  }
}

// دالة لمسح البحث
function clearSearch() {
  // 1. مسح نص البحث
  const mainSearchResults = document.getElementById("mainSearchResults");
  const navbar = document.querySelector(".navbar");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");
  const filterContainer = document.querySelector(".filter-container");

  if (searchInput) searchInput.value = "";
  if (searchResults) searchResults.innerHTML = "";
  if (professionsContainer) professionsContainer.innerHTML = "";
  if (majorsContainer) majorsContainer.innerHTML = "";

  // إعادة عرض كل شيء عند مسح البحث
  if (currentSearchType === "jobs" && professionsContainer) {
    professionsContainer.style.display = "grid";
    renderProfessions(professions);
  }
  if (currentSearchType === "majors" && majorsContainer) {
    majorsContainer.style.display = "grid";
    renderMajors(majors);
  }

  if (searchResults) searchResults.style.display = "none";
  if (mainSearchResults) mainSearchResults.style.display = "none";
  if (filterContainer) filterContainer.style.display = "block";

  // التمرير للأعلى مع احتساب ارتفاع الشريط العلوي
  if (mainSearchResults && navbar) {
    window.scrollTo({
      top: mainSearchResults.offsetTop - navbar.offsetHeight - 30,
      behavior: "smooth",
    });
  }

  resetFilters();
}
// دالة للانتقال إلى التخصص الجامعي

// دالة لعرض المهن
function renderProfessions(professionsArray) {
  const container = document.getElementById("professionsContainer");
  if (!container) return; // أضف هذا السطر لمنع الخطأ إذا لم يوجد العنصر
  container.innerHTML = "";

  professionsArray.forEach((profession) => {
    const card = document.createElement("div");
    card.className = "profession-card";
    card.innerHTML = `
                <div class="category-tag">${profession.category}</div>
                <h3>${profession.title}</h3>
                <p>${profession.summarize}</p>
                <div class="salary-info">
                    <span>الراتب السنوي:</span>
                    <span class="highlight">$${profession.avgSalary}</span>
                </div>
            `;
    card.addEventListener("click", () => showDetails(profession));
    container.appendChild(card);
  });
}

// دالة لعرض التخصصات الجامعية
// دالة عرض التخصصات المعدلة

function renderMajors(majorsList) {
  const container = document.getElementById("majorsContainer");
  if (!container) return; // منع الخطأ إذا لم يوجد العنصر
  container.innerHTML = "";

  majorsList.forEach((major) => {
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

    card.addEventListener("click", () => showMajorDetails(major));
    container.appendChild(card);
  });
}

// دالة فلترة التخصصات الجامعية
function filterMajors() {
  const checkboxes = document.querySelectorAll(
    '#jobFieldsFilter input[type="checkbox"]'
  );
  const selectedFields = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedFields.length === 0) {
    renderMajors(majors);
  } else {
    const filteredMajors = majors.filter((major) =>
      selectedFields.includes(major.field)
    );
    renderMajors(filteredMajors);
  }
}

// دالة لعرض تفاصيل المهنة
function showDetails(profession) {
  const modal = document.getElementById("detailsModal");
  const title = document.getElementById("modalTitle");
  const content = document.getElementById("modalContent");
  const category = document.getElementById("modalCategory");

  // تحقق من وجود كل العناصر
  if (!modal || !title || !content || !category) {
    alert("لا يمكن عرض تفاصيل المهنة. يرجى التأكد من وجود نافذة التفاصيل في الصفحة.");
    return;
  }

  document.body.classList.add("modal-open");
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
                    <span style="color: ${getDemandColor(profession.demand)}">${
    profession.demand
  }</span>
                </div>
                <div class="stat-item">
                    <span>الراتب المتوسط</span>
                    $${profession.avgSalary}
                </div>
            </div>
            <h3 style="margin: 1.5rem 0; color: var(--primary);">الوصف الوظيفي</h3>
            <p>${profession.description}</p>
            ${
              profession.skills
                ? `
            <h3 style="margin: 1.5rem 0; color: var(--primary);">المهارات المطلوبة</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${profession.skills
                  .map(
                    (skill) => `
                    <span style="background: rgba(58,175,169,0.1); color: var(--secondary); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">
                        ${skill}
                    </span>
                `
                  )
                  .join("")}
            </div>
            `
                : ""
            }
        `;

  modal.style.display = "flex";
  if (document.getElementById("searchResults")) {
    document.getElementById("searchResults").style.display = "none";
  }
}

// دالة للحصول على لون حسب مستوى الطلب
function getDemandColor(demand) {
  const colors = {
    "مرتفع جدًا": "#2ecc71",
    مرتفع: "#3498db",
    متوسط: "#f1c40f",
    منخفض: "#e74c3c",
  };
  return colors[demand] || "#333";
}

// إغلاق النافذة المنبثقة عند النقر خارجها
window.onclick = function (event) {
  const modal = document.getElementById("detailsModal");
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};
// دالة لإغلاق النافذة المنبثقة
function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
  document.body.classList.remove("modal-open");
}
// نظام الفلترة
let activeFilter = null;
const demandOrder = ["مرتفع جدًا", "مرتفع", "متوسط", "منخفض"];

function applyFilters() {
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
// تعديل دالة renderMajors لعرض البطاقات بنفس نمط المهن

// دالة عرض Best Jobs
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
  if (compareResults) compareResults.style.display = "none";
  const compareControls = document.getElementById("compareControls");
  if (compareControls) compareControls.style.display = "none";
  selectedItem1 = null;
  selectedItem2 = null;
}
// تحسين وظيفة compareItems

// تهيئة البحث في قسم المقارنة
function initCompareSearch() {
  console.log("تهيئة البحث في قسم المقارنة...");
  
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

  tableBody.innerHTML = tableHTML;
  resultsDiv.style.display = "block";
  
  const compareControls = document.getElementById("compareControls");
  if (compareControls) {
    compareControls.style.display = "block";
  }

  // التمرير إلى نتائج المقارنة
  resultsDiv.scrollIntoView({ behavior: "smooth" });
  
  console.log("تم إنشاء جدول المقارنة بنجاح");
}
let currentQuestion = 0;
let quizAnswers = [];
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
                السؤال <span style="font-weight: 700;">${
                  currentQuestion + 1
                }</span>
                من <span style="font-weight: 700;">${
                  quizQuestions.length
                }</span>
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
            `;
    matchElement.addEventListener("click", () => showDetails(prof));
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

//end Q
// دالة لعرض تفاصيل التخصص في نافذة منبثقة
function showMajorDetails(major) {
  const modal = document.getElementById("detailsModal");
  const title = document.getElementById("modalTitle");
  const content = document.getElementById("modalContent");
  const category = document.getElementById("modalCategory");

  if (title) title.textContent = major.name;
  if (category) category.textContent = major.field;

  const jobsList = major.relatedJobs
    .map(
      (job) => `
    <li>${job.title} <span class="job-salary">${job.salary}</span></li>
    `
    )
    .join("");

  if (content) content.innerHTML = `
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
    ${
      major.relatedJobs
        ? `
            <h3 style="margin: 1.5rem 0; color: var(--primary);">اشهر المهن المرتبطة</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${major.relatedJobs
                  .map(
                    (relatedJobs) => `
                    <span style="background: rgba(58,175,169,0.1); color: var(--secondary); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">
                        ${relatedJobs}
                    </span>
                `
                  )
                  .join("")}
            </div>
            `
        : ""
    }
        `;

  if (modal) modal.style.display = "flex";
}
// العودة إلى الصفحة الرئيسية
function goToHome() {
  const quizWelcome = document.getElementById("quizWelcome");
  if (quizWelcome) quizWelcome.style.display = "block";
  const quizQuestions = document.getElementById("quizQuestions");
  if (quizQuestions) quizQuestions.style.display = "none";
  const quizResults = document.getElementById("quizResults");
  if (quizResults) quizResults.style.display = "none";

  // إظهار قسم الوظائف
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
  const home = document.getElementById("home");
  if (home) home.style.display = "block";

  // تحديث الروابط النشطة
  document.querySelectorAll(".nav-link").forEach((navLink) => {
    navLink.classList.remove("active");
  });
  document.querySelector('.nav-link[href="#home"]').classList.add("active");
  scrollToResults();
}

function linkSearchTypeToView(type) {
  resetFilters();
  clearSearch();
  currentSearchType = type;
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value.trim();

  // تحديث الـ placeholder حسب النوع
  if (searchInput) searchInput.placeholder =
    type === "jobs" ? "ابحث عن مهنة..." : "ابحث عن تخصص...";

  // تحديث الأزرار النشطة
  document.querySelectorAll(".search-type").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.type === type);
  });

  // تحديث أزرار القسم الرئيسي
  const showProfessionsBtn = document.getElementById("showProfessionsBtn");
  const showMajorsBtn = document.getElementById("showMajorsBtn");
  if (showProfessionsBtn) showProfessionsBtn.classList.toggle("active", type === "jobs");
  if (showMajorsBtn) showMajorsBtn.classList.toggle("active", type === "majors");

  // إظهار/إخفاء المحتوى
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");
  if (professionsContainer) professionsContainer.style.display =
    type === "jobs" ? "grid" : "none";
  if (majorsContainer) majorsContainer.style.display =
    type === "majors" ? "grid" : "none";

  // إعادة البحث إذا كان هناك نص
  if (query) {
    const results = performSearch(query, type);
    displaySearchResults(results);

    // إظهار قسم نتائج البحث الرئيسي
    const mainSearchResults = document.getElementById("mainSearchResults");
    if (mainSearchResults) mainSearchResults.style.display = "block";
    const searchQueryText = document.getElementById("searchQueryText");
    if (searchQueryText) searchQueryText.innerText = query;
  } else {
    const mainSearchResults = document.getElementById("mainSearchResults");
    if (mainSearchResults) mainSearchResults.style.display = "none";
  }
}

function performSearch(query, type) {
  const lowerQuery = query.toLowerCase();

  const matchedProfessions = professions.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      (p.summarize && p.summarize.toLowerCase().includes(lowerQuery))
  );

  const matchedMajors = majors.filter(
    (m) =>
      m.name.toLowerCase().includes(lowerQuery) ||
      m.field.toLowerCase().includes(lowerQuery) ||
      (m.summarize && m.summarize.toLowerCase().includes(lowerQuery))
  );

  return {
    professions: matchedProfessions,
    majors: matchedMajors,
  };
}
function scrollToResults() {
  const mainSearchResults = document.getElementById("mainSearchResults");
  const navbarHeight = document.querySelector(".navbar").offsetHeight;

  if (mainSearchResults) {
    window.scrollTo({
      top: mainSearchResults.offsetTop - navbarHeight - 20,
      behavior: "smooth",
    });
  }
}
function displaySearchResults(results) {
  const mainResults = document.getElementById("mainSearchResults");
  const professionsContainer = document.getElementById("professionsContainer");
  const majorsContainer = document.getElementById("majorsContainer");
  const searchResults = document.getElementById("searchResults");

  // عرض النتائج المنسدلة (dropdown)
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

  // عرض النتائج الرئيسية (في الصفحة التي فيها أقسام)
  if (professionsContainer) professionsContainer.innerHTML = "";
  if (majorsContainer) majorsContainer.innerHTML = "";

  if (currentSearchType === "jobs") {
    if (results.professions.length > 0 && professionsContainer) {
      renderProfessions(results.professions);
      professionsContainer.style.display = "grid";
    } else if (professionsContainer) {
      professionsContainer.innerHTML =
        '<p style="text-align:center;">لا توجد نتائج مطابقة</p>';
    }
    if (majorsContainer) majorsContainer.style.display = "none";
  } else {
    if (results.majors.length > 0 && majorsContainer) {
      renderMajors(results.majors);
      majorsContainer.style.display = "grid";
    } else if (majorsContainer) {
      majorsContainer.innerHTML =
        '<p style="text-align:center;">لا توجد نتائج مطابقة</p>';
    }
    if (professionsContainer) professionsContainer.style.display = "none";
  }

  if (mainResults) mainResults.style.display = "block";
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

  const currentSection = document
    .querySelector(".nav-link.active")
    .getAttribute("href");
  renderProfessions(professions);
  renderMajors(majors);
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
  const profession = professions.find((p) => p.title === title);
  if (profession) showDetails(profession);
}

function showMajorDetailsFromSearch(name) {
  const major = majors.find((m) => m.name === name);
  if (major) showMajorDetails(major);
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
