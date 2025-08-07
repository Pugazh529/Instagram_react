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

  useEffect(() => {
    fetch('https://pugazh529.github.io/HostData/suggestion.json')
      .then((data) => data.json())
      .then((data) => {
        setSuggestion(data)
        // console.log(data)
      })
      .catch((e) => console.log(e));
  }, []);




  return (
    <div>
      <div className="suggestion m-5 w-75 ">
        {profile ?
          <div className='d-flex profilepicusername' key={profile.id}>
            <img className=' dp rounded-circle' src={profile.profilePicture} alt="Profileimg" />
            <h5>{profile.username}</h5>
            <b className='text-primary ms-auto me-3'>switch</b>
          </div>
          : <p>Loding</p>}
        <div className="d-flex mt-5">
          <h5>Suggessted for you</h5>
          <b className="ms-auto">see all</b>
        </div>


        <div className='d-flex justify-content-center flex-column mt-4 '>
          {suggestion && suggestion.map((suggestion) => (
            <div className='posts my-3' key={suggestion.id}>
              <div className='d-flex profilepicusername'>
                <img className=' dp rounded-circle' src={suggestion.profilePicture} alt="Profileimg" />
                <h5>{suggestion.username}</h5>
                <p className='text-primary ms-auto'>Fellow</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>

  )
}

export default Suggestion
