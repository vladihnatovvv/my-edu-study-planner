const plannerData = [
  {
    id: "foundations",
    kicker: "Stage 01",
    title: "Foundations",
    description:
      "База, без якої далі все буде важче: веб, Git, командний рядок, мережа, логіка браузера й HTTP.",
    steps: [
      {
        id: "foundations-web",
        title: "Зрозумій, як працює web",
        description:
          "Розберися з клієнтом, сервером, доменом, DNS, браузером, request/response та що таке hosting.",
        tags: ["Web Basics", "HTTP", "Client/Server"],
      },
      {
        id: "foundations-html-css-js",
        title: "Вивчи HTML, CSS і JavaScript на базовому рівні",
        description:
          "Мета цього етапу: вміти самостійно зібрати просту сторінку без фреймворків.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: "foundations-git",
        title: "Освой Git і GitHub",
        description:
          "Навчися робити commit, branch, merge, pull request і вести історію змін без страху.",
        tags: ["Git", "GitHub", "Workflow"],
      },
      {
        id: "foundations-cli",
        title: "Почни комфортно користуватись терміналом",
        description:
          "Команди навігації, робота з файлами, запуск серверів, перевірка логів і базова автоматизація.",
        tags: ["CLI", "Shell", "Productivity"],
      },
      {
        id: "foundations-devtools",
        title: "Навчися працювати з DevTools",
        description:
          "Inspect elements, network tab, console, local storage і базове налагодження помилок.",
        tags: ["Browser DevTools", "Debugging"],
      },
    ],
  },
  {
    id: "frontend",
    kicker: "Stage 02",
    title: "Frontend Developer Track",
    description:
      "Шлях до побудови сучасних інтерфейсів: від семантики й адаптиву до React, TypeScript та performance.",
    steps: [
      {
        id: "frontend-html",
        title: "Поглиб HTML і семантичну розмітку",
        description:
          "Форми, доступність, семантичні теги, структура сторінок і правильна робота з контентом.",
        tags: ["HTML", "Semantics", "Accessibility"],
      },
      {
        id: "frontend-css",
        title: "Закрий CSS layout і responsive design",
        description:
          "Flexbox, Grid, адаптивні брейкпоінти, позиціонування, типографіка, змінні та компонування сторінок.",
        tags: ["CSS", "Flexbox", "Grid", "Responsive"],
      },
      {
        id: "frontend-js-core",
        title: "Укріпи core JavaScript",
        description:
          "Scope, closures, arrays, objects, async/await, fetch, modules, events і DOM-маніпуляції.",
        tags: ["JavaScript", "DOM", "Async"],
      },
      {
        id: "frontend-typescript",
        title: "Додай TypeScript",
        description:
          "Типи, інтерфейси, generics і типізація компонентів, щоб писати стабільніший фронтенд.",
        tags: ["TypeScript", "Static Types"],
      },
      {
        id: "frontend-framework",
        title: "Обери основний фреймворк",
        description:
          "Для full stack маршруту найпрактичніше стартувати з React, а далі рухатись у Next.js.",
        tags: ["React", "Frameworks"],
      },
      {
        id: "frontend-state",
        title: "Розбери state management і data fetching",
        description:
          "Props, local state, server state, forms, caching і робота з API на клієнті.",
        tags: ["State", "API", "Forms"],
      },
      {
        id: "frontend-a11y",
        title: "Навчися робити інтерфейси доступними",
        description:
          "Keyboard navigation, aria-атрибути, контраст, focus states і screen readers.",
        tags: ["Accessibility", "UX"],
      },
      {
        id: "frontend-testing",
        title: "Додай тестування та дебаг",
        description:
          "Unit тести, інтеграційні перевірки, ручний дебаг і базове покриття критичних сценаріїв.",
        tags: ["Testing", "Debugging", "Quality"],
      },
      {
        id: "frontend-performance",
        title: "Прокачай performance і SEO",
        description:
          "Оптимізація рендерингу, зображень, шрифтів, bundle size і базові SEO-практики.",
        tags: ["Performance", "SEO", "Core Web Vitals"],
      },
    ],
  },
  {
    id: "backend",
    kicker: "Stage 03",
    title: "Backend Developer Track",
    description:
      "Серверна частина: мова, API, база даних, auth, кешування, безпека, деплой і стабільність.",
    steps: [
      {
        id: "backend-language",
        title: "Обери backend-мову та екосистему",
        description:
          "Якщо хочеш один стек, бери Node.js. Якщо хочеш сильну серверну базу, можна паралельно дивитись Python.",
        tags: ["Node.js", "Python", "Backend"],
      },
      {
        id: "backend-http",
        title: "Зрозумій HTTP, REST і структуру API",
        description:
          "Маршрути, методи, статус-коди, headers, JSON, pagination і versioning.",
        tags: ["HTTP", "REST API", "JSON"],
      },
      {
        id: "backend-database",
        title: "Освой SQL і реляційні бази",
        description:
          "SELECT, JOIN, indexes, relations, migrations і нормальна модель даних.",
        tags: ["SQL", "PostgreSQL", "Database Design"],
      },
      {
        id: "backend-orm",
        title: "Навчися працювати через ORM або query builder",
        description:
          "CRUD, схеми, міграції, валідація й безпечна робота з даними в коді.",
        tags: ["ORM", "Migrations", "CRUD"],
      },
      {
        id: "backend-auth",
        title: "Реалізуй authentication і authorization",
        description:
          "Sessions, JWT, ролі користувачів, доступ до ресурсів і захист приватних маршрутів.",
        tags: ["Auth", "JWT", "Security"],
      },
      {
        id: "backend-cache",
        title: "Додай кешування та базову продуктивність",
        description:
          "Розберись, коли потрібен Redis, кеш API-відповідей і як не дублювати важкі запити.",
        tags: ["Caching", "Redis", "Performance"],
      },
      {
        id: "backend-security",
        title: "Вивчи базову безпеку бекенду",
        description:
          "CORS, rate limiting, input validation, secrets, hashing паролів і безпечна конфігурація.",
        tags: ["Security", "Validation", "CORS"],
      },
      {
        id: "backend-testing",
        title: "Покрий сервер тестами та логуванням",
        description:
          "Перевірки API, обробка помилок, structured logs і зрозуміла діагностика багів.",
        tags: ["Testing", "Logging", "Observability"],
      },
      {
        id: "backend-deploy",
        title: "Навчися деплоїти та підтримувати сервер",
        description:
          "Environment variables, CI/CD, Docker basics, продакшн-конфіг і моніторинг.",
        tags: ["Deploy", "Docker", "CI/CD"],
      },
    ],
  },
  {
    id: "fullstack",
    kicker: "Stage 04",
    title: "Full Stack Integration",
    description:
      "Останній етап: з’єднати фронтенд і бекенд, робити завершені продукти й наповнювати портфоліо.",
    steps: [
      {
        id: "fullstack-framework",
        title: "Освой full stack framework",
        description:
          "Найзручніше для цього плану рухатись через Next.js: маршрути, серверні дії, SSR, API routes.",
        tags: ["Next.js", "SSR", "Full Stack"],
      },
      {
        id: "fullstack-project-crud",
        title: "Зроби свій перший CRUD-проєкт",
        description:
          "Наприклад: таск-менеджер, нотатник або трекер навчання з авторизацією та базою даних.",
        tags: ["Project", "CRUD", "Portfolio"],
      },
      {
        id: "fullstack-project-dashboard",
        title: "Зроби проєкт з дашбордом і ролями",
        description:
          "Користувачі, ролі, аналітика, захищені сторінки, таблиці й робота з реальними даними.",
        tags: ["Dashboard", "Roles", "Data"],
      },
      {
        id: "fullstack-integrations",
        title: "Додай зовнішні інтеграції",
        description:
          "Email, payments, file uploads, OAuth або будь-який сервіс, з яким часто працюють у реальних продуктах.",
        tags: ["Integrations", "Email", "Payments", "Uploads"],
      },
      {
        id: "fullstack-architecture",
        title: "Почни розуміти архітектуру застосунку",
        description:
          "Структура проєкту, separation of concerns, reusable modules і як масштабувати кодову базу.",
        tags: ["Architecture", "Scalability"],
      },
      {
        id: "fullstack-portfolio",
        title: "Оформи портфоліо та навчальні кейси",
        description:
          "Кожен завершений проєкт опиши: що зробив, які технології використав, які проблеми вирішив.",
        tags: ["Portfolio", "Career", "Projects"],
      },
    ],
  },
];

