import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import { GlobalContextProvider } from './contexts/GlobalContext';
import AppLogo from './components/AppLogo';
import AppMain from './components/AppMain';
import SearchBar from './components/SearchBar'


function App() {




  return (
    <>
      <GlobalContextProvider>
        <AppLogo />
        <SearchBar />
        <AppMain />
      </GlobalContextProvider>
    </>
  );
}

export default App;

