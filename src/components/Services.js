import React, { Component } from "react";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaSwimmingPool,
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Drinks",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, tenetur?",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, tenetur?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, tenetur?",
      },
      {
        icon: <FaSwimmingPool />,
        title: "Swimming Pools",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, tenetur?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
