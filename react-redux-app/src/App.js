import './App.css';
import { UserView } from './components/usersView';
import { CakeView } from './components/cakeView';
import { IcecreamView } from './components/icecreamView';

function App() {
  return (
    <div className="App">
      <IcecreamView/>
      <CakeView/>
      <UserView/>
    </div>
  );
}

export default App;
