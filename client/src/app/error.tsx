'use client';

import { useEffect } from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Global Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
            <div className="max-w-md p-6 bg-white shadow-lg rounded-xl text-center space-y-4">
                <div className="flex justify-center text-red-500">
                    <FaExclamationTriangle size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Oops! Something went wrong</h2>
                <p className="text-gray-500 text-sm">
                    {error?.message || 'An unexpected error occurred. Please try again.'}
                </p>
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition"
                >
                    <FaRedo />
                    Try Again
                </button>
            </div>
        </div>
    );
}
