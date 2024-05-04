import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleAuth } from "../config/firebase";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      throw new Error(error);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="auth">
      <div>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In With google</button>
        <button onClick={logOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Auth;
