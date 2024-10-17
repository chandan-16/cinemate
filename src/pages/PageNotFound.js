import { useEffect } from "react";

import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import PageNotFoundImage  from "../assets/images/PageNotFoundImage.png";

export const PageNotFound = ({title}) => {

  useEffect(() => {
    document.title = `${title} / Cinemate`;
  }, [])

  return (
    <main>
      <section className="flex  justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white text-center">404, 0ops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="image not found" />
          </div>
        </div>

      </section>
      <div className="flex justify-center my-4 items-center">
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
    </main>
  )
}
