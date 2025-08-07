import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewstory() {

    const [story, setStory] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("https://pugazh529.github.io/HostData/story.json")
            .then((data) => data.json())
            .then((data) => {
                  const matchedstroy=data.find((item)=> item.id === parseInt(id)) ;
                  setStory(matchedstroy); 
            })
    }, [])

    if(!story) return  <div>Loading</div>;

    return (

        <div>
            <h1>{story.user.username}</h1>
        </div>
    );
}

export default Viewstory