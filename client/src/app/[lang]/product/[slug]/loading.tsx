
export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen backdrop-blur-xs backdrop-brightness-90 ">
            <div className="text-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-sm text-gray-700">Loading course details...</p>
            </div>
        </div>
    );
}