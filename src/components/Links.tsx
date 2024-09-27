import Link from "next/link";

export default function Links() {
  return (
    <section id="links" className="py-12">
      <h2 className="text-4xl font-bold mb-6">Magical Tomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          href="https://github.com/keep-starknet-strange/cashubrew"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-purple-900 rounded-lg hover:bg-purple-800 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">GitHub Grimoire</h3>
          <p>Explore the source code and contribute to the project</p>
        </Link>
        <Link
          href="https://docs.cashu.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-purple-900 rounded-lg hover:bg-purple-800 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">Cashu Scrolls</h3>
          <p>Learn the ancient wisdom of Cashu</p>
        </Link>
        <Link
          href="https://cashubtc.github.io/nuts/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-purple-900 rounded-lg hover:bg-purple-800 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">Specification Spellbook</h3>
          <p>Master the intricate details of the Cashu protocol</p>
        </Link>
      </div>
    </section>
  );
}
