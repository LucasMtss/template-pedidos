import { ICardMenuItem } from '../../interfaces/cardMenuItemInterface'
import { formatToCurrency } from '../../utils/utils'
import { Container, Description, Image, Name, Price } from './style'
import { useNavigate } from "react-router-dom";

export default function CardItemMenu({name, description, price, id, image}: ICardMenuItem) {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(`/item-cardapio/${id}`)}>
            <Image src={image} alt='Hambúrguer do Bortolussi' />
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Price>{formatToCurrency(price)}</Price>
        </Container>
    )
}
