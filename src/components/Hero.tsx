import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <Image
        src="/images/cashubrew-logo-no-bg.png"
        alt="Cashubrew Logo"
        width={100}
        height={100}
        className="mx-auto mb-6"
      />
      <h1 className="text-6xl font-bold mb-4">Cashubrew</h1>
      <p className="text-2xl mb-8">Elixir Magic for Cashu</p>
      <div className="inline-block border-2 border-purple-500 p-4 rounded-lg animate-pulse">
        <p className="text-xl">
          Unleash the power of private, instant and near-zero fee transactions
        </p>
      </div>
    </section>
  );
}
