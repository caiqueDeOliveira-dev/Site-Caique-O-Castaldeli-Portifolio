import {
  Github, Linkedin, Instagram, Mail,
  FileCode2, Palette, Braces, Code2, Atom, Layers, Server,
  Wind, GitBranch, Zap, Figma, Bot,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/jornada", label: "Jornada" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/contato", label: "Contato" },
  { href: "/projeto-revolucao", label: "Histórias Apagadas" },
  { href: "/nego-caos", label: "Nego CaOS" },
];

export const NAV_LINKS_FULL = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Mim" },
  { href: "/projetos", label: "Projetos" },
  { href: "/jornada", label: "Minha Jornada" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/contato", label: "Contato" },
  { href: "/projeto-revolucao", label: "Histórias Apagadas" },
  { href: "/nego-caos", label: "Nego CaOS" },
];

export const TECH_LIST = [
  { icon: FileCode2, name: "HTML", desc: "Estrutura semântica" },
  { icon: Palette, name: "CSS", desc: "Estilização avançada" },
  { icon: Braces, name: "JavaScript", desc: "Linguagem dinâmica" },
  { icon: Code2, name: "TypeScript", desc: "Tipagem robusta" },
  { icon: Atom, name: "React", desc: "UI declarativa" },
  { icon: Layers, name: "Next.js", desc: "Framework full-stack" },
  { icon: Server, name: "Node.js", desc: "Runtime server-side" },
  { icon: Wind, name: "Tailwind CSS", desc: "Styling utilitário" },
  { icon: GitBranch, name: "Git", desc: "Controle de versão" },
  { icon: Github, name: "GitHub", desc: "Colaboração" },
  { icon: Zap, name: "Framer Motion", desc: "Animações fluidas" },
  { icon: Figma, name: "Figma", desc: "Design de interfaces" },
  { icon: Bot, name: "Inteligência Artificial", desc: "Produtividade com IA" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Pessoal",
    desc: "Site pessoal com design premium, animações cinematográficas e identidade visual única em preto e vermelho.",
    tags: ["React", "TypeScript", "Tailwind", "Motion"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev",
    demo: "https://github.com/caiqueDeOliveira-dev",
  },
  {
    id: 2,
    title: "Dashboard com IA",
    desc: "Painel analítico integrado com OpenAI para insights automáticos e visualizações interativas de dados.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Recharts"],
    category: "ia",
    github: "https://github.com/caiqueDeOliveira-dev",
    demo: "https://github.com/caiqueDeOliveira-dev",
  },
  {
    id: 3,
    title: "E-commerce Moderno",
    desc: "Plataforma de vendas completa com autenticação, carrinho, checkout e painel administrativo.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev",
    demo: "https://github.com/caiqueDeOliveira-dev",
  },
  {
    id: 4,
    title: "Chatbot Inteligente",
    desc: "Assistente virtual com processamento de linguagem natural, contexto de conversa e integração com APIs modernas.",
    tags: ["React", "OpenAI", "Node.js", "WebSocket"],
    category: "ia",
    github: "https://github.com/caiqueDeOliveira-dev",
    demo: "https://github.com/caiqueDeOliveira-dev",
  },
  {
    id: 5,
    title: "API REST Robusta",
    desc: "Backend escalável com autenticação JWT, rate limiting, documentação Swagger e testes automatizados.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev",
    demo: "https://github.com/caiqueDeOliveira-dev",
  },
  {
    id: 6,
    title: "Gerador com IA",
    desc: "Ferramenta que utiliza IA para gerar conteúdo personalizado, imagens e descrições para negócios.",
    tags: ["React", "OpenAI", "TypeScript", "Next.js"],
    category: "ia",
    github: "https://github.com/caiqueDeOliveira-dev",
    demo: "https://github.com/caiqueDeOliveira-dev",
  },
];

