const Stack = () => {
  return (
    <div className="flex flex-row gap-4 w-full mt-10">
      <div className="flex items-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_android.webp" alt="Logo do Android" width={378} height={450} loading="lazy" decoding="async" className="w-[100px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_ios.webp" alt="Logo do iOS" width={256} height={256} loading="lazy" decoding="async" className="w-[100px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_flutter.webp" alt="Logo do Flutter" width={450} height={450} loading="lazy" decoding="async" className="w-[100px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_java.webp" alt="Logo do Java" width={450} height={450} loading="lazy" decoding="async" className="w-[150px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_compose.webp" alt="Logo do Jetpack Compose" width={416} height={450} loading="lazy" decoding="async" className="w-[150px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="/ic_kotlin.webp" alt="Logo do Kotlin" width={450} height={300} loading="lazy" decoding="async" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
