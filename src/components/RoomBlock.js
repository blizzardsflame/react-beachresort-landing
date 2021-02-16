import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../img/room-1.jpeg";
import PropTypes from "prop-types";
const Roomblock = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
export default Roomblock;

Roomblock.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
