import React from 'react';

import { Link } from 'react-router-dom';

// const onClick = () => {
// 	'.heart'.on('click', function () {
// 		this.toggleClass('heart-blast');
// 	});
// };

function Card({items}) {

	return (
		<>
			<div className="card card-pin">
				<Link to={`/photo/${items.id}`}>
					<img
						className="card-img"
						src={`${items.urls.small}`}
						alt="Card image"
					/>
				</Link>
				{/* <div className="overlay">
					<div className="heart"></div>
				</div>
				<Link to={`/photo/${items.id}`} /> */}
			</div>
		</>
	);
}

export default Card;
