"use client";
import './page.css';
import Image from 'next/image';
import Link from 'next/link';
import { useProjects, Project } from '@/context/ProjectContext';
import { useParams } from 'next/navigation';

export default function Page() {
  const { projectName } = useParams() as { projectName: string };
  const projects = useProjects();
  const data: Project | undefined = projects.find((item: Project) => item?.name === projectName);

  if (!data) {
    return (
      <div className="aboutProjectContainer">
        <h1>🚫 Project Not Found</h1>
        <p>No project exists with the name "{projectName}".</p>
      </div>
    );
  }

  return (
    <div className="aboutProjectContainer">
      <div className="aboutProjectDetail">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <h2>Tech Stack:</h2>
        <ul className="aboutProjectTech">
          {data.techUsed.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Visit Project:{" "}
          <Link href={data.link} target="_blank" rel="noopener noreferrer">
            {data.link}
          </Link>
        </p>
        <p>
          Project Repository:{" "}
          <Link href={data.repo} target="_blank" rel="noopener noreferrer">
            {data.repo}
          </Link>
        </p>
        <p>Birthday: {data.date}</p>
      </div>

      <div className="aboutProjectImageContainer">
        {data.image?.map((item: string) => (
          <div key={item} className="aboutProjectImages">
            <Image
              src={item}
              width={1896}
              height={863}
              alt={`${data.name} screenshot`}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
