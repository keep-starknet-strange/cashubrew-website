import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-purple-900 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Image
          src="/images/cashubrew-logo-no-bg.png"
          alt="Cashubrew Logo"
          width={50}
          height={50}
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#install"
                className="text-purple-100 hover:text-white"
              >
                Install
              </Link>
            </li>
            <li>
              <Link href="#links" className="text-purple-100 hover:text-white">
                Links
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
