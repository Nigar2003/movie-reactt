import React from "react";
import "./main.css";
import SelectedFilm from "./selectedFilm";
export default function SelectedMove({
  openBar,
  selectedMovie,
  setSelectedMovie,
  setId,
  id,
}) {
  return (
    <>
      <div className="col-12  d-none col-lg-5  d-lg-block">
        <SelectedFilm
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          setId={setId}
          id={id}
        />
      </div>

      {openBar && (
        <div
          className=" chosseFilm_mobile col-12  d-block col-lg-5  d-lg-none w-100"
          style={{ zIndex: "5" }}
        >
          <SelectedFilm
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            setId={setId}
            id={id}
          />
        </div>
      )}
    </>
  );
}
