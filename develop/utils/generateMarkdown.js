// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation Guidlines](#installation)
  - [How to make use of this app](#use)
  - [I need a license for this?](#license)
  - [How to contribute to this already stellar application](#contribute)
  - []



`;
}

module.exports = generateMarkdown;
