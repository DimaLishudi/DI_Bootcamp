// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html>



const form = document.getElementsByTagName("form")[0]

const radius = document.getElementById("radius")
const volume = document.getElementById("volume")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let parsed_radius = parseFloat(radius.value)
    if (parsed_radius === NaN) {
        return
    }
    volume.value = 3.14 * 4 / 3 * parsed_radius**3
})
