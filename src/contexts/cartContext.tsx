import { ReactNode, createContext, useContext, useState } from 'react';
import { IItemCart } from '../interfaces/itemCartInterface';
import { IAddress } from '../interfaces/AddressInterface';


interface ICartProps {
    addItem: (item: IItemCart) => boolean;
    removeItem: (id: string) => boolean;
    getItem: (id: string) => IItemCart | undefined;
    getAllItems: () => IItemCart[];
    clearCart: () => void;
    getNumberOfItems: () => number;
    getTotalValue: () => number;
    getAddress: () => IAddress;
    saveAddress: (address: IAddress) => void;
    loadCacheData: () => void;
}


const CartContext = createContext<ICartProps>({} as ICartProps);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [itemsCart, setItemsCart] = useState<IItemCart[]>([] as IItemCart[]);
    const [address, setAddress] = useState<IAddress>({} as IAddress);

    function addItem(newItem: IItemCart){
      const newArrayItems = [...itemsCart, newItem];
        setItemsCart(newArrayItems);
        
        localStorage.setItem('@pedidos:itens-carrinho', JSON.stringify(newArrayItems));
        return true;
    }

    function removeItem(id: string){
      const newArrayItems = itemsCart.filter(itemCart => itemCart.id !== id)
        setItemsCart(newArrayItems);
        localStorage.setItem('@pedidos:itens-carrinho', JSON.stringify(newArrayItems));
        return true;
    }

    function getAllItems() {
        return itemsCart;
    }

    function getItem(id: string) {
        return itemsCart.find(item => item.id === id);
    }

    function clearCart(){
        setItemsCart([]);
        localStorage.removeItem('@pedidos:itens-carrinho');
    }

    function getNumberOfItems(){
        return itemsCart.length;
    }

    function getTotalValue(){
        let total = 0;
        itemsCart.forEach(item => {
          total += item.item.price;
        });
        return total;
    }

    function getAddress(){
      return address;
    }

    function saveAddress(address: IAddress){
      localStorage.setItem('@pedidos:endereco', address.toString());
      setAddress(address);
    }

    function loadCacheData(){
      const itemsCartData = localStorage.getItem('@pedidos:itens-carrinho');
      
      if(itemsCartData) setItemsCart(JSON.parse(itemsCartData));
    }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        getAllItems,
        getItem,
        clearCart,
        getNumberOfItems,
        getTotalValue,
        getAddress,
        saveAddress,
        loadCacheData
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): ICartProps {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an useCart');
  }

  return context;
}
