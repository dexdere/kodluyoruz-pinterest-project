import React from 'react';
import a from './av.png';
import pinterest from './pinterest.png';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
				<a className="navbar-brand font-weight-bolder mr-3" href="/">
					<img alt="World Of Feed" className="logo" src={pinterest} />
				</a>
				<button
					className="navbar-light navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsDefault"
					aria-controls="navbarsDefault"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsDefault">
					<ul className="navbar-nav mr-auto align-items-center">
						 
					</ul>
					<ul className="navbar-nav ml-auto align-items-center">
						<li className="nav-item">
							<a className="nav-link active" href="/">
								Home
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
