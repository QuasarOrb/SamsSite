

let cloaked = false
function Cloak(wiki) {
  
    if (!cloaked){
        document.getElementById("icon").href = "download.png"
        document.getElementById("title").innerHTML = "Canvas"
        document.getElementById("head").innerHTML = "Cloaked :)"
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

function die1() {
    window.alert("lol")
    document.getElementById("rocketnanim").id = "rocketanim"
}


function die() {
    if (confirm("Test?")) {
        document.getElementById("die").innerHTML = "Hmm..."
        document.getElementById("button2").style = "visibility:visible;"
        for (let i = 1;i<=3;i++){
        document.getElementById("toanimate"+i).className = "animated"
        }
        
      } else {
        document.getElementById("die").innerHTML = ""
        document.getElementById("button2").style = "visibility:hidden;"
      }
}



const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
        
    });


});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))









/*

uncomment to make blob go to mouse

const blob = document.getElementById("blob");

document.body.onpointermove = event => {

    const {clientX,clientY} = event;
   
    blob.animate({
        
        left: clientX + 'px',
        top: clientY + 'px'
    },{duration:3000, fill:"forwards"});
    
}

*/