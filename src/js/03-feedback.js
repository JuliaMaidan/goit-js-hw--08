import localStorageAPI from './localStorage';

import { throttle } from 'throttle-debounce';

const formEl = document.querySelector('form')

const { elements: { email, message } } = formEl

populateTextArea()

formEl.addEventListener('input', throttle(500, onFormChangeInput))
formEl.addEventListener('submit', onFormSubmit)

function onFormChangeInput(e) {
    // const {
    //     email: { value: emailValue },
    //     message: {value: messageValue},
    // } = formEl

    // const newMessage = {
    //     emailValue,
    //     messageValue,
    // };

    const newMessage = {
    email: email.value,
    message: message.value,
    }
    localStorageAPI.save('feedback-form-state', newMessage)
}

function onFormSubmit(e) {
    e.preventDefault()
    console.log(`Email: ${email.value}, message: ${message.value}`)
    e.currentTarget.reset()
    localStorageAPI.remove('feedback-form-state')
}

function populateTextArea() {
    const messagesArr = localStorageAPI.load('feedback-form-state')
    if (messagesArr) {
        email.value = messagesArr.email
        message.value = messagesArr.message
    }   
}
