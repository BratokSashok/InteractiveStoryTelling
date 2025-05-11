import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@shared/store';
import { toggleTheme } from '@shared/store/themeSlice';

export const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {theme === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
    </button>
  );
};