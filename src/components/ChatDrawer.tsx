"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Trash2, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function ChatDrawer({ isOpen, onClose, onOpen }: ChatDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content:
        "Hello. I am Gayathri Gunda's AI assistant. Ask me anything about her reinforcement learning research, LLM systems, or technical background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleClear = () => {
    setMessages([
      {
        id: "initial",
        role: "assistant",
        content:
          "Conversation cleared. How else may I assist you regarding Gayathri's work?",
      },
    ]);
    setErrorMessage(null);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    if (query.length > 500) {
      setErrorMessage("Message exceeds 500 characters limit.");
      return;
    }

    setErrorMessage(null);
    setInput("");

    const userMsgId = `user-${Date.now()}`;
    const assistantMsgId = `assistant-${Date.now()}`;

    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, role: "user", content: query },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: newMessages.slice(-4),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || "The assistant is temporarily unavailable. Please try again shortly."
        );
      }

      if (!response.body) {
        throw new Error("No response body received from server.");
      }

      // Add placeholder assistant message
      setMessages((prev) => [
        ...prev,
        { id: assistantMsgId, role: "assistant", content: "" },
      ]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamedContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        streamedContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? { ...msg, content: streamedContent }
              : msg
          )
        );
      }
    } catch (err: any) {
      setErrorMessage(
        err.message || "Failed to reach AI assistant. You can email Gayathri directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Open AI Assistant"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-card bg-accent text-white border border-accent hover:bg-accent-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-editorialDark-bg shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-medium">Ask my AI</span>
        </button>
      )}

      {/* Slide-in Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Ask my AI dialog"
            className="fixed inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[380px] h-[85vh] sm:h-[580px] z-50 rounded-t-card sm:rounded-card border border-editorial-border dark:border-editorialDark-border bg-editorial-card dark:bg-editorialDark-card flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-14 px-4 border-b border-editorial-border dark:border-editorialDark-border flex items-center justify-between bg-editorial-bg dark:bg-editorialDark-bg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-editorial-text dark:text-editorialDark-text">
                  Ask Gayathri&apos;s AI
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  title="Clear chat"
                  aria-label="Clear chat history"
                  className="p-1.5 rounded-card border border-editorial-border dark:border-editorialDark-border text-editorial-muted dark:text-editorialDark-muted hover:text-editorial-text dark:hover:text-editorialDark-text hover:border-accent dark:hover:border-accent transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close chat"
                  className="p-1.5 rounded-card border border-editorial-border dark:border-editorialDark-border text-editorial-muted dark:text-editorialDark-muted hover:text-editorial-text dark:hover:text-editorialDark-text hover:border-accent dark:hover:border-accent transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Suggested Question Chips */}
            <div className="p-3 border-b border-editorial-border dark:border-editorialDark-border bg-editorial-bg dark:bg-editorialDark-bg overflow-x-auto">
              <div className="flex gap-1.5 min-w-max">
                {PORTFOLIO_DATA.suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="px-2.5 py-1 text-xs rounded-card border border-editorial-border dark:border-editorialDark-border bg-editorial-card dark:bg-editorialDark-card text-editorial-text dark:text-editorialDark-text hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent transition-colors disabled:opacity-50 text-left font-mono"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm bg-editorial-card dark:bg-editorialDark-card">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <span className="text-[11px] font-mono text-editorial-muted dark:text-editorialDark-muted mb-1 px-1">
                    {msg.role === "user" ? "You" : "Assistant"}
                  </span>
                  <div
                    className={`p-3 rounded-card text-sm leading-[1.65] max-w-[88%] border ${
                      msg.role === "user"
                        ? "bg-accent text-white border-accent"
                        : "bg-editorial-bg dark:bg-editorialDark-bg text-editorial-text dark:text-editorialDark-text border-editorial-border dark:border-editorialDark-border"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex flex-col items-start">
                  <span className="text-[11px] font-mono text-editorial-muted dark:text-editorialDark-muted mb-1 px-1">
                    Assistant
                  </span>
                  <div className="p-3 rounded-card bg-editorial-bg dark:bg-editorialDark-bg border border-editorial-border dark:border-editorialDark-border flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-3 rounded-card border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 text-xs text-red-600 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-editorial-border dark:border-editorialDark-border bg-editorial-bg dark:bg-editorialDark-bg"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={500}
                  placeholder="Ask a question about Gayathri's work..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 text-sm rounded-card border border-editorial-border dark:border-editorialDark-border bg-editorial-card dark:bg-editorialDark-card text-editorial-text dark:text-editorialDark-text placeholder:text-editorial-muted dark:placeholder:text-editorialDark-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="p-2 rounded-card bg-accent text-white hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-between items-center mt-2 px-1 text-[11px] font-mono text-editorial-muted dark:text-editorialDark-muted">
                <span>Max 500 characters</span>
                <span>{input.length}/500</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
