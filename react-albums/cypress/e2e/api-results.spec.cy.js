describe('tests for the input field', () => {

    it('can type into the search input field', () => {
        cy.visit('/')
            .intercept("GET", "**/search*", { fixture: "itunes.json" })
            .as("itunesResults");
    });
});