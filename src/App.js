import { memo, useEffect, useMemo, useState } from "react";
import axios from "axios";
import FilmList from "./components/films/FilmList";
import Search from "./components/main/searching";
import SelectedMove from "./components/main/selectedMove";
import { Route, Routes } from "react-router-dom";
import Links from "./components/main/links";

function App() {
  const [input, setInput] = useState();
  const [films, setFilms] = useState([]);
  const [openBar, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${input}&apikey=683feb4`)
      .then(function (response) {
        setFilms(response.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="main">
            <div className="row justify-content-between">
              <Search setInput={setInput} />
              <SelectedMove
                openBar={openBar}
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
                setId={setId}
                id={id}
              />
            </div>
          </div>
        </div>
        {input && (
          <FilmList
            films={films}
            setSelectedMovie={setSelectedMovie}
            selectedMovie={selectedMovie}
          />
        )}
      </div>
      <Routes>
        <Route
          path={`/list/${id}`}
          element={<Links id={id} selectedMovie={selectedMovie} />}
        ></Route>
      </Routes>
    </>
  );
}

export default memo(App);
