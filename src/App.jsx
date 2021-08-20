import { Provider } from 'react-redux';

import SearchBar from './components/SearchBar'
import Table from './components/Table'
import GlobalStyle from './styles/global'

import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle/>
        <SearchBar/>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
