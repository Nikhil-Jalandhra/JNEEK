import "./page.css";
import project from "../../../../database/projects";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    projectName: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const param = params
  return {
    title: param.projectName,
    description: "About Project",
  };
}

export default async function Page({params}: PageProps) {
  // const param = await params;
  const data = project.find(item => item?.name === params?.projectName);

  if (!data) return notFound();
  
  return (
    <div className='aboutProjectContainer'>
      <div className="aboutProjectDetail">
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <h2>Tech Stack:</h2>
        <div className="aboutProjectTech">
          {data?.techUsed.map((item) => (
            <li key={item}>{item}</li>
          ))}
          </div>
        <p>Visit Project: <Link href={data?.link || ""}>{data?.link}</Link></p>
        <p>Project Repository: <Link href={data?.repo || ""}>{data?.repo}</Link></p>
        <p>Birthday: {data?.date}</p>

      </div>
      <div className="aboutProjectImageContainer">
        {data?.image?.map((item) => (
          <div key={item} className="aboutProjectImages">
            <Image src={item} width={1896} height={863} alt={`Screenshot of ${data.name}`}/>
          </div>
        ))}
      </div>
    </div>
  );
}
