//changing theams between dark and white theam
let darkTheam = document.getElementById("darkTheam");
darkTheam.addEventListener("click", function(){
    //changing the background when you hit the button to be black (darktheam)
    document.body.style.backgroundColor = "rgb(70, 70, 70)"
    //we need to upgrade every thing to work with the darktheam 
    let midbtw = document.getElementById("midBtw")
    midbtw.style.color = "white"

    let midledivText1 = document.getElementById("middleText1") //this will be the id for the text colors to match the darkteamk 
    midledivText1.style.color = "white"
    let midledivText2 = document.getElementById("middleText2") //this will be the id for the text colors to match the darkteamk 
    midledivText2.style.color = "white"
    let midledivText3 = document.getElementById("middleText3") //this will be the id for the text colors to match the darkteamk 
    midledivText3.style.color = "white"
    let midledivText4 = document.getElementById("middleText4") //this will be the id for the text colors to match the darkteamk 
    midledivText4.style.color = "white"
    let midledivText5 = document.getElementById("middleText5") //this will be the id for the text colors to match the darkteamk 
    midledivText5.style.color = "white"
    let bracket1 = document.getElementById("bracket1")
    bracket1.style.color = "white"
    let bracket2 = document.getElementById("bracket2")
    bracket2.style.color = "white"
})
//the white theam work perfectly don't touch it
let whiteTheam = document.getElementById("whiteTheam");
whiteTheam.addEventListener("click", function(){
    //changing the background when hi the button to be white (whitetheam)
    document.body.style.backgroundColor = "white"
    let midbtw = document.getElementById("midBtw")
    midbtw.style.color = "dimgray"
    let midledivText1 = document.getElementById("middleText1") //this will be the id for the text colors to match the darkteamk 
    midledivText1.style.color = "black"
    let midledivText2 = document.getElementById("middleText2") //this will be the id for the text colors to match the darkteamk 
    midledivText2.style.color = "black"
    let midledivText3 = document.getElementById("middleText3") //this will be the id for the text colors to match the darkteamk 
    midledivText3.style.color = "black"
    let midledivText4 = document.getElementById("middleText4") //this will be the id for the text colors to match the darkteamk 
    midledivText4.style.color = "black"
    let midledivText5 = document.getElementById("middleText5") //this will be the id for the text colors to match the darkteamk 
    midledivText5.style.color = "black"
    let bracket1 = document.getElementById("bracket1")
    bracket1.style.color = "black"
    let bracket2 = document.getElementById("bracket2")
    bracket2.style.color = "black"
})
