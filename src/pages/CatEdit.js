import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams();
  let currentCat = cats?.find((cat) => cat.id === +id);

  const navigate = useNavigate();
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id);
    navigate("/catindex");
  };

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image,
  });
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center my-5" style={{ textShadow: "0 5px 5px grey" }}>
        Edit a Cat
      </h1>

      <Form className="w-75 m-auto p-3 shadow-lg rounded">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            placeholder="Cat Name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            name="age"
            placeholder="Age"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            name="enjoys"
            placeholder="Enjoys"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            placeholder="Image"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button className="w-100" onClick={handleSubmit} name="Submit">
          Submit Updated Cat
        </Button>
      </Form>
    </>
  );
};

export default CatEdit;
