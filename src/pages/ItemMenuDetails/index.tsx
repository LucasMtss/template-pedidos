import { Container, Description, Divider, Image, Label, ObservationField, Price, Title } from './style'
import { Header } from '../../components'
import { formatToCurrency } from '../../utils/utils'
import Navbar from '../../components/Navbar'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import data from '../../data/menuData.json'
import { ICardMenuItem } from '../../interfaces/cardMenuItemInterface'

export default function ItemMenuDetails() {
    const location = useLocation();
    const [itemMenu, setItemMenu] = useState<ICardMenuItem>({} as ICardMenuItem);
    const [observation, setObservation] = useState('')

    useEffect(() => {
        const id = location.pathname.split('/')[2]
        const selectedItem = data.burguers.find(itemMenu => itemMenu.id === id) ?? data.drinks.find(itemMenu => itemMenu.id === id)
        
        if(selectedItem){
            setItemMenu(selectedItem);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <Container>
        <Header />
        <Title>{itemMenu.name}</Title>
        <Image src={itemMenu.image} alt='Item menu' />
        {
          itemMenu.description?.length ? (
            <Description>{itemMenu.description}</Description>

          ) : (
            <>
            <br />
            <br />
            <br />
            <br />
            </>
          )
        }
        <Price>{formatToCurrency(itemMenu.price)}</Price>
        <Divider></Divider>
        <Label>Observações</Label>
        <ObservationField value={observation} onChange={e => setObservation(e.target.value ?? '')} placeholder={itemMenu.description ? 'EX: Sem salada, carne ao ponto.' : ''}/>
        <Navbar buttonText="Adicionar ao carrinho" menuItem={itemMenu} observation={observation}/>
    </Container>
  )
}
