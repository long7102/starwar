/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Vehicles from './components/Vehicles';

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('planets')
  
  // Hàm render trang tương ứng với trạng thái page
  const renderPage = () => {
    switch (page) {
      case 'planets':
        return <Planets />;
      case 'people':
        return <People />;
      case 'starships':
        return <Starships/>
      // Thêm các trang khác nếu cần
      case 'vehicles':
        return <Vehicles/>
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Info</h1>
        <Navbar setPage={setPage} />
        <div className='content'>
          {/* Sử dụng hàm renderPage để hiển thị trang */}
          {renderPage()}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;