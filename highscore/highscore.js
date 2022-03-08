let array = [{points: 2, name: "Valter"}, {points: 6, name: "Valters"}, {points: 3, name: "Valter3"}, {points: 3, name: "Valter5"}]
let pointArray = []
function testArray(){
    for(element of array){
        pointArray.push(element.points)
       // console.log(element)
    }
   // console.log(pointArray)
    pointArray.sort(function(a, b){return b - a});
    /*for(var i = 0; i < pointArray.length; i++){
        console.log(pointArray[i])
        for(element of array){
            console.log(element.points)
            if(pointArray[i] === element.points){
                console.log(element.name)
            }
            
        }
        
    }
    */
   let html = ``;
   for (let index = 0; index < pointArray.length; index++) {
       const element = pointArray[index];
       html += 
       `
       <p><span style="font-weight:bold">${index+1}.</span> ${element}</p>
       `
       
   }
   document.querySelector(".highscorePoints").innerHTML = html
    
    
}


testArray();