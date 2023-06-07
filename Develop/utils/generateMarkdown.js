// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Check the value of the license and return the corresponding badge
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD 3'){
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  // If the license value doesn't match any specific badges, return an empty string
  return '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // Check the value of the license and return the corresponding link
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  }
  // If there is no license, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // Check if a license is provided
  if (license) {
    // Return the license section with a link to the license
    return `## License\n\nThis project is licensed under the [${license} License](${renderLicenseLink(license)})`;
  }
  // If there is no license, return an empty string
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate the markdown content for the README using the provided data
  return `# ${data.title}\n${renderLicenseBadge(data.license)}\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n${renderLicenseSection(data.license)}\n\n## Contributing\n\n${data.contributing}\n\n## Tests\n\n${data.tests}\n\n## Questions\n\nFor any questions, please contact me:\n\n- GitHub: [${data.github}](https://github.com/${data.github})\n- Email: ${data.email}\n`;
}

module.exports = generateMarkdown;
