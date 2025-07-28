

import MasterLayout from "@/layout/MasterLayout";

export default function Home() {
    return (
        <MasterLayout>
            <section className="min-h-screen container flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Welcome to our Home Page
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Explore our platform and find what you need quickly.
                    </p>
                </div>
            </section>
        </MasterLayout>
    );
}
