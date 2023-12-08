import { useParams, NavLink } from "react-router-dom";

const CatShow = ({ cats }) => {
  const { id } = useParams();
  const selectedCat = cats.find((cat) => cat.id === +id);

  return (
    <>
      {selectedCat && (
        <div>
          <h2>
            I am {selectedCat.name}, age {selectedCat.age}.
          </h2>
          <h3>I enjoy {selectedCat.enjoys}</h3>
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
            className="nav-link"
          >
            Edit Cat Profile
          </NavLink>
        </div>
      )}
    </>
  );
};

export default CatShow;
