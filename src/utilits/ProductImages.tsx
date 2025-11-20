// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import { apiBaseUrl } from "../config/config";

// // dynamically import Lightbox (client-only)
// const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });
// import "yet-another-react-lightbox/styles.css";

// const ProductImages = ({ images }: { images: string[] }) => {
//   const [index, setIndex] = useState<number>(-1);

//   // prepare slides for the lightbox
//   const slides = images?.map((image) => ({
//     src: apiBaseUrl + image,
//   }));

//   return (
//     <>
//       <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4 mt-8">
//         {images?.map((image, i) => (
//           <div
//             key={i}
//             className="border border-[#6F50F3]/20 rounded p-2 cursor-pointer"
//             onClick={() => setIndex(i)}
//           >
//             <Image
//               src={apiBaseUrl + image}
//               alt={`image-${i}`}
//               width={500}
//               height={500}
//               className="rounded"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {slides?.length > 0 && (
//         <Lightbox
//           open={index >= 0}
//           index={index}
//           close={() => setIndex(-1)}
//           slides={slides}
//         />
//       )}
//     </>
//   );
// };

// export default ProductImages;
