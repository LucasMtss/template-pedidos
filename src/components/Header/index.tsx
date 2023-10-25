import { Container, ContainerCart, NumberOfItems } from "./style";
import Logo from '../../assets/logo.svg'
import ShoppingCart from '../../assets/shopping-cart.svg'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";


export default function Header() {
  const {getNumberOfItems} = useCart();
  const navigate = useNavigate();
  return (
    <Container>
        <img src={Logo} alt="Logo Bortolussi" onClick={() => navigate('/')}/>
        <ContainerCart onClick={() => navigate('/meu-carrinho')}>
          <img src={ShoppingCart} />
          <NumberOfItems>{getNumberOfItems()}</NumberOfItems>
        </ContainerCart>
    </Container>
  )
}
