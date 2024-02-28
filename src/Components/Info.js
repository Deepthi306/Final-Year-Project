import React from "react";
import InformationCard from "./InformationCard";
import { faLungs, faDisease } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We specialize in advanced healthcare technology, leveraging a
          sophisticated platform for the precise detection of lung and colon
          cancer. By seamlessly integrating image analysis algorithms, we
          provide accurate and efficient diagnosis for early detection and
          treatment planning. Our mission is to bring this innovative cancer
          detection solution, ensuring timely and personalized medical insights
          for better patient outcomes. Connect with our platform to facilitate
          the proactive management of your health through cancer detection using
          pathological images.
        </p>
      </div>

      <div className="info-cards-content">
        <a
          href="https://en.wikipedia.org/wiki/Lung_cancer"
          style={{ textDecoration: "none" }}
        >
          <InformationCard
            title="Lung Cancer"
            description="Advanced AI-driven analysis of pathological images for early detection and precise diagnosis of lung cancer, enhancing treatment planning and improving patient outcomes."
            icon={faLungs}
          />
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Colorectal_cancer"
          style={{ textDecoration: "none" }}
        >
          <InformationCard
            title="Colon Cancer"
            description="Utilizing advanced pathology image analysis and AI technology for early detection and precise diagnosis of colon cancer, enhancing treatment planning and improving patient outcomes."
            icon={faDisease}
          />
        </a>
      </div>
    </div>
  );
}

export default Info;
