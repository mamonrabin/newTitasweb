// export const apiBaseUrl =
//   process.env.API_BASE_URL ||
//   (process.env.NODE_ENV === "production"
//     ? "https://server-gilt-theta.vercel.app/api/v1"
//     : "http://localhost:3000/api/v1");

// export const apiBaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";


export const apiBaseUrl =
  process.env.API_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://titaswebserver.vercel.app/api/v1"
    : "http://localhost:3000/api/v1");


