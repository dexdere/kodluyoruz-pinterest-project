import {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import Card from '../Card/Card';
import axios from 'axios';

function UserDetail() {

    let { username } = useParams();

    const [photo,setPhoto] = useState([]);
    const [users,setUsers] = useState({});

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_ENDPOINT_URL}users/${username}/photos?client_id=${process.env.REACT_APP_Unsplash_Key}&per_page=100`).then((res) => {
             setPhoto(res.data);
        });

        axios.get(`${process.env.REACT_APP_ENDPOINT_URL}users/${username}?client_id=${process.env.REACT_APP_Unsplash_Key}`).then((res) => {
            setUsers(res.data);
       });
        

    },[username]);

    return (
        <main role="main">
            {
                <div className="text-center" style={{padding:'20px'}}>
                    <br />
                    <h2>{users.username}</h2>
                    <p>
                        {users.bio}
                    </p>
                    <a target="_blank" rel="noreferrer" href={`https://www.instagram.com/${users.instagram_username}`}>Go on Instagram Profile</a>
                </div>
            }
            <section className="mt-4 mb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="card-columns">
                            {
                                photo?.map((items,i) => (
                                    <Card key={i} items={items}></Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UserDetail
