describe('negativan register', () => {
    it('open gallery app', () => {
        cy.visit('')
    })

    it('click register button', () =>{
        cy.get('a[href="/register"]').click()
    })

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    it('fill register form', () => {
        /*//cy.get('input[id="first-name"]').type('') prazan username ili ga samo izbrisemo da ne popunjava jer je default prazan
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        //cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        //cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        //cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        //cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        //cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslavarusija.com') //bez @
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(4000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type(makeid(6) + '@rusija.com')
        cy.get('input[id="password"]').type('1234')        //short password
        cy.get('input[id="password-confirmation"]').type('1234')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type(makeid(6) + '@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('11111111') //wrong confirm
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()*/

        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type(makeid(6) + '@чћжћ') //special characters in email
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
    })

    


})

/*describe('register spec', () => {
    it('open gallery app', () => {
        cy.visit('')
    })

    it('click register button', () =>{
        cy.get('a[href="/register"]').click()
    })

    it('fill register form', () => {
        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
    })

    
})*/