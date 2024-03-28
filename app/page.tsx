import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      {/* Left Side */}
      <div className="flex-1 h-full max-w-md p-6">
      <div className="flex flex-col h-full rounded-md">
        <Image src="/foto.png" alt="avatar" width="120" height="120" priority/>
        {/* Tittle */}
        {/* Full name */}
        {/* bio */}
        {/* buttons */}
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
