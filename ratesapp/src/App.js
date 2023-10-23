import './App.css';
import Rate from './components/Rate';
import './components/rate.scss';
import themeA from './components/styles/style300.module.css';
import themeB from './components/styles/style450.module.css';
import themeC from './components/styles/style550.module.css';
import themeD from './components/styles/style1000.module.css';

const list = [
  {
    speed: 10,
    theme: themeA,
    price: 300

  },
  {
    speed: 50,
    theme: themeB,
    price: 450
  },
  {
    speed: 100,
    theme: themeC,
    showChoice: true,
    price: 550
  },
  {
    speed: 200,
    theme: themeD,
    price: 1000
  }
]

function App() {
  return (
    <div className="App">
      {
        list.map((rate) =>
          <Rate price={rate.price} speed={rate.speed} theme={rate.theme} showChoice={rate.showChoice}></Rate>
        )
      }
    </div>
  );
}

export default App;


