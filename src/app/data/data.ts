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
    desc: "Site pessoal com design premium, animações cinematográficas e identidade visual única em preto e vermelho. Construído com React, TypeScript e Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind", "Motion"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev/Site-Caique-O-Castaldeli-Portifolio",
    demo: "https://site-caique-o-castaldeli-portifolio.vercel.app",
  },
  {
    id: 2,
    title: "Sistema de Login",
    desc: "Sistema de autenticação de usuários com validação de login, desenvolvido em Python para praticar lógica de programação e segurança.",
    tags: ["Python", "Autenticação", "Lógica"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev/sistema-login-python",
    demo: "",
  },
  {
    id: 3,
    title: "Sistema de Inventário para Clãs",
    desc: "Sistema de gerenciamento de inventário para clãs e membros, com organização centralizada de recursos e controle eficiente.",
    tags: ["Python", "Gestão", "CRUD"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev/Sistema-Inventario-Clas",
    demo: "",
  },
  {
    id: 4,
    title: "To-Do List com Tkinter",
    desc: "Aplicação desktop de gerenciamento de tarefas com interface gráfica Tkinter, persistência local e código estruturado em POO.",
    tags: ["Python", "Tkinter", "POO"],
    category: "web",
    github: "https://github.com/caiqueDeOliveira-dev/todo-list-tkinter",
    demo: "",
  },
];

export const JOURNEY = [
  {
    year: "2026 — Jan",
    title: "O Início da Jornada",
    desc: "Comecei a estudar programação e ingressei na faculdade de Ciências da Computação. Descobri um novo universo de possibilidades através do código.",
    side: "left" as const,
  },
  {
    year: "2026 — Fev",
    title: "Primeiros Projetos em Python",
    desc: "Desenvolvi meus primeiros projetos em Python: sistema de login, inventário para clãs e uma to-do list com interface gráfica. Cada linha de código era um passo adiante.",
    side: "right" as const,
  },
  {
    year: "2026 — Abr",
    title: "Frontend com React",
    desc: "Mergulhei no ecossistema React com TypeScript, aprendendo a criar interfaces modernas, componentizadas e responsivas.",
    side: "left" as const,
  },
  {
    year: "2026 — Jun",
    title: "Full Stack & Deploy",
    desc: "Expandi para backend com Node.js, Express e Prisma. Completei meu portfólio pessoal full stack e fiz o deploy na Vercel com banco PostgreSQL.",
    side: "right" as const,
  },
  {
    year: "2026 — Jul",
    title: "Pronto para o Mercado",
    desc: "Stack consolidada, portfólio no ar e foco total em conquistar minha primeira oportunidade como Desenvolvedor.",
    side: "left" as const,
  },
];

export const STATS = [
  { label: "Projetos Concluídos", value: 4, suffix: "" },
  { label: "Tecnologias Estudadas", value: 9, suffix: "" },
  { label: "Horas de Estudo", value: 1500, suffix: "+" },
  { label: "Commits no GitHub", value: 80, suffix: "+" },
] as const;

export const ABOUT_INFO = [
  { label: "Localização", value: "Brasil" },
  { label: "Status", value: "Disponível para Oportunidades" },
  { label: "Foco", value: "Desenvolvimento Full Stack" },
  { label: "Experiência", value: "Em Transição de Carreira" },
];

export const ABOUT_TIMELINE = [
  { year: "2026 — Jan", title: "Início na Programação", desc: "Comecei a estudar programação e ingressei na faculdade de Ciências da Computação. Primeiros passos com Python." },
  { year: "2026 — Fev", title: "Python & Lógica", desc: "Desenvolvi projetos em Python para praticar lógica de programação, estruturas de dados e orientação a objetos." },
  { year: "2026 — Abr", title: "Frontend com React", desc: "Aprendi React com TypeScript, Tailwind CSS e Framer Motion, criando interfaces modernas e responsivas." },
  { year: "2026 — Jun", title: "Backend & Banco de Dados", desc: "Expandi para Node.js, Express, Prisma e PostgreSQL. Projetos completos do front ao back com deploy na Vercel." },
  { year: "2026 — Jul", title: "Pronto para o Mercado", desc: "Stack consolidada, portfólio no ar e foco em conquistar minha primeira oportunidade como Desenvolvedor." },
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
  { title: "Início nos Estudos", desc: "Comecei a estudar programação em janeiro de 2026 e ingressei na faculdade de Ciências da Computação.", icon: "BookOpen", side: "left" as const },
  { title: "Python", desc: "Aprendi Python com foco em lógica de programação, estruturas de dados e orientação a objetos.", icon: "Braces", side: "right" as const },
  { title: "HTML & CSS", desc: "Dominei estruturação semântica, estilização com Tailwind CSS e design responsivo.", icon: "FileCode2", side: "left" as const },
  { title: "JavaScript & TypeScript", desc: "Aprendi JavaScript e TypeScript para desenvolvimento web moderno e tipado.", icon: "Code2", side: "right" as const },
  { title: "React", desc: "Mergulhei no ecossistema React, criando interfaces modernas e componentizadas.", icon: "Atom", side: "left" as const },
  { title: "Node.js & Banco", desc: "Expandi para backend com Node.js, Express, Prisma e PostgreSQL.", icon: "Server", side: "right" as const },
  { title: "Portfólio Full Stack", desc: "Construí este portfólio completo — do design ao deploy — integrando front e back.", icon: "Zap", side: "left" as const },
  { title: "Git & GitHub", desc: "Versionamento de código com Git e GitHub, mantendo projetos organizados.", icon: "GitBranch", side: "right" as const },
  { title: "Projeto Revolução", desc: "Iniciei o projeto 'Histórias Apagadas' para compartilhar conhecimento histórico.", icon: "Shield", side: "left" as const },
  { title: "Pronto para o Mercado", desc: "Em busca da minha primeira oportunidade como Desenvolvedor.", icon: "Bot", side: "right" as const },
];

export const CURRICULO = {
  summary: "Em transição para a área de tecnologia, curso Ciências da Computação e estudo programação desde o início de 2026. Já desenvolvi projetos reais com Python, React, TypeScript e Node.js. Trago comigo experiência em controle de acesso, atendimento ao público e organização documental — habilidades que reforçam minha disciplina e compromisso com qualidade.",
  objective: "Conquistar minha primeira oportunidade na área de desenvolvimento de software, contribuindo com dedicação, responsabilidade e vontade de aprender. Busco um ambiente onde eu possa crescer tecnicamente enquanto agrego valor com minha experiência em processos, atendimento e resolução de problemas.",
  experience: [
    { period: "2024 — Atual", title: "Controlador de Acesso — RPM", desc: "Controle de acesso de pessoas e veículos. Atendimento ao público. Cumprimento de procedimentos internos e organização de processos." },
    { period: "2011 — 2012", title: "Arquivista — Michelete", desc: "Organização documental, catalogação e controle de arquivos." },
  ],
  hardSkills: [
    "Python (lógica, POO, Tkinter)",
    "HTML5 & CSS3 (Tailwind CSS)",
    "JavaScript & TypeScript",
    "React",
    "Node.js & Express",
    "Prisma ORM & PostgreSQL",
    "Git & GitHub",
    "APIs REST",
    "Pacote Office & Organização Documental",
  ],
  softSkills: [
    "Disciplina e Responsabilidade",
    "Atendimento ao Público",
    "Aprendizado Rápido",
    "Organização",
    "Resolução de Problemas",
    "Trabalho em Equipe",
    "Comunicação Clara",
    "Proatividade",
  ],
  courses: [
    { name: "Ciências da Computação (Bacharelado)", provider: "Faculdade", year: "2026 — cursando" },
    { name: "Python para Iniciantes", provider: "Estudo autônomo", year: "2026" },
    { name: "React com TypeScript", provider: "Estudo autônomo", year: "2026" },
    { name: "Node.js, Express & PostgreSQL", provider: "Estudo autônomo", year: "2026" },
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
