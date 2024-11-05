import NavTabs from './components/NavTabs'
import Header from './components/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <main className="mx-3">
      <Outlet />
    </main>
  </>
  
  );
}

export default App
