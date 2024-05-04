import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = () => {};
  return (
    <div className="auth">
      <div>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email..."
          required
          value={email}
          onChange={(e) => e.target.value}
        />
        <input
          type="password"
          placeholder="Password..."
          required
          value={password}
          onChange={(e) => e.target.value}
        />
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
};

export default Auth;
