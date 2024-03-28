import Image from "next/image";
import { siteConfig } from "./config/site-config";
import { Mail, MapPin } from "lucide-react";


export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      {/* Left Side */}
      <div className="flex-1 h-full max-w-md p-8">
      <div className="flex flex-col h-full space-y-6 rounded-md">
        <Image src="/foto.png" alt="avatar" width="120" height="120" priority loading="eager"/>

      <div>
         {/* Tittle */}
        <div className="text-xl font-semibold text-primary">{siteConfig.title}
        </div>
        {/* Full name */}
        <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
        {/* bio */}
        <p className="text-2xl font-light text-neutral-500">{siteConfig.bio}</p>
      </div>
        {/* buttons */}
        <div className="flex items-center gap-6 justify-between text-sm">
          <a className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800" 
          href={siteConfig.locationLink}>
            <MapPin size={16}/>
            {siteConfig.location}
            </a>
            <a className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800" 
          href={`mailto:${siteConfig.email}`}>Contact me
            <Mail size={16}/>
            </a>
        </div>
        {/* footer */}
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 h-full p-6">
      <div className="flex items-center justify-center h-full rounded-md dark:bg-emerald-700">
        Right Side
        </div>
      </div>
    </main>
  );
}
