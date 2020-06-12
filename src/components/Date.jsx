import React from 'react';

const Date = ({ date }) => (
<div className="ui row">
    <h4>{date.name}</h4>
    <div className="ui celled grid">
        {
            date.activities.map((activity, index) =>(
                <div className = "ui row" key={index}>
                    <div className = "ui three wide column">
                        <p>{activity.time}</p>
                    </div>
                    <div className = "ui four wide column">
                        <p>{activity.name}</p>
                    </div>
                    <div className = "ui six wide column">
                        <p>{activity.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
</div>
);

export default Date;