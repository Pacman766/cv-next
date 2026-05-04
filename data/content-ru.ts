import type { CVData } from './types';

const contentRu: CVData = {
  profile: {
    name: 'Виктор Кондратюк',
    role: 'Веб-разработчик',
    location: 'Минск, Беларусь',
    email: '3334976@gmail.com',
    phone: '+375 29 766 04 37',
    telegram: 'viktor_kondratsiuk',
    linkedin: 'viktor-kondratsiuk',
    github: 'Pacman766',
    photo: '/uploads/VIK.jpg',
    available: true,
    availabilityNote: 'Открыт к новым предложениям',
    cvFile: '/ru/resume',
  },
  hero: {
    titleLines: [
      'Привет, я Виктор.',
      'Создаю _масштабируемые_',
      'веб-приложения.',
    ],
    subtitle:
      'Веб-разработчик с **4 годами** опыта создания высокопроизводительных фронтендов на JavaScript, TypeScript, React/Next.js и Vue — сейчас помогаю масштабировать банковскую СЭД в [Isida-Informatica](#experience).',
    stats: [
      { num: '4', label: ['Года в', 'продакшне'] },
      { num: '15+', label: ['Современных фреймворков', 'и инструментов'] },
      { num: 'СЭД', label: ['Банковский сектор', 'в промышленных масштабах'] },
      { num: 'Минск', label: ['Беларусь', '(готов к удалённой работе)'] },
    ],
  },
  about: {
    heading: 'Разработчик, которому важны детали.',
    lead: 'Создаю масштабируемые, высокопроизводительные веб-приложения на JavaScript (ES6+), TypeScript, React, Next.js, Vue и Java. Большую часть времени провожу в «сложной середине» — архитектура компонентов, управление состоянием, интеграция API и мелкие детали производительности, от которых зависит, ощущается ли продукт надёжным или нет.',
    points: [
      '**Компонентный подход.** Переиспользуемые UI-паттерны, модульная архитектура, дизайн-системы.',
      '**Состояние и данные.** Redux Toolkit, RTK Query, Context API, TanStack Query, Apollo.',
      '**Производительность.** Ленивая загрузка, мемоизация, code splitting, профилирование рендеров.',
      '**Качество.** ESLint, Prettier, Vitest, Playwright, Cypress — чистый, поддерживаемый код.',
      '**Полный цикл.** Бэкенд на Java EE, проектирование REST API, CI/CD с TeamCity, Git.',
    ],
  },
  skills: {
    heading: 'Инструментарий.',
    subtitle: 'Сгруппировано по реальному применению в ежедневной работе.',
    groups: [
      {
        title: 'Языки',
        items: ['JavaScript (ES6, ES8)', 'TypeScript', 'Java EE (MVC, JPA, REST API)'],
      },
      {
        title: 'Фронтенд-фреймворки',
        items: [
          'React — Hooks, Context, Router v6, Suspense, Error Boundaries',
          'Next.js',
          'Vue 2 / 3, Vuex, Pinia',
          'ExtJS (Sencha)',
        ],
      },
      {
        title: 'Состояние и данные',
        items: [
          'Redux, Redux Toolkit, RTK Query',
          'React Query / TanStack Query',
          'GraphQL (Apollo)',
          'REST · Axios · JWT',
        ],
      },
      {
        title: 'Стилизация и UI',
        items: [
          'HTML5, CSS, SCSS/SASS, CSS Modules',
          'Tailwind, Styled Components',
          'Material UI, Ant Design, Bootstrap, Vuetify',
        ],
      },
      {
        title: 'Сборка и качество',
        items: ['Vite, Webpack, Babel', 'ESLint, Prettier', 'Vitest, Playwright, Cypress'],
      },
      {
        title: 'Бэкенд и инфраструктура',
        items: [
          'Java EE — REST, MVC, JPA, Hibernate',
          'Tomcat, WildFly',
          'MySQL, PostgreSQL, Oracle SQL',
          'Git, GitHub, SVN · TeamCity',
        ],
      },
      {
        title: 'Headless CMS',
        items: ['Strapi (v4 / v5)', 'Payload'],
      },
      {
        title: 'Инструменты и среда',
        items: [
          'Figma, Photoshop',
          'VS Code, Cursor, Zed, IntelliJ IDEA',
          'YouTrack · Windows / Linux (Ubuntu)',
          'Claude, GPT (Codex), Gemini',
        ],
      },
    ],
  },
  experience: {
    heading: 'Где я создавал продукты.',
    roles: [
      {
        title: 'Middle Web Developer',
        when: 'Апр 2024 — настоящее время',
        org: 'ООО «Исида-Информатика» · Минск, Беларусь',
        stack: 'JS · ExtJS · React/Next.js · Java',
        current: true,
        summary:
          'Руковожу разработкой и оптимизацией ключевых модулей СЭД для банковского сектора — масштабируемость, безопасность и высокая производительность.',
        bullets: [
          'Реализовал модули «Сессия сканирования» и «Расширенный поиск» для пользователей банковского сектора.',
          'Провёл рефакторинг легаси-фронтенда до современного ES6+ и модульной архитектуры; внедрил React, Next.js, TypeScript и переиспользуемые UI-паттерны.',
          'Выстроил паттерны управления состоянием (Redux Toolkit, RTK Query, Context API) и инструментарий качества кода (ESLint, Prettier).',
        ],
        chips: [
          'TypeScript',
          'Next.js',
          'Apollo / GraphQL',
          'RTK Query',
          'Styled Components',
          'Tailwind',
          'Vite',
          'Vitest',
          'Playwright',
          'Cypress',
        ],
      },
      {
        title: 'Junior Web Developer',
        when: 'Апр 2022 — Апр 2024',
        org: 'ООО «Исида-Информатика» · Минск, Беларусь',
        stack: 'JS · ExtJS · Vue.js · Java',
        summary:
          'Разрабатывал полностековые функции для крупномасштабной системы электронного документооборота в банковской сфере.',
        bullets: [
          'Разрабатывал и поддерживал бэкенд-функциональность на Java — документооборот и интеграции.',
          'Проводил код-ревью и исправлял производственные баги на фронтенде и бэкенде.',
        ],
        chips: ['ExtJS', 'Vue.js', 'Vuetify', 'Java', 'REST', 'SQL', 'SVN', 'Webpack', 'Vitest'],
      },
    ],
  },
  projects: {
    heading: 'Три модуля, которыми горжусь.',
    items: [
      {
        title: 'Сессия сканирования',
        when: 'Янв 2025 — Мар 2025',
        role: 'Middle Web Developer',
        lead: 'Модуль сканирования документов в стиле Chrome с масштабированием, вращением, подгонкой по высоте/ширине и удалением страниц. Синхронизированная прокрутка и выделение между боковой панелью и основным просмотрщиком через Intersection Observer; интеграция с Chrome-расширением и десктопным приложением для редактирования в реальном времени.',
        did: [
          'Спроектировал полный рабочий процесс сканирования с персистентным состоянием через React Hooks и Context API.',
          'Реализовал расширенные манипуляции (масштаб, поворот, удаление, подгонка) с оптимизированными ре-рендерами через `React.memo` и `useCallback`.',
          'Модульный UI с React Bootstrap, Tailwind, Styled Components.',
          'RTK Query для кеширования и синхронизации с бэкендом в реальном времени.',
          'Рефакторинг ключевой логики на TypeScript; настройка Vite, ESLint, Prettier.',
          'Проектировал REST-эндпоинты совместно с бэкенд-командой; определял модели данных Java EE.',
        ],
        stack: ['React', 'TypeScript', 'RTK Query', 'Tailwind', 'Styled Components', 'Axios', 'Vite', 'Java EE'],
      },
      {
        title: 'Расширенный поиск — СЭД',
        when: 'Мар 2024 — Май 2024',
        role: 'Middle Web Developer',
        lead: 'Комплексный поиск внутри СЭД, позволяющий строить полностью настраиваемые запросы по гибким критериям. Каждое поле генерируется динамически на основе класса документа, роли пользователя, прав доступа и контекста формы (выдача резолюций, рассылка, архивирование и т.д.). Пользователи строят SQL-подобные запросы с операторами _содержит / начинается с / не включает / и / или / исключая_, сохраняют и загружают шаблоны, объединяют результаты и просматривают историю поиска.',
        did: [
          'Рефакторинг и оптимизация существующего поискового движка для повышения скорости, масштабируемости и поддерживаемости.',
          'Динамическая генерация полей на основе класса документа, роли и прав доступа.',
          'Конструктор запросов с логическими операторами и сложными комбинациями.',
          'UX для сохранения/загрузки шаблонов и объединения результатов.',
          'Навигация по истории поиска для повторного обращения к прошлым запросам.',
          'Межмодульный обмен данными через REST API.',
        ],
        stack: ['JavaScript', 'ExtJS', 'REST API', 'SQL', 'Java EE'],
      },
      {
        title: 'Модуль связывания документов',
        when: 'Апр 2023 — Май 2023',
        role: 'Junior Web Developer',
        lead: 'Динамический модуль связывания с контролем доступа, контекстно-зависимым UI и управлением связями — интеграция буфера обмена для быстрого копирования, проверка прав для безопасных операций, инструменты для перемещения и удаления связей.',
        did: [
          'Интеграция буфера обмена для копирования ссылок на документы с описаниями и кнопками быстрого доступа.',
          'Валидация прав перед операциями копирования, вставки и рендеринга.',
          'Контекстно-зависимый UI, адаптирующийся к типу сессии — регистрация, основная, создание.',
          'Перемещение и удаление связей внутри сессий для лучшей организации.',
        ],
        stack: ['JavaScript', 'Vue.js', 'Java', 'REST API'],
      },
    ],
  },
  education: [
    {
      name: 'Белорусский национальный технический университет',
      when: '2005 — 2011',
      degree: 'Менеджер-экономист',
    },
  ],
  languages: [
    { name: 'Английский', level: 'B2 · Upper-Intermediate', pct: 75 },
    { name: 'Русский', level: 'Родной', pct: 100 },
  ],
  contact: {
    heading: 'Давайте создадим что-то вместе.',
    subtitle: 'Быстрее всего можно связаться по email или Telegram. Обычно отвечаю в течение дня.',
  },
  ui: {
    nav: {
      downloadCV: 'Скачать резюме',
      navAbout: 'О себе',
      navSkills: 'Навыки',
      navExperience: 'Опыт',
      navProjects: 'Проекты',
      navContact: 'Контакты',
    },
    hero: {
      ctaWork: 'Смотреть проекты',
      ctaContact: 'Написать мне',
    },
    kickers: {
      kickerAbout: '01 — О себе',
      kickerSkills: '02 — Навыки',
      kickerExperience: '03 — Опыт',
      kickerProjects: '04 — Проекты',
      kickerEducation: '05 — Образование',
      kickerLanguages: '06 — Языки',
      kickerContact: '07 — Контакты',
    },
    sections: {
      educationTitle: 'Образование.',
      languagesTitle: 'Языки.',
    },
    contactCTA: {
      emailBtn: 'Написать на email',
      downloadBtn: 'Скачать резюме (PDF)',
    },
    resume: {
      toolbarHint:
        'Предпросмотр резюме · A4 · Выберите **«Сохранить как PDF»**, затем отключите **«Колонтитулы»** в настройках',
      backBtn: 'Вернуться на сайт',
      printBtn: 'Печать / Сохранить PDF',
      printBtnShort: 'Сохранить PDF',
    },
    footer: {
      footerCredit: 'Сделано с душой · Обновлено апрель 2026',
    },
  },
};

export default contentRu;
