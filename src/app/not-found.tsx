import "./not-found.css";
import { TbFaceIdError } from "react-icons/tb";

function page() {
  return (
    <div className='notFoundPage'>
      <div className='notFoundContainer'>
        <h1>4<TbFaceIdError/>4</h1>
        <h2>Not Found</h2>
      </div>
    </div>
  );
}

export default page;
