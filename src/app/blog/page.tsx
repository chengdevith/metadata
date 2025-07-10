
// "use client"
// import BlogComponent from "@/components/BlogComponent";
// import { BlogType } from "@/lib/blog";


import { Metadata } from "next";
// import Link from "next/link";
// import { use } from "react";

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
// fetchData
// async function fetchData(){
//     await new Promise(resolve => setTimeout(resolve,3000));
//     const res = await fetch(BASE_URL);
//     const dataRes = res.json();
//     return dataRes;
// }

// app/blog/page.tsx

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest blog posts about cars in Cambodia.",
  openGraph: {
    title: "Blog | Car Selling",
    description: "Explore car news, stories, and reviews in Cambodia.",
    url: "https://benz.com/blog",
    siteName: "Car Selling",
    images: [
      {
        url: "https://car-nextjs-api.cheatdev.online/uploads/370f0d4c-3fad-441a-bd28-31291c30fd38.png",
        width: 1200,
        height: 630,
        alt: "Car Selling Blog Banner",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Car Selling",
    description: "Stay updated with car trends in Cambodia.",
    images: [
      "https://car-nextjs-api.cheatdev.online/uploads/370f0d4c-3fad-441a-bd28-31291c30fd38.png",
    ],
  },
};




export default async function BlogPage(){
   
    // const res = await fetch(BASE_URL);
    // const dataRes:BlogType[] = await res.json();
    
    return (
     <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        
        {/* {
        dataRes.map((post)=>(
            <Link href={`/blog/${post.id} `} key={post.id}>
            <BlogComponent key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body}/>
            </Link>
        ))
     } */}
     blog
     </div>
      
    )
}