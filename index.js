const data = {
    name: "JD",
    age: 44,
    address: '555 coding dr',
    info: {
        location: "Atlanta",
        county: "Cobb",
        places: ["Lake Acworth", "Gorgia Aquarium"]
    }
};

// within the {} write the properties you want to use from the object being referenced
const {name, phone, info: {location}} = data;

// console.log(location);

function printData({color, length}) {
    console.log(length);
}


printData({
    color: "blue",
    length: 10
})