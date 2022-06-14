import React from 'react';
import questions from './data';
import Question from './Question';

function App() {
  return (
  <main>
    <h2>Frequently Asked Questions</h2>
    <div className='question-container'>{
      questions.map((question)=>{
        return  <Question key={question.id} {...question}/>
      })
    }
    </div>
  </main>
  )
}

export default App;

