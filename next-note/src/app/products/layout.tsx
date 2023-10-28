import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/gilr">여성옷</Link>
        <Link href="/man">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
