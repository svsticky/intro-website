import React from 'react';

const MenuItem = ({ item }) => (
	<a className="item" href={item.href}>
		{item.name}
	</a>
);

export default MenuItem;
