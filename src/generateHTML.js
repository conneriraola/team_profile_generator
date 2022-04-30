function generateHTML (managers, engineers, interns) {
    managerArr = managers;
    engineerArr = engineers;
    internArr - interns;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team</title>
    </head>
    <body>
        <header class="header container-fluid">
            <h1>My Team</h1>
        </header>

        <section class="management container-fluid">
            <h2>Management</h2>
        </section>
        <div class="row">
        ${generateManagerCards(managerArr)}
        </div>
        <section class="engineers container-fluid">
            <h2>Engineers</h2>
        </section>
        <div class="row">
        ${generateEngineerCards(engineerArr)}
        </div>
        <section class="interns container-fluid">
            <h2>Interns</h2>
        </section>
        <div class="row">
        ${generateInternCards(internArr)}
        </div>



    </body>
    </html>`
}


function generateManagerCards (managersArr) {
    if (!managerArr) {
        return '';
    }
    const managerCardsArr = managersArr.map(managerData => {
        return `
        <div class="card style="width: 18rem;">
            <div class="card-body">
                h5 class="card-title">${managerData,name}</h5>
                <p class="card-text">ID: ${managerData.id}</p>
                <p class="card-text">Email: ${managerData.email}</p>
                <p class="card-text">Office Number: ${managerData.office}</p>
            </div>
        </div>`
    });
    return `
    ${managerCardsArr.join(`
    `)}
    `
};

function generateEngineerCards (engineerArr) {
    if (!engineerArr) {
        return '';
    }
    const engineerCardsArr = engineerArr.map(engineerData => {
        return `
        <div class="card style="width: 18rem;">
            <div class="card-body">
                h5 class="card-title">${engineerData,name}</h5>
                <p class="card-text">ID: ${engineerData.id}</p>
                <p class="card-text">Email: ${engineerData.email}</p>
                <p class="card-text">Office Number: ${engineerData.office}</p>
                <a href="https://github.com/${engineerData.github}" class="btn btn-primary">Github</a>
            </div>
        </div>`
    });
    return `
    ${engineerCardsArr.join(`
    `)}
    `
};

function generateInternCards (internArr) {
    if (!internArr) {
        return '';
    }
    const internCardsArr = internArr.map(internData => {
        return `
        <div class="card style="width: 18rem;">
            <div class="card-body">
                h5 class="card-title">${internData,name}</h5>
                <p class="card-text">ID: ${internData.id}</p>
                <p class="card-text">Email: ${internData.email}</p>
                <p class="card-text">Office Number: ${internData.office}</p>
                <p class="card-text">School: ${internData.school}</p>
            </div>
        </div>`
    });
    return `
    ${internCardsArr.join(`
    `)}
    `
};


module.exports = generateHTML;


