import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ForAdvertisers = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8">For Advertisers</h1>
        <div className="prose max-w-3xl mx-auto">
          <p>Last Updated March 10, 2025</p>
          
          <h2>Traffic Generation</h2>
          <p>Traffic to this site is generated through Danvertise S.L.U proprietary technology which allows us to place native ads with targeted keywords on multiple platforms such as:</p>
          <ul>
            <li>Outbrain</li>
            <li>Taboola</li>
            <li>Meta</li>
            <li>Google Display Network (GDN)</li>
            <li>Other advertising platforms</li>
          </ul>
          <p>Our technology leads users to various sites where search ads are served.</p>
          
          <h2>Contact Information</h2>
          <p>For any advertising inquiries, please contact us:</p>
          <ul>
            <li>Email: contact@contentcurrent.com</li>
            <li>Company Address: C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain</li>
          </ul>
          
          <h2>Ad Placement Strategy</h2>
          <p>We utilize advanced targeting techniques to place native ads across multiple digital platforms, ensuring maximum reach and engagement for advertisers.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForAdvertisers;