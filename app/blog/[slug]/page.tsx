import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  console.log("Blog:", blog);

  if (!blog) {
    notFound();
  }

  return (
    <main className="page">
      <section className="section items-center">
        <div className="flex flex-col max-w-3xl ">
          <h1 className="text-4xl font-bold text-crescendo-white mb-4">
            {blog.title}
          </h1>
          <p className="text-crescendo-white/60">
            Published on {new Date(blog.date).toLocaleDateString()}
          </p>
          <div className="aspect-[16/9] relative mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div
            className="max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
    </main>
  );
}
