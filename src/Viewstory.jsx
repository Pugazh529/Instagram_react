import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


function Viewstory() {

    const [story, setStory] = useState(null);
    const { id,tot } = useParams();
    // const [storyid, setStoryid] = useState(null);

    const navigate = useNavigate();

    // useEffect(() => {
    //     setStoryid(parseInt(id)); // convert string param to number
    // }, [id]);

    useEffect(() => {
        fetch("https://pugazh529.github.io/HostData/story.json")
            .then((data) => data.json())
            .then((data) => {
                const matchedstroy = data.find((item) => item.id === parseInt(id));
                setStory(matchedstroy);
            })
    }, [id])

    if(id > tot || id <= 0){
        navigate('/');
    }

    if (!story) return <div>Loading</div>;

    return (

        <div>
            <div className="d-flex justify-content-center align-items-center">
                {/* <button onClick={() => setStoryid(storyid - 1)}><i className="bi bi-arrow-left-square-fill"></i></button> */}
                <Link  to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}> <i className="bi bi-arrow-left-square-fill"></i></Link>
                <img className="vh-100" src={story.image} alt="" />
                {/* <button onClick={() => setStoryid(storyid + 1)}><i className="bi bi-arrow-right-square-fill"></i></button> */}
                <Link  to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}> <i className="bi bi-arrow-right-square-fill"></i></Link>
            </div>
        </div>
    );
}

export default Viewstory