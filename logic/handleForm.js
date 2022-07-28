/** @const handleForm is a tool handle the different form information validations */
const handleForm = {
    /** @func handleEmail validate if email input respects the email template and format */
    handleEmail: (input) => {
        const regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
        return regex.test(input)
    },
    /** @func handlePassword validate if password input respects the email template and format */
    handlePassword: (input) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        return regex.test(input)
    }
}

module.exports = handleForm