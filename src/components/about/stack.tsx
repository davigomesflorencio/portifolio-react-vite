const Stack = () => {
  return (
    <div className="flex flex-row gap-4 w-full mt-10">
      <div className="flex items-center">
        <div className="text-[20px] mr-4">
          <img src="ic_android.png" alt="Example" className="w-[100px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_ios.png" alt="Example" className="w-[100px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_flutter.png" alt="Example" className="w-[100px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_java.png" alt="Example" className="w-[150px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_compose.png" alt="Example" className="w-[150px]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-[20px] mr-4">
          <img src="ic_kotlin.png" alt="Example" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
