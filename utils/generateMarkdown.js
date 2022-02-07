//creates readme that appears as shown below using data from inputs.
function generateMarkdown(data) {
  return `# ${data.title} ![Github License](https://img.shields.io/badge/license-${data.license}-green.svg)

  ## Table of Contents

  
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contribution)
  5. [Test](#test)
  6. [Contact](#contact)
  7. [License](#license)
  

  ## Description
  ${data.description}


  ## Installation
  ${data.install}

  
  ## Usage
  ${data.usage}


  ## Contributors
  ${data.contribution}
  
  ## Test
  ${data.test}


  ## Contact
  Email: ${data.email}   
  Github: https://github.com/${data.github} 


  ## License
  ${data.license} license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.


  `;
}

module.exports = generateMarkdown;

