import React, { useState } from "react";
import support from "../../assets/5124556 1.png";
import accordion from "../../data/accordion";
import "../../styles/help-support.css"

const HelpSupport = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }
    setSelected(idx);
  };
  return (
    <div className="help-support-container">
      <section>
        <h3>Help & Support</h3>
        <div className="help-support-row1">
          <div>
            <img src={support} alt="support" />
          </div>
          <div>
            <h4>Hi, How can we help you?</h4>
            <p>
              Kindly, pick from the options below, or use the <br/> search tool above
              to seek any assistance
            </p>
            <table className="support-table">
              <tr>
              <td>Getting Started</td>
              <td>User Account</td>
              </tr> 
              <tr>
                <td>Loan Type</td>
                <td>Loan Agreement</td>
              </tr>
              <tr>
                <td>Interest</td>
                <td>Guarantor Details</td>
              </tr>
              <tr>
                <td>Special Loan Offer</td>
                <td>Coilateral</td>
              </tr>
            </table>
          </div>
          </div>
      </section>

      <section> 
        <div className="help-support-col">
        <h4>Frequently Asked Questions</h4>
      <div className="accordion-wrapper">
        <div className="accordion">
          {accordion.map((item, idx) => ( 
            <div key={idx} className="questions">
              <div className="questions-title" onClick={() => toggle(idx)}>
                <h2>{item.question}</h2>
                <span>{selected === idx ? "-" : "+"}</span>
              </div>
              <div
                className={
                  selected === idx
                    ? "question-content show"
                    : "question-content"
                }
              >
                {item.answer}
              </div>
            </div>
          ))};
        </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default HelpSupport;
