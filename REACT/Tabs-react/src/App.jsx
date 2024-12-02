import React, { useState } from 'react'
import './App.css'

export default function App() {

  const tabs = [
    {
      id: 1, label: 'HTML',
      content: 'Hypertext Markup Language(HTML) is the standard markup language for documents designed to be displayed in a web browser.It defines the content and structure of web content.It is often assisted by technologies such as Cascading Style Sheets(CSS) and scripting languages such as JavaScriptWeb browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.HTML describes the structure of a web page semantically and originally included cues for its appearance.'
    },
    {
      id: 2, label: 'CSS',
      content: 'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScrip CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility, since the content can be written without concern for its presentation;'
    },
    {
      id: 3, label: 'JAVASCRIPT',
      content: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.'
    }
  ]

  const handleClick = (tabId) => {
    setData(tabId);
  }

  const [data, setData] = useState(tabs[0].id);
  return (
    <>
      <div className='box'>
        <div className="nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              style={{ borderColor: data === tab.id ? 'green' : 'black' }}
              className='boxes'
            >
              {tab.label}
            </button>
          )
          )}
        </div>

        <div className="info">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={{
                display: data === tab.id ? 'block' : 'none'
              }}
            >
              {tab.content}
            </div>
          )
          )}
        </div>
      </div >
    </>
  )
}

