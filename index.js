const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const Employee = require ('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');

let managers = [];
let engineers = [];
let interns = [];

let questions = employeeData => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "employeeType",
            message: "Enter type of employee",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "Enter office number:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter github username",
            when: function (data) {
                if (data.employeeType === "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school",
            when: function (data) {
                if (data.employeeType === "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAnotherEmployee",
            message: "Would you like to add another employee?",
            default: false
        },
    ])
    .then(answerData => {
        if (answerData.employeeType === "Manager") {
            let manager = new Manager (answerData.name, answerData.id, answerData.email, answerData.office);
            managers.push(manager);
        }
        if (answerData.employeeType === "Engineer") {
            let engineer = new Engineer (answerData.name, answerData.id, answerData.email, answerData.office, answerData.github);
            engineers.push(engineer);
        }
        if (answerData.employeeType === "Intern") {
            let intern = new Intern (answerData.name, answerData.id, answerData.email, answerData.office, answerData.school);
            interns.push(intern);
        }
        if (answerData.confirmAnotherEmployee) {
            return questions(employeeData);
        } else {
            return employeeData;
        }
    });
}


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team_profile.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: "File Created"
            });
        });
    });
};


function start() {
    questions()
    .then(data => {
        return generateHTML(managers, engineers, interns);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
}


start();