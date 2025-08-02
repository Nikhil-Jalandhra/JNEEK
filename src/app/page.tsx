import './page.css';
import { GoRepo } from 'react-icons/go';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/app/components/(MainLayout)/MainLayout';
import OverViewProjects from '@/app/components/(OverViewProjects)/OverViewProjects';

export default function Home() {

  return (
    <MainLayout>
      <div>
        <div className="overviewAbout">
          <h2>
            As a fresher seeking my first role as a front-end developer, I bring
            creativity, passion, and a strong work ethic to the table. I
            specialize in responsive design, amazing UI/UX experiences, and
            intricate animations. Proficient in HTML, CSS, and React, with
            skills in GitHub/Git, Tailwind CSS, and Framer Motion. I am eager to
            contribute to innovative projects and grow professionally in web
            development.
          </h2>
          <h2>
            As a fresher seeking my first role as a front-end developer, I bring
            creativity, passion, and a strong work ethic to the table. I
            specialize in responsive design, amazing UI/UX experiences, and
            intricate animations. Proficient in HTML, CSS, and React, with
            skills in GitHub/Git, Tailwind CSS, and Framer Motion. I am eager to
            contribute to innovative projects and grow professionally in web
            development.
          </h2>
        </div>

        <OverViewProjects/>
        
        <div className="overviewDetailsContainer">
          <div className="overviewSectionFirst">
            <h2>600 contributions in the last year</h2>
            <div className="overviewDetails">
              <div className="overviewDaysContainer">
                <Image
                  width={862}
                  height={177}
                  className="overviewDays"
                  src="/univ-images/gitdays.webp"
                  alt="days"
                />
              </div>
              <div className="overviewContentContainer">
                <div className="overviewContent">
                  <h2>Activity overview</h2>
                  <div className="overviewContentParagraph">
                    <span>
                      <GoRepo />
                    </span>
                    <h2>
                      Contributed to{' '}
                      <Link
                        href="https://urban-dapper.vercel.app/"
                        className="blueLink">
                        Nikhil-Jalandhra/Urban-Dapper
                      </Link>
                      ,<br />
                      <Link
                        href="https://goodness-in-bowl.vercel.app/"
                        className="blueLink">
                        Nikhil-Jalandhra/Goodness-In-Bowl
                      </Link>
                      ,<br />
                      <Link
                        href="https://dark-studio-j1q2lzzy9-nikhil-jalandhras-projects.vercel.app"
                        className="blueLink">
                        Nikhil-Jalandhra/Dark-Studio
                      </Link>{' '}
                      <br />
                      and 10 other repositories
                    </h2>
                  </div>
                </div>
                <div className="overviewGraph">
                  <Image
                    width={300}
                    height={322}
                    src="/univ-images/gitgraph.webp"
                    alt="graph"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overviewSectionSecond">
            <div className="learningYears">
              <h2>2025</h2>
            </div>
            <div className="learningYears higlightedYear">
              <h2>2024</h2>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
