import { useContext } from 'react';
import { CityContext } from '../../context/CityContext';
import Header from '../../components/Header';
import { Container1, Container2 } from './styles';
import Content from '../../components/Content';

export default function Home() {
  const context = useContext(CityContext);

  if (context.city) {
    return (
      <Container1>
        <Header />
        <Content />
      </Container1>
    );
  }
  return (
    <Container2>
      <Header />
    </Container2>
  );
}
