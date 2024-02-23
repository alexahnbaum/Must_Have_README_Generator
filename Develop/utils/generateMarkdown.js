// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge = "";
  // if else statement to give badge based on what license is picked
  if (data.license === "mit") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license === "apl") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.license === "mpl") {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseURL = "";
  // if else statement to give link based on what license is picked
  if (data.license === "mit") {
    licenseURL = "https://api.github.com/licenses/mit";
  } else if (data.license === "apl") {
    licenseURL = "https://api.github.com/licenses/apache-2.0";
  } else if (data.license === "mpl") {
    licenseURL = "https://api.github.com/licenses/mpl-2.0";
  } else {
    licenseURL = "";
  }
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const badge = renderLicenseBadge(data);
  const link = renderLicenseLink(data);
  // if else statement to give license or an empy string if none
  if (data.license === "mit" || "apl" || "mpl") {
    return `${badge} ${link}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${data.description}

  ---
  
  **Table of contents**
  
  - [Installation](#item-one)
  - [Usage](#item-two)
  - [Contributing](#item-three)
  - [Tests](#item-four)
  - [License](#item-five)
  - [Questions](#item-six)
  
  ---
  
  <a id="item-one"></a>
  
  ### INSTALLATION
  
  ${data.installation}
  
  <a id="item-two"></a>
  
  ### USAGE
  
  ${data.usage}
  
  <a id="item-three"></a>
  
  ### CONTRIBUTING
  
  ${data.contribution}
  
  <a id="item-four"></a>
  
  ### TESTS
  
  ${data.testing}
  
  <a id="item-five"></a>
  
  ### LICENSE
  
  ${renderLicenseSection(data)}
  
  <a id="item-six"></a>
  
  ### QUESTIONS
  
  If you have questions you can get in touch via the contacts below:

  ${data.GitHub}

  ${data.email}
`;
}

module.exports = generateMarkdown;
