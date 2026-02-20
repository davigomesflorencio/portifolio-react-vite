import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import Card from "../common/card";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title={t("homepage.experiences")}
        body={
          <div className="flex flex-col gap-6 mb-8 ">
            {INFO.works.map((work, index) => (
              <div className="flex flex-row items-start w-full" key={index}>
                <img
                  src={work.logo}
                  alt={work.company}
                  className="h-[30px] w-[30px] rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.1)] mt-1"
                />
                <div className="flex flex-col flex-1 ml-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col">
                    <div className="text-[18px] font-bold text-secondary">
                      {work.company}
                    </div>
                    <div className="text-[16px] text-secondary">{work.title}</div>
                  </div>
                  <div className="text-[18px] text-tertiary whitespace-nowrap sm:ml-4 mt-1 sm:mt-0">
                    {work.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Works;
