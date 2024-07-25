class Form {
    clickFormCategory(){
        cy.get(".category-cards>:nth-child(2)").click()
    }

    clickPracticeForm(){
        cy.get(".left-pannel>.accordion>:nth-child(2)>.element-list").click()
    }

    setFirstName(firstName){
        cy.get('#userName-wrapper>:nth-child(2)>#firstName').type(firstName)
    }

    setLastName(lastName){
        cy.get('#userName-wrapper>:nth-child(4)>#lastName').type(lastName)
    }

    setEmail(email){
        cy.get('#userEmail-wrapper>:nth-child(2)>#userEmail').type(email)
    }

    selectingRadioButton(gender){
        cy.get("#gender-radio-1").check(gender, {force: true})
    }

    setMobileNumber(number){
        cy.get('#userNumber').type(number)
    }

    setDateOfBirth(dateOfBirth){
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__year-select").select(dateOfBirth.year)
        cy.get(".react-datepicker__month-select").select(dateOfBirth.month)
        cy.get(".react-datepicker__day.react-datepicker__day--009.react-datepicker__day--weekend").click()
    }

    setSubjects(subjects){
        cy.get("#subjectsInput").type(subjects)
    }

    selectCheckBoxes(){
        cy.get("#hobbies-checkbox-1").check({force:true})
        cy.get("#hobbies-checkbox-3").check({force:true})
    }

    fileUpload(){
        cy.get("#uploadPicture").attachFile({filePath: "photo.jpeg", fileName: "passportSizePhoto.jpeg"})
    }

    setCurrentAddress(currentAddress){
        cy.get("#currentAddress-wrapper>:nth-child(2)>textarea").type(currentAddress)
    }

    submitForm(){
        cy.get("#submit").click()
    }

    VerifyFormSubmission(expectedResult){
        cy.get("#example-modal-sizes-title-lg").should('have.text', expectedResult)
    }

    TakeScreenshot(){
        cy.get(".fade.modal-backdrop.show").screenshot()
    }
    
}

export default Form