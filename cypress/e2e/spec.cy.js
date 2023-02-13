describe('cy.tat("anchors")', { viewportWidth: 380, viewportHeight: 200}, () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('"POST me" anchor triggers a POST request on click', () => {
    cy.intercept('POST', 'https://api.example.com', { body: 'Yo!' }).as('postReq')
    cy.contains('a', 'POST me').click().blur()
    cy.wait('@postReq').its('response.body').should('be.equal', 'Yo!')
  })
})
