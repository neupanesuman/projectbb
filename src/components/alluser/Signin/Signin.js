import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormLabel, FormH1, FormInput, FormButton, Text } from './SigninElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Blood Donation</Icon>
                <FormContent>
                    <Form >
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlfor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlfor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password ?</Text>
                    </Form>                
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn;
