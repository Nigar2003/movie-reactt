import React, { useState } from "react";
import "./main.css";
export default function Search({ setInput }) {
  const [film, setFilm] = useState("");
  return (
    <div className="col-12 col-lg-5 ">
      <form className=" d-flex align-items-end w-100">
        <label>
          <input
            type="text"
            name="name"
            placeholder="Search a Film"
            onChange={(e) => setFilm(e.target.value.trim())}
          />
        </label>
        <button
          disabled={!film}
          type="submit"
          className="search_btn"
          onClick={(e) => {
            setInput(film);
            e.preventDefault();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
