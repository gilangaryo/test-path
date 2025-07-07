export default function Footer() {
    return (
        <footer className="bg-[#2c3e50] text-white py-10 px-6 md:px-24">
            <div className="grid md:grid-cols-4 gap-10">
                <div>
                    <h3 className="font-bold mb-2">a global classroom</h3>
                    <p className="text-sm">A Global Classroom is an independent curriculum provider...</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Courses</h4>
                    <ul className="space-y-1 text-sm">
                        <li>Foundations of Global Politics</li>
                        <li>Theories of IR</li>
                        <li>Human Rights</li>
                        <li>Atrocity Crimes</li>
                        <li>Peace and Conflict</li>
                        <li>Global Disparities</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Navigation</h4>
                    <ul className="space-y-1 text-sm">
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <form className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your Email address"
                            className="px-2 py-1 rounded text-black w-full"
                        />
                        <button className="bg-white text-black px-4 py-1 rounded">Get Started</button>
                    </form>
                    <div className="flex space-x-4 mt-4 text-white text-xl">
                        <i className="fab fa-google"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs mt-10">
                © 2025 Global Classroom
            </div>
        </footer>
    );
}
