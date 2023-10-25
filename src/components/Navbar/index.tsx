
import { formatToCurrency, generateId } from "../../utils/utils";
import { Container, ContainerItens, NumberOfItems, Price, PrimaryButton, SecondaryButton } from "./style";
import { useCart } from '../../contexts/cartContext';
import { ICardMenuItem } from '../../interfaces/cardMenuItemInterface';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

interface INavbarProps {
  menuItem?: ICardMenuItem;
  observation?: string;
  buttonText: string;
  buttonAction?: () => void;
  showTotal?: boolean;
}

export default function Navbar({ menuItem, observation, buttonText = '', buttonAction, showTotal = false }: INavbarProps) {
  const { addItem, getTotalValue, getNumberOfItems } = useCart();
  const navigate = useNavigate();


  function addToCart(){
    if(!menuItem) return;
    addItem({
      id: generateId(),
      item: menuItem,
      observation: observation ?? ''
    })
    toast('Item adicionado com sucesso!', {type: 'success'});
  }

  return (
    <Container>
        <ContainerItens>
            <Price>{formatToCurrency(showTotal ? getTotalValue() : menuItem?.price ?? 0)}</Price>
            <NumberOfItems>{getNumberOfItems()} {getNumberOfItems() === 1 ? 'item' : 'itens'}</NumberOfItems>
        </ContainerItens>
        <PrimaryButton onClick={buttonAction ? () => buttonAction() : () => addToCart()}>{buttonText}</PrimaryButton>
        <SecondaryButton onClick={() => navigate(-1)}>Voltar</SecondaryButton>
    </Container>
  )
}
