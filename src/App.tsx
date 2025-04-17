import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home';
import TablePage from '@/pages/table';
import ListPage from '@/pages/list';

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<TablePage />} path="/table" />
      <Route element={<ListPage />} path="/list" />
    </Routes>
  );
}

export default App;
