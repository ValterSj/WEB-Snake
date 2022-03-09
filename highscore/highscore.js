let array = [{points: 2, name: "Valter"}, {points: 6, name: "Valters"}, {points: 3, name: "Valter3"}, {points: 3, name: "Valter5"}, {points: 10, name: "V"} ]
let pointArray = []
function testArray(){
    
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


testArray();