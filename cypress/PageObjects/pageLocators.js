locators = {
    category: ".category-cards>:nth-child(2)",
    practiceForm: ".left-pannel>.accordion>:nth-child(2)>.element-list",
    firstName: '#userName-wrapper>:nth-child(2)>#firstName',
    lastName: '#userName-wrapper>:nth-child(4)>#lastName',
    email: '#userEmail-wrapper>:nth-child(2)>#userEmail',
    gender: "#gender-radio-1",

    dob: {
        click: "#dateOfBirthInput",
        year: ".react-datepicker__year-select",
        month: ".react-datepicker__month-select",
        day: ".react-datepicker__day.react-datepicker__day--009.react-datepicker__day--weekend"
    },
    number: '#userNumber',
    subjects: "#subjectsInput",
    checkboxes: {
        check1: "#hobbies-checkbox-1",
        check2: "#hobbies-checkbox-3",
    },
    fileUpload: "#uploadPicture",
    currentAddress: "#currentAddress-wrapper>:nth-child(2)>textarea",
    formSubmission: "#example-modal-sizes-title-lg",
    screenshot: ".fade.modal-backdrop.show",
    submit: "#submit"
}

export default locators