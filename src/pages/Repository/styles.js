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

export const IssueState = styled.div`
    display: flex;
    border: 1px solid #ccc;
    margin: 0 auto;
    max-width: 180px;
    padding: 0 10px;
    margin-top: 30px;
    border-radius: 4px;
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        font-size: 16px;
        color: #333;
        background-color: #fff;
        background-image: none;
        border: none;
        word-break: normal;
    }
    #chevrons {
        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        width: 12px;
        padding: 9px 14px 9px 0;

        display: block;
        height: 50%;
        color: #d1dede;
        font-size: 12px;
    }
`;
