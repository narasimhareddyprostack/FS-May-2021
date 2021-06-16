let contact = {
  gender: "male",
  name: {
    title: "Mr",
    first: "Kaspian",
    last: "Sund",
  },
  location: {
    street: {
      number: 101,
      name: "Rundhaugveien",
    },
    city: "Leirvik",
    state: "Vest-Agder",
    country: "Norway",
    postcode: "6220",
    coordinates: {
      latitude: "55.6425",
      longitude: "-21.3266",
    },
    timezone: {
      offset: "+4:30",
      description: "Kabul",
    },
  },
  email: "kaspian.sund@example.com",
  login: {
    uuid: "7da0b7e4-f225-407e-8e06-310621bf6a08",
    username: "angrygorilla307",
    password: "tracey",
    salt: "8iiwaD5W",
    md5: "117987d9722b8fb5bee9aae9df4b04d7",
    sha1: "903ed68e1e543fcedacdfada04d24e425478c7e5",
    sha256: "b2af09e7ccdc0b1101040e12a8b2c6bd18752ce6918b8469deb8d9d9898ab507",
  },
  dob: {
    date: "1948-11-09T21:27:30.452Z",
    age: 72,
  },
  registered: {
    date: "2002-09-23T02:02:39.498Z",
    age: 18,
  },
  phone: "30794605",
  cell: "46208786",
  id: {
    name: "FN",
    value: "09114814943",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/40.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
  },
  nat: "NO",
};

let {
  login: { username },
} = contact;
console.log(username);
