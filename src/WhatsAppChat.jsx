// import React, { useEffect, useState } from "react";
// import "./styles/WhatsApp.css";

// const chatData = [
//   { text: "Hey Doremon ❤️", time: "10:00 PM" },
//   { text: "I wanted to tell you something...", time: "10:01 PM" },
//   { text: "You make my life beautiful 💖", time: "10:02 PM" },
//   { text: "Will you always be mine? ❤️", time: "10:03 PM" }
// ];

// export default function WhatsAppChat() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setMessages((prev) => [...prev, chatData[i]]);
//       i++;
//       if (i === chatData.length) clearInterval(interval);
//     }, 1500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="wa-container">
//       <div className="wa-header">
//         <h3>Doremon ❤️</h3>
//       </div>

//       <div className="wa-body">
//         {messages.map((msg, i) => (
//           <div key={i} className="wa-msg me">
//             {msg.text}
//             <div className="meta">{msg.time} ✔✔</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import "./styles/WhatsApp.css";

const chatData = [
  { text: "Hey Doremon ❤️", time: "10:00 PM" },
  { text: "I wanted to tell you something...", time: "10:01 PM" },
  { text: "You make my life beautiful 💖", time: "10:02 PM" },
  { text: "Will you always be mine? ❤️", time: "10:03 PM" }
];

export default function WhatsAppChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      // ✅ STOP before going out of bounds
      if (i >= chatData.length) {
        clearInterval(interval);
        return;
      }

      setMessages((prev) => [...prev, chatData[i]]);
      i++;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wa-container">
      <div className="wa-header">
        <h3>Doremon ❤️</h3>
      </div>

      <div className="wa-body">
        {messages.map((msg, i) => (
          <div key={i} className="wa-msg me">
            {msg?.text}
            <div className="meta">{msg?.time} ✔✔</div>
          </div>
        ))}
      </div>
    </div>
  );
}