let array = []

function displayArray(){
    let retrivedData = localStorage.getItem("pointsArray");
    array = (JSON.parse(retrivedData))
    //sorts the array in decending order
    array.sort(function(a, b){return b.points - a.points});
    
    let html = ``;
    for (let index = 0; index < array.length; index++) {
       const element = array[index];
       html += 
       `
       <p><span style="font-weight:bold">${index+1}.</span> ${element.points} - ${element.name}</p>
       `
       
   }
   document.querySelector(".highscorePoints").innerHTML = html
    
    
}


displayArray();