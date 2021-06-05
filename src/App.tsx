/** @format */

import CountStore from "./CountStore";
import CountList from "./components/CountList";

const App = (): JSX.Element => {
  const store = new CountStore();
  return (
    <div className="App">
      <CountList store={store} />
    </div>
  );
}

export default App;
