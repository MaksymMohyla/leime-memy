import { Route, Routes } from 'react-router-dom';

import IndexPage from '@/pages/index';
import Table from '@/pages/table';
import List from '@/pages/list';

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Table />} path="/table" />
      <Route element={<List />} path="/list" />
    </Routes>
  );
}

export default App;
