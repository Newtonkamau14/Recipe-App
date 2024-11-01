import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="border rounded-md my-4">
      <Link to="#">
        <img src="https://placehold.co/200x100" alt="" />
        <h1 className="font-normal p-2">Spaghetti Cabonara</h1>
        <p className="text-gray-400 p-2">A classic italian pasta dish</p>
      </Link>
    </div>
  );
}
export default Card;