export const people = [
    {
        id: 1,
        name: "hide",
        age: 18,
        gender: "female",
    },
    {
        id: 2,
        name: "node",
        age: 22,
        gender: "male",
    },
    {
        id: 3,
        name: "test",
        age: 180,
        gender: "female",
    },
    {
        id: 4,
        name: "admin",
        age: 25,
        gender: "female",
    },
    {
        id: 5,
        name: "hihi",
        age: 18,
        gender: "female",
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};