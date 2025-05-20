import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-3xl mx-auto">
          <p>Last updated: 3/10/2022</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to Danvertise S.L.U. ("we," "our," or "us"). By accessing or using our website, you agree to be bound by these Terms and Conditions. This Agreement is legally binding between you ("User", "you" or "your") and Danvertise S.L.U ("Operator", "we", "us" or "our"). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement.</p>
          
          <h2>2. Definitions</h2>
          <ul>
            <li>"Service" refers to the website operated by Danvertise S.L.U.</li>
            <li>"User," "You," and "Your" refers to the individual accessing or using the Service.</li>
            <li>"Intellectual Property Rights" means all present and future rights conferred by statute, common law or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill and all other intellectual property rights, whether registered or unregistered.</li>
          </ul>
          
          <h2>3. Accounts and Membership</h2>
          <p>You must be at least 18 years of age to use the Website and Services. By using the Website and Services and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age.</p>
          <p>If you create an account on the Website:</p>
          <ul>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You are fully responsible for all activities that occur under the account</li>
            <li>We may monitor and review new accounts before you may sign in and start using the Services</li>
          </ul>
          
          <h2>4. Prohibited Uses</h2>
          <p>You are prohibited from using the Website and Services or Content:</p>
          <ul>
            <li>For any unlawful purpose</li>
            <li>To solicit others to perform or participate in any unlawful acts</li>
            <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
          </ul>
          
          <h2>5. Intellectual Property</h2>
          <p>This Agreement does not transfer to you any intellectual property owned by the Operator or third parties. All rights, titles, and interests in and to such property will remain solely with the Operator. All trademarks, service marks, graphics and logos used in connection with the Website and Services are trademarks or registered trademarks of the Operator or its licensors.</p>
          
          <h2>6. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, the Operator will not be liable for any indirect, incidental, special, punitive, cover or consequential damages, including damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, or loss of business opportunity.</p>
          
          <h2>7. Indemnification</h2>
          <p>You agree to indemnify and hold the Operator and its affiliates harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands related to your Content, your use of the Website and Services, or any willful misconduct on your part.</p>
          
          <h2>8. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. An updated version of this Agreement will be effective immediately upon posting. Your continued use of the Website and Services after the effective date of the revised Agreement will constitute your consent to those changes.</p>
          
          <h2>9. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact:</p>
          <p>Danvertise S.L.U</p>
          <p>Email: contact@contentcurrent.com</p>
          <p>C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
