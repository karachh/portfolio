// Todo o texto do site, nas duas línguas. Para editar conteúdo, mexa só aqui.

export type Lang = 'pt' | 'en';

export const links = {
  github: 'https://github.com/karachh',
  linkedin: 'https://www.linkedin.com/in/cauakarach/',
  email: 'karachbr@gmail.com',
  cv: { pt: '/curriculo-caua-karach.pdf', en: '/resume-caua-karach.pdf' },
};

const pt = {
  meta: {
    title: 'Cauã Karach · Analista de Desenvolvimento de Sistemas',
    description:
      'Currículo online de Cauã Karach: Analista de Desenvolvimento de Sistemas, estudante de Engenharia de Software na UEM, estudando Engenharia de Dados e IA.',
  },
  loader: 'Carregando',
  nav: {
    open: 'Abrir menu',
    close: 'Fechar menu',
    social: 'Redes',
    menu: 'Menu',
    contact: 'Fale comigo',
    switchLang: 'English',
    switchHref: '/en/',
    items: [
      { id: 'inicio', label: 'Início' },
      { id: 'sobre', label: 'Sobre mim' },
      { id: 'experiencia', label: 'Experiência' },
      { id: 'stack', label: 'Habilidades' },
      { id: 'projetos', label: 'Projetos' },
      { id: 'contato', label: 'Contato' },
    ],
  },
  hero: {
    credit: 'Cauã Karach',
    summary: '6º semestre de Engenharia de Software, estudando IA e Engenharia de Dados.',
    role: 'Analista de Desenvolvimento de Sistemas',
    school: 'Engenharia de Software · UEM',
    marquee: ['Analista de Desenvolvimento de Sistemas', 'Engenharia de Software · UEM'],
    photoAlt: 'Foto de Cauã Karach, de terno claro, sorrindo',
    scroll: 'Role para ver mais',
  },
  about: {
    label: 'Sobre mim',
    title: 'Do suporte ao código, e agora rumo aos dados.',
    paragraphs: [
      'Sou Analista de Desenvolvimento de Sistemas na Tributech Gestão Pública, onde trabalho com Java (Spring Boot) e Angular, crio integradores e reviso o código do time. Antes, comecei como estagiário de atendimento na Publisoft, com testes manuais do sistema e suporte a clientes por acesso remoto.',
      'Entrei na Tributech como estagiário de suporte, e foi lá que os dados viraram o que mais gosto de fazer. Escrevo SQL avançado (JOINs, CTEs, subqueries) inclusive sobre dados georreferenciados no PostGIS, automatizo rotinas com Python e otimizo consultas lentas. Por isso estou estudando Engenharia de Dados e IA: quero construir pipelines confiáveis e levar modelos para o mundo real.',
    ],
    facts: [
      { k: 'Base', v: 'Maringá, PR' },
      { k: 'Agora', v: 'Tributech · integral' },
      { k: 'Estudando', v: 'Engenharia de Dados e IA' },
    ],
  },
  experience: {
    label: 'Experiência',
    title: 'Minha trajetória',
    current: 'atual',
    items: [
      {
        period: 'ago/2026 – atual',
        type: 'Integral',
        role: 'Analista de Desenvolvimento de Sistemas',
        company: 'Tributech Gestão Pública',
        points: [
          'Desenvolvimento em Java (Spring e Spring Boot) e Angular',
          'Criação de integradores entre sistemas',
          'Automação de rotinas com Python e SQL',
          'Testes e code review do time de desenvolvimento',
        ],
        current: true,
      },
      {
        period: 'abr/2026 – ago/2026',
        type: 'Meio período',
        role: 'Estagiário de Suporte',
        company: 'Tributech Gestão Pública',
        points: [
          'Consultas SQL com JOIN, CTE e subqueries, inclusive em dados georreferenciados (PostGIS)',
          'Automação de processos com Python e otimização de rotinas lentas',
          'Integrador em Python consumindo APIs',
        ],
      },
      {
        period: 'jul/2025 – mar/2026',
        type: 'Meio período',
        role: 'Estagiário de Atendimento ao Cliente',
        company: 'Publisoft',
        points: [
          'Testes manuais do sistema',
          'Atendimento e suporte por acesso remoto com ferramentas de help desk',
        ],
      },
    ],
  },
  education: {
    label: 'Formação',
    course: 'Engenharia de Software',
    school: 'UEM · Universidade Estadual de Maringá',
    status: 'Cursando o 6º semestre · noturno',
  },
  languages: {
    label: 'Idiomas',
    items: [
      { name: 'Português', level: 'Nativo', value: 100 },
      { name: 'Inglês', level: 'Intermediário/avançado', value: 75 },
    ],
  },
  certs: {
    label: 'Cursos e certificações',
    empty: 'Em breve. Esta seção está sendo preenchida.',
  },
  stack: {
    label: 'Minha stack',
    titleA: 'Stack',
    titleB: 'Técnica',
    backdrop: 'Habilidades',
    master: 'Domino',
    used: 'Já usei em projetos',
    groups: {
      lang: 'Linguagens',
      data: 'Dados',
      tools: 'Ferramentas',
      process: 'Segurança e processos',
      projects: 'Em projetos',
    },
  },
  projects: {
    label: 'Projetos',
    title: 'O que ando construindo',
    repo: 'Ver repositório',
    featured: 'Destaque',
    drag: 'Arraste para o lado ou use as setas',
    carousel: 'Galeria de projetos',
    prev: 'Projeto anterior',
    next: 'Próximo projeto',
    goTo: 'Ir para o projeto',
    items: [
      {
        name: 'FORMATECH',
        period: 'set/2026 – hoje',
        status: 'Em desenvolvimento · Sprint 2',
        description:
          'Sistema web que organiza as formações de um ministério jovem da RCC: ciclos, formadores, perseverantes, temas e cronograma. Projeto em equipe na UEM.',
        highlights: [
          'Monolito modular em camadas: view → serviço → repositório → domínio',
          'Padrões Repository, Strategy e Template Method',
          'Regra central: o sistema avisa, mas nunca bloqueia; a decisão é humana',
          'Time de 3; fiquei com as histórias de ciclos e cronograma',
        ],
        stats: [
          { n: '146', l: 'testes' },
          { n: '56', l: 'commits' },
          { n: '9', l: 'PRs revisados' },
        ],
        stack: ['Python', 'Django 5.2', 'PostgreSQL', 'Docker'],
        url: 'https://github.com/karachh/formatech',
        featured: true,
      },
      {
        name: 'Pipeline do Dólar (PTAX)',
        period: 'jul/2026',
        status: 'Concluído · v1',
        description:
          'Pipeline ETL que extrai a cotação diária do dólar da API do Banco Central, carrega em SQLite e agrega um resumo mensal em SQL, de forma idempotente.',
        highlights: [
          'Camadas raw → mart',
          'Janela móvel de 365 dias que corrige sozinha uma falha da véspera',
          'Checagem de qualidade pela contagem de dias úteis',
        ],
        stats: [],
        stack: ['Python', 'requests', 'SQLite', 'SQL'],
        url: 'https://github.com/karachh/pipeline-dolar',
      },
      {
        name: 'Estudos',
        period: 'out/2026',
        status: 'Em uso pessoal',
        description:
          'PWA offline que reúne meus estudos em módulos, com progresso por etapa e um visual temático para cada área, incluindo o roadmap de Engenharia de Dados e IA.',
        highlights: ['Local-first com IndexedDB', 'Um modelo de dados único para todos os módulos'],
        stats: [],
        stack: ['React 19', 'TypeScript', 'Tailwind', 'Dexie'],
        url: 'https://github.com/karachh/estudos-app',
      },
    ],
  },
  contact: {
    label: 'Contato',
    title: 'Vamos conversar?',
    text: 'Estou aberto a conversas sobre desenvolvimento, dados e oportunidades. O jeito mais rápido é por e-mail.',
    cv: 'Baixar currículo (PDF)',
    copy: 'Copiar e-mail',
    copied: 'Copiado!',
  },
  footer: 'Feito com Astro e Tailwind.',
};

