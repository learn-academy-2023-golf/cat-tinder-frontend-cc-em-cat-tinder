import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  const selectedCat = cats.find((cat) => cat.id === +id);

  const navigate = useNavigate();
  const handleSubmit = () => {
    deleteCat(selectedCat.id);
    navigate("/catindex");
  };

  return (
    <>
      {selectedCat && (
        <div
          className="d-flex flex-column justify-content-center align-items-center mt-3"
          style={{ height: "75vh" }}
        >
          <h2>
            I am {selectedCat.name}, age {selectedCat.age}.
          </h2>
          <h6>I enjoy {selectedCat.enjoys}</h6>
          <img
            alt={`${selectedCat.name} photo`}
            src={selectedCat.image}
            width="287"
            height="500"
            style={{ objectFit: "cover" }}
            className="rounded"
          />
          <NavLink
            role="link"
            to={`/catedit/${selectedCat.id}`}
            className="nav-link bg-secondary p-2 rounded my-2"
          >
            Edit Cat Profile
          </NavLink>

          <Button onClick={handleSubmit}>Delete Cat Profile</Button>
        </div>
      )}
    </>
  );
};

export default CatShow;
