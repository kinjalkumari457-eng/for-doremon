import React, { useState } from "react";
import confetti from "canvas-confetti";
import WhatsAppChat from "./WhatsAppChat";
import FinalPopup from "./FinalPopup";
import "./styles/Card.css";

export default function SurpriseCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    confetti({ particleCount: 150, spread: 80 });
  };

  return (
    <div className="container">
      <div className={`card ${open ? "open" : ""}`}>
        
        {!open ? (
          <div className="front" onClick={handleOpen}>
            💌 Tap to Open
          </div>
        ) : (
          <div className="inside">
            <h2>Hey Doremon ❤️</h2>

            {/* WhatsApp Chat */}
            <WhatsAppChat />

            {/* Final Popup */}
            <FinalPopup />
          </div>
        )}

      </div>
    </div>
  );
}