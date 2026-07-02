import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, Sparkles } from "lucide-react";

const suggestions = [
  "Quem é Caique?",
  "O que ele sabe fazer?",
  "Quais tecnologias ele domina?",
  "Como entrar em contato?",
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  function handleSend(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "Olá! Sou o assistente virtual do Caique. Em breve estarei integrado com IA para responder todas as suas perguntas sobre habilidades, projetos e experiências. Por enquanto, explore o portfólio ou entre em contato diretamente!",
      },
    ]);
    setInput("");
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed z-[9980] flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm shadow-lg"
        style={{ bottom: 32, right: 80, background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif", boxShadow: "0 0 25px rgba(179,0,27,0.4)" }}
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.05 }}
      >
        {open ? <X size={16} /> : <Sparkles size={16} />}
        {open ? "Fechar" : "Pergunte sobre o Caique"}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-[9980] flex flex-col overflow-hidden"
            style={{
              bottom: 88, right: 24,
              width: 380, maxWidth: "calc(100vw - 48px)",
              height: 520, maxHeight: "calc(100vh - 140px)",
              background: "#0D0D0D",
              border: "1px solid rgba(179,0,27,0.2)",
              borderRadius: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(179,0,27,0.12)" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(179,0,27,0.12)" }}>
                <Bot size={18} style={{ color: "#B3001B" }} />
              </div>
              <div>
                <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.85rem" }}>
                  Assistente Caique
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.7rem" }}>
                  Pergunte sobre o portfólio
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center pt-4">
                  <Bot size={32} style={{ color: "rgba(179,0,27,0.3)", margin: "0 auto 12px" }} />
                  <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.82rem", marginBottom: 16 }}>
                    Olá! Pergunte algo sobre o Caique ou clique em uma sugestão abaixo.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSend(s)}
                        className="px-3 py-1.5 rounded-lg text-xs transition-all duration-200"
                        style={{ background: "rgba(179,0,27,0.08)", color: "#F5F5F5", border: "1px solid rgba(179,0,27,0.2)", fontFamily: "Inter, sans-serif", cursor: "pointer" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#B3001B"; (e.currentTarget as HTMLElement).style.background = "rgba(179,0,27,0.15)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.2)"; (e.currentTarget as HTMLElement).style.background = "rgba(179,0,27,0.08)"; }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm"
                    style={{
                      background: msg.role === "user" ? "#B3001B" : "#141414",
                      color: msg.role === "user" ? "#F5F5F5" : "#D0D0D0",
                      fontFamily: "Inter, sans-serif",
                      border: msg.role === "assistant" ? "1px solid rgba(179,0,27,0.1)" : "none",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex-shrink-0 p-4" style={{ borderTop: "1px solid rgba(179,0,27,0.08)" }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSend(input); }}
                  placeholder="Digite sua pergunta..."
                  style={{
                    flex: 1,
                    background: "#050505",
                    border: "1px solid rgba(179,0,27,0.15)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    color: "#F5F5F5",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#B3001B"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(179,0,27,0.15)"; }}
                />
                <button
                  onClick={() => handleSend(input)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{ background: "#B3001B", color: "#F5F5F5" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(179,0,27,0.4)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
