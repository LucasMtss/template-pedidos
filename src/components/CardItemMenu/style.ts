import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px #E81E1E;
    padding-bottom: 16px;
`

export const Image = styled.img`
    width: 152px;
    height: 152px;
    border-radius: 50%;
    margin: 0 auto;
`

export const Name = styled.span`
    font-size: 36px;
    margin-bottom: 4px;
`

export const Description = styled.span`
    font-size: 14px;
`

export const Price = styled.span`
    font-size: 20px;
    width: 100%;
    text-align: right;
`