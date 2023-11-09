
describe('tests to see if cypress is working', () => {

    it('can uncheck the explicit checkbox', () => {
        cy.visit('http://localhost:8002/');

        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
    });

    it('can uncheck the explicit checkbox', () => {
        cy.visit('http://localhost:8002/');

        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
            .should('not.be.checked')
    });


    it('can uncheck the explicit by clicking on the label', () => {
        cy.visit('http://localhost:8002/');
        cy.contains('EP')
            .click()

    });
})