// function to generate markdown for README
function generateMarkdown(data) {  
  let licenseLink = "";//given the direction I took with the logic, the license isn't generated till after the user makes their choice of license
  return `
  
  # ${data.title}

  # Description:
  ${data.description}

  # Table of Contents:
  - [Description](#description)
  - [Installation Guidlines](#installation-guidlines)
  - [Application Usage](#use)
  - [License In Use](#license-in-use)
  - [How to Contribute to This Already Stellar App](#contribution-Guidlines)
  - [Tests](#how-to-run-tests)
  - [Questions](#questions)

  # Installation Guidlines:
  ${data.installation}

  # Use:
  ${data.use}

  # How To Run Tests:
  ${data.test}

  # License in use:
  This project uses the following license: [${data.license}](${licenseLink}).
  
  ![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)

  # Contribution Guidlines:
  ${data.contribute}

  # Questions:
  Github Profile: (https://www.github.com/${data.moniker})
  
  Feel free to reach out: ${data.email}
`;
}
module.exports = generateMarkdown;
