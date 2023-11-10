
describe('tests to see if cypress is working', () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it('can uncheck the explicit checkbox', () => {

        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
    });
})
