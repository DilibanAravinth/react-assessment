import { useState } from 'react';
import './App.css';
import FormView from './containers/FormView';
import CardView from './containers/CardView';
const App = () => {

  const [view, setView] = useState("form");

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-100 flex-col'>
      <div className='m-4 flex gap-4'>
        <button className='bg-white px-4 py-2' onClick={() => setView("form")}>Form View</button>
        <button className='bg-white px-4 py-2' onClick={() => setView("card")}>Card View</button>
      </div>
      {view === "form" && <FormView /> }
      {view === "card" && <CardView /> }

    </div>
  );
};

export default App;
