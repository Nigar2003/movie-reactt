import React, { useEffect, useState } from "react";
import AddMessage from "./addMessage";
import "./films.css";
function FilmList({ films, setSelectedMovie, selectedMovie }) {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setMessage(false);
    }, 3000);
  }, [message]);

  return (
    <div className="mt-5">
      <div className="row m-auto position-relative">
        {message && <AddMessage />}
        {films.map((film) => {
          return (
            <div className="col-12 col-lg-4 p-0 " key={film.imdbID}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={film.Poster}
                  className="card-img-top"
                  style={{ height: "20rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{film.Title}</h5>
                  <p className="card-text">
                    <div>Year:{film.Year}</div>
                    <div>Type:{film.Type}</div>
                  </p>

                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setMessage(true);
                      setSelectedMovie([
                        film,
                        ...selectedMovie.filter(
                          (x) => x.imdbID !== film.imdbID
                        ),
                      ]);
                    }}
                  >
                    Add to the list
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FilmList;
