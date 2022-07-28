const handleForm = require('./handleForm.js')

/** this test validate the handler on password */
describe("HandlePassword", () => {
    describe('Does not work', () => {
        it('Should return false if password is invalid', () => {
            expect(handleForm.handlePassword('password')).toBe(false)
        })
    })
    describe('works', () => {
        it('Should return true if password is valid', () => {
            expect(handleForm.handlePassword('Password123@')).toBe(true)
        })
    })
})