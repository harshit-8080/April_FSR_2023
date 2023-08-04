import React from "react";
import PropTypes from "prop-types";

function User({ id, name, gender, salary, country, info }) {
  return (
    <div>
      <h1>
        {id} {name} {gender} {salary + 200} {country} {info}
      </h1>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gender: PropTypes.oneOf(["male", "female"]).isRequired,
};

export default User;
