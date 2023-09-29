

let cloaked = false
document.getElementById("browser").innerHTML = navigator.appVersion;
function Cloak(wiki) {
  
    if (!cloaked){
        document.getElementById("icon").href = "download.png"
        document.getElementById("title").innerHTML = "Canvas"
        document.getElementById("head").innerHTML = "Canvas"
        cloaked = true
    }else {
        if (wiki){
            document.getElementById("icon").href = "Sam-logos.jpeg"
            document.getElementById("title").innerHTML = "Aquamarineland Wiki"
            document.getElementById("head").innerHTML = "Aquamarineland Wiki"
            cloaked = false
            

        } else {

            document.getElementById("icon").href = "Sam-logos.jpeg"
            document.getElementById("title").innerHTML = "Sam's Site"
            document.getElementById("head").innerHTML = "Sam's Site"
            cloaked = false
        }
        
     }
}



function die() {
    if (confirm("Die?")) {
        document.getElementById("die").innerHTML = "Hmm..."
        document.getElementById("button2").style = "visibility:visible;"

      } else {
        document.getElementById("die").innerHTML = ""
        document.getElementById("button2").style = "visibility:hidden;"
      }
}

