// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  } else {
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
console.log(data.contribute)
  return `
# ${data.title}

## Project Description
  ${data.description}


## Table of Contents

  1. [Installation](#installation)
  2. [Language](#language)
  3. [Contribute](#contribute)
  4. [Test](#test)
  5. [License](#license)
  6. [Contact](#contact)

## Installation
  ${data.instruction}

## Language
  ${data.language}

## Contribute
  ${data.contribute}

## Test
  ${data.test}

## Licence
  ${renderLicenseSection(data.license)}

## Questions
If you have any questions, please reach out to me at: 

  Github Profile: https://github.com/${data.Github}

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
