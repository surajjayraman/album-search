
describe('tests to see if cypress is working', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8002/');
    })

    it('can uncheck the explicit checkbox', () => {

        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
    });

    it('can uncheck the explicit checkbox', () => {

        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
            .should('not.be.checked')
    });


    it('can uncheck the explicit by clicking on the label', () => {

        cy.contains('EP')
            .click()

        cy.get("#EP")
            .should("be.checked")

    });
})