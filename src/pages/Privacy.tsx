import { companyData } from "@/data/content";

export default function Privacy() {
  return (
    <div className="w-full bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent">
          <p>
            {companyData.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by {companyData.name}.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect personal information that you provide to us when you:</p>
          <ul>
            <li>Request a quote or contact us via our website</li>
            <li>Call or email our office</li>
            <li>Engage our services for design, printing, or signage</li>
          </ul>
          <p>The personal information we collect may include your name, company name, email address, phone number, and physical address.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Process your transactions and send related information, including invoices and receipts</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and promotions offered by {companyData.name}</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

          <h2>4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            <strong>{companyData.name}</strong><br/>
            {companyData.contact.address}<br/>
            Email: {companyData.contact.email}<br/>
            Phone: {companyData.contact.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
