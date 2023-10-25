import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 1200px;
    padding-bottom: 200px;
`

export const Title = styled.div`
    font-size: 36px;
    width: 100%;
    text-align: center;
    background: rgba(255, 0, 0, 0.42);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    margin-top: 36px;
    max-width: 1200px;
    color: #fff;
`

export const Image = styled.img`
    width: 100%;
    margin-bottom: -80px;
    border-radius: 32px 32px 0 0;
`

export const Description = styled.p`
    font-size: 24px;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 16px;
    color: #fff;
`

export const Price = styled.p`
    padding: 0 16px;
    font-size: 32px;
    width: 100%;
    text-align: right;
    margin-top: 32px;
`
export const Divider = styled.div`
    width: 90vw;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
    height: 1px;
    background-color: #000;
    padding: 0 16px;
    max-width: 1200px;
`

export const ObservationField = styled.textarea`
    background-color: #ededed;
    border: none;
    border-radius: 30px;
    padding: 16px;
    font-size: 18px;
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-bottom: 16px;
    min-height: 120px;
`

export const Label = styled.label`
    font-size: 22px;
    padding-left: 24px;
    margin-bottom: 8px;
    width: 100%;
    margin-top: 16px;
`