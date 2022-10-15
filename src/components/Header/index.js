import { useContext, useState } from 'react';
import { CityContext } from '../../context/CityContext';
import { Container, InputContainer } from './styles';

export default function Header() {
  const [text, setText] = useState('');
  const context = useContext(CityContext);

  function handleSetCity() {
    context.setCity(text);
    setText('');
  }

  return (
    <Container>
      <h1>Weather App</h1>
      <InputContainer>
        <input
          type="text"
          placeholder="Digite o nome da cidade..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button type="submit" onClick={handleSetCity}>Pesquisar</button>
      </InputContainer>
    </Container>
  );
}
