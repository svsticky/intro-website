import React from 'react';

const Date = ({ date }) => (
<div className="ui row">
    <h4>{date.name}</h4>
    <div className="ui stackable celled grid">
        {
            date.activities.map((activity, index) =>(
                <div className = "ui row" key={index}>
                    {/* tijdelijk nog niet nodig, wel voor vrijdag 9 juli
                    <div className = "ui three wide column">
                        <p>{activity.time}</p>
                    </div>
                    */}
                    <div className = "ui four wide column">
                        <p>{activity.name}</p>
                    </div>
                    <div className = "ui ten wide column">
                        <p>{activity.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
</div>
);

export default Date;