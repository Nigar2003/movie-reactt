import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Links({ id, selectedMovie }) {
  console.log(id);
  console.log(selectedMovie);
  return (
    <div
      className="position-absolute h-100 w-100 bg-white top-0 "
      style={{ zIndex: "10" }}
    >
      <h1 className="text-center">My list</h1>

      <ul className="list-group">
        {selectedMovie.map((x) => {
          return (
            
            <li className="list-item">
              <a
                className="text-black"
                href={`https://www.imdb.com/title/${x.imdbID}`}
              >
                
                {x.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
