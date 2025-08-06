import React, { useEffect, useState } from 'react'

function Content() {

    const [post, setPost] = useState(null);

    useEffect(() => {

        fetch('https://pugazh-creator.github.io/Host/instadata.json')
            .then((data) => data.json())
            .then((data) => {
                setPost(data);
                console.log(data)
            })
            .catch((e) => console.log(e));
    }, []);

    return (

            <div className='d-flex justify-content-center flex-wrap '>
                {post && post.map((post) => (
                    <div className='posts'>
                        <div className='d-flex profilepicusername'>
                            <img className=' dp rounded-circle' src={post.profilePicture} alt="Progileimg" />
                            <h5>{post.username}</h5>
                        </div>
                                {post.posts.map((posts) => (
                                    <img className="postimg" src={posts.image} alt="" />
                                ))}
                            <div>
                                <i class="bi bi-hand-thumbs-up"></i>
                                <i class="bi bi-chat-left-heart"></i>
                                <i class="bi bi-send"></i>
                            </div>
                            {post.posts.map((posts)=>(
                                <>
                                <b>{posts.likes} Likes</b>
                                <div>
                                    <p>{posts.caption}</p>
                                </div>
                                </>
                                
                            ))}
                            
                    </div>

                ))}


            </div>

    )
}

export default Content