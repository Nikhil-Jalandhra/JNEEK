import './page.css';
import project from '../../../../database/projects';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

type ProjectParams = { projectName: string };

interface PageProps<T> {
  params: Promise<T>;
}
export async function generateMetadata(
  { params }: PageProps<ProjectParams>,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { projectName } = (await params) || { projectName: '' };
  return {
    title: projectName,
    description: `Details about the ${projectName} project.`,
  };
}

// ✅ Dynamic Page Component
export default async function Page({ params }: PageProps<ProjectParams>) {
  const { projectName } = (await params) || { projectName: '' };
  const data = project.find((item) => item?.name === projectName);

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
          {data.techUsed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Visit Project:{' '}
          <Link href={data.link} target="_blank" rel="noopener noreferrer">
            {data.link}
          </Link>
        </p>
        <p>
          Project Repository:{' '}
          <Link href={data.repo} target="_blank" rel="noopener noreferrer">
            {data.repo}
          </Link>
        </p>
        <p>Birthday: {data.date}</p>
      </div>

      <div className="aboutProjectImageContainer">
        {data.image?.map((item) => (
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
