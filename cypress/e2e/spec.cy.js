describe('cy.tat("anchors")', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('"Click me" anchor triggers a POST request on click', () => {
    cy.intercept('POST', 'https://api.example.com', { body: 'Yo!' }).as('postReq')
    cy.contains('a', 'Click me').click().blur()
    cy.wait('@postReq').then(request => {
      const { response } = request
      const { body } = response
      expect(body).to.equal('Yo!')
    })
  })

  it('"Download" anchor downloads a file on click', () => {
    cy.contains('a', 'Download').click().blur()
    cy.readFile('./cypress/downloads/helloworld.txt').as('fileContent')
    cy.get('@fileContent').should('be.equal', 'Hello, World!')
  })
})
