import React from 'react';
import MenuItem from './MenuItem';
import data from './data.json';

const Menu = items => {
	return(
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
	)
}

export default Menu;
