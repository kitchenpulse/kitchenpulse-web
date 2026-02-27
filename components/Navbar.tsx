import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 shadow-md">
            {/* Logo / Brand */}
            <h1 className="text-2xl font-bold">KitchenPulse</h1>

            {/* Navigation Links */}
            <div className="flex gap-6 text-lg">
                <Link href="/" className="hover:text-gray-500 transition">
                    Home
                </Link>
                <Link href="/about" className="hover:text-gray-500 transition">
                    About
                </Link>
                <Link href="/services" className="hover:text-gray-500 transition">
                    Services
                </Link>
                <Link href="/contact" className="hover:text-gray-500 transition">
                    Contact
                </Link>
            </div>
        </nav>
    );
}