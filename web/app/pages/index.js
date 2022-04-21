import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-6">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 my-3 p-4 mx-auto ">
        <h1 style={{ textAlign: "center" }}>Current Views</h1>
        <ul>
          <li>
            <Link href="/forms/submit-old-tool">
              <a>Existing tools</a>
            </Link>
          </li>
          <li>
            <Link href="/forms/submit-purchase-order">
              <a>Purchase order</a>
            </Link>
          </li>
          <li>
          <Link href="/forms/submit-purchase-tool">
            <a>Purchase tool</a>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
