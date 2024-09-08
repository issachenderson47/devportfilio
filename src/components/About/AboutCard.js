import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey all! I'm <span className="purple">Issac Henderson</span>, a tech-obsessed Dallas native. 
            I'm always on the hunt for the latest tech and business developments. 
            When I'm not developing, you might find me at a NYC meetup or deep into the latest industry news.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Warzone
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending tech meetups
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay curious and keep Moving!"
          </p>
          <footer className="blockquote-footer">Issac Henderson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;