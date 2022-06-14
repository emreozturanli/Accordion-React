import React, { useState } from 'react';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';

const Question = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <section>
      <div className='container'>
        <h4>{props.title}</h4>
        <span className='btn' onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? <HiMinusCircle /> : <HiPlusCircle />}
        </span>
      </div>
      {isExpanded && <p className='info'>{props.info}</p>}
    </section>
  )
};

export default Question;
