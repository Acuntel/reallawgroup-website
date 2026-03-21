import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  title: string;
  initials: string;
  bio: string;
  image?: string;
  education?: string;
  barAdmissions?: string;
  affiliations?: string;
}

export default function TeamMemberCard({ name, title, initials, bio, image, education, barAdmissions, affiliations }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Avatar */}
      <div className="bg-gradient-to-br from-primary to-accent h-48 flex items-center justify-center relative">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <span className="font-heading text-3xl font-bold text-white">{initials}</span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-heading font-semibold mb-1">{name}</h3>
        <p className="text-secondary font-medium text-sm mb-4">{title}</p>
        <p className="text-text-muted text-sm leading-relaxed mb-4">{bio}</p>

        {education && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Education</h4>
            <p className="text-text-muted text-xs leading-relaxed">{education}</p>
          </div>
        )}

        {barAdmissions && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Bar Admissions</h4>
            <p className="text-text-muted text-xs leading-relaxed">{barAdmissions}</p>
          </div>
        )}

        {affiliations && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Affiliations</h4>
            <p className="text-text-muted text-xs leading-relaxed">{affiliations}</p>
          </div>
        )}
      </div>
    </div>
  );
}
