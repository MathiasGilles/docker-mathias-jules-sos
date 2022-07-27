const handleForm = require('./handleForm.js')


describe("HandlePassword", () => {
    describe('Does not work', () => {
        it('Should return false if email is invalid', () => {
            expect(handleForm.handlePassword('password')).toBe(false)
        })
    })
    describe('works', () => {
        it('Should return true if email is valid', () => {
            expect(handleForm.handleEmail('Password123@')).toBe(true)
        })
    })
})