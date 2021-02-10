import React from 'react';
import { Link } from 'react-router-dom';

function Card({items}) {

	return (
		<>
			<div className="card card-pin">
				<Link to={`/photo/${items.id}`}>
					<img
						className="card-img"
						src={`${items.urls.small}`}
						alt={`${items.alt_description}`}
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
