export default function HeroSection() {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/your-hero-image.jpg')` }}>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">GLOBAL CHALLENGES.<br />LOCAL VOICES.<br />SHARED LEARNING.</h1>
                </div>
            </div>
        </section>
    );
}
