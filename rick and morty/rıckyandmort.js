const apiUrl = 'https://rickandmortyapi.com/api/character';
const characterInfo = document.getElementById('character-info');
const newTitle = document.getElementById('mytitle')
newTitle.innerHTML = 'Rick and Morty'
console.log(apiUrl)
fetch(apiUrl)
    .then(response => {
        return response.json();
    }).then(response => {
        if (response.status == 200) {
            throw new Error('hata oluştu');
        }
        const characters = response.results;
        console.log(characters)
        characters.forEach(character => {
            console.log(character)
            const characterName = character.name;
            const characterStatus = character.status;
            const characterSpecies = character.species;
            const characterImage = character.image;
            const characterGender = character.gender;
            characterInfo.innerHTML += `
         <div id="box">   
         <img src="${characterImage}"></img >
        <p>Name: ${characterName}</p>
        <p>Status: ${characterStatus}</p>
        <p>Species: ${characterSpecies}</p>
        <p>Gender: ${characterGender}</p>
        </div>`

        });



    }).catch((err) => {
        console.log("hata");
        console.log(err);
    })


