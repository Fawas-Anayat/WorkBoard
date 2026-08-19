import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <div>
      Page not found
      <Link to={"/login"}></Link>
    </div>
  )
}

export default Notfound;
