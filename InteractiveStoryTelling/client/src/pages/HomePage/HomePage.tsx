import { useSelector } from 'react-redux';
import { RootState } from '@shared/store';
import "./index.css"

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className='home'>
      <h1>Главная страница</h1>
      <hr />
      {user ? (
        <p className='p-logined'>Привет, {user.name}!</p>
      ) : (
        <p className='p-unlogined'>Вы не вошли в систему</p>
      )}
    </div>
  );
};