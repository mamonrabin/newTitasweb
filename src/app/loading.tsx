// import logo from "@/public/assets/logo/logo.svg"
// import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full bg-[#2B748A] flex justify-center items-center absolute h-[120vh] z-999 top-0 left-0 bottom-0 right-0 overflow-hidden">
      <div className="relative w-[120px] h-[120px]">
        {/* Circular spinner */}
        <div className="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        {/* <div>
              <Image src={logo} alt="titasweb" width={100} height={100}/>
        </div> */}
      </div>
    </div>
  );
};

export default Loading;
