describe('tests for the input field', () => {

    it('can type into the search input field', () => {
        cy.visit('/')
            .intercept("GET", "**/search*", { fixture: "itunes.json" })
            .as("itunesResults");

        cy.get('.search__form')
            .find('input.radius')
            .type("Daft Punk", { delay: 200 });

        cy.get(".spinner")
            .should("be.visible");
    });


});