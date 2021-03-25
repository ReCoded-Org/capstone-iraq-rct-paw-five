const Yup = require("yup");
const emailjs = require("emailjs-com");

const emailSchema= (required) => Yup.object().shape({

// const emailSchema= () => Yup.object().shape({
    name: Yup.string().required(required),
    email: Yup.string().email().required(required),
    message: Yup.string().required(required),
})

const initialValues = {
    email: '',
    name: '',
    phone: '',
    message: '',
    subject:''
}

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_vg9bk5b',
            'template_snre7hs',
            e.target,
            'user_E56W1Sop4bo4PGpuGBxld'
        )
        .then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
    e.target.reset()
}

exports.emailSchema=emailSchema;
exports.initialValues=initialValues;
exports.sendEmail=sendEmail;
