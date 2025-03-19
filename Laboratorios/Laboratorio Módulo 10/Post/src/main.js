import Axios from "axios";

const nuevoActor = {
    name: "Tom Holland",
    movies: [
        "Captain America: Civil War",
        "Spider-Man: Homecoming",
        "Avengers: Infinity War",
        "Spider-Man: Far From Home",
        "Spider-Man: No Way Home"
    ],

    bio: "Thomas Stanley Holland is an English actor. A graduate of the BRIT School in London, he began his acting career on stage in the title role of Billy Elliot the Musical in the West End from 2008 to 2010. He gained further recognition for his starring role in the disaster film The Impossible (2012), receiving the London Film Critics Circle Award for Young British Performer of the Year.",
    image: "https://example.com/tom-holland.jpg"
    
};

// SOLUCIÓN 1: AXIOS.
//const añadeActor = async () => {
//    try {
//        const response = await Axios.post("http://localhost:3000/actors", nuevoActor);
//        console.log(response.data);
//    }
//
//    catch (error) {
//        console.error(error);
//    }
//};
//
//añadeActor();

// SOLUCIÓN 2: FETCH.

const agregaActor = async () => {
    try {
        const response = await fetch("http://localhost:3000/actors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoActor)
        });
        console.log(response);

    }

    catch (error) {
        console.error(error);
    }   

};

agregaActor();
