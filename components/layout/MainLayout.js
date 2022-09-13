import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-gray-800 overflow-hidden">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
