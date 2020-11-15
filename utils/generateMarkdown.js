// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#contributors)
  * [Tests] (#tests)
  * [Questions] (#questions)
  ## Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Lisence
  This is lisenced under ${data.lisence}
  ## Test
  ${data.test}
  ## Questions 
  If you have any questions, I can be found on github at ${data.userName}, or emailed at ${data.email}.

`;
}

module.exports = generateMarkdown;
