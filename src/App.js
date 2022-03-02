import './App.css';
import foodsData from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import React, {useState} from 'react';
import Searchbar from './Components/Search/Search';
import { Row, Divider, Button } from 'antd';

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
      
      <Divider><h1>Food List</h1></Divider>
      <Searchbar search={searchFilter} />
      {showForm && <AddFoodForm addFood={addNewFood}></AddFoodForm>}
     
      <Button onClick={toggleShow}>{showForm ? 'Hide Form' : 'Add  New Food'}</Button>
      {displayFood.map((food) => {
          return (
            <Row style={{ width: '100%', justifyContent: 'center' }}>
              {<FoodBox key={food.name} clickToDelete={deleteFood} food={food} />}
            </Row>

          );
        })}
      {!displayFood.length && <h3>Ops! There is no more content to show!</h3>}
    </div>
  );
}


export default App;

