import styled from 'styled-components';

export const Loading = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Cookie&display=swap');
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Cookie', cursive;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }
    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
        & + li {
            margin-top: 10px;
        }
        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 2px solid #eee;
        }
        div {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-left: 16px;
            justify-content: center;
            strong {
                font-size: 16px;
                a {
                    text-decoration: none;
                    color: #333;
                    &:hover {
                        color: #7159c1;
                    }
                }
                span {
                    font-size: 12px;
                    font-weight: 600;
                    margin-left: 10px;
                    padding: 3px 4px;
                    height: 20px;
                    background: #eee;
                    border-radius: 2px;
                    color: #333;
                }
            }
            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;

export const IssueFilter = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    button {
        border-radius: 4px;
        outline: 0;
        border: 0;
        padding: 8px;
        margin: 0 0.25rem;
        &:nth-child(${props => props.active + 1}) {
            background: #7d3f98;
            color: white;
            font-weight: bold;
        }
    }
`;

export const PageActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    button {
        background: #7159c1;
        transition: opacity 0.25s ease-out;
        border-radius: 4px;
        outline: 0;
        border: 0;
        padding: 8px;
        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
        svg {
            color: #fff;
            font-size: 20px;
        }
    }
    button + button {
        margin-left: 10px;
    }
`;
