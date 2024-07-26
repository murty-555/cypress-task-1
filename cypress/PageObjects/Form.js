import locators from "./pageLocators"

class Form {
    pagelocators = locators

    clickFormCategory(){

        cy.get(this.pagelocators.category).click()
    }

    clickPracticeForm(){
        cy.get(this.pagelocators.practiceForm).click()
    }

    setFirstName(firstName){
        cy.get(this.pagelocators.firstName).type(firstName)
    }

    setLastName(lastName){
        cy.get(this.pagelocators.lastName).type(lastName)
    }

    setEmail(email){
        cy.get(this.pagelocators.email).type(email)
    }

    selectingRadioButton(gender){
        cy.get(this.pagelocators.gender).check(gender, {force: true})
    }

    setMobileNumber(number){
        cy.get(this.pagelocators.number).type(number)
    }

    setDateOfBirth(dateOfBirth){
        cy.get(this.pagelocators.dob.click).click()
        cy.get(this.pagelocators.dob.year).select(dateOfBirth.year)
        cy.get(this.pagelocators.dob.month).select(dateOfBirth.month)
        cy.get(this.pagelocators.dob.day).click()
    }

    setSubjects(subjects){
        cy.get(this.pagelocators.subjects).type(subjects)
    }

    selectCheckBoxes(){
        cy.get(this.pagelocators.checkboxes.check1).check({force:true})
        cy.get(this.pagelocators.checkboxes.check2).check({force:true})
    }

    fileUpload(){
        cy.get(this.pagelocators.fileUpload).attachFile({filePath: "photo.jpeg", fileName: "passportSizePhoto.jpeg"})
    }

    setCurrentAddress(currentAddress){
        cy.get(this.pagelocators.currentAddress).type(currentAddress)
    }

    submitForm(){
        cy.get(this.pagelocators.submit).click()
    }

    VerifyFormSubmission(expectedResult){
        cy.get(this.pagelocators.formSubmission).should('have.text', expectedResult)
    }

    TakeScreenshot(){
        cy.get(this.pagelocators.screenshot).screenshot()
    }
    
}

export default Form