import React from 'react';

const Question = ({ question }) => (
<div className="ui row">
    <div className = "ui eight wide column">
        <p>{question.question}</p>
    </div>
    <div className = "ui eight wide column">
        <p>{question.answer}</p>
    </div>
</div>
);
export default Question;