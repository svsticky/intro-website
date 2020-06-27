import React from 'react';
import MenuItem from './MenuItem';
import data from './data.json';

const Menu = () => {
	return(
    <div className="ui grid">
      <div className="ui computer only row">
        <div className="ui inverted fixed pointing menu">
          <div className="ui center aligned container">
            <a className="item" href="#top">
              <img
                className="ui mini image"
                src={require('../assets/logo.svg')}
                alt="logo"
              />
            </a>
            {
              data.sections.map((item,index)=>(
                <MenuItem item={item} key={index}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
	)
}

export default Menu;
