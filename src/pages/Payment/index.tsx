import { useState } from "react";
import { Dropdown, Header, Input, Navbar } from "../../components";
import { Container, Form, Title } from "./style";
import { toast } from "react-toastify";
import { useCart } from "../../contexts/cartContext";
import { formatToCurrency } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [observation, setObservation] = useState<string>('');
    const { getAllItems, getAddress, getTotalValue, clearCart } = useCart();
    const navigate = useNavigate();

    const paymentOptions = [
        'Dinheiro',
        'Pix',
        'Débito',
        'Crédito',
    ]


    function handleValidateFields(){
      if(!paymentMethod.length){
        toast('Por favor preencha o meio de pagamento', {type: 'error'});
        return;
      }
      if(!name.length){
        toast('Por favor preencha o seu nome', {type: 'error'});
        return;
      }
      
      clearCart();
      window.open(genereteLink(), '_blank')
      navigate('/')
    }

    function genereteLink(){
        const baseUrl = 'https://wa.me/%2B5532991864842?text=';
        const address = getAddress();
        let link = `Olá, meu nome é ${name} e gostaria de fazer um pedido:

${
            getAllItems().map(item => {
                let itemText =  `- 1 ${item.item.name}`
                if(item.observation){
                    itemText += `\nOBS: ${item.observation}`
                }
                itemText += '\n------------------------\n';
                return itemText;
            }).join('')
}
Endereço: ${address.street}, ${address.number} ${address.complement}, Bairro ${address.neighborhood} - ${address.zipcode}
Meio de pagamento: ${paymentMethod}
        `

        if(observation) link += `\nObservação: ${observation}\n`

        link += `\nTotal ${formatToCurrency(getTotalValue())}`

        return baseUrl + encodeURI(link);
    }

  return (
    <Container>
        <Header />
        <Title>Informações do pagamento</Title>
        <Form>
            <Dropdown options={paymentOptions} value={paymentMethod} onChangeValue={e => setPaymentMethod(e ?? '')} labelText="Forma de pagamento"/>
            <Input value={name} onChangeValue={e => setName(e ?? '')} labelText="Seu nome"/>
            <Input value={observation} onChangeValue={e => setObservation(e ?? '')} labelText="Observação para entrega"/>
        </Form>
        <Navbar buttonAction={handleValidateFields} showTotal={true} buttonText="Enviar pedido pelo WhatsApp"/>
    </Container>
  )
}
