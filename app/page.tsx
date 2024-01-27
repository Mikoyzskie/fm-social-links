import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#1f1f1f] p-10 flex flex-col justify-center items-center rounded-xl gap-6">
      <Image
        src={"/avatar-jessica.jpeg"}
        alt="User"
        width={88}
        height={88}
        className="rounded-full"
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold text-white">Mikoyzskie</h1>
        <p className="font-bold text-[#C4F82A]">Pampanga, Philippines</p>
      </div>
      <p className="text-white">{`"Fullstack developer and a certified gamer"`}</p>
      <div className="text-white font-bold flex flex-col w-full items-center gap-4">
        <Link href={"https://github.com/Mikoyzskie"} target="_blank" className="bg-[#333] p-3 w-full text-center rounded-lg hover:bg-[#C4F82A] hover:text-[#333]">Github</Link>
        <Link href={"https://www.frontendmentor.io/profile/Mikoyzskie"} target="_blank" className="bg-[#333] p-3 w-full text-center rounded-lg hover:bg-[#C4F82A] hover:text-[#333]">Frontend Mentor</Link>
        <Link href={"https://www.linkedin.com/in/mykescala/"} target="_blank" className="bg-[#333] p-3 w-full text-center rounded-lg hover:bg-[#C4F82A] hover:text-[#333]">LinkedIn</Link>
        <Link href={"https://twitter.com/SuspendedMikoy"} target="_blank" className="bg-[#333] p-3 w-full text-center rounded-lg hover:bg-[#C4F82A] hover:text-[#333]">Twitter</Link>
        <Link href={"https://www.instagram.com/mikoysainsta/"} target="_blank" className="bg-[#333] p-3 w-full text-center rounded-lg hover:bg-[#C4F82A] hover:text-[#333]">Instagram</Link>
      </div>
    </main>
  );
}
