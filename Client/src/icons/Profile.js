import React from 'react'
import './styles/profile.css'

function Profile() {
  return (

    <div class="container">
      <div class="card">
        <div class="profile-picture">
          <img src="https://i.pinimg.com/280x280_RS/fe/7d/ee/fe7deef834e1fafe56f8023ced803ca9.jpg" alt="Profile Picture"/>
        </div>
        <h2 class="name">Muhammad Ilyas</h2>
        <h3 class="username">@fastroware</h3>
        <p class="tagline">Keep going.</p>
        <p class="description">Masih belajar CSS dan HTML.</p>
        <a href="#" class="button">Visit Profile</a>
      </div>
    </div>

  )
}

export default Profile