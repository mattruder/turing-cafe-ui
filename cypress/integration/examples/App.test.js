describe('Turing Cafe App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('User should see the title, form and reservations', () => {
     cy.get('.app-title').contains('Turing Cafe Reservations')
     cy.get('.resy-form').contains('Name')
     cy.get('.resy-container').contains('Christie')
   })

  it('User should see what they type into the inputs be reflected as values in the input fields', () => {
    cy.get('.name-input').type('hello')
    cy.get('.name-input').should('have.value', 'hello')
  })

  it('User should be able to add reservations to the page', () => {
    cy.get('.name-input').type('Bilbo')
    cy.get('.date-input').type('2022-07-26')
    cy.get('.time-input').type('12:00')
    cy.get('.guests-input').type('2')
    cy.get('.make-reservation-input').click()
    cy.get('.resy-container').contains('Bilbo')
  })


})
