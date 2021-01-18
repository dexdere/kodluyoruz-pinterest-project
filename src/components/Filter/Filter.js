import React from 'react'

function Filter() {
	return (
		<div className="container mb-4">
			<h1 className="font-weight-bold title">Explore</h1>
			<div className="row">
				<nav className="navbar navbar-expand-lg navbar-light bg-white pl-2 pr-2">
					<button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExplore" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarsExplore">
						<ul className="navbar-nav">
							<li className="nav-item">
							<a className="nav-link" href="#">Lifestyle</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="#">Food</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="#">Travel</a>
							</li>
							<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
							<div className="dropdown-menu shadow-lg" aria-labelledby="dropdown01">
								<a className="dropdown-item" href="#">Astronomy</a>
								<a className="dropdown-item" href="#">Nature</a>
								<a className="dropdown-item" href="#">Cooking</a>
								<a className="dropdown-item" href="#">Fashion</a>
								<a className="dropdown-item" href="#">Wellness</a>
								<a className="dropdown-item" href="#">Dieting</a>
							</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Filter
