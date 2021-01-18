import React from 'react';

function Card() {
	return (
		<>
			<div className="card card-pin">
				<img
					className="card-img"
					src="https://images.unsplash.com/photo-1489743342057-3448cc7c3bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d284a2efbca5f89528546307f7e7b87&auto=format&fit=crop&w=500&q=60"
					alt="Card image"
				/>
				<div className="overlay">
					<div className="heart"></div>
				</div>
				<a href="post.html"></a>
			</div>
		</>
	);
}

export default Card;
