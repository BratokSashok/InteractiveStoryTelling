// import { Header } from '@widgets/ui/Header/Header'; //не правильный путь
import { useEffect } from 'react';
// import { Header } from '@widgets/ui/header/Header';
import { Outlet } from 'react-router-dom';
import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';
import { Header } from '@widgets/Header/Header';

export const App = ()  => {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);


  return (
    <>
    <main>
      <Header />
      <Outlet />
    </main>
    </>
  );
}
// export const App = ()  => {

//   return (
//     <>
//     <Header />
//     <main>
//       <Outlet />
//     </main>
//     </>
//   );
// }