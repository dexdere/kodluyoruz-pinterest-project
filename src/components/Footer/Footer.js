import React from 'react';

function Footer() {
	return (
		<>
			<footer className="footer pt-5 pb-5 text-center">
				<div className="container">
					<p>
						©
						<span className="credits font-weight-bold">
							<a
								title=""
								rel="noreferrer"
								target="_blank"
								className="text-dark"
								href="https://www.unsplash.com"
							>
								Photo & API Source <u>Unsplash.com</u>
							</a>
							<br />
							<b>Best 6th Group Ever</b>
						</span>
					</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
