import React from "react";
import SectionDivider from "../sectionDivider";
import { blogs } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function BlogListingSection() {
  return (
    <section className="section">
      <SectionDivider text="Blog Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="bg-crescendo-black border border-crescendo-purple rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[16/9] relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-crescendo-white mb-2">
                {blog.title}
              </h2>
              <p className="text-crescendo-white/80 line-clamp-2">
                {blog.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
