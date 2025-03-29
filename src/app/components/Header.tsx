// src/components/Header.tsx
export default function Header() {
    return (
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Isaac's Portfolio</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  