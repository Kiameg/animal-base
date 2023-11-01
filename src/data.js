const data = [
  {
    fullname: "Mandu the amazing cat",
    age: 9,
  },

  {
    fullname: "Mia the black cat",
    age: 9,
  },
  {
    fullname: "Leeloo the barking dog",
    age: 1,
  },
  {
    fullname: "Toothless the fierce dragon",
    age: 14,
  },
  {
    fullname: "Scooby the hungry dog",
    age: 5,
  },

  {
    fullname: "Horsey the horsing horse",
    age: 10,
  },
];

export function getData() {
  return data.map((animal) => {
    const [name, , trait, species] = animal.fullname.split(" ");
    return {
      name,
      trait,
      species,
      age: animal.age,
    };
  });
}
