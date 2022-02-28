//console.log("check point")
// var car = {
//     make: "Nissan",
//     model: "Juke",
//     wheel: "4",
//     color: {
//         name: "Vantablack",
//         colorNO: "54678af"
//     }
// }

// console.log(car.color.colorNO)

// let p = new Promise(
//     (resolve, reject) => {
//         let a = 1+1
//         if(a== 2){
//             resolve("success")
//         }
//         else{
//             reject("Failed")
//         }
//     })

//.then & .catch are specific for the Promise object.../ .then & .catch are a method that comes with predefined 'Promise' method
    //.then will connect to "resolve"
    // p.then((message)=>{
    //     console.log("We are in the then " + message)

//catches the error - error method (404 error). .catch will connect to "reject"
    // }).catch((message)=>{
    //     console.log("We are in the catch " + message)
    // })

    //.fetch always gives you a promise; we don't know what it's going to do
    // Promise is (just) an object that is returned with predefined method using .fetch
                
            ////\\\\
  //will fix  the code below //
// function charLength(){
//     let p = new Promise ((resolve, reject) =>{
     
//         let inp = document.querySelector("#name")
      
//         if(inp.length >= 2){
//             resolve(inp.length)
//         }
//         else{
//             reject(inp.length)
//         }
//     })
            //.then takes callback function
//     p.then((message)=>{
//         console.log("Welcome " + message)
//     }).catch((message)=>{
//         console.log("Should be more than 2 characters; " + message +  ". Please try again")
//     })
// }
//    let click = document.querySelector('button')
//     click.addEventListener("#click", charLength)

let pokeName = document.getElementById('pokeName')
let pokeNum = document.getElementById('pokeNum')
let pokePower = document.getElementById('pokePower')
let pokeHeight = document.getElementById('pokeName')
let pokeWeight = document.getElementById('pokeNum')
let pokeType = document.getElementById('pokeType')
let pokeImage = document.getElementById('pokeNum')

let btn = document.getElementById("subButton")


    function loadPoke() {
            let inputName = document.getElementById("#pokeInput").value;
            //     //get the data from the url/api 
            fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`)

            //handle the response/reject promise using .then
            .then((res)=> {
                  return res.json()
                })
          
            .then((data) => {  
                pokeName.textContent = data.name;
                pokeNum.textContent = data.id; 
                pokePower.textContent = data.abilities[0].ability.name
                pokeWeight.textContent = data.weight;
                pokeHeight.textContent = data.height;
                pokeType.textContent = data.types[0].type.name;
                pokeImage.setAttribute('src', `${data.sprites.front_default}`)
            
            })
    }

    btn.addEventListener("click", loadPoke)





