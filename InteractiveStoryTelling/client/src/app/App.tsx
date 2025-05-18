// import { Header } from '@widgets/ui/Header/Header'; //не правильный путь
import { Header } from '@widgets/Header/Header';
import { Outlet } from 'react-router-dom';
import "./App.css";

export const App = ()  => {

  return (
    <>
    <Header />
    <main>
      <h1>Home</h1>
      <Outlet />
    </main>
    </>
  );
}