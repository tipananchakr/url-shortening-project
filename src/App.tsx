import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Form } from "./components/form";
import { Toaster } from "sonner";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

export interface ShortenedUrl {
  originalUrl: string;
  shortUrl: string;
}

function App() {
  const [urls, setUrls] = useState<ShortenedUrl[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  const onCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)

      setCopiedUrl(url)

      setTimeout(() => {
        setCopiedUrl(null)
      }, 3000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto mt-8 max-w-6xl px-4">
      <Navbar />

      <Hero />

      <div className="pb-10">
        <Form setUrls={setUrls} />
      </div>

      <div className="space-y-4 pb-20">
        {urls.map((item) => (
          <div
            key={item.shortUrl}
            className="flex items-center justify-between rounded-md bg-white p-4 shadow"
          >
            <p className="truncate">{item.originalUrl}</p>

            <div className="flex items-center gap-4">
              <a
                href={item.shortUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan"
              >
                {item.shortUrl}
              </a>

              <Button
                onClick={() => onCopy(item.shortUrl)}
                className={
                  cn(
                    copiedUrl === item.shortUrl
                    ? "bg-dark-violet hover:bg-dark-violet cursor-not-allowed"
                    : "bg-cyan cursor-pointer hover:bg-cyan/80",
                    "rounded-sm w-28"
                  )
                }
              >
                {copiedUrl === item.shortUrl
                  ? "Copied!"
                  : "Copy"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;