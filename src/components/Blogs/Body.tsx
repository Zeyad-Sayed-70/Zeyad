import React from "react";
import Container from "../Common/Container";
import { Blog, blogs_data } from "@/constants/blogs";
import Image from "next/image";
import Link from "next/link";
import H1 from "../Common/H1";

function Body() {
  return (
    <Container>
      <main className="py-12 flex flex-col gap-12">
        <H1>Blogs</H1>
        {blogs_data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </Container>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <section className="flex flex-col items-center lg:flex-row gap-6">
      <Link href={"#"}>
        <Image
          alt="blog_img"
          src={"/assets/zeyad logo.png"}
          width={400}
          height={200}
          className="h-[200px] border-2 object-contain"
        />
      </Link>
      <div className="flex-1 py-2 px-4">
        <span className="text-md text-main_black_variant">
          Published Date: {blog.publish_data}
        </span>
        <h4 className="text-lg font-semibold mb-2">
          <Link href={"#"}>{blog.title}</Link>
        </h4>
        <span className="text-md text-main_black_variant">
          Author: {blog.author}
        </span>

        <p className="text-md text-main_black_variant max-w-[600px] mt-4 leading-6">
          {blog.content_sample.slice(0, 200)}
          {blog.content_sample.length > 200 ? (
            <Link
              href={"#"}
              className="ml-1 text-blue-700 cursor-pointer hover:underline"
            >
              see more
            </Link>
          ) : (
            ""
          )}
        </p>
      </div>
    </section>
  );
}

export default Body;
