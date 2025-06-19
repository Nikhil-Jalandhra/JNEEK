import "./page.css";
import Blogcard from '../components/(Blogcard)/Blogcard';
import Image from "next/image";
import MainLayout from "../components/(MainLayout)/MainLayout";

export const metadata = {
  title: "Reflection",
  description: "My Shadow",
};

function page() {
  return (
    <MainLayout>
    <div className='blogPagecontainer'>
      <div className="blogPageHeader">
        <div className="blogPageImg">
          <Image width={512} height={512} src="/univ-images/JNEEK.webp" alt="Logo" />
        </div>
        <h1>Author "Nikhil Jalandhra"</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse suscipit perspiciatis numquam.</p>
      </div>
        <div className="blogCardsContainer">
          <h1 className="blogPageHeading">Read one, atleast.</h1>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
        </div>
    </div>
    </MainLayout>
  );
}

export default page;
