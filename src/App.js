import './App.css';
import Button from './components/Button/Button';

const nextForm = () => {
  console.log('called');
};

const App = () => {
  return (
    <div>
      <Button
        styles={{
          type: 'primary',
          fontSize: 'text-base',
          fontWeight: 'font-medium',
          paddingX: 'px-4',
          paddingY: 'py-2',
          borderRounded: 'rounded-md',
        }}
        content="Next"
        callback={nextForm}
      />
    </div>
  );
};

export default App;
