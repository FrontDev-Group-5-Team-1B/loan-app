import React, {useState} from 'react'
import support from "../../assets/5124556 1.png"
import accordion from "../../data/accordion";

const HelpSupport = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (idx) => {
       if (selected === idx) {
        return setSelected(null);
       }
       setSelected(idx)
    }
  return (
    <div>
        <section>
        <h3>Help & Support</h3>
        <div>
            <div>
                <img src={support} alt=""/>
            </div>
            <div>
                <h4>Hi, How can we help you?</h4>
                <p>Kindly, pick from the options below, or use the search tool above to seek any assistance</p>
                </div>
                <table>

                </table>
        </div>
        </section>

        <section className="accordion-wrapper">
            <div className="accordion">
                {accordion.map((item, idx) => {
                    <div key={idx} className="questions">
                    <div className="questions-title" onclick={() => toggle(idx)}>
                        <h2>{item.question}</h2>
                        <span>{selected === idx ? "-" : "+"}</span>
                    </div>
                    <div className={selected === idx ? "question-content show" : "question-content"}>
                        {item.answer}
                    </div>
                    </div>
                })}
            </div>
        </section>
    </div>
  )
}


export default HelpSupport