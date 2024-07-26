import "cypress-file-upload"

import Form from "../PageObjects/Form";

describe("Test suite", () => {

    //for handling uncaught exception error
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });

    let userData;

    beforeEach("getting fixtures data",() => {
        cy.fixture("formData").then((data) => {
            userData = data
        })
    })
    
    it("working on form", () => {
        //visiting the page
        cy.visit(Cypress.env("url"))

        let form = new Form()

        //clicking on the forms category
        form.clickFormCategory()

        //clicking on practice form
        form.clickPracticeForm()

        //accessing and assigning user firstname input
        form.setFirstName(userData.firstName)

        //accessing and assigning user lastname input
        form.setLastName(userData.lastName)

        //accessing and assigning user email
        form.setEmail(userData.email)

        //selecting gender using radio buttons
        form.selectingRadioButton(userData.gender)

        //accessing mobile number
        form.setMobileNumber(userData.mobileNumber)

        //accessing and selecting date
        form.setDateOfBirth(userData.dateOfBirth)

        // accessing and assigning user subjects
        form.setSubjects(userData.subjects)

        //accessing and selecting check boxes
        form.selectCheckBoxes()

        //accessing and working with file upload
        form.fileUpload()
        // cy.wait(5000)

        //accessing and assigning user current address
        form.setCurrentAddress(userData.currentAddress)

        //accessing and working on dropdowns
        // cy.get(".css-1g6gooi>div>#react-select-3-input")
        // cy.get("#react-select-4-input")

        //submitting the form
        form.submitForm()

        //checking for final result
        form.VerifyFormSubmission(userData.expectedResult)

        //taking screenshot
        form.TakeScreenshot()

    })


})