import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-radius: 30px 30px 0 0;
    padding: 16px;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
`

export const ContainerItens = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Price = styled.span`
    font-size: 32px;
    color: #000;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
`

export const NumberOfItems = styled.span`
    font-size: 32px;
    color: #000;
`

export const PrimaryButton = styled.button`
    width: 100%;
    background-color: #E81E1E;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    color: #fff;
    margin-top: 32px;
    text-align: center;
    height: 45px;
`
export const SecondaryButton = styled.button`
    width: 100%;
    background-color: transparent;
    border: solid 1px #E81E1E;
    font-size: 16px;
    border-radius: 50px;
    color: #E81E1E;
    margin-top: 8px;
    text-align: center;
    height: 45px;
`