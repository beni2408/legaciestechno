import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public/data/blogs.json");

export async function GET() {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const blogsWithFeatured = sortedBlogs.map((blog, index) => ({
    ...blog,
    featured: index < 2,
  }));

  return NextResponse.json(blogsWithFeatured);
}

export async function POST(req: Request) {
  const newBlog = await req.json();

  const data = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(data);

  blogs.push(newBlog);

  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));

  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const updatedBlog = await req.json();

  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  const updatedBlogs = blogs.map((blog: any) =>
    blog.id === updatedBlog.id ? updatedBlog : blog
  );

  fs.writeFileSync(filePath, JSON.stringify(updatedBlogs, null, 2));

  return NextResponse.json({ message: "Blog updated" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  const blogToDelete = blogs.find((blog: any) => blog.id === id);

  // Delete blog image if exists
  if (blogToDelete?.image) {
    const imagePath = path.join(process.cwd(), "public", blogToDelete.image);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  const filteredBlogs = blogs.filter((blog: any) => blog.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(filteredBlogs, null, 2));

  return NextResponse.json({ message: "Blog deleted" });
}
