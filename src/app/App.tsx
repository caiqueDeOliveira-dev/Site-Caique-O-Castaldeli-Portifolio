import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { AIAssistant } from "./components/AIAssistant";
import { AuthProvider } from "./contexts/AuthContext";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const JourneyPage = lazy(() => import("./pages/JourneyPage"));
const Curriculo = lazy(() => import("./pages/Curriculo"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjetoRevolucao = lazy(() => import("./pages/ProjetoRevolucao"));
const NegoCaos = lazy(() => import("./pages/NegoCaos"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminStats = lazy(() => import("./pages/AdminStats"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Loading() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl" style={{ background: "#B3001B", boxShadow: "0 0 25px rgba(179,0,27,0.5)" }} />
        <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.8rem" }}>Carregando...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutMe />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/jornada" element={<JourneyPage />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/projeto-revolucao" element={<ProjetoRevolucao />} />
          <Route path="/nego-caos" element={<NegoCaos />} />
          <Route
            path="/admin"
            element={
              <AuthProvider>
                <AdminLogin />
              </AuthProvider>
            }
          />
          <Route
            path="/admin/stats"
            element={
              <AuthProvider>
                <AdminStats />
              </AuthProvider>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <AIAssistant />
    </HashRouter>
  );
}
