import React from 'react';

const MenuItem = ({ item }) => (
	<a className="item" href={"#"+item.name}>
		{item.name}
	</a>
);

export default MenuItem;
