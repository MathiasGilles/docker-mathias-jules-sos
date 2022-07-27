const handleForm = require('./handleForm.js')


describe("HandleEmail", () => {
    describe('does not work', () => {
        it('Should return false if email is invalid', () => {
            expect(handleForm.handleEmail('Oui')).toBe(false)
        })
    })
    describe('works', () => {
        it('Should return true if email is valid', () => {
            expect(handleForm.handleEmail('julesgabriel.dayaux@gmail.com')).toBe(true)
        })
    })
})