export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center">© {new Date().getFullYear()} SOLUMECI SAS. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}