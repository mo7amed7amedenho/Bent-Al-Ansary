import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-2xl p-5 font-bold  text-white flex justify-center" style={{ textAlign: "center" , filter: "drop-shadow(0 0 0.75rem #ffffff)"}}> دوسى ي بت ي جومانه ع البتاع اللى تحت دا  </h1>
      <Link href="/page2">
      <button className="button justify-center"> ايوا دا</button>
      </Link>
    </div>
  );
}
