"use client"

import ToolTip from '@/app/components/(toolTip)/ToolTip';
import { useProjects, Project } from '@/context/ProjectContext';
import Link from 'next/link';
import { GoRepo } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';

function OverViewProjects() {
    
    const projects = useProjects();

  return (
    <div>
      <h2 className="overviewHeading">Projects</h2>
        <div className="overviewProjects">
        {projects.map((item: Project, index: number) => (
            <div key={index} className="pinnedProjects">
            <h2>
                <span>
                <GoRepo />
                </span>
                <Link
                className="blueLink toolTipParent"
                target="_blank"
                href={item.link}>
                {item.name}
                <ToolTip children={item.name} />
                </Link>
                <p className="publicTag">Public</p>
            </h2>
            <p className="pinnedProjectsDetails">{item.description}</p>
            <div className="pinnedProjectsMinor">
                <div
                className="langColor"
                style={{ backgroundColor: `var(--${item.language})` }}></div>
                <p>{item.language}</p>
                <div className="pinnedProjectStar">
                <h2>
                    <FaRegStar />
                </h2>
                </div>
                <p>{item.star}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default OverViewProjects;
