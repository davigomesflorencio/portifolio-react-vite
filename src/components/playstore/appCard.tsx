import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

interface AppCardProps {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
  metrics?: string;
}

const AppCard: React.FC<AppCardProps> = (props) => {
  const { logo, title, description, linkText, link, metrics } = props;

  return (
    <div className="h-full rounded-[20px] shadow-md transition-all duration-200 ease-in-out hover:bg-[#fafafa] dark:hover:bg-[#1a1a1a] hover:shadow-xl border-2 dark:border-white">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-center mx-auto w-24 h-24 mb-6">
            <img
              src={logo}
              alt={`${title} logo`}
              className="w-full h-full object-contain rounded-2xl shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-primary dark:text-[#f4f4f5] font-bold text-[1.2rem]">
              {title}
            </div>
            <div className="text-secondary dark:text-tertiary text-[0.9rem] leading-relaxed">
              {description}
            </div>

            {metrics && (
              <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-quaternary/30 dark:bg-white/5 rounded-full w-fit">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-accent text-xs"
                />
                <span className="text-accent text-xs font-semibold">
                  {metrics}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 mt-4 text-primary dark:text-[#f4f4f5] font-bold text-[0.8rem] group">
              {linkText}
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="text-[0.7rem] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AppCard;
