import { useEffect, useState } from "react";
import { CardItemMenu, Header } from "../../components";
import { ICardMenuItem } from "../../interfaces/cardMenuItemInterface";
import { Container, ContainerBurguers, Title } from "./style";
import data from '../../data/menuData.json'
import { useCart } from "../../contexts/cartContext";

export default function Home() {
    const [burguers, setBurguers] = useState<ICardMenuItem[]>([] as ICardMenuItem[]);
    const [drinks, setDrinks] = useState<ICardMenuItem[]>([] as ICardMenuItem[]);
    const { loadCacheData } = useCart();

    useEffect(() => {
        setBurguers(data.burguers);
        setDrinks(data.drinks);
        loadCacheData();
    }, [])
    
  return (
    <Container>
        <Header />
        <Title>Burguers</Title>
        <ContainerBurguers>
            {
                burguers.map(burguer => <CardItemMenu previewImage={burguer.previewImage} image={burguer.image} id={burguer.id} price={burguer.price} description={burguer.description} name={burguer.name} key={burguer.id}/>)
            }
        </ContainerBurguers>
        <Title>Bebidas</Title>
        <ContainerBurguers>
            {
                drinks.map(drink => <CardItemMenu previewImage={drink.previewImage} image={drink.image} id={drink.id} price={drink.price} description={drink.description} name={drink.name} key={drink.id}/>)
            }
        </ContainerBurguers>
    </Container>
  )
}
