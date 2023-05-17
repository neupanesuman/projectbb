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
    background: var(--background-color1);
    background: var(--background-color2);
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
    margin-top: 52px;
    text-decoration: none;
    color: #fff;
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
    max-width: 500px;
    height: auto;
    z-index: 1;
    display: grid;
    margin: 0px 0px 130px 0px;
    padding: 80px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 22px;
    -webkit-border-radius: 22px;
    color: rgba(255, 255, 255, 0.75);
    overflow: auto;
                

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #8b0000;
    font-size: 22px;
    font-weight: 520;
    text-align: center;
    margin-top: -40px;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    color: #8b0000;
    font-weight: 500;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    background-color: var(--background-color);
    color: #fff;
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
    font-size: 30px;
    text-transform: uppercase;
`;