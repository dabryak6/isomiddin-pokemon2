// let pokemonData = JSON.parse(localStorage.getItem("data",)) || []

let pokemons = [
    {
        id: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        name: "bulbasaur",
        ability: ["grass", "poision"],
        about : "Weight : 69kg",
        about2 : "Height: 7 m",
        abilities : "overgrow",
        abilities2 : "chlorophyll",
        stats: {
            hp: 40,
            attack: 72,
            defense: 53,
            special_attack: 60,
            special_defense: 80,
            speed: 75
        }
    },
    {
        id: 2,
        img: " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        name: "ivysaur",
        ability: ["grass", "poision"],
        about : "Weight : 130 kg",
        about2 : "Height: 10 m",
        abilities : "overgrow",
        abilities2 : "chlorophyll",
        stats: {
            hp: 89,
            attack: 72,
            defense: 43,
            special_attack: 100,
            special_defense: 50,
            speed: 55
        }
    },
    {
        id: 3,
        img: " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        name: "charmander",
        ability: ["fire"],
        about : "Weight : 85kg",
        about2 : "Height: 6 m",
        abilities : "blaze",
        abilities2 : "solar-power",
        stats: {
            hp: 99,
            attack: 62,
            defense: 53,
            special_attack: 65,
            special_defense: 57,
            speed: 66
        }
    },
    {
        id: 4,
        img: " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
        name: "charmeleon",
        ability: ["fire"],
        about : "Weight : 190kg",
        about2 : "Height: 11 m",
        abilities : "blaze",
        abilities2 : "solar-power",
        stats: {
            hp: 90,
            attack: 42,
            defense: 47,
            special_attack: 78,
            special_defense: 100,
            speed: 70
        }
    },
    {
        id: 5,
        img: " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        name: "charizard",
        ability: ["fire", "flying"],
        about : "Weight : 905kg",
        about2 : "Height: 17 m",
        abilities : "blaze",
        abilities2 : "solar-power",
        stats: {
            hp: 23,
            attack: 62,
            defense: 23,
            special_attack: 30,
            special_defense: 90,
            speed: 25
        }
    },
    {
        id: 6,
        img: " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
        name: "wartortle",
        ability: ["water"],
        about : "Weight : 225kg",
        about2 : "Height: 10 m",
        abilities : "torrent",
        abilities2 : "rain-dish",
        stats: {
            hp: 29,
            attack: 32,
            defense: 100,
            special_attack: 90,
            special_defense: 100,
            speed: 75
        }
    }
]