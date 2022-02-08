import propTypes from "prop-types";
import React from "react";

function Movie({ id, title, year, summary, poster }) {

    return <h4> { title } </h4>;
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
  };

export default Movie;