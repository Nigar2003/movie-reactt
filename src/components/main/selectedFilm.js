import axios from "axios";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SelectedFilm({
  selectedMovie,
  setSelectedMovie,
  setId,
  id,
}) {
  const [name, setName] = useState();
  const postMethod = () => {
    axios
      .post("https://acb-api.algoritmika.org/api/movies/list", {
        title: `${name}`,
        movies: [...selectedMovie].map((x) => x.imdbID),
      })
      .then(function (response) {
        setId(response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  return (
    <div className="selectedFilm">
      <input
        type="text"
        placeholder="Enter a list name"
        onChange={(e) => setName(e.target.value)}
      />
      {selectedMovie.map((x) => {
        return (
          <div className="py-2 px-2 bg-secondary  my-1 d-flex justify-content-between align-content-center text-white">
            <p className="m-0"> {x.Title}</p>
            <FaTrashAlt
              className="mt-1"
              onClick={() =>
                setSelectedMovie([
                  ...selectedMovie.filter((film) => film.imdbID !== x.imdbID),
                ])
              }
            />
          </div>
        );
      })}
      {selectedMovie.length > 0 && name && !id && (
        <button className="create_film_list_bnt" onClick={() => postMethod()}>
          Save the list
        </button>
      )}

      {id && <Link to={`/list/${id}`}>Go to lisst</Link>}
    </div>
  );
}
