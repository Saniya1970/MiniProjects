import React, { useState } from 'react'

const AccordionItem = ({ question, answer, index }) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='main-item'>
            <button
                className='question'
                onClick={toggle}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || '') (toggle)
                }}
                aria-expanded={isOpen}
                aria-controls={`answer-${index}`}
            >
                {question}
            </button>

            <div
                className={`answer ${isOpen ? 'open' : ''}`}
                id={`answer-${index}`}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {answer}
            </div>
        </div>
    )
}

export default function Sample() {

    const faqData = [
        { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
        { question: "How do you use React?", answer: "By creating components that manage their own state and compose to form UIs." },
        { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript, commonly used with React." }
    ];


    return (
        <div className='main'>
            {faqData.map((item, index) => {
                <AccordionItem
                    key={index}
                    index={index} //unique index for each element
                    question={item.question}
                    answer={item.answer}
                />
            })}
        </div>
    )
};



/* 1. onKeyDown Handler
jsx
Copy code
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') toggleAccordion();
}}
onKeyDown: This is an event handler that listens for keyboard events when the user presses a key while the button is focused.

e.key: This property of the event object represents the key that was pressed. In this case, it is checking for the 'Enter' key and the 'Space' key.

toggleAccordion(): This function is called when the 'Enter' or 'Space' key is pressed. It toggles the state of the accordion (i.e., opens or closes the answer).

Purpose: This handler allows users to open or close the accordion item using keyboard navigation. Pressing 'Enter' or 'Space' on a focused button will trigger the same behavior as clicking the button.

2. aria-expanded Attribute
jsx
Copy code
aria-expanded={isOpen}
aria-expanded: This ARIA (Accessible Rich Internet Applications) attribute indicates whether a section of the content is expanded or collapsed.

isOpen: This boolean state reflects whether the accordion is open or closed. When true, it means the content is visible; when false, it is hidden.

Purpose: This attribute helps assistive technologies (like screen readers) understand and convey the current state of the accordion to users with disabilities. It improves accessibility by letting users know if the section is expanded or collapsed.

3. aria-controls Attribute
jsx
Copy code
aria-controls={`answer-${index}`}
aria-controls: This ARIA attribute specifies the ID of the element that is controlled or affected by the element with this attribute.

`answer-${index}`: This creates a unique ID for the answer content based on the index of the accordion item.

Purpose: This attribute links the button (question) to its corresponding content (answer). It tells assistive technologies which content is controlled by the button, enhancing navigation and understanding.

Summary
onKeyDown allows users to interact with the accordion using the keyboard.
aria-expanded informs users of the current state of the accordion item.
aria-controls associates the button with the content it controls, improving accessibility and usability.
Together, these attributes and handlers ensure that your accordion is accessible and user-friendly for all users, including those using assistive technologies or navigating via keyboard.*/
