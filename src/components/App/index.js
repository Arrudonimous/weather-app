import { BrowserRouter } from 'react-router-dom';
import { CityProvider } from '../../context/CityContext';
import GlobalStyles from '../../assets/themes/global';
import Routes from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <CityProvider>
        <GlobalStyles />
        <Routes />
      </CityProvider>
    </BrowserRouter>
  );
}

export default App;
