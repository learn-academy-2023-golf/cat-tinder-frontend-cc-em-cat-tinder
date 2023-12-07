import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const CatIndex = ({ cats }) => {
  return (
    <>
      <h1>All Cats</h1>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 flex-md-row">
        {cats.map((cat) => (
          <Card
            key={cat.id}
            style={{
              width: "18rem",
              miHheight: "20rem",
            }}
          >
            <img alt={`${cat.name} photo`} src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {cat.age}
              </CardSubtitle>
              <Button>
                <NavLink to={`/catshow/${cat.id}`}>More about me!</NavLink>
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CatIndex;
