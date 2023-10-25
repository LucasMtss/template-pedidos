import { useEffect, useState } from "react"
import { useCart } from "../../contexts/cartContext";
import { IItemCart } from "../../interfaces/itemCartInterface";
import { Container, ContainerItemsCart, ContainerPrice, Description, ItemCart, Name, Observation, Price, RemoveButton } from "./style";
import { formatToCurrency } from "../../utils/utils";
import { Header } from "../../components";
import Navbar from "../../components/Navbar";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const [items, setItems] = useState<IItemCart[]>([] as IItemCart[]);
    const { getAllItems, removeItem } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        setItems(getAllItems());
    }, [])

    function handleRemoveItem(itemId: string){
        removeItem(itemId);
        toast('Item removido com sucesso', {type: 'success'})
    
    }

    useEffect(() => {
        setItems(getAllItems());
    }, [removeItem]);

  return (
    <Container>
      <Header />
      <ContainerItemsCart>
        {
            items.map(itemCart => {
                return (
                    <ItemCart>
                        <Name>{itemCart.item.name}</Name>
                        <Description>{itemCart.item.description}</Description>
                        {
                            itemCart.observation.length ? (
                                <Observation>{itemCart.observation}</Observation>
                            ) : <></>
                        }
                        <ContainerPrice>
                            <RemoveButton onClick={() => handleRemoveItem(itemCart.id)}>Remover</RemoveButton>
                            <Price>{formatToCurrency(itemCart.item.price)}</Price>
                        </ContainerPrice>
                    </ItemCart>
                )
            })
        }
      </ContainerItemsCart>
        <Navbar showTotal={true} buttonText="Informar endereço de entrega" buttonAction={() => navigate('/endereco')}/>
    </Container>
  )
}
