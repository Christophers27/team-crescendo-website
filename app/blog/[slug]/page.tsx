import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

type BlogPageProps = Promise<{ slug: string }>;

export default async function BlogPage(props: { params: BlogPageProps }) {
  const { slug } = await props.params;

  const blog = blogs.find((blog) => blog.slug === slug);
  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="page">
      <section className="section items-center">
        <div className="flex flex-col max-w-3xl ">
          <h1 className="text-4xl font-bold text-crescendo-white mb-4">
            {blog.title}
          </h1>
          <p className="text-crescendo-white/60 mb-4">
            Published on {formattedDate}
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
