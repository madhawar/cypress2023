/// <reference types="Cypress" />

import Bazooka from './commons/bazooka'

describe('Bazooka Sites Menu Verification', () => {
  const bazooka = new Bazooka()

    let login
    before(() => {
        cy.fixture('logins').then((loginData) => {
            login = loginData
        })
    })

    beforeEach(() => {
      cy.visit(login.url)           
    })

  it('Open Bazooka and click on Sites', () => {   
    bazooka.assert_sign_in_page()  
    bazooka.user_login(login.valid.username, login.valid.password)
  })

})