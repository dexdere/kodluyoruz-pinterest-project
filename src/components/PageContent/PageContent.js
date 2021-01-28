import {React,useEffect,useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import axios from 'axios';

import PostDetail from '../Post/Post';

function PageContent() {

	const [photoCollection,setPhotoCollection] = useState([]);

	useEffect(() => {

		axios.get(`${process.env.REACT_APP_ENDPOINT_URL}collections/2489501/photos?client_id=${process.env.REACT_APP_Unsplash_Key}`).then((res) => {
			setPhotoCollection(res.data);
		})

	},[])

	return (
		<>
		<Router>
			<Switch>
				<Route path="/" exact>
					<main role="main">
						<section className="mt-4 mb-5">
							<div className="container-fluid">
								<div className="row">
									<div className="card-columns">
										{
											photoCollection?.map((items,i) => (
												<Card key={i} items={items}></Card>
											))
										}
									</div>
								</div>
							</div>
						</section>
					</main>
				</Route>
				<Route path={`/photo/:id`} component={PostDetail} />
			</Switch>
		</Router>
			<Footer></Footer>
		</>
	);
}

export default PageContent;
