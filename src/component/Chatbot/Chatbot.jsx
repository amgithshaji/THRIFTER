import React, { useEffect, useRef, useState } from "react"
// import { chatbotResponses } from "../chatbotData"
import { chatbotResponses } from "./chatbotData"
import Magnet from '@/component/Magnet'





function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hey 👋 I’m your Thrift Assistant. Ask me anything!" }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userText = input.toLowerCase()

    const userMessage = { from: "user", text: input }
    let botReply =
      "Hmm 🤔 I didn’t get that. Try asking about cart, wishlist, returns, or thrifting."

    chatbotResponses.forEach(item => {
      if (item.keywords.some(word => userText.includes(word))) {
        botReply = item.reply
      }
    })

    setMessages(prev => [
      ...prev,
      userMessage,
      { from: "bot", text: botReply }
    ])

    setInput("")
  }

  const chatRef = useRef(null)

useEffect(() => {
  chatRef.current?.scrollTo({
    top: chatRef.current.scrollHeight,
    behavior: "smooth"
  })
}, [messages])


  return (
    <>




      <button onClick={() => setOpen(true)} className="fixed bottom-5 md:right-5 right-1 md:w-39 w-30 md:h-30 h-21    hover:scale-110 transition z-50 ">
    <img src="/chatbot.png" alt="chatbot" className="w-full h-full object-cover " />
  </button>

      {/* Floating chat button */}
 



      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white border border-black rounded-lg shadow-xl z-50">

          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <p className="text-sm font-semibold uppercase">Thrift Assistant</p>
            <button onClick={() => setOpen(false)} className="text-lg">×</button>
          </div>

          {/* Messages */}
          <div  ref={chatRef}  className="h-60 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <span
                  className={`px-3 py-2 rounded max-w-[80%] ${
                    msg.from === "bot"
                      ? "bg-gray-100 text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="px-4 text-sm font-semibold uppercase"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  )
}

export default Chatbot
