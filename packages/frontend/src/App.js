import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Menue } from './components/menu';
import { MyRouting } from './components/myrouting';
import { Provider } from 'react-redux';
import mystore from './store/store';
function App() {
  return (
    <div>
      <Provider store={mystore}>
        <BrowserRouter>
          <Menue></Menue>
          <div className='container'>
          <MyRouting></MyRouting></div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
