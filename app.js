const plannerData = [
  {
    id: "frontend",
    title: "Front-end",
    source: "https://roadmap.sh/frontend",
    items: [
      { id: "frontend-internet", kind: "topic", text: "Internet" },
      { id: "frontend-how-internet-works", kind: "subtopic", text: "How does the internet work?" },
      { id: "frontend-http", kind: "subtopic", text: "What is HTTP?" },
      { id: "frontend-domain-name", kind: "subtopic", text: "What is Domain Name?" },
      { id: "frontend-hosting", kind: "subtopic", text: "What is hosting?" },
      { id: "frontend-dns", kind: "subtopic", text: "DNS and how it works?" },
      { id: "frontend-browsers", kind: "subtopic", text: "Browsers and how they work?" },
      { id: "frontend-html", kind: "topic", text: "HTML" },
      { id: "frontend-html-basics", kind: "subtopic", text: "Learn the basics" },
      { id: "frontend-semantic-html", kind: "subtopic", text: "Writing Semantic HTML" },
      { id: "frontend-forms-validations", kind: "subtopic", text: "Forms and Validations" },
      { id: "frontend-accessibility", kind: "subtopic", text: "Accessibility" },
      { id: "frontend-seo-basics", kind: "subtopic", text: "SEO Basics" },
      { id: "frontend-css", kind: "topic", text: "CSS" },
      { id: "frontend-css-basics", kind: "subtopic", text: "Learn the basics" },
      { id: "frontend-making-layouts", kind: "subtopic", text: "Making Layouts" },
      { id: "frontend-responsive-design", kind: "subtopic", text: "Responsive Design" },
      { id: "frontend-javascript", kind: "topic", text: "JavaScript" },
      { id: "frontend-javascript-basics", kind: "subtopic", text: "Learn the Basics" },
      { id: "frontend-dom", kind: "subtopic", text: "Learn DOM Manipulation" },
      { id: "frontend-fetch-api", kind: "subtopic", text: "Fetch API / Ajax (XHR)" },
      { id: "frontend-vcs", kind: "topic", text: "Version Control Systems" },
      { id: "frontend-git", kind: "subtopic", text: "Git" },
      { id: "frontend-vcs-hosting", kind: "topic", text: "VCS Hosting" },
      { id: "frontend-github", kind: "subtopic", text: "GitHub" },
      { id: "frontend-gitlab", kind: "subtopic", text: "GitLab" },
      { id: "frontend-bitbucket", kind: "subtopic", text: "Bitbucket" },
      { id: "frontend-package-managers", kind: "topic", text: "Package Managers" },
      { id: "frontend-npm", kind: "subtopic", text: "npm" },
      { id: "frontend-pnpm", kind: "subtopic", text: "pnpm" },
      { id: "frontend-yarn", kind: "subtopic", text: "yarn" },
      { id: "frontend-framework", kind: "topic", text: "Pick a Framework" },
      { id: "frontend-react", kind: "subtopic", text: "React" },
      { id: "frontend-vue", kind: "subtopic", text: "Vue.js" },
      { id: "frontend-angular", kind: "subtopic", text: "Angular" },
      { id: "frontend-svelte", kind: "subtopic", text: "Svelte" },
      { id: "frontend-solid", kind: "subtopic", text: "Solid JS" },
      { id: "frontend-qwik", kind: "subtopic", text: "Qwik" },
      { id: "frontend-writing-css", kind: "topic", text: "Writing CSS" },
      { id: "frontend-tailwind", kind: "subtopic", text: "Tailwind" },
      { id: "frontend-css-architecture", kind: "topic", text: "CSS Architecture" },
      { id: "frontend-bem", kind: "subtopic", text: "BEM" },
      { id: "frontend-css-preprocessors", kind: "topic", text: "CSS Preprocessors" },
      { id: "frontend-sass", kind: "subtopic", text: "Sass" },
      { id: "frontend-postcss", kind: "subtopic", text: "PostCSS" },
      { id: "frontend-build-tools", kind: "topic", text: "Build Tools" },
      { id: "frontend-vite", kind: "subtopic", text: "Vite" },
      { id: "frontend-module-bundlers", kind: "topic", text: "Module Bundlers" },
      { id: "frontend-esbuild", kind: "subtopic", text: "esbuild" },
      { id: "frontend-swc", kind: "subtopic", text: "SWC" },
      { id: "frontend-webpack", kind: "subtopic", text: "Webpack" },
      { id: "frontend-rollup", kind: "subtopic", text: "Rollup" },
      { id: "frontend-parcel", kind: "subtopic", text: "Parcel" },
      { id: "frontend-linters-formatters", kind: "topic", text: "Linters and Formatters" },
      { id: "frontend-prettier", kind: "subtopic", text: "Prettier" },
      { id: "frontend-eslint", kind: "subtopic", text: "ESLint" },
      { id: "frontend-testing", kind: "topic", text: "Testing" },
      { id: "frontend-vitest", kind: "subtopic", text: "Vitest" },
      { id: "frontend-jest", kind: "subtopic", text: "Jest" },
      { id: "frontend-playwright", kind: "subtopic", text: "Playwright" },
      { id: "frontend-cypress", kind: "subtopic", text: "Cypress" },
      { id: "frontend-auth-strategies", kind: "topic", text: "Authentication Strategies" },
      { id: "frontend-web-security", kind: "topic", text: "Web Security Basics" },
      { id: "frontend-cors", kind: "subtopic", text: "CORS" },
      { id: "frontend-https", kind: "subtopic", text: "HTTPS" },
      { id: "frontend-csp", kind: "subtopic", text: "Content Security Policy" },
      { id: "frontend-owasp", kind: "subtopic", text: "OWASP Security Risks" },
      { id: "frontend-type-checkers", kind: "topic", text: "Type Checkers" },
      { id: "frontend-typescript", kind: "subtopic", text: "TypeScript" },
      { id: "frontend-web-components", kind: "topic", text: "Web Components" },
      { id: "frontend-html-templates", kind: "subtopic", text: "HTML Templates" },
      { id: "frontend-custom-elements", kind: "subtopic", text: "Custom Elements" },
      { id: "frontend-shadow-dom", kind: "subtopic", text: "Shadow DOM" },
      { id: "frontend-ssr", kind: "topic", text: "SSR" },
      { id: "frontend-ssr-react", kind: "subtopic", text: "React" },
      { id: "frontend-ssr-angular", kind: "subtopic", text: "Angular" },
      { id: "frontend-ssr-vue", kind: "subtopic", text: "Vue.js" },
      { id: "frontend-ssr-svelte", kind: "subtopic", text: "Svelte" },
      { id: "frontend-ssr-next", kind: "subtopic", text: "Next.js" },
      { id: "frontend-ssr-react-router", kind: "subtopic", text: "react-router" },
      { id: "frontend-ssr-nuxt", kind: "subtopic", text: "Nuxt.js" },
      { id: "frontend-ssr-svelte-kit", kind: "subtopic", text: "Svelte Kit" },
      { id: "frontend-graphql", kind: "topic", text: "GraphQL" },
      { id: "frontend-apollo", kind: "subtopic", text: "Apollo" },
      { id: "frontend-relay", kind: "subtopic", text: "Relay Modern" },
      { id: "frontend-performance-group", kind: "note", text: "Measure & Improve Perf." },
      { id: "frontend-prpl", kind: "subtopic", text: "PRPL Pattern" },
      { id: "frontend-rail", kind: "subtopic", text: "RAIL Model" },
      { id: "frontend-performance-metrics", kind: "subtopic", text: "Performance Metrics" },
      { id: "frontend-lighthouse", kind: "subtopic", text: "Using Lighthouse" },
      { id: "frontend-devtools", kind: "subtopic", text: "Using DevTools" },
      { id: "frontend-static-site-generators", kind: "topic", text: "Static Site Generators" },
      { id: "frontend-ssg-next", kind: "subtopic", text: "Next.js" },
      { id: "frontend-ssg-astro", kind: "subtopic", text: "Astro" },
      { id: "frontend-vuepress", kind: "subtopic", text: "Vuepress" },
      { id: "frontend-eleventy", kind: "subtopic", text: "Eleventy" },
      { id: "frontend-pwas", kind: "topic", text: "PWAs" },
      { id: "frontend-mobile-apps", kind: "topic", text: "Mobile Apps" },
      { id: "frontend-react-native", kind: "subtopic", text: "React Native" },
      { id: "frontend-flutter", kind: "subtopic", text: "Flutter" },
      { id: "frontend-ionic", kind: "subtopic", text: "Ionic" },
      { id: "frontend-desktop-apps", kind: "topic", text: "Desktop Apps" },
      { id: "frontend-electron", kind: "subtopic", text: "Electron" },
      { id: "frontend-tauri", kind: "subtopic", text: "Tauri" },
      { id: "frontend-desktop-flutter", kind: "subtopic", text: "Flutter" },
      { id: "frontend-storage", kind: "subtopic", text: "Storage" },
      { id: "frontend-web-sockets", kind: "subtopic", text: "Web Sockets" },
      { id: "frontend-sse", kind: "subtopic", text: "Server Sent Events" },
      { id: "frontend-service-workers", kind: "subtopic", text: "Service Workers" },
      { id: "frontend-location", kind: "subtopic", text: "Location" },
      { id: "frontend-notifications", kind: "subtopic", text: "Notifications" },
      { id: "frontend-device-orientation", kind: "subtopic", text: "Device Orientation" },
      { id: "frontend-payments", kind: "subtopic", text: "Payments" },
      { id: "frontend-credentials", kind: "subtopic", text: "Credentials" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    source: "https://roadmap.sh/backend",
    items: [
      { id: "backend-internet", kind: "topic", text: "Internet" },
      { id: "backend-how-internet-works", kind: "subtopic", text: "How does the internet work?" },
      { id: "backend-http", kind: "subtopic", text: "What is HTTP?" },
      { id: "backend-domain-name", kind: "subtopic", text: "What is Domain Name?" },
      { id: "backend-hosting", kind: "subtopic", text: "What is hosting?" },
      { id: "backend-dns", kind: "subtopic", text: "DNS and how it works?" },
      { id: "backend-browsers", kind: "subtopic", text: "Browsers and how they work?" },
      { id: "backend-language", kind: "topic", text: "Pick a Language" },
      { id: "backend-javascript", kind: "subtopic", text: "JavaScript" },
      { id: "backend-go", kind: "subtopic", text: "Go" },
      { id: "backend-ruby", kind: "subtopic", text: "Ruby" },
      { id: "backend-python", kind: "subtopic", text: "Python" },
      { id: "backend-csharp", kind: "subtopic", text: "C#" },
      { id: "backend-java", kind: "subtopic", text: "Java" },
      { id: "backend-rust", kind: "subtopic", text: "Rust" },
      { id: "backend-php", kind: "subtopic", text: "PHP" },
      { id: "backend-vcs", kind: "topic", text: "Version Control Systems" },
      { id: "backend-git", kind: "subtopic", text: "Git" },
      { id: "backend-repo-hosting", kind: "topic", text: "Repo Hosting Services" },
      { id: "backend-github", kind: "subtopic", text: "GitHub" },
      { id: "backend-gitlab", kind: "subtopic", text: "GitLab" },
      { id: "backend-bitbucket", kind: "subtopic", text: "Bitbucket" },
      { id: "backend-relational-databases", kind: "topic", text: "Relational Databases" },
      { id: "backend-postgresql", kind: "subtopic", text: "PostgreSQL" },
      { id: "backend-mysql", kind: "subtopic", text: "MySQL" },
      { id: "backend-mariadb", kind: "subtopic", text: "MariaDB" },
      { id: "backend-mssql", kind: "subtopic", text: "MS SQL" },
      { id: "backend-oracle", kind: "subtopic", text: "Oracle" },
      { id: "backend-sqlite", kind: "subtopic", text: "SQLite" },
      { id: "backend-apis", kind: "topic", text: "Learn about APIs" },
      { id: "backend-rest", kind: "subtopic", text: "REST" },
      { id: "backend-json-apis", kind: "subtopic", text: "JSON APIs" },
      { id: "backend-grpc", kind: "subtopic", text: "gRPC" },
      { id: "backend-soap", kind: "subtopic", text: "SOAP" },
      { id: "backend-graphql", kind: "subtopic", text: "GraphQL" },
      { id: "backend-hateoas", kind: "subtopic", text: "HATEOAS" },
      { id: "backend-open-api", kind: "subtopic", text: "Open API Specs" },
      { id: "backend-authentication", kind: "subtopic", text: "Authentication" },
      { id: "backend-jwt", kind: "subtopic", text: "JWT" },
      { id: "backend-oauth", kind: "subtopic", text: "OAuth" },
      { id: "backend-basic-auth", kind: "subtopic", text: "Basic Authentication" },
      { id: "backend-token-auth", kind: "subtopic", text: "Token Authentication" },
      { id: "backend-cookie-auth", kind: "subtopic", text: "Cookie Based Auth" },
      { id: "backend-openid", kind: "subtopic", text: "OpenID" },
      { id: "backend-saml", kind: "subtopic", text: "SAML" },
      { id: "backend-caching", kind: "topic", text: "Caching" },
      { id: "backend-cache-server-side", kind: "subtopic", text: "Server Side" },
      { id: "backend-cache-cdn", kind: "subtopic", text: "CDN" },
      { id: "backend-cache-client-side", kind: "subtopic", text: "Client Side" },
      { id: "backend-cache-redis", kind: "subtopic", text: "Redis" },
      { id: "backend-cache-memcached", kind: "subtopic", text: "Memcached" },
      { id: "backend-testing", kind: "topic", text: "Testing" },
      { id: "backend-integration-testing", kind: "subtopic", text: "Integration Testing" },
      { id: "backend-unit-testing", kind: "subtopic", text: "Unit Testing" },
      { id: "backend-functional-testing", kind: "subtopic", text: "Functional Testing" },
      { id: "backend-web-security", kind: "topic", text: "Web Security" },
      { id: "backend-md5", kind: "subtopic", text: "MD5" },
      { id: "backend-sha", kind: "subtopic", text: "SHA" },
      { id: "backend-scrypt", kind: "subtopic", text: "scrypt" },
      { id: "backend-bcrypt", kind: "subtopic", text: "bcrypt" },
      { id: "backend-owasp-risks", kind: "subtopic", text: "OWASP Risks" },
      { id: "backend-https", kind: "subtopic", text: "HTTPS" },
      { id: "backend-ssl-tls", kind: "subtopic", text: "SSL/TLS" },
      { id: "backend-cors", kind: "subtopic", text: "CORS" },
      { id: "backend-server-security", kind: "subtopic", text: "Server Security" },
      { id: "backend-csp", kind: "subtopic", text: "CSP" },
      { id: "backend-ci-cd", kind: "topic", text: "CI / CD" },
      { id: "backend-more-databases", kind: "topic", text: "More about Databases" },
      { id: "backend-orms", kind: "subtopic", text: "ORMs" },
      { id: "backend-acid", kind: "subtopic", text: "ACID" },
      { id: "backend-transactions", kind: "subtopic", text: "Transactions" },
      { id: "backend-n1", kind: "subtopic", text: "N+1 Problem" },
      { id: "backend-normalization", kind: "subtopic", text: "Normalization" },
      { id: "backend-failure-modes", kind: "subtopic", text: "Failure Modes" },
      { id: "backend-profiling", kind: "subtopic", text: "Profiling Perfor." },
      { id: "backend-scaling-databases", kind: "topic", text: "Scaling Databases" },
      { id: "backend-db-indexes", kind: "subtopic", text: "Database Indexes" },
      { id: "backend-data-replication", kind: "subtopic", text: "Data Replication" },
      { id: "backend-sharding", kind: "subtopic", text: "Sharding Strategies" },
      { id: "backend-cap-theorem", kind: "subtopic", text: "CAP Theorem" },
      { id: "backend-migrations", kind: "subtopic", text: "Migrations" },
      { id: "backend-architectural-patterns", kind: "topic", text: "Architectural Patterns" },
      { id: "backend-monolithic", kind: "subtopic", text: "Monolithic Apps" },
      { id: "backend-microservices", kind: "subtopic", text: "Microservices" },
      { id: "backend-soa", kind: "subtopic", text: "SOA" },
      { id: "backend-serverless", kind: "subtopic", text: "Serverless" },
      { id: "backend-service-mesh", kind: "subtopic", text: "Service Mesh" },
      { id: "backend-twelve-factor", kind: "subtopic", text: "Twelve Factor Apps" },
      { id: "backend-design-principles", kind: "topic", text: "Design and Development Principles" },
      { id: "backend-gof", kind: "subtopic", text: "GOF Design Patterns" },
      { id: "backend-ddd", kind: "subtopic", text: "Domain Driven Design" },
      { id: "backend-tdd", kind: "subtopic", text: "Test Driven Development" },
      { id: "backend-cqrs", kind: "subtopic", text: "CQRS" },
      { id: "backend-event-sourcing", kind: "subtopic", text: "Event Sourcing" },
      { id: "backend-containerization-vs-virtualization", kind: "topic", text: "Containerization vs Virtualization" },
      { id: "backend-lxc", kind: "subtopic", text: "LXC" },
      { id: "backend-message-brokers", kind: "topic", text: "Message Brokers" },
      { id: "backend-rabbitmq", kind: "subtopic", text: "RabbitMQ" },
      { id: "backend-kafka", kind: "subtopic", text: "Kafka" },
      { id: "backend-search-engines", kind: "topic", text: "Search Engines" },
      { id: "backend-elasticsearch", kind: "subtopic", text: "Elasticsearch" },
      { id: "backend-solr", kind: "subtopic", text: "Solr" },
      { id: "backend-web-servers", kind: "topic", text: "Web Servers" },
      { id: "backend-nginx", kind: "subtopic", text: "Nginx" },
      { id: "backend-apache", kind: "subtopic", text: "Apache" },
      { id: "backend-caddy", kind: "subtopic", text: "Caddy" },
      { id: "backend-ms-iis", kind: "subtopic", text: "MS IIS" },
      { id: "backend-real-time-data", kind: "topic", text: "Real-Time Data" },
      { id: "backend-server-sent-events", kind: "subtopic", text: "Server Sent Events" },
      { id: "backend-websockets", kind: "subtopic", text: "WebSockets" },
      { id: "backend-long-polling", kind: "subtopic", text: "Long Polling" },
      { id: "backend-short-polling", kind: "subtopic", text: "Short Polling" },
      { id: "backend-nosql", kind: "topic", text: "NoSQL Databases" },
      { id: "backend-key-value", kind: "note", text: "Key-Value" },
      { id: "backend-nosql-redis", kind: "subtopic", text: "Redis" },
      { id: "backend-dynamodb", kind: "subtopic", text: "DynamoDB" },
      { id: "backend-document-dbs", kind: "note", text: "Document DBs" },
      { id: "backend-mongodb", kind: "subtopic", text: "MongoDB" },
      { id: "backend-couchdb", kind: "subtopic", text: "CouchDB" },
      { id: "backend-realtime", kind: "note", text: "Realtime" },
      { id: "backend-firebase", kind: "subtopic", text: "Firebase" },
      { id: "backend-rethinkdb", kind: "subtopic", text: "RethinkDB" },
      { id: "backend-graph-dbs", kind: "note", text: "Graph DBs" },
      { id: "backend-neo4j", kind: "subtopic", text: "Neo4j" },
      { id: "backend-column-dbs", kind: "note", text: "Column DBs" },
      { id: "backend-cassandra", kind: "subtopic", text: "Cassandra" },
      { id: "backend-base", kind: "subtopic", text: "Base" },
      { id: "backend-time-series", kind: "note", text: "Time Series" },
      { id: "backend-influxdb", kind: "subtopic", text: "Influx DB" },
      { id: "backend-timescale", kind: "subtopic", text: "TimeScale" },
      { id: "backend-aws-neptune", kind: "subtopic", text: "AWS Neptune" },
      { id: "backend-building-for-scale", kind: "topic", text: "Building For Scale" },
      { id: "backend-mitigation-strategies", kind: "note", text: "Mitigation Strategies" },
      { id: "backend-graceful-degradation", kind: "subtopic", text: "Graceful Degradation" },
      { id: "backend-throttling", kind: "subtopic", text: "Throttling" },
      { id: "backend-backpressure", kind: "subtopic", text: "Backpressure" },
      { id: "backend-loadshifting", kind: "subtopic", text: "Loadshifting" },
      { id: "backend-circuit-breaker", kind: "subtopic", text: "Circuit Breaker" },
      { id: "backend-migration-strategies", kind: "subtopic", text: "Migration Strategies" },
      { id: "backend-types-of-scaling", kind: "subtopic", text: "Types of Scaling" },
      { id: "backend-observability", kind: "subtopic", text: "Observability" },
      { id: "backend-instrumentation", kind: "subtopic", text: "Instrumentation" },
      { id: "backend-monitoring", kind: "subtopic", text: "Monitoring" },
      { id: "backend-telemetry", kind: "subtopic", text: "Telemetry" },
    ],
  },
  {
    id: "full-stack",
    title: "Full Stack",
    source: "https://roadmap.sh/full-stack",
    items: [
      { id: "fullstack-html", kind: "topic", text: "HTML" },
      { id: "fullstack-css", kind: "topic", text: "CSS" },
      { id: "fullstack-js", kind: "topic", text: "JavaScript" },
      { id: "fullstack-checkpoint-static", kind: "subtopic", text: "Checkpoint - Static Webpages" },
      { id: "fullstack-checkpoint-interactivity", kind: "subtopic", text: "Checkpoint - Interactivity" },
      { id: "fullstack-npm", kind: "topic", text: "npm" },
      { id: "fullstack-git", kind: "topic", text: "Git" },
      { id: "fullstack-github", kind: "topic", text: "GitHub" },
      { id: "fullstack-checkpoint-external", kind: "subtopic", text: "Checkpoint - External Packages" },
      { id: "fullstack-checkpoint-collaborative", kind: "subtopic", text: "Checkpoint - Collaborative Work" },
      { id: "fullstack-tailwind", kind: "topic", text: "Tailwind CSS" },
      { id: "fullstack-react", kind: "topic", text: "React" },
      { id: "fullstack-front-note", kind: "note", text: "Feel free to skip these and revisit after learning Backend" },
      { id: "fullstack-checkpoint-frontend-apps", kind: "subtopic", text: "Checkpoint - Frontend Apps" },
      { id: "fullstack-backend-note", kind: "note", text: "Start Backend Development" },
      { id: "fullstack-node", kind: "topic", text: "Node.js" },
      { id: "fullstack-node-note", kind: "note", text: "You can pick any backend programming language. My recommendation is Node.js because you are already familiar with JavaScript and it's easier to pick." },
      { id: "fullstack-checkpoint-cli", kind: "subtopic", text: "Checkpoint — CLI Apps" },
      { id: "fullstack-rest", kind: "topic", text: "RESTful APIs" },
      { id: "fullstack-checkpoint-crud", kind: "subtopic", text: "Checkpoint — Simple CRUD Apps" },
      { id: "fullstack-jwt", kind: "topic", text: "JWT Auth" },
      { id: "fullstack-redis", kind: "topic", text: "Redis" },
      { id: "fullstack-postgresql", kind: "topic", text: "PostgreSQL" },
      { id: "fullstack-linux", kind: "topic", text: "Linux Basics" },
      { id: "fullstack-checkpoint-complete-app", kind: "subtopic", text: "Checkpoint — Complete App" },
      { id: "fullstack-basic-aws-services", kind: "topic", text: "Basic AWS Services" },
      { id: "fullstack-ec2", kind: "subtopic", text: "EC2" },
      { id: "fullstack-vpc", kind: "subtopic", text: "VPC" },
      { id: "fullstack-route53", kind: "subtopic", text: "Route53" },
      { id: "fullstack-ses", kind: "subtopic", text: "SES" },
      { id: "fullstack-s3", kind: "subtopic", text: "S3" },
      { id: "fullstack-checkpoint-deployment", kind: "subtopic", text: "Checkpoint — Deployment" },
      { id: "fullstack-monit", kind: "topic", text: "Monit" },
      { id: "fullstack-github-actions", kind: "topic", text: "GitHub Actions" },
      { id: "fullstack-ansible", kind: "topic", text: "Ansible" },
      { id: "fullstack-terraform", kind: "topic", text: "Terraform" },
      { id: "fullstack-checkpoint-monitoring", kind: "subtopic", text: "Checkpoint — Monitoring" },
      { id: "fullstack-checkpoint-ci-cd", kind: "subtopic", text: "Checkpoint — CI / CD" },
      { id: "fullstack-checkpoint-automation", kind: "subtopic", text: "Checkpoint — Automation" },
      { id: "fullstack-checkpoint-infrastructure", kind: "subtopic", text: "Checkpoint — Infrastructure" },
      { id: "fullstack-practice-note", kind: "note", text: "Use the checkpoints and do not forget to practice what you learn. There are project ideas at each checkpoint that you can build to solidify your knowledge." },
      { id: "fullstack-audience-note", kind: "note", text: "Target audience for this roadmap is absolute beginners wanting to get into full-stack development." },
      { id: "fullstack-follow-up-note", kind: "note", text: "If you are already a full-stack developer you should visit the following tracks." },
    ],
  },
];

const STORAGE_KEY = "my-edu-study-planner-v2";

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

function getTrackableItems() {
  return plannerData.flatMap((section) =>
    section.items.filter((item) => item.kind !== "note")
  );
}

function toggleSection(sectionElement, forceOpen) {
  const shouldOpen =
    typeof forceOpen === "boolean"
      ? forceOpen
      : !sectionElement.classList.contains("open");

  sectionElement.classList.toggle("open", shouldOpen);
  sectionElement.querySelector(".section-toggle").textContent = shouldOpen ? "-" : "+";
}

function applyFilter(stepElement, done) {
  const hidden =
    (activeFilter === "todo" && done) || (activeFilter === "done" && !done);

  stepElement.classList.toggle("hidden", hidden);
}

function renderStats() {
  const allItems = getTrackableItems();
  const total = allItems.length;
  const completed = allItems.filter((item) => isCompleted(item.id)).length;
  const remaining = total - completed;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalStepsElement.textContent = String(total);
  completedStepsElement.textContent = String(completed);
  remainingStepsElement.textContent = String(remaining);
  progressText.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

function render() {
  plannerElement.innerHTML = "";

  plannerData.forEach((section, index) => {
    const sectionNode = sectionTemplate.content.firstElementChild.cloneNode(true);
    const headerButton = sectionNode.querySelector(".section-header");
    const title = sectionNode.querySelector(".section-title");
    const link = sectionNode.querySelector(".section-link");
    const sectionProgressText = sectionNode.querySelector(".section-progress-text");
    const sectionProgressFill = sectionNode.querySelector(".section-progress-fill");
    const stepList = sectionNode.querySelector(".step-list");

    title.textContent = section.title;
    link.href = section.source;
    link.textContent = section.source;

    const trackableItems = section.items.filter((item) => item.kind !== "note");
    const completedCount = trackableItems.filter((item) => isCompleted(item.id)).length;
    const percent =
      trackableItems.length === 0
        ? 0
        : Math.round((completedCount / trackableItems.length) * 100);

    sectionProgressText.textContent = `${completedCount}/${trackableItems.length}`;
    sectionProgressFill.style.width = `${percent}%`;

    section.items.forEach((item) => {
      const stepNode = stepTemplate.content.firstElementChild.cloneNode(true);
      const checkbox = stepNode.querySelector(".step-checkbox");
      const stepTitle = stepNode.querySelector(".step-title");
      const stepKind = stepNode.querySelector(".step-kind");
      const done = isCompleted(item.id);

      stepNode.classList.add(item.kind);
      stepTitle.textContent = item.text;
      stepKind.textContent = "";

      checkbox.checked = done;
      if (item.kind === "note") {
        checkbox.disabled = true;
      } else {
        checkbox.addEventListener("change", () => setCompleted(item.id, checkbox.checked));
      }

      stepNode.classList.toggle("completed", done);
      applyFilter(stepNode, done);
      stepList.appendChild(stepNode);
    });

    toggleSection(sectionNode, index === 0);
    headerButton.addEventListener("click", () => toggleSection(sectionNode));
    plannerElement.appendChild(sectionNode);
  });

  renderStats();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

expandAllButton.addEventListener("click", () => {
  document.querySelectorAll(".roadmap-section").forEach((section) => {
    toggleSection(section, true);
  });
});

collapseAllButton.addEventListener("click", () => {
  document.querySelectorAll(".roadmap-section").forEach((section) => {
    toggleSection(section, false);
  });
});

resetButton.addEventListener("click", () => {
  if (window.confirm("Reset all checkmarks?")) {
    resetProgress();
  }
});

render();
