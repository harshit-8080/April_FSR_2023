import React from "react";
import PropTypes from "prop-types";

function Movie({ element }) {
  return element;
}

Movie.prototype = {
  element: PropTypes.node,
};
export default Movie;
