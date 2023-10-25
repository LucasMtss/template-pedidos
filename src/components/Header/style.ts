import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-between;
`

export const ContainerCart = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 50px;
    }

    cursor: pointer;
`

export const NumberOfItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E81E1E;
    font-size: 20px;
    font-weight: bold;
    background-color: #ededed;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: 4px;
`