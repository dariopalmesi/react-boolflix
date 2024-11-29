import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';
import AppLogo from './components/AppLogo';
import AppMain from './components/AppMain';
import AppHeader from './components/AppHeader';


function App() {




  return (
    <>
      <GlobalContextProvider>
        <AppLogo />
        <AppHeader />
        <AppMain />
      </GlobalContextProvider>


    </>
  );
}

export default App;

