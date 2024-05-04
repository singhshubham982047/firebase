import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import MovieForm from "./components/MovieForm.jsx";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

const App = () => {
  const [movies, setMovies] = useState([]);
  const moviesCollectionRef = collection(db, "movie");

  const getMoviesList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);

      const filterdData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMovies(filterdData);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <div>
      <Auth />
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}>
        {movies?.map((movie, index) => (
          <div key={index}>
            <h1>{movie.title.toUpperCase()}</h1>
            <p>Date: {movie.realeaseDate}</p>
            <p>Oscar: {movie.recievedOscar ? "Recieved" : "Not Recieved"}</p>
          </div>
        ))}
      </div>
      <hr />
      <MovieForm getMoviesList={getMoviesList()} />
    </div>
  );
};

export default App;
