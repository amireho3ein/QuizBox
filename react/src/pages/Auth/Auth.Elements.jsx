import { styled } from "styled-components";
import { breakPoint8 } from "../../constants/breakpoints";

export const FormContainer = styled.div`
    height: 90dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10rem;
    max-width: 70rem;

    @media screen and (${breakPoint8}) {
        padding: 5rem;
        width: 100%;
        /* align-items: center; */
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ImageContainer = styled.div`
    position: relative;

    @media screen and (${breakPoint8}) {
        display: none;
    }
`;
