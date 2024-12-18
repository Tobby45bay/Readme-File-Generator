// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license || license ==='None'){
    return '';
  }
  const licenseBadge = {
    'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0':'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause':'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  }

  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license || license ==='None'){
    return '';
  }
  const licenseLink = {
    'MIT':'(https://opensource.org/licenses/MIT)',
    'Apache 2.0':'(https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause':'(https://opensource.org/licenses/BSD-3-Clause)'
  }

  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license || license === "None"){
    return '## License\nThis project is not licensed.'
  }

  const licenseLink = renderLicenseLink(license);

  return `
  ## License
   This project uses the [${license}] ${licenseLink} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)
  return `
  # ${data.title}

  ${badge}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Insallation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#questions)

  ## Insallation
  ${data.insallation}

  ## Usage
  ${data.usage}

  ## Contributing
  [${data.contributing}](https://github.com/${data.contributing})

  ## Tests
  ${data.tests}

  ${licenseSection}

  ## Questions
  If you have any questions you can conatct me at
  (https://${data.questions})

`;
}

export default generateMarkdown;
