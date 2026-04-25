import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./styles/Popup.css";

export default function FinalPopup() {
  const [show, setShow] = useState(false);
  const [yes, setYes] = useState(false);

  return (
    <div style={{textAlign:"center"}}>
      <button onClick={() => setShow(true)}>🎁 Final Surprise</button>

      {show && (
        <div className="popup">
          {!yes ? (
            <>
              <h2>Will you always be mine? ❤️</h2>
              <button onClick={() => {
                setYes(true);
                confetti();
              }}>Yes 💖</button>

              <button
                onMouseEnter={(e) => {
                  e.target.style.position = "absolute";
                  e.target.style.left = Math.random()*200+"px";
                  e.target.style.top = Math.random()*200+"px";
                }}
              >
                No 😢
              </button>
            </>
          ) : (
            <h2> Teri Maa Ki Chut Bhosdi Ki Chhinar 😜</h2>
          )}
        </div>
      )}
    </div>
  );
}