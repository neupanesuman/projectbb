import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: var(--background-color);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: var(--text-color);
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-directon: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    max-width: 400px;
    height: auto;
    z-index: 1;
    display: grid;
    margin: 0px 0px 100px 0px;
    padding: 80px;
    background: rgba( 162, 6, 6, 0.00 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20.0px );
    -webkit-backdrop-filter: blur( 20.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: var(--text-color);
    font-size: 22px;
    font-weight: 520;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    color: var(--text-color);
    font-weight: 400;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: var(--text-color);
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: var(--text-color);
    font-size: 18px;
`;