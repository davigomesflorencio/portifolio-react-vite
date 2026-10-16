const WearableStack = () => {
  return (
    <div className="flex flex-row gap-4 w-full mt-10">
      <div className="flex items-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_wear.webp" alt="Logo do Wear OS" width={450} height={450} loading="lazy" decoding="async" className="w-[130px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_smartwatch.webp" alt="Smartwatches com Wear OS" width={450} height={142} loading="lazy" decoding="async" className="h-[130px] w-auto" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img
            src="/ic_samsung_health.webp"
            alt="Logo do Samsung Health"
            width={450}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WearableStack;
