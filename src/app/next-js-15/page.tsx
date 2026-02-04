import React from "react";
import blogImage from "@/public/assets/image/blog02.png";
import Image from "next/image";
import { exo } from "../font";
import BlogSide from "@/src/components/blogs/BlogSide";

const page = () => {
  return (
    <div className="lg:mt-20 mt-10 pb-20 Container">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex-2">
          <Image
            src={blogImage}
            alt="titassweb"
            width={800}
            height={800}
            className="rounded-t-xl w-full"
          />
          <div className="flex items-center justify-between bg-[#1D3131] px-4 py-3 text-white">
            <p className={`${exo.className} font-semibold`}>Al Mamon</p>
            <p className="text-sm">17 Octobar 2026</p>
          </div>

          <div className="px-6 py-4">
            <h2
              className={`${exo.className} lg:text-3xl text-2xl font-bold mt-4 lg:leading-9`}
            >
              3 Caching Strategies That Will Supercharge Your Next.js App
            </h2>
            <p className="mt-4 text-gray-500">
              Next.js 15 revolutionizes how we think about caching. Gone are the
              aggressive defaults of previous versions, replaced by a more
              developer-controlled approach that gives you precise power over
              performance optimization. With Next.js 15, we&apos;re changing the
              caching default for GET Route Handlers and the Client Router Cache
              from cached by default to uncached by default.
            </p>
            <p className="mt-4 text-gray-500">
              This shift means better predictability and performance where it
              matters most. Let&apos;s dive into three game-changing caching
              strategies that will transform your Next.js applications.
            </p>

            <div>
              <h2
                className={`${exo.className} lg:text-3xl text-2xl font-bold mt-6 leading-9`}
              >
                The Three Performance Your Next.js App
              </h2>

              <div className="flex flex-col gap-4">
                <div>
                  <h2
                    className={`${exo.className} text-2xl font-bold mt-6 leading-9`}
                  >
                    1. Bloated JavaScript Bundles
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Traditional e-commerce sites send everything to the
                    client—product display logic, filtering algorithms,
                    recommendation engines, and all their dependencies. A
                    typical product page can easily ship 500KB+ of JavaScript
                    before displaying a single product.
                  </p>

                  <p className="mt-4 text-gray-500">
                    <span className="font-bold">The Problem:</span> Users must
                    download, parse, and execute all this JavaScript before
                    seeing content. On mobile devices with slower processors,
                    this creates multi-second delays.
                  </p>
                </div>

                <div>
                  <h2
                    className={`${exo.className} text-2xl font-bold mt-4 leading-9`}
                  >
                    2. Waterfall Data Fetching
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Client-side apps follow a predictable pattern: load the page
                    shell, fetch product data, wait for that data, then fetch
                    related products, then fetch reviews. Each request waits for
                    the previous one to complete.
                  </p>

                  <p className="mt-4 text-gray-500">
                    <span className="font-bold">The Problem:</span> This
                    sequential loading creates waterfalls where users wait
                    through multiple round trips before seeing complete
                    information. Your Time to Interactive (TTI) skyrockets.
                  </p>
                </div>

                <div>
                  <h2
                    className={`${exo.className} text-2xl font-bold mt-4 leading-9`}
                  >
                    3. Unnecessary Re-rendering
                  </h2>

                  <p className="mt-4 text-gray-500">
                    When a user filters products by price or color, traditional
                    React apps re-render entire component trees, recalculating
                    layouts and updating the DOM. This causes jank and perceived
                    slowness even after initial load.
                  </p>

                  <p className="mt-4 text-gray-500">
                    <span className="font-bold">The Problem:</span> Every
                    interaction feels sluggish. Users lose confidence in your
                    site&lsquo;s reliability, especially during critical moments
                    like checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <BlogSide />
        </div>
      </div>
    </div>
  );
};

export default page;
