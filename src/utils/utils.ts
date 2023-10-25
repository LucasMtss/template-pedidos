export function formatToCurrency(price: number){
    return price ? price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : Number(0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function generateId() {
    const cryptoObj = window.crypto; // Suporte a crypto no navegador
    if (cryptoObj && cryptoObj.getRandomValues) {
      // Utiliza o método crypto.getRandomValues para gerar valores aleatórios
      const buffer = new Uint16Array(8);
      cryptoObj.getRandomValues(buffer);
  
      // Formata o UUID no formato hexadecimal
      return `${toHex(buffer[0], 4)}${toHex(buffer[1], 4)}-${toHex(buffer[2], 4)}-${toHex(buffer[3], 4)}-${toHex(buffer[4], 4)}-${toHex(buffer[5], 4)}${toHex(buffer[6], 4)}${toHex(buffer[7], 4)}`;
    } else {
      // Fallback para geração de UUID simples
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function toHex(value: any, length: number) {
    let hex = value.toString(16);
    while (hex.length < length) {
      hex = '0' + hex;
    }
    return hex;
  }