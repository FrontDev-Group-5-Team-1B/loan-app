import React, { useState } from "react";
import support from "../../assets/5124556 1.png";
import accordion from "../../data/accordion";
import "../../styles/help-support.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const HelpSupport = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }
    setSelected(idx);
  };
  return (
    <div className="help-support-container dash-wrapper">
      <section>
        <div className="help-support-row1">
          <h3>Help & Support</h3>
          <div>
            <img src={support} alt="support" />
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
                    <span>
                      {selected === idx ? (
                        <AiOutlineMinus size="15px" />
                      ) : (
                        <AiOutlinePlus size="15px" />
                      )}
                    </span>
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpSupport;
