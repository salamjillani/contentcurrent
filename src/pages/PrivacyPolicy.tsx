import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Company Information</h2>
            <p>Legal Entity Name: Danvertise S.L.U</p>
            <p>Address: C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain</p>
            <p>Email: contact@contentcurrent.com</p>
            <p>Phone: +34 123 456 789</p>
          </div>
          
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>Danvertise S.L.U with registered office in Spain – C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain, (hereinafter, "Data Controller"), as owner of the website (hereinafter, the "Website"), as Data Controller for the processing of personal data of users browsing the Website (hereinafter, "Users") below provides the Privacy Policy.</p>
          
          <h2>2. Contact Information</h2>
          <p>The Data Controller takes utmost account of its Users' right to privacy and the protection of their personal data. For any information related to this Privacy Policy, Users can contact the Data Controller at any time, via any of the following means:</p>
          <ul>
            <li>By sending a registered letter with return receipt to the registered office of the Data Controller (C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain)</li>
            <li>By sending an email to the address contact@contentcurrent.com</li>
          </ul>
          <p>The Data Controller has not identified a Data Protection Officer (DPO), not being obliged to appoint such an officer pursuant to Article 37 of the Regulation.</p>
          
          <h2>3. Purpose of Processing</h2>
          <p>Users' personal data will be processed lawfully by the Data Controller pursuant to Article 6 of the Regulations for the following processing purposes:</p>
          <ol>
            <li><strong>Website Navigation and Service Provision</strong>: Collecting data implicit in internet communication protocols, including IP addresses, domain names, requested resource addresses, request time, server request method, and other system parameters. This data is used solely for anonymous statistical information and website operation verification.</li>
            <li><strong>Administrative/Accounting Purposes</strong>: Conducting organizational, administrative, financial, and accounting activities necessary for fulfilling contractual obligations.</li>
            <li><strong>Legal Obligations</strong>: Fulfilling legal requirements and establishing responsibility in case of potential cybercrime against the Website.</li>
          </ol>
          
          <h2>4. Data Processing and Storage Methods</h2>
          <p>Users' personal data will be processed using electronic means, strictly necessary to achieve the processing purpose, while ensuring data confidentiality. Personal data will be kept only for the time necessary to carry out primary purposes or for protecting civil law interests.</p>
          
          <h2>5. Scope of Communication and Dissemination of Data</h2>
          <p>Personal data may be disclosed to:</p>
          <ul>
            <li>Employees and collaborators managing the Website</li>
            <li>External Data Processors such as IT and logistic service providers</li>
            <li>Outsourcing or cloud computing service providers</li>
            <li>Professionals and consultants</li>
          </ul>
          <p>Users have the right to obtain a list of Data Processors by request to the Data Controller.</p>
          
          <h2>6. Rights of the Data Subject</h2>
          <p>Users may exercise their rights by contacting the Data Controller via:</p>
          <ul>
            <li>Registered letter to: C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain</li>
            <li>Email to: contact@contentcurrent.com</li>
          </ul>
          
          <p>Users have the right to:</p>
          <ul>
            <li>Obtain information about their personal data's source, processing purposes, and methods</li>
            <li>Access, update, rectify, or integrate their data</li>
            <li>Request deletion or blocking of unlawfully processed data</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
            <li>Object to data processing</li>
            <li>File a complaint with the Supervisory Authority</li>
          </ul>
          
          <h2>7. Supervisory Authority</h2>
          <p>The supervisory authority is the Data Protection Commissioner in the relevant jurisdiction.</p>
          
          <h2>8. Disclaimer</h2>
          <p>The Controller is not responsible for updating all links in this Policy. Users acknowledge that when a link is non-functional, they must refer to the referenced document or section.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;