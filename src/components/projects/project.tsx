import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export interface ProjectProps {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const Project = (props: ProjectProps) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className="h-full rounded-[20px] shadow-md transition-all duration-200 ease-in-out hover:bg-[#fafafa] hover:shadow-xl border-2 dark:border-white">
        <Link to={link}>
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-center mx-auto w-20 h-20 mb-4">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-[17px] font-bold text-primary mb-4 text-center">
              {title}
            </div>
            <div className="text-[14px] leading-[24px] text-secondary text-justify mb-8">
              {description}
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-[14px] mt-auto">
              <div className="text-[12px]">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className="hover:text-accent">{linkText}</div>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Project;
