import Basic from './Basic.js';
import Default from './Default.js';


function App() {
  const componentMap = {
    basic: Basic,
  };

  const urlParams = new URLSearchParams(window.location.search);
  const component = urlParams.get('component');

  const Component = componentMap[component] || Default;
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
