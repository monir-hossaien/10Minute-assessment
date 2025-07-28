'use client';

import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="flex justify-center text-red-500">
                    <FaSearch size={48} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">404 - Not Found</h2>
                <p className="text-gray-500 text-sm">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
