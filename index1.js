//record colleection

let collection = {
    "2548": {
        "album": "slippery when wet",
        "artist": "bon jovi",
        "tracks": [
            "lets it rock",
            "you give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
}

let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection
}
updateRecords(1245, "tracks", "test");
console.log(updateRecords("5439", "article", "ABBA"));