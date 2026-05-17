const students = [
    {
        name: "Rahul Sharma",
        course: "Computer Science",
        marks: 85
    },
    {
        name: "Anita Verma",
        course: "Information Technology",
        marks: 92
    },
    {
        name: "Rohan Gupta",
        course: "Electronics",
        marks: 78
    }
];

const container = document.querySelector(".container");

students.forEach(student => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${student.name}</h2>
        <p>Course: ${student.course}</p>
        <p>Marks: ${student.marks}</p>
    `;

    container.appendChild(card);
});