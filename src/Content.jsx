import React, { useEffect, useState } from 'react'

function Content() {

    const [post, setPost] = useState(null);

    useEffect(() => {

        fetch('https://pugazh529.github.io/HostData/users.json')
            .then((data) => data.json())
            .then((data) => {
                setPost(data);
                // console.log(data)
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className="content-page">
            <div className='d-flex justify-content-center flex-wrap '>
                {post && post.map((post) => (
                    <div className='posts my-3' key={post.id}>
                        <div className='d-flex profilepicusername'>
                            <img className=' dp rounded-circle' src={post.profilePicture} alt="Profileimg" />
                            <h5>{post.username}</h5>
                        </div>
                        {post.posts.map((posts) => (
                            <img className="postimg" key={post.id} src={posts.image} alt="" />
                        ))}
                        <div className='logos'>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <i className="bi bi-chat-left-heart"></i>
                            <i className="bi bi-send"></i>
                        </div>
                        {post.posts.map((posts) => (
                            <div key={posts.id}>
                                <b>{posts.likes} Likes</b>
                                <div>
                                    <p>{posts.caption}</p>
                                </div>
                            </div>

                        ))}

                    </div>

                ))}


            </div>

        </div>


    )
}

export default Content
