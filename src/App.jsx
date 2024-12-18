import { useState, useEffect, useRef } from "react";
import { CiPill } from "react-icons/ci";
import { RiTelegram2Fill } from "react-icons/ri";
import { TbPrompt } from "react-icons/tb";
import { CiClock1 } from "react-icons/ci";
import { FaRegWindowMinimize } from "react-icons/fa";
import { GiKingJuMask } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { IoMdImage } from "react-icons/io";
import "./App.css";
let nextZIndex = 1;

function App() {
  const [tokenName, setTokenName] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [tokenCA, setTokenCA] = useState("");
  const [pumpLink, setPumpLink] = useState("");
  const [position, setPosition] = useState({ x: 950, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const [zIndex, setZIndex] = useState(nextZIndex++); // Define um z-index inicial único
  const [windows, setWindows] = useState([
    {
      id: 1,
      title: "C:/WINDOWS/system32/cmd.exe",
      component: true,
      minimized: false,
      icon: "console",
    },
  ]);
  const removeAsterisks = (text) => text.replace(/\*\*/g, '');
  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const detectedLanguage = "en-US";
      console.log(`Idioma detectado: ${detectedLanguage}`);

      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, language: detectedLanguage }),
      });

      const data = await response.json();

      if (response.ok) {
        const formattedResponse = removeAsterisks(data.response);
        const assistantMessage = {
          role: "assistant",
          content: formattedResponse,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage = {
          role: "assistant",
          content: data.error || "Erro ao obter resposta da IA.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error.message);
      const errorMessage = {
        role: "assistant",
        content: "Erro ao conectar ao servidor. Tente novamente.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setPrompt("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    // e.preventDefault(); // Remova ou comente esta linha
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    setZIndex(nextZIndex++);
  };
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://apitoreturnca.onrender.com/api/purchaseData", {
      headers: {
        "x-access-key":
          "A1qQaAA9kdfnn4Mmn44bpoieIYHKkdghFKUD1978563llakLLLKdfslphgarcorc3haeogmmMNn243wf",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTokenName(data.tokenName);
        setTelegramLink(data.telegramLink);
        setTwitterLink(data.twitterLink);
        setTokenCA(data.tokenCA);
        setPumpLink(data.link);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <div className="initial-snow">
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
        <div className="snow">&#10052;</div>
      </div>
      <div className="icons">
        <a href={twitterLink} className="icon">
          <img src="/x-letter.svg" alt="" />X
        </a>
        <a href={pumpLink} className="icon">
          <CiPill />
          pump.fun
        </a>
        <a href={telegramLink} className="icon">
          <RiTelegram2Fill />
          telegram
        </a>
        <a href="https://telegram.com" className="icon">
          <TbPrompt />
          chatbox ai
        </a>
      </div>

      <div
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          zIndex: zIndex, // Controla o empilhamento
        }}
        onMouseDown={handleMouseDown}
      >
        <div className={`window ${windows[0].minimized ? "hidden" : ""}`}>
          <div className="window-header">
            <div className="left">
              <TbPrompt />
              <h1>C:/WINDOWS/system32/cmd.exe</h1>
            </div>
            <div className="right">
              <button
                className="console-header-button minimize"
                onClick={() => onMinimize(1)}
              >
                <FaRegWindowMinimize />
              </button>
            </div>
          </div>

          <div className="window-content">
            <img src="/alquemistasa.png" alt="" />
            <div className="chat-container">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.role === "user" ? "user-message" : "assistant-message"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              <div ref={messagesEndRef} />{" "}
              {/* 🔥 Novo elemento invisível para garantir a rolagem */}
            </div>

            <div className="prompt-area">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Chat with Whitestone Alchemist..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
