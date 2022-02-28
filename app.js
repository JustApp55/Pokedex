
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





