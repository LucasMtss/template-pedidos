import { Container } from "./style";

interface IInputProps {
    labelText: string;
    value: string | number | undefined;
    onChangeValue: (value: string | undefined) => void;
    disabled?: boolean
}

export default function Input({labelText, onChangeValue, value, disabled = false}: IInputProps) {
  return (
    <Container>
        <label>{labelText}</label>
        <input disabled={disabled} type="text" value={value} onChange={(e) => onChangeValue(e.target.value)}/>
    </Container>
  )
}
