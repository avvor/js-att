describe('login', ()=> {
    beforeEach(() => {
        cy.visit('/login', {
            onBeforeLoad(win) {
                win.localStorage.removeItem('auth')
            }
        })
    })
    it('Add New User', ()=> {
        cy.get('button[id="signUp"]').click()
        cy.get('input[placeholder="Имя пользователя"]').last().type('fake').should('have.value', 'fake')
        cy.get('input[placeholder="Почта"]').first().type('fake@mail.ru').should('have.value', 'fake@mail.ru')
        cy.get('input[placeholder="Пароль"]').first().type('fakepwd').should('have.value', 'fakepwd')
        cy.get('input[placeholder="Повторите пароль"]').last().type('fakepwd').should('have.value', 'fakepwd')
        cy.contains('Зарег').click()
        cy.location('pathname').should('include', 'air-pollution')
    })
    it('Login User', () => {
        cy.get('input[type="email"]').last().type('fake@mail.ru').should('have.value', 'fake@mail.ru')
        cy.get('input[type="password"]').last().type('fakepwd').should('have.value', 'fakepwd')
        cy.contains('Войти').click()
        cy.location('pathname').should('include', 'air-pollution')
    })
    it('Login User (Invalid)', ()=> {
        cy.get('input[type="email"]').last().type('fakemail.ru').should('have.value', 'fakemail.ru')
        cy.contains('Некорректный email').should('be.visible')
        cy.get('input[type="password"]').last().type('111').should('have.value', '111')
        cy.contains('Пароль должен содержать только английские символы').should('be.visible')
    })
})

describe('air-pollution', ()=>{
    beforeEach(() => {
        cy.visit('/air-pollution', {
            onBeforeLoad(win) {
                win.localStorage.setItem('auth', 'true')
            }
        })
    })
    it('Get Air Pollution Info', () => {
        cy.get('input').type('тюмень')
        cy.contains('Получить').click().wait(5000)
        cy.contains('Тюмень, Россия').should('be.visible')
        cy.contains('57.152985, 65.541227').should('be.visible')
        cy.contains('Сохранить в БД').click()
    })
    it('Logout User', () => {
        cy.get('div.logout').parent().click()
        cy.location('pathname').should('include', '/login')
    })
})
