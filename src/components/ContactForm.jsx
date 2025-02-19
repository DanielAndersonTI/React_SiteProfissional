import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';  
import '../styles/ContactForm.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string()
    .matches(/^[0-9]{10,11}$/, 'Telefone inválido')
    .required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  message: Yup.string().required('Mensagem é obrigatória'),
});

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: '', 
    },
    validationSchema, // Usando o Yup para validação
    onSubmit: (values) => {
      onSubmit('Formulário enviado com sucesso!', 'success');
      console.log(values);
    },
  });

  // Função para mover para o próximo campo ao pressionar Enter
  const handleKeyDown = (e, nextField) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextField && nextField.focus(); // Foca no próximo campo
    }
  };

  return (
    <form className="contacte-form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onKeyDown={(e) => handleKeyDown(e, document.getElementById('phone'))} // Foca no telefone ao pressionar Enter
          className={
            formik.errors.name && formik.touched.name
              ? 'input-error'
              : formik.touched.name && !formik.errors.name
              ? 'input-valid'
              : ''
          }
        />
        {formik.errors.name && formik.touched.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefone: </label>
        <PhoneInput
          international
          defaultCountry="BR"
          value={formik.values.phone}
          onChange={(value) => formik.setFieldValue('phone', value)}
          onBlur={formik.handleBlur}
          onKeyDown={(e) => handleKeyDown(e, document.getElementById('email'))} // Foca no email ao pressionar Enter
          className={
            formik.errors.phone && formik.touched.phone
              ? 'input-error'
              : formik.touched.phone && !formik.errors.phone
              ? 'input-valid'
              : ''
          }
        />
        {formik.errors.phone && formik.touched.phone && (
          <div className="error-message">{formik.errors.phone}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onKeyDown={(e) => handleKeyDown(e, document.getElementById('message'))} // Foca na mensagem ao pressionar Enter
          className={
            formik.errors.email && formik.touched.email
              ? 'input-error'
              : formik.touched.email && !formik.errors.email
              ? 'input-valid'
              : ''
          }
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem: </label>
        <textarea
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onKeyDown={(e) => handleKeyDown(e, document.querySelector('button[type="submit"]'))} // Foca no botão de envio
          className={
            formik.errors.message && formik.touched.message
              ? 'input-error'
              : formik.touched.message && !formik.errors.message
              ? 'input-valid'
              : ''
          }
        />
        {formik.errors.message && formik.touched.message && (
          <div className="error-message">{formik.errors.message}</div>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
