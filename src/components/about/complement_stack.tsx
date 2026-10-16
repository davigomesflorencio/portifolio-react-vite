const ComplementStack = () => {
  return (
    <div className="flex flex-row gap-4 w-full mt-10">
      <div className="flex items-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_spring.webp" alt="Logo do Spring Boot" loading="lazy" decoding="async" className="w-[130px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img
            src="/back/python.webp"
            alt="Logo do Python"
            width={240}
            height={240}
            loading="lazy"
            decoding="async"
            className="h-[130px] w-[130px]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_docker.webp" alt="Logo do Docker" loading="lazy" decoding="async" className="w-[150px]" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_kubernetes.webp" alt="Logo do Kubernetes" width={450} height={450} loading="lazy" decoding="async" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default ComplementStack;
