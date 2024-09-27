export default function InstallInstructions() {
  return (
    <section id="install" className="py-12">
      <div className="bg-purple-900 p-8 rounded-lg shadow-lg">
        <p className="text-xl mb-4">Cast this spell in your terminal:</p>
        <pre className="bg-black p-4 rounded overflow-x-auto">
          <code className="text-purple-300">
            curl --proto &apos;https&apos; --tlsv1.2 -sSf
            https://sh.cashubrew.app | sh
          </code>
        </pre>
      </div>
    </section>
  );
}
