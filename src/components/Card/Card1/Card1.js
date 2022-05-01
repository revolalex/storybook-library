 import './Card1.css'
 
 const Card1=()=>{
     return(
        <div class="container-card1">
        <div class="img-container-card1">
          <img src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="toto"/>
        </div>
        <ul class="social-media-card1">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
          </ul>
          <div class="user-info-card1">
            <h2>Aniket Singh</h2>
            <span>20-july</span>
          </div>
      </div>

     )
 }

 export default Card1;