import React from 'react';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';

function PageContent() {
	return (
		<>
			<main role="main">
				<section className="mt-4 mb-5">
					<Filter></Filter>
					<div className="container-fluid">
						<div className="row">
							<div className="card-columns">
								<Card></Card>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}

export default PageContent;
