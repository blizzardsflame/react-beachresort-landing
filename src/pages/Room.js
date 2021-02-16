import React, { Component } from "react";
import defaultBcg from "../img/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
export default class Room extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = RoomContext;
  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Return To Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Return To Rooms
            </Link>
          </Banner>
        </StyledHero>
      </>
    );
  }
}
