// import axios from 'axios';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../../context/CityContext';
import { Container, SpinnerWrapper } from './styles';

export default function Content() {
  const date = new Date();
  const context = useContext(CityContext);
  const [info, setInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${context.city}&lang=pt_br&appid=879b9f8d60ad6e0bffdcfb4103d9f7f6`;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await axios.get(url);
      setInfo(data);
      setIsLoading(false);
    })();
  }, [context.city]);

  return (
    <Container>
      {!isLoading ? (
        <>
          <small>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</small>
          <h2>{info && info.name}</h2>
          <h1>
            {info && Math.floor(info.main.temp - 273)}
            º
          </h1>
          <span>{info && info.weather[0].description}</span>
        </>
      ) : (<SpinnerWrapper />)}

    </Container>
  );
}
