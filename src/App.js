import FruitContainer from './components/FruitContainer'


function App() {
  const fruits = ['banana', 'watermelon', 'cherry', 'guava', 'apple', 'kiwi', 'strawberry', 'mango', 'pineapple', 'avocado'];
  return (
    <div>
      <h1>Fruit Filter</h1>
      
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
