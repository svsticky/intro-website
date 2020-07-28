import React from 'react'
import MenuItem from './MenuItem';
import data from './data.json';
import { Dropdown } from 'semantic-ui-react'


const Menu = () => (
  <div className="ui grid">
    {/* Desktop menu */}
    <div className="ui computer only row">
      <div className="ui inverted fixed pointing menu">
        <div className="ui center aligned container">
          <a className="item" href="#">
            <img
              className="ui mini image"
              src={require('../assets/logo.svg')}
              alt="logo"
            />
          </a>
          {
            data.menu.map((item,index)=>(
              <MenuItem item={item} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
    {/* Mobile menu */}
    <div className="ui tablet only mobile only row">
      <div className="ui inverted fixed menu">
        <div className="item">
          <Dropdown icon='bars'>
            <Dropdown.Menu>
              {
                data.menu.map((item,index)=>(
                  <Dropdown.Item
                    text={item.name}
                    href={item.href}
                    key={index}
                  />
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <a className="item" href="#">
          <img
            className="ui mini image"
            src={require('../assets/logo.svg')}
            alt="logo"
          />
        </a>
      </div>
    </div>
  </div>
);


export default Menu;
