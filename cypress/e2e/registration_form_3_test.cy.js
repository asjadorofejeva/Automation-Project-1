beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})
describe('This is the test suite for visual tests for registration form 3,', () => {
    it('Checkboxes, their content and links', () => {
        cy.get('input[type="checkbox"]').should('have.length', 2)
        cy.get('input[type="checkbox"]').parent().should('contain', 'Accept our privacy policy')
        cy.get('input[type="checkbox"]').parent().get('a[href]').should('contain', 'Accept our cookie policy')
    }) 
    it('Radio buttons and its content', () => {
        cy.get('input[type="radio"]').should('have.length', 4)
        // Verify labels of the radio buttons
        cy.get('input[type="radio"]').next().eq(0).should('have.text','Daily')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','Weekly')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','Monthly')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','Never')
    }) 
    it('Country dropdown is correct', () => {
        cy.get('#country').children().should('have.length', 4)            
        // Check  that first element in the dropdown has text 
        cy.get('#country').find('option').eq(0).should('have.text', '')
    })
    it('choose country and then verify content of city',  () => {
    cy.get('#country').select('Spain')
    cy.get('#city').children().should('have.length', 5)
})
    describe('This is the test suite for functional tests for registration form 3,', () => {
    it('Email format', () => {
        cy.get('input[name="email"]').type('asja')
        cy.get('#emailAlert').should('be.visible').should('contain', 'Invalid email address')
})
    it('Mandatory fields filled in + corresponding assertions', () => {

        cy.get('input[name="email"]').type('asja@gmail.com')
        cy.get('#name').type('asja')
        cy.get('#country').select('Spain')
        cy.get('#city').select('Malaga')
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="submit"]').should('be.enabled');
        cy.get('input[type="submit"]').click()
        cy.url().should('contain', '/upload_file.html');
    })
})
})

//BONUS TASK: add functional tests for registration form 3
//Task list:
//Create tests to verify logic of the page:
//all fields are filled in + corresponding assertions
//only mandatory fields are filled in + corresponding assertions
//mandatory fields are absent + corresponding assertions (try using function)
//add file functionlity(google yourself for solution!