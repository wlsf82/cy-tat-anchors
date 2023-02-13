const options = { viewportWidth: 380, viewportHeight: 200}

describe('cy.readFile()', options, () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('"Download" anchor downloads a file on click', () => {
    cy.contains('a', 'Download').click()
    cy.readFile('./cypress/downloads/helloworld.txt').as('fileContent')
    cy.get('@fileContent').should('be.equal', 'Hello, World!')
  })
})
