import "./page.css";
import project from "../../../../database/projects";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: {projectName: string} } ) {
  const { projectName } = await params;

  return {
    title: projectName,
    description: "About Project",
  };
}

 async function page({params}: { params: {projectName: string} }) {

  const param = await params;
  const data = project.find(item => item?.name === param?.projectName);
  
  return (
    <div className='aboutProjectContainer'>
      <div className="aboutProjectDetail">
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <h2>Tech Stack:</h2>
        <div className="aboutProjectTech">
          {data?.techUsed.map((item) => (
            <li>{item}</li>
          ))}
          </div>
        <p>Visit Project: <Link href={data?.link || ""}>{data?.link}</Link></p>
        <p>Project Repository: <Link href={data?.repo || ""}>{data?.repo}</Link></p>
        <p>Birthday: {data?.date}</p>

      </div>
      <div className="aboutProjectImageContainer">
        {data?.image?.map((item) => (
          <div key={item} className="aboutProjectImages">
            <Image src={item} width={1896} height={863} alt="image"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
