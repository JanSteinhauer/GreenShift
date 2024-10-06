import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

// Styled Components for the Waitlist form
const WaitlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center; /* Centering vertically */
  padding: 2rem;
  background-color: #f1f8e9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  // min-height: 100vh; /* Full viewport height for vertical centering */
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Make sure it spans the full width */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormHeader = styled.h2`
  font-size: 2rem;
  color: #1b5e20;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  /* Red star for required fields */
  &::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const OptionalLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #2e7d32;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #66bb6a;
  }
`;

const Column = styled.div`
  width: 48%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const FormWaitlist = styled.form`
  width: 100%;
`;

const Waitlist = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = formData;

    if (!firstName || !lastName || !email) {
      toast.error('Please fill out the required fields.');
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      company: formData.company || 'Not provided',
      reason: formData.reason || 'No reason provided',
    };

    // Use emailjs to send the form data
    emailjs
      .send('service_c9f7s4s', 'template_7tqa5zd', templateParams, 'koYp5n-gb_bJpzS1U')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('You have successfully joined the waitlist!');
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Failed to join the waitlist. Please try again later.');
        }
      );

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      reason: '',
    });
  };

  return (
    <WaitlistContainer>
      <FormHeader>Join the Waitlist</FormHeader>
      <FormWaitlist onSubmit={handleSubmit}>
        {/* First Name and Last Name Row */}
        <FormRow>
          <Column>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Column>
          <Column>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Column>
        </FormRow>

        {/* Email and Company Row */}
        <FormRow>
          <Column>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Column>
          <Column>
            <OptionalLabel htmlFor="company">Company</OptionalLabel>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Column>
        </FormRow>

        {/* Reason Textarea */}
        <FormRow>
          <div style={{ width: '100%' }}>
            <OptionalLabel htmlFor="reason">Why do you want to join?</OptionalLabel>
            <Textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>
        </FormRow>

        {/* Submit Button with Framer Motion Hover Animation */}
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Waitlist
        </Button>
      </FormWaitlist>

      <ToastContainer />
    </WaitlistContainer>
  );
};

export default Waitlist;
