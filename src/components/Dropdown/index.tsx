import { Container } from "./style";

interface IDropdownProps {
    labelText: string;
    value: string | number | undefined;
    onChangeValue: (value: string | undefined) => void;
    disabled?: boolean
    options: string[]
}

export default function Dropdown({labelText, onChangeValue, value, disabled = false, options}: IDropdownProps) {
  return (
    <Container>
        <label>{labelText}</label>
        <select disabled={disabled} value={value} onChange={(e) => onChangeValue(e.target.value)}>
            {
                options.map(option => <option selected={value === option} key={option} value={option}>{option}</option>)
            }
        </select>
    </Container>
  )
}
