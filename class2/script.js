const buildCard = (title,description,photoUrl,buttonColor,buttonText)=>{
    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardButton = document.createElement("a");

    cardContainer.classList.add("card","custom-card","m");
    cardImage.classList.add("card-img-top","custom-card-image");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    cardButton.classList.add("btn",`btn-${buttonColor}`);

    cardImage.src = photoUrl;
    cardTitle.innerText = title;
    cardText.innerText = description;
    cardButton.innerText = buttonText;
    cardButton.href = "#";

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    return cardContainer;

};
let mainContent = document.getElementById("main-content");

fetch("https://pokeapi.co/api/v2/pokemon?limit=20").then((res)=>{return res.json();}).then((
    data)=>{data.results.forEach((pokemon) => {
    fetch(pokemon.url).then((res)=>{return res.json();
    }).then((pokemonDetails)=>{
        let card = buildCard (
            pokemon.name,
            `Su peso es de: ${pokemonDetails.weight}`,
            pokemonDetails.sprites.front_default,
            "primary" ,
            "Click aquí"
        );
        mainContent.appendChild(card);
    });
    });
});





