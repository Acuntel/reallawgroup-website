import { Metadata } from 'next';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Illinois Quit Claim Deeds',
  description: 'Complete guide to quit claim deeds in Illinois. Learn what they are, when to use them, and their legal implications from REAL Law Group.',
  openGraph: {
    title: 'Illinois Quit Claim Deeds | REAL Law Group',
    description: 'Complete guide to quit claim deeds in Illinois - what they are, when to use them, and legal implications.',
    url: '/resources/quit-claim-deeds-illinois',
  },
};

export default function QuitClaimDeedsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Illinois Quit Claim Deeds</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Understanding quit claim deeds and how they work in Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Illinois Quit Claim Deeds' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">What Is a Quit Claim Deed?</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <p className="text-text-muted leading-relaxed mb-6">
            A quit claim deed is a legal instrument used to transfer interest in real property from one party (the grantor) to another (the grantee). Unlike a warranty deed, a quit claim deed makes no guarantees about the grantor&apos;s ownership interest. The grantor simply &ldquo;quits&rdquo; whatever claim they may have to the property, transferring it to the grantee without warranties or representations about the title&apos;s validity.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            In Illinois, quit claim deeds are commonly used in specific situations where the parties involved already have an established relationship or where the transfer of property does not involve a traditional sale.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">When Are Quit Claim Deeds Used in Illinois?</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 mb-10">
            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Transfers Between Family Members</h3>
              <p className="text-text-muted text-sm leading-relaxed">One of the most common uses is transferring property between family members — for example, a parent adding a child to the title, or transferring property between spouses during or after a marriage.</p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Divorce Proceedings</h3>
              <p className="text-text-muted text-sm leading-relaxed">During divorce settlements, a quit claim deed is frequently used to transfer one spouse&apos;s interest in the marital home to the other spouse, as directed by the divorce decree.</p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Transferring Property Into a Trust</h3>
              <p className="text-text-muted text-sm leading-relaxed">Estate planning often involves transferring real property into a living trust. A quit claim deed facilitates this by conveying the property from the individual to the trust for asset management and probate avoidance.</p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Clearing Title Issues</h3>
              <p className="text-text-muted text-sm leading-relaxed">Quit claim deeds can resolve title defects or cloud on title issues. If a previous owner has a potential claim, they can execute a quit claim deed to remove any interest and clear the title for the current owner.</p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Adding or Removing a Name from Title</h3>
              <p className="text-text-muted text-sm leading-relaxed">Whether adding a spouse to the property title after marriage or removing an ex-spouse after divorce, a quit claim deed provides a straightforward mechanism for adjusting property ownership records.</p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">Important Considerations</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">1.</span>
                <p className="text-text-muted text-sm leading-relaxed"><strong className="text-primary">No Title Guarantee:</strong> A quit claim deed does not guarantee that the grantor actually owns the property or has clear title. The grantee assumes all risk.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">2.</span>
                <p className="text-text-muted text-sm leading-relaxed"><strong className="text-primary">Tax Implications:</strong> Property transfers via quit claim deed may trigger transfer taxes, property tax reassessments, or gift tax considerations. Consult with your attorney about the specific tax implications.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">3.</span>
                <p className="text-text-muted text-sm leading-relaxed"><strong className="text-primary">Mortgage Considerations:</strong> Transferring property via quit claim deed does not remove existing mortgage obligations. The original borrower remains responsible for the mortgage unless formally released by the lender.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">4.</span>
                <p className="text-text-muted text-sm leading-relaxed"><strong className="text-primary">Recording Requirements:</strong> In Illinois, quit claim deeds must be recorded with the county recorder&apos;s office in the county where the property is located to provide constructive notice of the transfer.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">5.</span>
                <p className="text-text-muted text-sm leading-relaxed"><strong className="text-primary">Legal Assistance Recommended:</strong> Even though quit claim deeds are relatively simple documents, the legal and financial implications can be significant. Working with an experienced real estate attorney ensures the deed is properly drafted and recorded.</p>
              </li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed">
            At REAL Law Group, we regularly prepare and review quit claim deeds for our clients throughout Chicagoland. Whether you are transferring property within your family, moving property into a trust, or resolving a title issue, our team can ensure the process is handled correctly and efficiently.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Need help with a quit claim deed?"
        text="Our experienced real estate attorneys can prepare and review your quit claim deed."
      />
    </>
  );
}
