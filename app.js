
let pokeName = document.getElementById('pokeName')
let pokeNum = document.getElementById('pokeNum')
let pokePower = document.getElementById('pokePower')
let pokeHeight = document.getElementById('pokeName')
let pokeWeight = document.getElementById('pokeNum')
let pokeType = document.getElementById('pokeType')
let pokeFrontImg = document.getElementById('pokeFrontImg')
let pokeBackImg = document.getElementById('pokeBackImg')


let btn = document.getElementById("subButton")


    function loadPoke() {
            let inputName = document.getElementById("pokeInput");
            //     //get the data from the url/api 
            fetch(`https://pokeapi.co/api/v2/pokemon/${inputName.value}`)

            //handle the response/reject promise using .then
            .then((res)=> {
                  return res.json()
                })
          
            .then((data) => {  
                pokeName.textContent = "Pokemon Name: " + data.name;
                pokeNum.textContent = "Pokemon ID: " + data.id; 
                pokePower.textContent = "Pokemon Ability: " + data.abilities[0].ability.name
                pokeWeight.textContent = "Pokemon Weight: " + data.weight;
                pokeHeight.textContent = "Pokemon Height: " + data.height;
                pokeType.textContent = data.types[0].type.name;
                pokeFrontImg.setAttribute('src', `${data.sprites.front_default}`)
                pokeBackImg.setAttribute('src', `${data.sprites.back_default}`)
                
                inputName.value = null
            
            })
    }

    btn.addEventListener("click", loadPoke)





























    



    //let pokeShinyFrontImg = document.getElementById('pokeShinyFrontImg')
//let pokeShinyBackImg = document.getElementById('pokeShinyBackImg')

//pokeShinyFrontImg.setAttribute('src', `${data.sprites.front_shiny}`)
                //pokeShinyBackImg.setAttribute('src', `${data.sprites.back_shiny}`)