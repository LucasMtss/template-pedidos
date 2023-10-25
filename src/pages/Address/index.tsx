import { useState } from "react";
import { Header, Input, Navbar } from "../../components";
import { Container, Form, Title } from "./style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

export default function Address() {
    const [zipcode, setZipcode] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [complement, setComplement] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const { saveAddress } = useCart()
    const navigate = useNavigate();
    
    function handleChangeZipcode(value: string | undefined) {
      if (value && value.length <= 9) {
        const numericValue = value.replace(/\D/g, '');
    
        if (numericValue.length > 5) {
          const formattedValue = `${numericValue.slice(0, 5)}-${numericValue.slice(5)}`;
          setZipcode(formattedValue);
        } else {
          setZipcode(numericValue);
        }
        if(value.length === 9) searchAddressByZipcode(value);
      }
      else if(!value){
        setZipcode('');
      }
    }

    function handleChangeNumber(value: string | undefined) {
      if (value) {
        const numericValue = value.replace(/\D/g, '');
        setNumber(numericValue);
      }
      else if(!value){
        setNumber('');
      }
    }

    function handleValidateFields(){
      if(!neighborhood.length){
        toast('Por favor preencha o nome do bairro', {type: 'error'});
        return;
      }
      if(!street.length){
        toast('Por favor preencha o nome da rua', {type: 'error'});
        return;
      }
      if(!number.length){
        toast('Por favor preencha o número', {type: 'error'});
        return;
      }
      
      saveAddress({
        neighborhood,
        number,
        street,
        zipcode,
        complement
      })
      navigate('/pagamento')
    }

    async function searchAddressByZipcode(zipcode: string){
      try {
        setIsLoading(true);
        const response = await fetch(`https://viacep.com.br/ws/${zipcode.replace('-', '')}/json/`);
        const body = await response.json();
        if(body.erro) throw new Error('CEP inválido');
        
        setStreet(body.logradouro);
        setNeighborhood(body.bairro);
        
      } catch (error) {
        console.error(error);
        toast('Por favor, insira um CEP válido', {type: 'error'})
      } finally {
        setIsLoading(false);
      }
    }
      

  return (
    <Container>
        <Header />
        <Title>Endereço</Title>
        <Form>
            <Input disabled={isLoading} value={zipcode} onChangeValue={handleChangeZipcode} labelText="CEP"/>
            <Input disabled={isLoading} value={neighborhood} onChangeValue={(e) => setNeighborhood(e ?? '')} labelText="Bairro"/>
            <Input disabled={isLoading} value={street} onChangeValue={(e) => setStreet(e ?? '')} labelText="Rua"/>
            <Input disabled={isLoading} value={number} onChangeValue={handleChangeNumber} labelText="Número"/>
            <Input disabled={isLoading} value={complement} onChangeValue={(e) => setComplement(e ?? '')} labelText="Complemento"/>
        </Form>
        <Navbar buttonAction={handleValidateFields} showTotal={true} buttonText="Ir para informações de pagamento"/>
    </Container>
  )
}
