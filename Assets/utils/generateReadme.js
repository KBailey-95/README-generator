// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
${answers.projectTitle} 👋
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${answers.installation}
## Usage
💻 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


This application is covered by the ${answers.license} license. 
## Contributing
👪 ${answers.contributing}
## Tests
✏️ ${answers.tests}
## Questions
✋ ${answers.questions}


Link to my GitHub: [${answers.username}](https://github.com/${answers.username})`;
  }
  
  module.exports = generateReadme;