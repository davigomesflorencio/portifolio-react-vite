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
  linkImage: string;
}

const Project = (props: ProjectProps) => {
  const { logo, title, description, linkText, link, linkImage } = props;

  return (
    <React.Fragment>
      <div className="h-full rounded-[20px] shadow-md transition-all duration-200 ease-in-out hover:bg-[#fafafa] hover:shadow-xl border-2 dark:border-white">
        <Link to={link}>
          <div className="flex flex-col h-full p-4">
            <div className="flex flex-row justify-start items-start gap-3 ">
              <img
                src={logo}
                alt="logo"
                className="w-20 h-20 object-contain flex-shrink-0 mt-10"
              />
              <div className="flex flex-col w-full ">
                <p className="font-bold subtitle">{title}</p>
                <p className="w-full text-[14px] text-secondary break-words whitespace-normal">
                  {description}
                </p>
              </div>
            </div>
            {linkImage && linkImage !== "" && (
              <div className="flex justify-center subtitle mx-auto w-5 h-15">
                Preview
              </div>
            )}
            {linkImage && linkImage !== "" && (
              <div className="flex justify-center mx-auto w-auto h-60 mb-4">
                <img
                  src={linkImage}
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
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
