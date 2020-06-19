import React from 'react';

const Menu = ({ item }) => (
    <a className="item" href={"#"+item.name}>
        {item.name}
    </a>
);

export default Menu;