function addition(a, b) {
    return a + b;
}

// console.log(addition(1, 7));

function pokeMe() {
    console.log("meow");
}

function approachSomeone(someoneToPoke) {
    // console.log("Tip Tap Tip Tap");
    // someoneToPoke();
}

approachSomeone(pokeMe);



///BRUG ALTID DENNE SYNTAKS
const introduce = (name) => {
    console.log("Hello my name is", name);
}

introduce("Frederik");

const prepareIntroduction = (introducerFunction, name) => {
    console.log("hmmmmmmmmhmhmhmmm");
    introducerFunction(name);
}

//prepareIntroduction(introduce, "Frederik");

const obj = {
    name: "Frederik Jensen",
    age: 24,
    hobby: "lol jungler"
};

const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

//aboutMe(obj);

const callLater = {
    toCall: () => {
        console.log("hej");
    }
};

callLater.toCall()
console.log(callLater);


