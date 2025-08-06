import React, { use } from 'react'
import { useState, useEffect } from 'react';

function Suggestion() {

  const [profile, setProfile] = useState(null);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch('https://pugazh529.github.io/HostData/profile.json')
      .then((data) => data.json())
      .then((data) => { setProfile(data) })
      .catch((e) => console.log(e));
  }, []);




  return (
    <div>
      {profile ?
        <div className='d-flex profilepicusername' key={profile.id}>
          <img className=' dp rounded-circle' src={profile.profilePicture} alt="Profileimg" />
          <h5>{profile.username}</h5>
          <p>{profile.bio}</p>
        </div>
        : <p>Loding</p>}
    </div>
  )
}

export default Suggestion
