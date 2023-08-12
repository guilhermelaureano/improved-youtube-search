import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import WrapContent from '@/components/wrapContent';

function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <WrapContent />
      <Footer />
    </div>
  );
}

export default Home;
