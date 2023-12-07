import { useParams } from "react-router-dom";

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
          <img alt={`${selectedCat.name} photo`} src={selectedCat.image} />
        </div>
      )}
    </>
  );
};

export default CatShow;
