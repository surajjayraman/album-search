
describe('tests to see if cypress is working', () => {

    it('can visit the web page', () => {
        cy.visit('http://localhost:8002/')
    });
})