
let lastbuttonid = 2


function load(id) {
    
    for (let i = 0; i < lastbuttonid;i++ )
    {
        document.getElementById(i).style = "visibility: hidden"
        
        

    }
   // const elements = document.querySelectorAll(id);
   // window.alert(elements)
   // elements[0].style = "visibility:visible"; 
   // elements[1].style = "visibility:visible"; 
    //elements[0].style.margin-top = "180px"; 
    //elements[1].style.margin-top = "180px"; 
    document.getElementById(id).style = "visibility: visible"
    document.getElementById(id).style = "margin-top: 180px"
}