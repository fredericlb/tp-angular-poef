context('Connexion', () => {

  it('soit un utilisateur qui se connecte quand il saisit le bon mot de passe alors il peut jouer', () => {
    cy.visit('http://127.0.0.1:4200');
    cy.contains('Je me connecte').click();

    cy.get('input[name=email]').type('fred@parapluie.org');
    cy.get('input[name=password]').type('test');
    cy.get('input[type=submit]').click();
    cy.contains('Je joue');
  })

  it('soit un utilisateur qui se connecte quand il saisit le mauvais mot de passe alors il ne peut pas jouer', () => {
    cy.visit('http://127.0.0.1:4200');
    cy.contains('Je me connecte').click();

    cy.get('input[name=email]').type('fred@parapluie.org');
    cy.get('input[name=password]').type('mauvais');
    cy.get('input[type=submit]').click();
    cy.contains('Je joue').should('not.exist');
  })
});
