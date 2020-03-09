import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "nuka-carousel";
import { IoIosPerson } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, distance, breeder, pics } = data[i];

    return (
      <>
        <animated.div
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            )
          }}
        >
          <animated.div
            {...bind(i)}
            style={{ transform: interpolate([rot, scale], trans) }}
          >
            <div className="card">
              <Carousel>
                {pics.map((pic, index) => (
                  <img src={pic} key={index} alt="profilePicture" />
                ))}
              </Carousel>
              <div style={{ position: "relative", marginLeft: "5%" }}>
                <h1>
                  <b>{name}</b>
                </h1>
                <h5 style={{}}>
                  <IoIosPerson /> Breeder: {breeder}
                </h5>
                <h5>
                  <MdLocationOn /> {distance} Kilometer dari sini
                </h5>
              </div>
            </div>
          </animated.div>
        </animated.div>
      </>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
