<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <br/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=recharts&logoColor=white" alt="Recharts" />
</div>

<br/>

<div align="center">
  <h1>Caique Oliveira Castaldeli</h1>
  <h3>Desenvolvedor Full Stack & Integração com IA</h3>
  <br/>
  <p>
    <a href="https://github.com/caiqueDeOliveira-dev"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
    <a href="https://www.linkedin.com/in/caique-castaldeli/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
    <a href="mailto:caique.castaldeli@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
  </p>
</div>

<br/>

---

## Sobre o Projeto

Este é meu **site pessoal profissional** — um portfólio interativo que apresenta minha trajetória, projetos, habilidades e visão como desenvolvedor. O design foi criado no **Figma** e implementado com foco em experiência do usuário, animações cinematográficas e identidade visual marcante nos tons **preto e vermelho**.

### Preview

| Seção | Descrição |
|-------|-----------|
| Hero | Apresentação com animações de partículas |
| Sobre | Minha história, valores e timeline de aprendizado |
| Tecnologias | Stack completa com ícones e descrições |
| Projetos | Portfólio com filtros por categoria |
| Jornada | Linha do tempo interativa da minha evolução |
| Estatísticas | Números animados de projetos, horas de estudo e mais |
| Depoimentos | Feedback de pessoas com quem trabalhei |
| Contato | Formulário funcional com integração de email |
| Currículo | Página completa com experiência, skills e cursos |
| Área Admin | Dashboard administrativo com autenticação JWT |

---

## Layout & Design

- Tema escuro premium com paleta **preto (#050505)** e **vermelho (#B3001B)**
- Animações fluidas com **Framer Motion**
- Partículas interativas ao fundo via **Canvas API**
- Cursor customizado e indicador de progresso de scroll
- Design responsivo e componentizado com **shadcn/ui**
- Tipografia: **Sora** (títulos) e **Inter** (textos)

---

## Stack Tecnológica

### Frontend

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| React | 18.3.1 | Interface declarativa |
| TypeScript | 5.8.3 | Tipagem estática |
| Vite | 6.3.5 | Build e dev server |
| Tailwind CSS | 4.1.12 | Estilização utilitária |
| Framer Motion | 12.x | Animações e transições |
| shadcn/ui | — | Componentes Radix + estilizados |
| React Router | 7.x | Roteamento SPA |
| Recharts | 2.x | Gráficos e visualizações |
| MUI | 7.x | Componentes auxiliares |

### Backend

| Tecnologia | Finalidade |
|------------|------------|
| Node.js + Express | API REST |
| TypeScript | Tipagem no servidor |
| Prisma ORM | Modelagem e consultas |
| PostgreSQL | Banco de dados relacional |
| JWT | Autenticação |
| Zod | Validação de schemas |
| Winston | Logging |
| Resend | Serviço de email |
| Multer + Supabase | Upload de arquivos |

---

## Estrutura do Projeto

```
├── src/                      # Frontend (React + Vite)
│   ├── app/
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── config/           # Configurações e tipos
│   │   ├── contexts/         # Contextos React
│   │   ├── data/             # Dados estáticos
│   │   ├── hooks/            # Custom hooks
│   │   ├── layout/           # Layout (Navbar, Footer, etc.)
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── sections/         # Seções da Home
│   │   └── App.tsx           # Componente raiz
│   ├── assets/               # Imagens e recursos
│   └── styles/               # Estilos globais
├── server/                   # Backend (Express + Prisma)
│   └── src/
│       ├── controllers/      # Lógica das rotas
│       ├── middlewares/       # Autenticação, validação
│       ├── routes/           # Definição de rotas
│       ├── services/         # Serviços externos
│       ├── utils/            # Utilitários
│       └── validators/       # Schemas Zod
├── public/                   # Arquivos estáticos
└── dist/                     # Build de produção
```

---

## Funcionalidades

- [x] **Design responsivo** — Adaptável a qualquer dispositivo
- [x] **Animações cinematográficas** — Scroll trigger, fade-in, paralaxe
- [x] **Partículas interativas** — Fundo animado com Canvas
- [x] **Currículo interativo** — Página completa com timeline e skills
- [x] **Projetos "Histórias Apagadas"** — Página dedicada a figuras históricas
- [x] **Projeto Nego CaOS** — Conteúdo musical e cultural
- [x] **Assistente IA** — Chat interativo com IA integrada
- [x] **Dashboard admin** — Painel com autenticação e estatísticas
- [x] **Formulário de contato** — Envio de mensagens com email
- [x] **Galeria de imagens** — Upload e gerenciamento visual

---

## Como Rodar

### Pré-requisitos
- Node.js >= 18
- npm ou pnpm

### Frontend

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Backend

```bash
# Acessar diretório do servidor
cd server

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# Rodar migrações do banco
npx prisma migrate dev

# Iniciar servidor
npm run dev
```

### Build de produção

```bash
# Frontend
npm run build

# Backend
cd server && npm run build
```

---

## Contato

**Caique Oliveira Castaldeli**

- Email: [caique.castaldeli@gmail.com](mailto:caique.castaldeli@gmail.com)
- LinkedIn: [caique-castaldeli](https://www.linkedin.com/in/caique-castaldeli/)
- GitHub: [caiqueDeOliveira-dev](https://github.com/caiqueDeOliveira-dev)
- Site: *em breve*

---

<div align="center">
  <sub>Desenvolvido por Caique Oliveira Castaldeli</sub>
  <br/>
  <sub>© 2026 — Todos os direitos reservados</sub>
</div>