const STORAGE_KEY = "my-edu-study-planner";

const plannerElement = document.querySelector("#planner");
const sectionTemplate = document.querySelector("#sectionTemplate");
const stepTemplate = document.querySelector("#stepTemplate");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const expandAllButton = document.querySelector("#expandAllButton");
const collapseAllButton = document.querySelector("#collapseAllButton");
const resetButton = document.querySelector("#resetButton");

const progressText = document.querySelector("#overallProgressText");
const progressBar = document.querySelector("#overallProgressBar");
const totalStepsElement = document.querySelector("#totalSteps");
const completedStepsElement = document.querySelector("#completedSteps");
const remainingStepsElement = document.querySelector("#remainingSteps");

let activeFilter = "all";
let completedMap = loadProgress();

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completedMap));
}

function isCompleted(stepId) {
  return Boolean(completedMap[stepId]);
}

function setCompleted(stepId, value) {
  completedMap[stepId] = value;
  saveProgress();
  render();
}

function resetProgress() {
  completedMap = {};
  saveProgress();
  render();
}

function toggleSection(sectionElement, forceOpen) {
  const shouldOpen =
    typeof forceOpen === "boolean"
      ? forceOpen
      : !sectionElement.classList.contains("open");

  sectionElement.classList.toggle("open", shouldOpen);
  const chevron = sectionElement.querySelector(".section-chevron");
  chevron.textContent = shouldOpen ? "-" : "+";
}

