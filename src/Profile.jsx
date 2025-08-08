import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get("https://pugazh529.github.io/HostData/profile.json")
            .then((data) => {
                setProfile(data.data)
                console.log(data.data)
            });
    }, [])

    function onchangeHandelar(e){

        setProfile((prev) => ({
            ...prev,[e.target.name]: e.target.value
        }))
    }

    const updateprofile=async () =>{
        axios.put("https://pugazh529.github.io/HostData/profile.json",profile)
        .then(console.log('Updated'))
        .catch((e)=>console.log(e));
    }

    if (!profile) return <div>Loading</div>

    return (
        <div>
            <div className='m-5'>
                <img src={profile.profilePicture}  className=" profilepic rounded-circle" alt="profile pic" />
                <h1>{profile.name}</h1>
                <div>
                    <input type="text" className='form-control my-4' name='name' value={profile.name} onChange={(e)=>onchangeHandelar(e)}  />
                    <input type="text" className='form-control'  name='profilePicture'onChange={(e)=>onchangeHandelar(e)}  value={profile.profilePicture} />
                    <button className='btn btn-primary my-4' onClick={()=>updateprofile()}>Update  </button>
                </div>
            </div>
        </div>
    )
}

export default Profile