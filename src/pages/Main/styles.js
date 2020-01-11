import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 24px;
    color: ${props => (props.error ? 'red' : '#7159c1')};
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    small {
        font-size: 14px;
        color: #ccc;
    }
`;
