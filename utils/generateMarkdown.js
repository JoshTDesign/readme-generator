
function renderLicenseBadge(licenses) {
  if (licenses == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#licence)\n`
  } else if (licenses == 'GNU GPLv3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)\n`
  } else if (licenses == 'GNU AGPLv3') {
    return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)\n`
  } else if (licenses == 'GNU LGPLv3') {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)\n`
  } else if (licenses == 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)\n`
  } else if (licenses == 'Apache License 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)\n`
  } else if (licenses == 'Boost Software License 1.0') {
    return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)\n`
  } else if (licenses == 'The UnLicense') {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)\n`
  } else {
    return ""
  }
}

function renderLicenseLink(licenses) {
  if (licenses == 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (licenses == 'GNU GPLv3') {
    return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenses == 'GNU AGPLv3') {
    return `[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (licenses == 'GNU LGPLv3') {
    return `[GNULGPLv3](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (licenses == 'Mozilla Public License 2.0') {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
  } else if (licenses == 'Apache License 2.0') {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenses == 'Boost Software License 1.0') {
    return `[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (licenses == 'The UnLicense') {
    return `[The UnLicense](http://unlicense.org/)`
  } else {
    return ""
  }
}

function renderTitle(title) {
  if (title) {
    return `# ${title}`
  } else {
    return `# No Title`
  }
}

function renderDescription(description) {
  if (description) {
    return `${description}`
  } else {
    return ``
  }
}

function renderFeatures(features) {
  if (features) {
    return `
## Features  

*** 

${features}`
  } else {
    return ``
  }
}

function renderChallenges(challenges) {
  if (challenges) {
    return `
### Challenges encountered  
${challenges}`
  } else {
    return ``
  }
}

function renderInstall(install) {
  if (install) {
    return `
### How to install  
${install}`
  } else {
    return ``
  }
}

function renderCredits(credits) {
  if (credits) {
    return `
### Where credit is due  
${credits}`
  } else {
    return ``
  }
}

function renderContribute(contribute) {
  if (contribute) {
    return `
### How to contribute  
${contribute}`
  } else {
    return ``
  }
}

function renderLicenseDescription(licenses) {
  if (licenses) {
  return `

### License  
This work is covered under ${licenses}.\n\n See this link for more information:
${renderLicenseLink(licenses)}  `
  } else {
    return ``;
  }
}

function renderQuestions(github, email) {
  if (github) {
  return `

### Questions 
If you have any questions or would like to suggest new features for this project, please contact me here: 
http://www.github.com/${github}    
or you can email me at: ${email}
`
  } else {
    return ``;
  }
}

function renderTOC(features, challenges, install, credits, contribute, licenses) {
  let myTOC = "";
    features ? myTOC = myTOC+`[Features](#features)  \n` : myTOC = myTOC+``;
    challenges ? myTOC = myTOC+`[Challenges encountered](#challenges-encountered)  \n` : myTOC = myTOC+``;
    install ? myTOC = myTOC+`[How to install](#how-to-install)  \n` : myTOC = myTOC+``;
    credits ? myTOC = myTOC+`[Credits](#where-credit-is-due)  \n` : myTOC = myTOC+``;
    contribute ? myTOC = myTOC+`[How to contribute](#how-to-contribute)  \n` : myTOC = myTOC+``;
    licenses ? myTOC = myTOC+`[License](#licence)  \n` : myTOC = myTOC+``;
  return myTOC;
}




// Create a function to generate markdown for README
const generateMarkdown = (data) => {
return `  
${renderTitle(data.title)}
${renderLicenseBadge(data.licenses)}
${renderDescription(data.description)}
## Table of contents

***

${renderTOC(data.features, data.challenges, data.install, data.credits, data.contribute, data.licenses)}
${renderFeatures(data.features)}
${renderChallenges(data.challenges)}
${renderInstall(data.install)}
${renderCredits(data.credits)}
${renderContribute(data.contribute)}
${renderLicenseDescription(data.licenses)}
${renderQuestions(data.github, data.email)}


`

}
module.exports = {
  generateMarkdown
}