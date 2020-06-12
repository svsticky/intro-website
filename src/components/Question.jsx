import React from 'react';

const Question = ({ question }) => (
<div className="ui row">
    <div className="ui fluid styled accordion">
        <div class="title">
            <i class="dropdown icon"/>
            {question.question}
        </div>
        <div class="content">
            <p class="transition hidden">{question.answer}</p>
        </div>
    </div>
</div>
);
export default Question;