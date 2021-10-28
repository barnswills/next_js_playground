import Link from "next/link";

export default function IndexPage() {
  return (
    <div onClick={() => console.log("about")}>
      Hello World!!!!. <Link href="/about">About!</Link>
    </div>
  );
}
