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
            <img src={support} alt="" />
          </div>
          <div>
            <h4>Hi, How can we help you?</h4>
            <p>
              Kindly, pick from the options below, or use the search tool above
              to seek any assistance
            </p>
          </div>
          <table>
              <tr>
              <th>Getting Started</th>
              <th>User Account</th>
              </tr> 
              <tr>
                <td>Loan Type</td>
                <td>Interest</td>
                <td>Special Loan Offer</td>
              </tr>
              <tr>
                <td>Loan Agreement</td>
                <td>Guarantor Details</td>
                <td>Coilateral</td>
              </tr>
            </table>
        </div>
      </section>

      <section className="accordion-wrapper">
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
      </section>
    </div>
  );
};

export default HelpSupport;
