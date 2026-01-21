import INFO from "../../data/user";
import AppCard from "./appCard";

const AllApps = () => {
  return (
    <div className="flex flex-wrap items-stretch py-[30px] -mx-[10px]">
      {INFO.playstore.map((app, index) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 box-border p-[10px] overflow-hidden"
          key={index}
        >
          <AppCard
            logo={app.logo}
            title={app.title}
            description={app.description}
            linkText={app.linkText}
            link={app.link}
            metrics={app.metrics}
          />
        </div>
      ))}
    </div>
  );
};

export default AllApps;
