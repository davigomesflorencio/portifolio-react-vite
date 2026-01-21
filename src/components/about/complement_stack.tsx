const ComplementStack = () => {
  return (
    <div className="flex flex-row gap-4 w-full mt-10">
      <div className="flex items-center">
        <div className="text-[20px] mr-4">
          <img src="ic_spring.webp" alt="Example" className="w-[130px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_python.webp" alt="Example" className="h-[130px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_docker.webp" alt="Example" className="w-[150px]" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_kubernetes.png" alt="Example" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default ComplementStack;
