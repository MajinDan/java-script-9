//profile lookup
let contacts = [
    {
        "firstname": "akira",
        "lastname": "laine",
        "number": "0543236543",
        "likes": ["Pizza", "coding", "Brownie points"]
    },
    {
        "firstname": "harry",
        "lastname": "potter",
        "number": "0553236543",
        "likes": ["hogwarts", "magic", "hagrid"]
    },
    {
        "firstname": "sherlock",
        "lastname": "hol",
        "number": "0543226543",
        "likes": ["intriguing", "cases", "violin"]
    },
    {
        "firstname": "kristian",
        "lastname": "vos",
        "number": "054327543",
        "likes": ["java", "gaming", "foxes"]
    },
];
function lookUpProfile(name, prop){
    for (let i = 0; i < contacts.length; i++){
        if (contacts[i].firstname === name){
            return contacts[i][prop] || "no such property";
        }
    }
    return "no such contact"
}
let data = lookUpProfile("bob", "likes")
console.log(data);