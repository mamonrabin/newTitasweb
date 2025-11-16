const Loading = () => {
  return (
    <div className="w-full bg-[#6F50F3] flex justify-center items-center absolute h-[120vh] z-[999] top-0 left-0 bottom-0 right-0 overflow-hidden">
      <div className="relative w-[120px] h-[120px]">
        {/* Circular spinner */}
        <div className="absolute inset-0 rounded-full border-4 border-t-[#fff] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
