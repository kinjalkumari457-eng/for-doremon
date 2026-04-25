import React, { useState } from "react";

export default function PasswordScreen({ onUnlock }) {
  const [input, setInput] = useState("");
  const correctPassword = "doremon"; // change if you want

  const handleSubmit = () => {
    if (input === correctPassword) {
      onUnlock();
    } else {
      alert("Wrong password 😢");
    }
  };

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>🔒 Enter Secret Code</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubmit}>Unlock 💖</button>
    </div>
  );
}