import React from 'react';

const Menu = ({ item }) => (
    <a class="item" href={"#"+item.name}>
        {item.name}
    </a>
);

export default Menu;