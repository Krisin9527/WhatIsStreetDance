window.onload = function() {
     
    head_footer();
    $(".bt").hover(function() {
        $(this).children(".li-list").stop(true, true).slideDown("fast");
    }, function() {
        $(this).children(".li-list").stop(true, true).slideUp('slow');
    });
  
    function head_footer() {
        header.innerHTML =
            `<h1 class="A1" style="background-color:bisque;color:black">What is street dance</h1>
        <nav>   
            <div class="container">
            <div>
            <a href="index.html"><button class="w3-btn w3-bisque w3-xlarge"><i class="fa fa-home"></i></button></a>          
            </div>
            <div class="bt ">
            <button class="w3-btn w3-bisque w3-xlarge"><i class="fa fa-bars"></i></button>
            <ul class="li-list">
                <a href="Lockin.html"><li class="smlist">Lockin</li></a>            
                <a href="Poppin.html"><li class="smlist">Poppin</li></a>                
                <a href="Waackin.html"><li class="smlist">Waackin </li></a>               
                <a href="Hiphop.html"><li class="smlist">Hiphop</li></a>                
                <a href="Breakin.html"><li class="smlist">Breaking</li></a>
                <a href="House.html"><li class="smlist">House</li></a> 
              </ul>
              </div></div>
            
            <a href="index.html"><li class="nav-list st">Home</li></a>                    
            <a href="Lockin.html"><li class="nav-list st">Lockin</li></a>             
            <a href="Poppin.html"><li class="nav-list st">Poppin</li></a>                
            <a href="Waackin.html"><li class="nav-list st">Waackin </li></a>               
            <a href="Hiphop.html"><li class="nav-list st">Hiphop</li></a>                
            <a href="Breakin.html"><li class="nav-list st">Breaking</li></a>
            <a href="House.html"><li class="nav-list st">House</li></a>             
            </ul>
        </nav>`;
        item2.innerHTML =
            `<section>
            <h2>音樂範例</h2>
                        <ul>
                            <li>Funk</li>
                            <audio controls>
                            <source src="./audio/upbeat-funk-commercial-112624.mp3" type="audio/mp3">
                        </audio>
                            <li>Disco</li>
                            <audio controls>
                            <source src="./audio/disco-groove-122074.mp3" type="audio/mp3">
                        </audio>
                            <li>Hiphop</li>
                            <audio controls>
                            <source src="./audio/boom-bap-hip-hop-110865.mp3" type="audio/mp3">
                        </audio>
                            <li>House</li>
                            <audio controls>
                            <source src="./audio/summer-nights-tropical-house-music-121570.mp3" type="audio/mp3">
                        </audio>
                            <li>Jazz</li>
                            <audio controls>
                            <source src="./audio/let-it-go-12279.mp3" type="audio/mp3">
                        </audio>
                        </ul>

                    </section>`
        footer.innerHTML =
            `<p>&copy This is footer of the webside</p>`
    }
 
}
