import group from "../assets/group.svg";
import schedule from "../assets/schedule.svg";

function Recipe() {
  return (
    <div>
      <div className="border border-gray-300 rounded-md shadow p-6">
        <h1 className="font-medium text-3xl">Chicken Stir Fry</h1>
        <h2 className="text-gray-500">A quick and easy Asian-inspired dish</h2>

        <img
          className="mt-10 rounded-sm "
          src="https://placehold.co/500x300"
          alt="image"
        />

        <div className="flex flex-row mt-4 gap-4">
          <p className="text-gray-500 flex items-center">
            <img
              className="inline-block mr-1"
              src={schedule}
              alt="duration of preparing meal"
            />
            25 mins
          </p>
          <p className="text-gray-500 flex items-center">
            <img className="inline-block mr-1" src={group} alt="servings" />
            Serves 3
          </p>
        </div>

        <div className="">
          <h3 className="font-medium text-xl my-3">Ingredients:</h3>
          <ul className="list-disc px-4">
            <li className="text-lg">chicken breast</li>
            <li className="text-lg">mixed vegetables</li>
            <li className="text-lg">soy sauce</li>
            <li className="text-lg">garlic</li>
            <li className="text-lg">ginger</li>
            <li className="text-lg">vegetable oil</li>
          </ul>
        </div>
        <div className="border border-gray-100 w-1/2 my-4"></div>

        <div>
          <h3 className="font-medium text-xl my-3">Instructions:</h3>
          <ol className="list-decimal px-4">
            <li className="text-lg my-1">Cut chicken into bite-sized pieces</li>
            <li className="text-lg my-1">Heat oil in a wok or large skillet</li>
            <li className="text-lg my-1">
              Stir-fry chicken until cooked through
            </li>
            <li className="text-lg my-1">
              Add vegetables and stir-fry until tender-crisp
            </li>
            <li className="text-lg my-1">Add minced garlic and ginger</li>
            <li className="text-lg my-1">
              Pour in soy sauce and stir to combine
            </li>
            <li className="text-lg my-1">Serve hot over rice</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
