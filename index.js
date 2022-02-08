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
          type: 'input',
          name: 'license',
          message: 'Select the license for your project'
        },
//TODO: Add list of licence options
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
  <h3>License: <span class="badge badge-secondary">${license}</span></h3>
    <h1 class="display-4">${title}</h1>
    <ul class="list-group pb-3">
      <li class="list-group-item"><a href="#description">Description</a></li>
      <li class="list-group-item"><a href="#installation">Installation instructions</a></li>
      <li class="list-group-item"><a href="#usage">Usage information</a></li>
      <li class="list-group-item"><a href="#contribution">Contribution guidelines</a></li>
      <li class="list-group-item"><a href="#test">Test instructionss</a></li>
      <li class="list-group-item"><a href="#questions">Questions</a></li>
    </ul>
    <h2 class="display-5" id="description">Description</h2>
      <p>${description}.</p>
    <h2 class="display-5" id="installation">Installation instructions</h2>
      <p>${installation}.</p>
    <h2 class="display-5" id="usage">Usage information</h2>
      <p>${usage}.</p>
    <h2 class="display-5" id="contribution">Contribution guidelines</h2>
      <p>${contribution}.</p>
    <h2 class="display-5" id="test">Test instructions</h2>
      <p>${test}.</p>
    <h2 class="display-5" id="license">License</h2>
      <p>${installation}.</p>
    <h2 class="display-5" id="questions">Questions</h2>
      <p>My GitHub username is <a href="https://github.com/${github}">${github}</a></p>
      <p>Contact me via email at <a href="mailto:${email}">${email}</a></p>
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
