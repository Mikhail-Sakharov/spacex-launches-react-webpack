import LaunchesList from '../launches-list/launches-list';
import '../../style.css';

function App(): JSX.Element {
  return (
    <>
      <h1>SpaceX Launches</h1>
      <LaunchesList />
    </>
  );
}

export default App;
