import React from "react";
import blogImage from "@/public/assets/image/blog01.webp";
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
            <p className="text-sm">17 Octobar 2025</p>
          </div>

          <div className="px-6 py-4">
            <h2
              className={`${exo.className} lg:text-3xl text-2xl font-bold mt-4 lg:leading-9`}
            >
              Why Your E-commerce Site is Slow (And How Server Components Fix
              It)
            </h2>
            <p className="mt-4 text-gray-500">
              Your e-commerce site just lost another customer. They clicked on a
              product from Google, watched a white screen for three seconds, and
              bounced back to your competitor. This scenario happens thousands
              of times a day across e-commerce platforms, and the culprit is
              almost always the same: massive JavaScript bundles that suffocate
              user experience.
            </p>
            <p className="mt-4 text-gray-500">
              The data is brutal. Research shows that 53% of mobile users
              abandon sites that take longer than three seconds to load. For
              every additional second of load time, conversions drop by 7%. If
              your e-commerce site is slow, you&apos;re not just losing
              customers - you&apos;re hemorrhaging revenue.
            </p>
            <p className="mt-4 text-gray-500">
              The root cause? Traditional client-side React applications ship
              enormous JavaScript payloads to the browser. Every product
              carousel, every filtering component, every review widget adds to
              the bundle size. By the time your homepage loads, users have
              already left.
            </p>

            <p className="mt-4 text-gray-500">
              React Server Components in Next.js fundamentally solve this
              problem. Let&apos;s explore why your site is slow and how this
              architectural shift can transform your bottom line.
            </p>

            <div>
              <h2
                className={`${exo.className} lg:text-3xl text-2xl font-bold mt-6 leading-9`}
              >
                The Three Performance Killers in E-commerce
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
                    site&lsquo;s reliability, especially during critical moments like
                    checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <BlogSide/>
        </div>
      </div>
    </div>
  );
};

export default page;
