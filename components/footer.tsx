export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-neutral-500 md:flex-row md:py-6">
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/bhusan-sharma-94667a285/" className="hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/Bhusansh/" className="hover:text-black transition-colors">
            GitHub
          </a>
          <a href="https://estatravels.in" className="hover:text-black font-medium transition-colors">
            Esta Travels
          </a>
        </div>
        <p>© {new Date().getFullYear()} Bhusan. All rights reserved.</p>
      </div>
    </footer>
  );
}
