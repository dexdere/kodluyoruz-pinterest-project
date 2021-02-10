import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

function Post() {

    let { id } = useParams();

    const [photo,setPhoto] = useState([]);
    const [titlepage,setTitlePage] = useState("");

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_ENDPOINT_URL}photos/${id}?client_id=${process.env.REACT_APP_Unsplash_Key}`).then((res) => {
             setPhoto([res.data]);
             setTitlePage(res.data.alt_description);
        })

        document.title = titlepage;
        
    },[id,photo,titlepage]);

    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    {
                        photo.map((item) => (
                            <div className="col-md-8">
                                <article class="card">
                                    <img class="card-img-top mb-2"
                                        src={item.urls.full}
                                        alt={item.alt_description} />
                                    <div class="card-body">
                                        <h1 class="card-title display-4">
                                           {item.alt_description} </h1>
                                        <p>
                                            {item.description}
                                        </p>
                                        <p>
                                            <strong>{item.likes} liked</strong>
                                        </p>
                                        <hr />
                                        <h2>Photo camera information</h2>
                                        <p>
                                            <strong>Brand: </strong> {item.exif.make}
                                            <br />
                                            <strong>Model: </strong> {item.exif.model}
                                            <br />
                                            <strong>Exposure Time: </strong> {item.exif.exposure_time}
                                            <br />
                                            <strong>Aperture: </strong> {item.exif.aperture}
                                            <br />
                                            <strong>Focal Length: </strong> {item.exif.focal_length}mm
                                            <br />
                                            <strong>ISO: </strong> {item.exif.iso}
                                            <br />
                                        </p>
                                        <h3>Photographer</h3>
                                        <img className="ppImage" alt={item.user.name} src={item.user.profile_image.medium} /> 
                                        <div className="clearfx"></div>
                                        <strong>Full Name: </strong> {item.user.name} <br />
                                        <strong>Bio: </strong> {item.user.bio} <br />
                                        <strong>Total Photos: </strong> {item.user.total_photos} <br />
                                        <strong>Instagram: </strong> <a rel="noreferrer" target="_blank" href={`https://www.instagram.com/${item.user.instagram_username}`}>Go to instagram</a> <br />
                                        <strong>Other Photos: </strong> <Link to={`/user/${item.user.username}`}>Go to other photos</Link>
                                        {/* <small class="d-block"><a class="btn btn-sm btn-gray200" href="#"><i
                                            class="fa fa-external-link"></i> Visit Website</a></small> */}

                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Post
