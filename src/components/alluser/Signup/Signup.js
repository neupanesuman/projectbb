import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormLabel, FormH1, FormInput, FormButton, Text } from './SignupElements';

function Signup() {
    return (
        <div>
        <Container>
            <FormWrap>
                <Icon to="/">Blood Donation</Icon>
                <FormContent>
                    <Form >
                        <FormH1>Be a Volunteer Blood Donor</FormH1>
                        <FormLabel htmlfor='for'>Full Name</FormLabel>
                        <FormInput type='text' required />

                        <FormLabel htmlfor='for'>Age</FormLabel>
                        <FormInput type='number' required />

                        <FormLabel htmlfor='for'>Phone Number</FormLabel>
                        <FormInput type='number' required />

                        <FormLabel htmlfor='for'>Address</FormLabel>
                        <FormInput type='text' required />

                        <FormLabel htmlfor='for'>Email</FormLabel>
                        <FormInput type='email' required />

                        <FormLabel htmlfor='for'>Blood Group</FormLabel>
                        <FormInput type='text' required />

                        <FormLabel htmlfor='for'>Gender</FormLabel>
                        <FormInput type='text' required />

                        <FormLabel htmlfor='for'>Password</FormLabel>
                        <FormInput type='password' required />

                        <FormButton type='submit'>Be Donor</FormButton>

                        <Text>Thank You 😀</Text>
                    </Form>                
                </FormContent>
            </FormWrap>
        </Container>
        </div>
    )
}

export default Signup;
