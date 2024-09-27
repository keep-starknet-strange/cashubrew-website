export default function Footer() {
  return (
    <footer className="bg-purple-900 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Cashubrew - Crafted with Elixir
          magic
        </p>
      </div>
    </footer>
  );
}
