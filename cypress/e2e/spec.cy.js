describe('cy.tat("anchors")', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('"POST me" anchor triggers a POST request on click', () => {
    cy.intercept('POST', 'https://api.example.com', { body: 'Yo!' }).as('postReq')
    cy.contains('a', 'POST me').click().blur()
    cy.wait('@postReq').its('response.body').should('be.equal', 'Yo!')
  })

  it('"Download" anchor downloads a file on click', () => {
    cy.contains('a', 'Download').click().blur()
    cy.readFile('./cypress/downloads/helloworld.txt').as('fileContent')
    cy.get('@fileContent').should('be.equal', 'Hello, World!')
  })
})
