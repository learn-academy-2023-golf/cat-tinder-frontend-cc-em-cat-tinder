import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const CatIndex = ({ cats }) => {
  return (
    <div className="cat-index text-center my-5">
      <h1 className="my-4" style={{ textShadow: "0 5px 5px grey" }}>
        All Cats
      </h1>

      <div className="d-flex flex-column flex-wrap justify-content-evenly align-items-center gap-3 flex-md-row pb-5">
        {cats.map((cat, i) => (
          <Card
            key={i}
            style={{
              width: "18rem",
              miHheight: "20rem",
            }}
            className="card mb-5 rounded"
          >
            <img
              alt={`${cat.name} photo`}
              src={cat.image}
              width="287"
              height="500"
              style={{ objectFit: "cover" }}
              className="rounded"
            />
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
    </div>
  );
};

export default CatIndex;
