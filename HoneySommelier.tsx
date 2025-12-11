import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

const HoneySommelier: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '您好！我是泉發蜂蜜的 AI 蜜蜂管家。您可以問我關於：\n\n1. 蜂蜜檸檬水怎麼泡最好喝？\n2. 蜂王乳有什麼功效？\n3. 你們有賣保養品嗎？\n4. 門市在哪裡？',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || !process.env.API_KEY) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            {
                role: 'user',
                parts: [{ text: inputText }]
            }
        ],
        config: {
            systemInstruction: `You are the specialized AI Honey Sommelier for Chuan Fa Honey (泉發蜂蜜), a Taiwanese honey brand established in 1919.
            
            Key Brand Info:
            - Established: 1919 (Century-old brand).
            - USP: Own factory, self-produced, self-sold (自產自製自銷).
            - Location: 218 Minzu West Road, Datong District, Taipei City.
            
            Your knowledge base:
            - Food Products: Longan Honey (龍眼蜜), Lychee Honey (荔枝蜜), Royal Jelly (蜂王乳), Bee Pollen (花粉), Honey Vinegar (蜂蜜醋).
            - Skincare/Cosmetics (Unique selling point): Face care (toner, serum), Body care (lotion, shower oil), Essential oils (tea tree, rose).
            
            Guidelines:
            - Tone: Warm, professional, polite, "Auntie-like" but classy.
            - Language: Traditional Chinese (繁體中文).
            - If asked about health benefits: Explain TCM benefits but always add a disclaimer that honey is food, not medicine.
            - Restrictions: Remind that infants under 1 year cannot eat honey.
            
            If asked about competitors, politely steer back to Chuan Fa's 100-year heritage and self-owned factory assurance.
            `
        }
      });

      const aiText = response.text || "抱歉，我現在有點忙碌，請稍後再試。";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "系統連線異常，請檢查您的網路或 API Key 設定。",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-honey-50 min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-nature-900 flex items-center justify-center gap-3">
          <Sparkles className="text-honey-500" />
          AI 蜜蜂管家
        </h2>
        <p className="mt-2 text-gray-600">運用 Gemini 技術，解答您對蜂蜜與保養品的所有疑問。</p>
        {!process.env.API_KEY && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded text-sm">
                注意：未偵測到 API Key。此功能在預覽模式下可能無法回應，請確保環境變數已設定。
            </div>
        )}
      </div>

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[600px] border border-gray-100">
        {/* Chat Window - Removed external background image for stability */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-white to-honey-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
                msg.role === 'user' ? 'bg-nature-900 text-white' : 'bg-honey-500 text-white'
              }`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={22} />}
              </div>
              
              <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 shadow-md text-sm sm:text-base leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user' 
                  ? 'bg-nature-900 text-white rounded-tr-none' 
                  : 'bg-white border border-honey-100 text-gray-800 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-honey-500 text-white flex items-center justify-center shadow-sm">
                    <Bot size={22} />
                </div>
                <div className="bg-white border border-honey-100 rounded-2xl rounded-tl-none px-5 py-4 shadow-md flex items-center gap-2">
                    <span className="text-sm text-gray-500">管家思考中</span>
                    <Loader2 className="w-4 h-4 animate-spin text-honey-500" />
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 max-w-4xl mx-auto relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="我想找適合乾性肌膚的保養品..."
              className="flex-1 border border-gray-200 rounded-full py-3.5 px-6 focus:outline-none focus:ring-2 focus:ring-honey-400 focus:border-transparent bg-gray-50 hover:bg-white transition-all shadow-inner"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputText.trim()}
              className="absolute right-2 p-2.5 bg-honey-500 text-white rounded-full hover:bg-honey-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">
            AI 蜜蜂管家可能會有幻覺，產品資訊以官網為主。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoneySommelier;