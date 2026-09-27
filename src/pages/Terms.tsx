import { companyData } from "@/data/content";

export default function Terms() {
  return (
    <div className="w-full bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By engaging {companyData.name} for any services including but not limited to design, printing, signage manufacturing, or corporate gifting, you agree to be bound by these Terms and Conditions.
          </p>

          <h2>2. Quotations and Pricing</h2>
          <ul>
            <li>All quotes provided are valid for 30 days from the date of issue unless otherwise stated.</li>
            <li>Prices are subject to change without notice due to fluctuations in material costs.</li>
            <li>Applicable taxes (GST) will be added to the final invoice as mandated by Indian law.</li>
          </ul>

          <h2>3. Proofing and Approvals</h2>
          <p>
            Clients are required to review and approve all design proofs before production begins. Once a proof is approved, {companyData.name} is not liable for any errors (typographical, color, layout) that were present in the approved proof. Any reprints required due to client oversight will be charged at full price.
          </p>

          <h2>4. Color Matching</h2>
          <p>
            While we strive for the highest degree of color accuracy, standard printing processes cannot guarantee a 100% color match to what is seen on a computer monitor. If precise color matching (Pantone) is required, it must be explicitly requested and may incur additional charges.
          </p>

          <h2>5. Payment Terms</h2>
          <ul>
            <li>A non-refundable advance payment of 50% is required to initiate any project.</li>
            <li>The remaining 50% balance must be cleared prior to final delivery or installation.</li>
            <li>Delayed payments may halt production schedules.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            Unless explicitly transferred via a separate written agreement, all preliminary designs, sketches, and concepts remain the property of {companyData.name}. Upon final payment, the client receives usage rights for the final delivered product.
          </p>

          <h2>7. Contact Information</h2>
          <p>For any queries regarding these terms, please contact us at {companyData.contact.email}.</p>
        </div>
      </div>
    </div>
  );
}
