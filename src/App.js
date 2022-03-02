import './App.css';
import foodsData from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './AddFoodForm/AddFoodForm';
import React, {useState} from 'react';
import Searchbar from './Components/Search/Search';


function App() {
  const [foods, setFood] = useState(foodsData);
  const [displayFood, setDisplayFood] = useState(foodsData);
  const [showForm, setShowForm] = useState(true);

  const deleteFood = (foodName) => {
    let newFood = [...displayFood]
    const filteredFoods = newFood.filter((foodToDelete) => {
      return foodToDelete.name !== foodName;
    });
    setDisplayFood(filteredFoods);
  };

  const addNewFood = (newfood) => {
    const updatedFood = [...foods, newfood];
    setFood(updatedFood);
    setDisplayFood(updatedFood);
  };
  const toggleShow = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };
  const searchFilter = (searchQuery) => {
    let filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    
    console.log(filteredFoods);
    setDisplayFood(filteredFoods);
  };
  return (
    <div className="App">
      <h1>Food List</h1>
      <Searchbar search={searchFilter} />
      {showForm && <AddFoodForm addFood={addNewFood}></AddFoodForm>}
      <hr />
      <button onClick={toggleShow}>{showForm ? 'Hide Form' : 'Add Food'}</button>
      {displayFood.map((food) => {
          return (
            <FoodBox key={food.name} clickToDelete={deleteFood} food={food} />
            
          );
        })}
      {!displayFood.length && <p>Ops! There is no more content to show!</p>}
    </div>
  );
}


export default App;

