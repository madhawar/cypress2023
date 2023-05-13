class Bazooka {

user_login(Username, Password) {
    cy.get('input[placeholder="Username"]').type(Username)
    cy.get('input[placeholder="Password"]').type(Password)
    // cy.get('[data-testid="signIn"]').click()
    cy.getBySel('signIn')
}

assert_sign_in_page() {
    cy.contains('Electronic Control System').then(($el) => {
        expect($el).to.be.visible
    })
}

}

export default Bazooka