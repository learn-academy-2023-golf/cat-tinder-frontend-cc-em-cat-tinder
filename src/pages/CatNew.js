import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CatNew = ({ createCat }) => {
  const navigate = useNavigate();

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCat(newCat);
    navigate("/catindex");
  };

  return (
    <>
      <h1>Add New Cat</h1>

      <Form>
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
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default CatNew;
