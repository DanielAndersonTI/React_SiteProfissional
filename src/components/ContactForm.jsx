import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';  
import '../styles/ContactForm.css';
import axios from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Telefone inválido') // Corrigida regex para telefone internacional
    .required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  message: Yup.string().required('Mensagem é obrigatória'),
});

const ContactForm = ({ onSubmit }) => { // Corrigido para receber a função corretamente
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: '', 
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => { 
      try {
        await axios.post('http://localhost:5000/api/contact', values);
        alert('Formulário enviado com sucesso!');
        resetForm();
        onSubmit(values); // Chama a função de envio para a página Contact
      } catch (err) {
        alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
        console.error(err);
      }
    }
    
  });

  return (
    <form className="contact-form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefone: </label>
        <PhoneInput
          id="phone"
          defaultCountry="BR"
          value={formik.values.phone}
          onChange={(value) => formik.setFieldValue('phone', value)} // Corrigido para evitar erros de undefined
          onBlur={() => formik.setFieldTouched('phone', true)}
          className={formik.touched.phone && formik.errors.phone ? 'input-error' : ''}
        />
        {formik.touched.phone && formik.errors.phone && (
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
          className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
        />
        {formik.touched.email && formik.errors.email && (
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
          className={formik.touched.message && formik.errors.message ? 'input-error' : ''}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="error-message">{formik.errors.message}</div>
        )}
      </div>

      <button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default ContactForm;
