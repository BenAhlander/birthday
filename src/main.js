import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="invitation">
    <marquee behavior="alternate" scrollamount="8">
      <span class="title">You're Invited!</span>
    </marquee>
    <p class="time">Party starts at <span class="highlight">7:00 PM</span></p>
    <p class="address">10578 S Ozarks Drive<br/>South Jordan, Utah</p>
    <p class="food">Food and drinks provided</p>
    <p class="gifts">Please no gifts</p>
  </div>
`;