function getAllSteps() {
  return plannerData.flatMap((section) => section.steps);
}

function applyFilter(stepElement, done) {
  let hidden = false;

  if (activeFilter === "todo" && done) {
    hidden = true;
  }

  if (activeFilter === "done" && !done) {
    hidden = true;
  }

  stepElement.classList.toggle("hidden", hidden);
}

function renderStats() {
  const allSteps = getAllSteps();
  const total = allSteps.length;
  const completed = allSteps.filter((step) => isCompleted(step.id)).length;
  const remaining = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalStepsElement.textContent = String(total);
  completedStepsElement.textContent = String(completed);
  remainingStepsElement.textContent = String(remaining);
  progressText.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
}

function render() {
  plannerElement.innerHTML = "";

  plannerData.forEach((section, index) => {
    const sectionNode = sectionTemplate.content.firstElementChild.cloneNode(true);
    const headerButton = sectionNode.querySelector(".section-header");
    const sectionKicker = sectionNode.querySelector(".section-kicker");
    const sectionTitle = sectionNode.querySelector(".section-title");
    const sectionDescription = sectionNode.querySelector(".section-description");
    const sectionProgressText = sectionNode.querySelector(".section-progress-text");
    const sectionProgressFill = sectionNode.querySelector(".section-progress-fill");
    const stepList = sectionNode.querySelector(".step-list");

    sectionKicker.textContent = section.kicker;
    sectionTitle.textContent = section.title;
    sectionDescription.textContent = section.description;

    const completedCount = section.steps.filter((step) => isCompleted(step.id)).length;
    const percentage =
      section.steps.length === 0
        ? 0
        : Math.round((completedCount / section.steps.length) * 100);

    sectionProgressText.textContent = `${completedCount}/${section.steps.length} кроків`;
    sectionProgressFill.style.width = `${percentage}%`;

    section.steps.forEach((step) => {
      const stepNode = stepTemplate.content.firstElementChild.cloneNode(true);
      const checkbox = stepNode.querySelector(".step-checkbox");
      const title = stepNode.querySelector(".step-title");
      const description = stepNode.querySelector(".step-description");
      const tags = stepNode.querySelector(".step-tags");
      const done = isCompleted(step.id);

      checkbox.checked = done;
      checkbox.addEventListener("change", () => setCompleted(step.id, checkbox.checked));

      title.textContent = step.title;
      description.textContent = step.description;
      stepNode.classList.toggle("completed", done);

      step.tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.className = "step-tag";
        tagElement.textContent = tag;
        tags.appendChild(tagElement);
      });

      applyFilter(stepNode, done);
      stepList.appendChild(stepNode);
    });

    const shouldOpen = index === 0;
    toggleSection(sectionNode, shouldOpen);
    headerButton.addEventListener("click", () => toggleSection(sectionNode));
    plannerElement.appendChild(sectionNode);
  });

  renderStats();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) =>
      item.classList.toggle("active", item === button)
    );
    render();
  });
});

expandAllButton.addEventListener("click", () => {
  [...document.querySelectorAll(".roadmap-section")].forEach((section) =>
    toggleSection(section, true)
  );
});

collapseAllButton.addEventListener("click", () => {
  [...document.querySelectorAll(".roadmap-section")].forEach((section) =>
    toggleSection(section, false)
  );
});

resetButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Скинути всі відмітки прогресу? Це видалить локально збережений стан."
  );

  if (confirmed) {
    resetProgress();
  }
});

render();
