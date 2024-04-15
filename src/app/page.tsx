import Link from "next/link";
import { db } from "~/server/db";

const imgs = [
  "https://utfs.io/f/4b66fa66-eff7-42d7-9031-650bcba61334-q0gdc0.png",
  "https://utfs.io/f/62fa2fbf-9b80-4120-b580-34a39750eba3-n1e1ed.png",
  "https://utfs.io/f/06a9baac-cd9f-46d7-8d89-a7f5b41f483c-3dhn29.png",
];

const mockImgs = imgs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const data = await db.query.posts.findMany();
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImgs.map((img) => (
          <div className="w-48" key={img?.id}>
            <img src={img.url} alt="dd" />
          </div>
        ))}
      </div>
      <h1> </h1>
    </main>
  );
}
