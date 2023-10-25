import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 1200px;
    padding-bottom: 200px;
`

export const ContainerItemsCart = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    padding: 0 16px;
`

export const ItemCart = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px #dedede;
    padding-bottom: 16px;
    margin-bottom: 32px;
`

export const Name = styled.span`
    font-size: 36px;
    margin-bottom: 4px;
`

export const Description = styled.span`
    font-size: 14px;
`

export const ContainerPrice = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`

export const RemoveButton = styled.button`
    width: 130px;
    background-color: #E81E1E;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    color: #fff;
    text-align: center;
    height: 45px;
`

export const Price = styled.span`
    font-size: 28px;
    text-align: right;
`

export const Observation = styled.span`
    font-size: 16px;
    border: dashed 2px #fff;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    margin-top: 8px;
    min-height: 64px;
`

