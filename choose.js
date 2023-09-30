

let question = ["Toy (plural)","Musical Instrument (plural)", "noun","food (plural)","food plural)","verb","animal (plural)","plural noun","number", "plural noun","number","number","vehicle (plural)","animal (plural)"]
let answers = []
let story = ["If I was Principal at my school I would put ", " and "," in every "," and have the cafeteria serve "," and ", " for lunch. We would have "," and Tell everyday, where students can bring ", " and "," to share in class. Students would give teachers homework, like a "," page book reports about ", ", and "," math problems. Recess would last ", " hours, and instead of buses I would have ", " and ", " take the kids to and from school."]
function start() {
    answers = []
    document.getElementById("story").innerHTML = ""
    for (let i =0;i <= 13; i++){
        answers.push(prompt(question[i], ""))
        if(answers[i] == null || answers[i] == ""){
            return
        }
    }
    
    for(i = 0;i<=story.length - 2;i++){
        document.getElementById("story").innerHTML += story[i] + answers[i]
        
    }
    document.getElementById("story").innerHTML += story[story.length - 1]

}
































/*
let lastbuttonid = 4

function load(id) {
    
    for (let i = 0; i <= lastbuttonid;i++ )
    {
        document.getElementById(i).style = "visibility: hidden"
        
        

    }
   // const elements = document.querySelectorAll(id);
   
   // elements[0].style = "visibility:visible"; 
   // elements[1].style = "visibility:visible"; 
    //elements[0].style.margin-top = "180px"; 
    //elements[1].style.margin-top = "180px"; 
    //window.alert(id)
    if (id == "2n3") {
    document.getElementById(2).style = "visibility: visible"
    document.getElementById(2).style = "margin-top: 180px"
    document.getElementById(3).style = "visibility: visible"
    document.getElementById(3).style = "margin-top: 180px"
    }else if (id == "4d"){
    document.getElementById(4).style = "visibility: visible"
    document.getElementById(4).style = "margin-top: 180px"
    document.getElementById("story").innerHTML = "Well then, here you go."
    document.getElementById("story").style = "margin-top: 300px"

    }else if (id == "end"){
        document.getElementById("story").innerHTML = ""
        document.getElementById("story").style = "margin-top: 300px"
    
        }
    
    
    
    
    else{    
    document.getElementById(id).style = "visibility: visible"
    document.getElementById(id).style = "margin-top: 180px"
    }
}




function ask1() {
    load("end")
    let toys = prompt("Toys", "");
    if (toys == null || toys == "") {
    ask1()
    return
    } else {
    let instrument = prompt("Musical Instrument(plural)", "");
    }
    if (instrument == null || instrument == "") {
    ask1()
    return
    } else {
    let noun = prompt("Noun", "");
    }


}

*/