export const JOURNEY = [
  {
    year: "2022",
    title: "O Início da Jornada",
    desc: "Descobri o mundo da programação e me apaixonei pelo poder de criar através do código. Primeiros passos com HTML e CSS.",
    side: "left" as const,
  },
  {
    year: "2023",
    title: "Mergulhando no JavaScript",
    desc: "Aprofundei meus conhecimentos em JavaScript, construí meus primeiros projetos interativos e iniciei o aprendizado de React.",
    side: "right" as const,
  },
  {
    year: "2024",
    title: "Full Stack em Evolução",
    desc: "Expandindo para o backend com Node.js, bancos de dados e TypeScript. Projetos completos do zero ao deploy.",
    side: "left" as const,
  },
  {
    year: "2025",
    title: "Integrando Inteligência Artificial",
    desc: "Incorporei IA como aliada estratégica para ampliar produtividade e criar soluções inovadoras com APIs modernas.",
    side: "right" as const,
  },
  {
    year: "2026",
    title: "Pronto para o Mercado",
    desc: "Stack consolidada, portfólio robusto e foco total em conquistar minha primeira oportunidade como Desenvolvedor Full Stack.",
    side: "left" as const,
  },
];

export const STATS = [
  { label: "Projetos Concluídos", value: 12, suffix: "+" },
  { label: "Tecnologias Dominadas", value: 13, suffix: "" },
  { label: "Horas de Estudo", value: 2000, suffix: "+" },
  { label: "Commits no GitHub", value: 500, suffix: "+" },
] as const;

export const ABOUT_INFO = [
  { label: "Localização", value: "Brasil" },
  { label: "Status", value: "Disponível para Oportunidades" },
  { label: "Foco", value: "Full Stack & IA" },
  { label: "Experiência", value: "Em Transição" },
];

export const ABOUT_TIMELINE = [
  { year: "2022", title: "Descoberta da Programação", desc: "Iniciei minha jornada na tecnologia, apaixonado pelo poder de criar através do código." },
  { year: "2023", title: "HTML, CSS & JavaScript", desc: "Dominei os fundamentos do desenvolvimento web e construí meus primeiros projetos." },
  { year: "2024", title: "TypeScript & React", desc: "Aprofundei em TypeScript e React, desenvolvendo interfaces modernas e componentizadas." },
  { year: "2025", title: "Full Stack & IA", desc: "Expandi para backend com Node.js e integrei Inteligência Artificial como aliada estratégica." },
  { year: "2026", title: "Pronto para o Mercado", desc: "Stack consolidada e foco em conquistar minha primeira oportunidade como Desenvolvedor Full Stack." },
];

export const ABOUT_VALUES = [
  { title: "Aprendizado Contínuo", desc: "A tecnologia nunca para, e eu também não. Cada dia é uma oportunidade de evoluir." },
  { title: "Qualidade Acima de Tudo", desc: "Cada projeto recebe atenção total aos detalhes, do design à última linha de código." },
  { title: "IA como Aliada", desc: "Utilizo Inteligência Artificial para ampliar produtividade e criar soluções mais inovadoras." },
  { title: "Colaboração", desc: "Acredito que as melhores soluções nascem da troca de ideias e do trabalho em equipe." },
  { title: "Impacto Real", desc: "Tecnologia só faz sentido se resolve problemas reais e melhora a vida das pessoas." },
  { title: "Mentalidade de Crescimento", desc: "Desafios são oportunidades de aprender. Errar faz parte do processo de evolução." },
];

