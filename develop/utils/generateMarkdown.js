// function to generate markdown for README
function generateMarkdown(data) {
  // if they choose apache, then your license link is apache, so on so forth for the others, use a switch or an if/else if
  let licenseLink = "";
  return `
  
  # ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents:
  - [Description](#description)
  - [Installation Guidlines](#installation-Guidlines)
  - [How to make use of this app](#use)
  - [License in use](#license-in-use)
  - [How to contribute to this already stellar application](#contribution-Guidlines)
  - [Tests](#how-to-run-tests)
  - [Questions](#questions)

  ## Installation Guidlines:
  ${data.installation}

  ## Use:
  ${data.use}

  ## How to run tests:
  ${data.test}

  ## License in use:
  This project uses the following license: [${data.license}](${licenseLink}).
  
  ![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)

  ## Contribution Guidlines
  ${data.contribute}

  ## Questions
  [Github profile](https://www.github.com/${data.moniker})
  You can email me with questions at ${data.email}.




`;
}

module.exports = generateMarkdown;
