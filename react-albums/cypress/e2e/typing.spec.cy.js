
describe('tests for the input field', () => {

    beforeEach(() => {
        cy.visit("/");

        cy.get('.search__form')
        .find("input.radius")
        .as("inputField");
    })

    it('it can type into the input field', () => {

        cy.get('@inputField')
            .type("shakira", { delay: 250 })

    });

    it('it can type backspace into the input field', () => {

        cy.get('.search__form')
            .find("input.radius")
            .type("Queennnn{backspace}{backspace}{backspace}", { delay: 250 })

    });
})
