import styled from "styled-components";

export const divContaier = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
    padding: 0 10px;
    }
`;

export const divContent = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
`