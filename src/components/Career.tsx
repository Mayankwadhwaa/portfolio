import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Innovation</h3>
                <h4>Data Security Council of India</h4>

              </div>
            </div>
            <p>
              Working across AI, quantum, and emerging technologies
              building systems, platforms, and simulations, while driving
              strategic initiatives to turn frontier research into
              real-world products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>AI Engineer</h3>
                <h4>Hommi</h4>

              </div>
            </div>
            <p>
              Developed AI systems — translating business requirements
              into machine learning workflows, building data preprocessing
              pipelines, and iterating on models to enable data-driven
              decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Automation & AI</h3>
                <h4>Deloitte</h4>

              </div>
            </div>
            <p>
              Led Asia-Pacific SAP ECC to S/4HANA data migration —
              building automation frameworks, validation systems, and
              rule-based checks to ensure data accuracy while reducing
              manual effort by 30–40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
