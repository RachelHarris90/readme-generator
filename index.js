const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines for your project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions for your project?'
        },
        {
          type: 'list',
          name: 'license',
          message: 'Select the license for your project',
          choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'The Unlicense', 'Boost Software License 1.0']
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your Github username?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
      },
    ]);
} 

const generateHTML = ({ title, description, installation, usage, contribution, test, license, github, email}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${title}</h1>
    <h3>License: <span class="badge badge-secondary">${license}</span></h3>
    <ul class="list-group pb-3">
      <li class="list-group-item"><a href="#description">Description</a></li>
      <li class="list-group-item"><a href="#installation">Installation </a></li>
      <li class="list-group-item"><a href="#usage">Usage</a></li>
      <li class="list-group-item"><a href="#contribution">Contributing guidelines</a></li>
      <li class="list-group-item"><a href="#test">Tests</a></li>
      <li class="list-group-item"><a href="#questions">Questions</a></li>
    </ul>
    <h2 class="display-5" id="description">Description</h2>
      <p>${description}.</p>
    <h2 class="display-5" id="installation">Installation</h2>
      <p>${installation}.</p>
    <h2 class="display-5" id="usage">Usage</h2>
      <p>${usage}.</p>
    <h2 class="display-5" id="contribution">Contributing</h2>
      <p>${contribution}.</p>
    <h2 class="display-5" id="test">Tests</h2>
      <p>${test}.</p>
    <h2 class="display-5" id="license">License</h2>
      <p>The license for this project is ${license}.</p>
    <h2 class="display-5" id="questions">Questions</h2>
      <p>If you'd like to know more about this project, you can reach out to me at <a href="mailto:${email}">${email}</a>. Alternatively, check out my Github profile <a href="https://github.com/${github}">${github}.</a>
  </div>
</div>
</body>
</html>`;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
