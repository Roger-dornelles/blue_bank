import * as yup from "yup";

const SchemaEmail = yup.object({
    email: yup.string().email('Digite um email valido').required('Email Obrigatorio')
});

export default SchemaEmail;