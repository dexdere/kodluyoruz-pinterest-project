import {React, useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

function Post() {

    let { id } = useParams();

    const [photo,setPhoto] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_ENDPOINT_URL}photos/${id}?client_id=${process.env.REACT_APP_Unsplash_Key}`).then((res) => {
            setPhoto([res.data]);
        })
    },[id]);

    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    {
                        photo?.map((item) => {
                            <div class="col-md-7">
                                <article class="card">
                                    <img class="card-img-top mb-2"
                                        src={item.urls.full}
                                        alt="Card image" />
                                    <div class="card-body">
                                        <h1 class="card-title display-4">
                                           {item.alt_description} </h1>
                                        <p>
                                            {item.description}
                                        </p>
                                        {/* <small class="d-block"><a class="btn btn-sm btn-gray200" href="#"><i
                                            class="fa fa-external-link"></i> Visit Website</a></small> */}

                                    </div>
                                </article>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Post
