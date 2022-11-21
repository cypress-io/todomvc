describe('Testiraj nesto', () => {
    it(['smoke'], 'test 1', () => {
        cy.visit('/');
    });  
    it('test 2', () => {
        cy.log('/');
    }); 
})