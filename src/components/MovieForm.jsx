import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState();
  const [isOscar, setIsOscar] = useState(false);
  const moviesCollectionRef = collection(db, "movie");
  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title,
        realeaseDate: releaseYear,
        recievedOscar: isOscar,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginBottom: "20px",
        }}>
        <h1>Create Movies</h1>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Year"
          required
          value={releaseYear}
          onChange={(e) => setReleaseYear(Number(e.target.value))}
        />
        <div>
          <input
            type="checkbox"
            checked={isOscar}
            onChange={(e) => setIsOscar(e.target.checked)}
          />
          <label htmlFor="oscar">Recieved an Oscar</label>
        </div>
        <button onClick={onSubmitMovie}>Submit</button>
      </div>
    </div>
  );
};

export default MovieForm;
