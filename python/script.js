//changing theams between dark and white theam
let darkTheam = document.getElementById("darkTheam");
darkTheam.addEventListener("click", function(){
    //changing the background when you hit the button (link) to be black (darktheam)
    document.body.style.backgroundColor = "rgb(70, 70, 70"
    //we need to upgrade every thing to work with the darktheam 
    let midleText= document.getElementById("middleText") //this will be the id for the text colors to match the darkteamk 
    midleText.style.color = "white"
});
//the white theam work perfectly don't touch it
let whiteTheam = document.getElementById("whiteTheam");
whiteTheam.addEventListener("click", function(){
    //changing the background when hi the button (link) to be white (whitetheam)
    document.body.style.backgroundColor = "white"
    let midleText= document.getElementById("middleText") //this will be the id for the text colors to match the darkteamk 
    midleText.style.color = "black"
});