type Dict = typeof pt;

const en: Dict = {
  meta: {
    title: 'Cauã Karach · Systems Development Analyst',
    description:
      'Online resume of Cauã Karach: Systems Development Analyst, Software Engineering student at UEM, studying Data Engineering and AI.',
  },
  loader: 'Loading',
  nav: {
    open: 'Open menu',
    close: 'Close menu',
    social: 'Social',
    menu: 'Menu',
    contact: 'Get in touch',
    switchLang: 'Português',
    switchHref: '/',
    items: [
      { id: 'inicio', label: 'Home' },
      { id: 'sobre', label: 'About me' },
      { id: 'experiencia', label: 'Experience' },
      { id: 'stack', label: 'Skills' },
      { id: 'projetos', label: 'Projects' },
      { id: 'contato', label: 'Contact' },
    ],
  },
  hero: {
    credit: 'Cauã Karach',
    summary: '6th semester of Software Engineering, studying AI and Data Engineering.',
    role: 'Systems Development Analyst',
    school: 'Software Engineering · UEM',
    marquee: ['Systems Development Analyst', 'Software Engineering · UEM'],
    photoAlt: 'Photo of Cauã Karach in a light suit, smiling',
    scroll: 'Scroll for more',
  },
  about: {
    label: 'About me',
    title: 'From support to code, and now heading into data.',
    paragraphs: [
      'I am a Systems Development Analyst at Tributech Gestão Pública, where I work with Java (Spring Boot) and Angular, build integrations and review my team’s code. Before that, I started as a customer service intern at Publisoft, doing manual testing and remote customer support.',
      'I joined Tributech as a support intern, and that is where data became what I enjoy most. I write advanced SQL (JOINs, CTEs, subqueries), including over geospatial data in PostGIS, automate routines with Python and speed up slow queries. That is why I am studying Data Engineering and AI: I want to build reliable pipelines and bring models into the real world.',
    ],
    facts: [
      { k: 'Based in', v: 'Maringá, Brazil' },
      { k: 'Now', v: 'Tributech · full-time' },
      { k: 'Studying', v: 'Data Engineering & AI' },
    ],
  },
  experience: {
    label: 'Experience',
    title: 'My career so far',
    current: 'now',
    items: [
      {
        period: 'Aug 2026 – now',
        type: 'Full-time',
        role: 'Systems Development Analyst',
        company: 'Tributech Gestão Pública',
        points: [
          'Development with Java (Spring and Spring Boot) and Angular',
          'Building integrations between systems',
          'Automating routines with Python and SQL',
          'Testing and code review for the dev team',
        ],
        current: true,
      },
      {
        period: 'Apr 2026 – Aug 2026',
        type: 'Part-time',
        role: 'Support Intern',
        company: 'Tributech Gestão Pública',
        points: [
          'SQL queries with JOINs, CTEs and subqueries, including geospatial data (PostGIS)',
          'Process automation with Python and tuning of slow routines',
          'A Python integration service consuming APIs',
        ],
      },
      {
        period: 'Jul 2025 – Mar 2026',
        type: 'Part-time',
        role: 'Customer Service Intern',
        company: 'Publisoft',
        points: ['Manual testing of the system', 'Customer service and remote support with help desk tools'],
      },
    ],
  },
  education: {
    label: 'Education',
    course: 'Software Engineering',
    school: 'UEM · State University of Maringá',
    status: '6th semester · evening program',
  },
  languages: {
    label: 'Languages',
    items: [
      { name: 'Portuguese', level: 'Native', value: 100 },
      { name: 'English', level: 'Upper-intermediate', value: 75 },
    ],
  },
  certs: {
    label: 'Courses & certifications',
    empty: 'Coming soon. This section is being filled in.',
  },
  stack: {
    label: 'My stack',
    titleA: 'Tech',
    titleB: 'Stack',
    backdrop: 'Expertise',
    master: 'Proficient',
    used: 'Used in projects',
    groups: {
      lang: 'Languages',
      data: 'Data',
      tools: 'Tools',
      process: 'Security & process',
      projects: 'In projects',
    },
  },
  projects: {
    label: 'Projects',
    title: 'What I’ve been building',
    repo: 'View repository',
    featured: 'Featured',
    drag: 'Drag sideways or use the arrows',
    carousel: 'Project gallery',
    prev: 'Previous project',
    next: 'Next project',
    goTo: 'Go to project',
    items: [
      {
        name: 'FORMATECH',
        period: 'Sep 2026 – now',
        status: 'In progress · Sprint 2',
        description:
          'Web system that organizes the training program of a Catholic youth ministry: cycles, trainers, members, topics and schedule. Team project at UEM.',
        highlights: [
          'Layered modular monolith: view → service → repository → domain',
          'Repository, Strategy and Template Method patterns',
          'Core rule: the system warns but never blocks; people decide',
          'Team of 3; I owned the cycles and schedule stories',
        ],
        stats: [
          { n: '146', l: 'tests' },
          { n: '56', l: 'commits' },
          { n: '9', l: 'reviewed PRs' },
        ],
        stack: ['Python', 'Django 5.2', 'PostgreSQL', 'Docker'],
        url: 'https://github.com/karachh/formatech',
        featured: true,
      },
      {
        name: 'Dollar Pipeline (PTAX)',
        period: 'Jul 2026',
        status: 'Done · v1',
        description:
          'ETL pipeline that pulls the daily USD rate from the Brazilian Central Bank API, loads it into SQLite and builds a monthly summary in SQL, idempotently.',
        highlights: [
          'raw → mart layers',
          'Rolling 365-day window that self-heals a failed previous run',
          'Quality check by counting business days',
        ],
        stats: [],
        stack: ['Python', 'requests', 'SQLite', 'SQL'],
        url: 'https://github.com/karachh/pipeline-dolar',
      },
      {
        name: 'Estudos',
        period: 'Oct 2026',
        status: 'In personal use',
        description:
          'Offline PWA that gathers all my studies into modules, with step-by-step progress and a themed look for each area, including my Data Engineering & AI roadmap.',
        highlights: ['Local-first with IndexedDB', 'One data model for every module'],
        stats: [],
        stack: ['React 19', 'TypeScript', 'Tailwind', 'Dexie'],
        url: 'https://github.com/karachh/estudos-app',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Let’s talk?',
    text: 'I’m open to conversations about development, data and opportunities. Email is the fastest way to reach me.',
    cv: 'Download resume (PDF)',
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: 'Built with Astro and Tailwind.',
};

export const content: Record<Lang, Dict> = { pt, en };