export const JOURNEY_STEPS = [
  { title: "Segurança Patrimonial", desc: "Minha trajetória começou na segurança patrimonial, desenvolvendo disciplina e visão estratégica.", icon: "Shield", side: "left" as const },
  { title: "Primeiros Estudos", desc: "Decidi migrar para tecnologia e comecei a estudar programação por conta própria.", icon: "BookOpen", side: "right" as const },
  { title: "HTML", desc: "Dominei a estruturação semântica de páginas web e boas práticas de acessibilidade.", icon: "FileCode2", side: "left" as const },
  { title: "CSS", desc: "Aprendi estilização avançada, animações, responsividade e frameworks como Tailwind.", icon: "Palette", side: "right" as const },
  { title: "JavaScript", desc: "Mergulhei na linguagem que trouxe vida às minhas aplicações.", icon: "Braces", side: "left" as const },
  { title: "TypeScript", desc: "Adicionei tipagem robusta aos meus projetos, garantindo mais segurança e escalabilidade.", icon: "Code2", side: "right" as const },
  { title: "React", desc: "Dominei o ecossistema React, criando interfaces modernas e componentizadas.", icon: "Atom", side: "left" as const },
  { title: "Projetos Reais", desc: "Construí aplicações completas do zero ao deploy, aplicando tudo que aprendi.", icon: "Zap", side: "right" as const },
  { title: "Desenvolvedor Full Stack", desc: "Integro front e back com eficiência, criando soluções completas e escaláveis.", icon: "Server", side: "left" as const },
  { title: "Especialização em IA", desc: "Utilizo Inteligência Artificial como aliada estratégica para ampliar minha produtividade.", icon: "Bot", side: "right" as const },
];

export const CURRICULO = {
  summary: "Desenvolvedor Full Stack em transição de carreira, com sólida base em React, TypeScript, Node.js e integração com Inteligência Artificial. Apaixonado por tecnologia, aprendizado contínuo e criação de soluções que impactam positivamente a vida das pessoas.",
  objective: "Conquistar minha primeira oportunidade como Desenvolvedor Full Stack, contribuindo com dedicação, criatividade e uma perspectiva única de quem entende que tecnologia é, acima de tudo, sobre pessoas.",
  experience: [
    { period: "2024 — 2026", title: "Desenvolvedor Full Stack (Autônomo)", desc: "Desenvolvimento de projetos pessoais completos, do front ao back, utilizando React, TypeScript, Node.js, Tailwind CSS e integração com IA. Criação de interfaces modernas, APIs REST e deploy de aplicações." },
    { period: "2020 — 2023", title: "Segurança Patrimonial", desc: "Experiência anterior que desenvolveu disciplina, responsabilidade, visão estratégica e capacidade de atuar sob pressão — habilidades valiosas transferidas para a tecnologia." },
  ],
  hardSkills: [
    "HTML5 & CSS3 (Tailwind, Sass)",
    "JavaScript (ES6+) & TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "APIs REST & GraphQL",
    "PostgreSQL & MongoDB",
    "Git & GitHub",
    "UI/UX Design (Figma)",
    "Inteligência Artificial & OpenAI",
  ],
  softSkills: [
    "Comunicação Clara",
    "Resolução de Problemas",
    "Aprendizado Rápido",
    "Trabalho em Equipe",
    "Autogestão",
    "Criatividade",
    "Resiliência",
    "Atenção aos Detalhes",
  ],
  courses: [
    { name: "Full Stack Web Development", provider: "FreeCodeCamp", year: "2024" },
    { name: "JavaScript Algorithms & Data Structures", provider: "FreeCodeCamp", year: "2024" },
    { name: "React - The Complete Guide", provider: "Udemy", year: "2025" },
    { name: "TypeScript: The Complete Developer's Guide", provider: "Udemy", year: "2025" },
    { name: "Node.js, Express & MongoDB", provider: "Udemy", year: "2025" },
    { name: "Inteligência Artificial para Desenvolvedores", provider: "Alura", year: "2025" },
  ],
};

export const TESTIMONIALS = [
  {
    name: "Ana Carolina Silva",
    role: "Product Manager — TechStart",
    text: "Caique demonstra um comprometimento impressionante. Entrega soluções de alta qualidade com atenção excepcional aos detalhes.",
    stars: 5,
  },
  {
    name: "Rafael Mendes",
    role: "CTO — Startup Inovação",
    text: "Em pouco tempo, Caique entregou um resultado que superou nossas expectativas. Profissionalismo, criatividade e excelente comunicação.",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    role: "Designer — Studio Creative",
    text: "A capacidade de Caique de transformar designs em código pixel-perfect, com animações suaves, é realmente notável.",
    stars: 5,
  },
];
