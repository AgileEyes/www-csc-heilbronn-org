import Link from "next/link";
import RootLayout from "./(main)/layout";

export default function NotFound() {
  return (
    <RootLayout>
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </RootLayout>
  );
}
