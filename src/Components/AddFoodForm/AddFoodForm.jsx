import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.random() * 1000000000;
    const newFood = {
      _id: randomId,
      name,
      image,
      calories,
      servings,
    };

    props.addFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };
  return (
    <div>
      <Divider>Add Food Entry</Divider>
      <form onSubmit={handleSubmit}>
        <label> Name:</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label> Image:</label>
        <Input
          type="url"
          name="image"
          value={image}
          onChange={handleImageInput}
        />
        <label> Calories:</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <label> Servings:</label>
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
