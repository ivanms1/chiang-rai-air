import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import classNames from 'classnames';
import { Form as SForm, Button } from 'semantic-ui-react';

import styles from './Contact.module.css';

const ContactForm = () => {
  const { Input, TextArea } = SForm;
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={() => {}}
    >
      {() => (
        <Form className={classNames('ui form', styles.Form)}>
          <Field name='name'>
            {({ field }: FieldProps) => <Input label='Name' {...field} />}
          </Field>
          <Field name='email' component={SForm.Field}>
            {({ field }: FieldProps) => <Input label='Email' {...field} />}
          </Field>
          <Field name='message' component={SForm.Field}>
            {({ field }: FieldProps) => <TextArea label='Message' {...field} />}
          </Field>
          <Button>Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
