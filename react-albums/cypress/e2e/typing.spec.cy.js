
describe('tests for the input field', () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it('it can type into the input field', () => {

        cy.get('.search__form')
        .find("input.radius")
        .type("shakira", {delay: 250})

    });
})
