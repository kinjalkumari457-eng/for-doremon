import React, { useState } from "react";
import PasswordScreen from "./PasswordScreen";
import SurpriseCard from "./SurpriseCard";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <SurpriseCard />
  ) : (
    <PasswordScreen onUnlock={() => setUnlocked(true)} />
  );
}

export default App;