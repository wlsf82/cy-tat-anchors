const options = { viewportWidth: 380, viewportHeight: 200}

describe('cy.intercept()', options, () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('"POST me" anchor triggers a POST request on click', () => {
    cy.intercept('POST', 'https://api.example.com', { body: 'Yo!' }).as('postReq')
    cy.contains('a', 'POST me').click()
    cy.wait('@postReq').its('response.body').should('be.equal', 'Yo!')
  })
})
