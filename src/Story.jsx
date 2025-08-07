import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Story() {

    const [stories, setStories] = useState([]);

    const navigate =useNavigate();

    useEffect(() => {
        fetch("https://pugazh529.github.io/HostData/story.json")
            .then((data) => data.json())
            .then((data) => setStories(data))
            .catch((e) => console.log(e));
    }, [])
    return (
        <div className='story mx-3 '>
            <div className='d-flex flex-row m-4'>
                {stories.length > 0 ? (
                    stories.map((story) => (
                        <div className='m-2' key={story.id} onClick={()=> navigate(`/story/${story.id}/${stories.length}`)}>
                            <div className='gradient-border'>
                                <img src={story.user.profile_pic} className='rounded-circle story-dp' alt="dp" />
                            </div>
                            <p className='text-truncate' style={{ width: "50px" }}>{story.user.username}</p>
                        </div>
                    ))
                )
                    : (
                        <p>loading </p>
                    )}
            </div>
        </div>

    )
}

export default Story