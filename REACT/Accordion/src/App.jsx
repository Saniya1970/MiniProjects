import React, { useState } from 'react';


// Accordion Item Component
const AccordionItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button
        className="accordion-question"
        onClick={toggleAccordion}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleAccordion();
        }}
        aria-expanded={isOpen}
        aria-controls={`answer-${index}`}
      >
        {question}
      </button>
      <div
        className={`accordion-answer ${isOpen ? 'open' : ''}`}
        id={`answer-${index}`}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Accordion Container Component
const Accordion = () => {
  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How do you use React?", answer: "By creating components that manage their own state and compose to form UIs." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript, commonly used with React." }
  ];

  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}  // Unique index for each item
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
