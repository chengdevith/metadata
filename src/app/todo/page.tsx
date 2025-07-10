import { ToDoComponent } from "@/components/Todo/ToDoComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo",
  description: "Latest Todo posts about cars in Cambodia.",
  openGraph: {
    title: "Todo | Car Selling",
    description: "Explore car news, stories, and reviews in Cambodia.",
    url: "https://benz.com/Todo",
    siteName: "Car Selling",
    images: [
      {
        url: "https://car-nextjs-api.cheatdev.online/uploads/370f0d4c-3fad-441a-bd28-31291c30fd38.png",
        width: 1200,
        height: 630,
        alt: "Car Selling Todo Banner",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo | Car Selling",
    description: "Stay updated with car trends in Cambodia.",
    images: [
      "https://car-nextjs-api.cheatdev.online/uploads/370f0d4c-3fad-441a-bd28-31291c30fd38.png",
    ],
  },
};

export default function TodoPage(){
    return (
       <>
        <h1>ToDoPage</h1>
        <div>
            <ToDoComponent/>

        </div>
       </>
    )
}