// --- CONSTANTS ---

let team = [
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        foto: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        foto: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        foto: "../img/barbara-ramos-graphic-designer.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        foto: "../img/scott-estrada-developer.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        foto: "../img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Wayne Barnett",
        role: "Founder CEO",
        foto: "../img/wayne-barnett-founder-ceo.jpg"
    }
];

for (let i = 0; i < team.length; i++){
    const member = team[i];

    // console.log(`Il membro del team: ` + member.name + `lavora come` + member.role);

    const memberText = `<div class="card">Il membro del team: ${member.name} lavora come ${member.role}</div>`;

    document.getElementById("container").innerHTML += memberText;
}