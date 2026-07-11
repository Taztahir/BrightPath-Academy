import React from 'react'
import { Link } from 'react-router-dom'
import AcademyLogo from '../../assets/brightpath_academy.png'
import LogoSvg from '../../assets/Logo.svg'

// Custom SVGs for brand/social icons to avoid missing lucide-react exports
const FacebookIcon = () => (
  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-4.5 w-4.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.525 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108c.502-1.866.502-5.837.502-5.837s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  tagline: string;
  socialLinks: SocialLink[];
  socialText: string;
  linkGroups: FooterLinkGroup[];
  newsletterTitle: string;
  newsletterSubtitle: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  copyright: string;
  floatingIcon?: React.ReactNode;
}

export function FooterComponent({
  logo,
  brandName,
  tagline,
  socialLinks,
  socialText,
  linkGroups,
  newsletterTitle,
  newsletterSubtitle,
  newsletterPlaceholder = 'Enter email address',
  newsletterButtonText = 'Subscribe',
  copyright,
  floatingIcon,
}: FooterProps) {
  return (
    <footer className="w-full px-4 py-8 sm:px-6 lg:px-8 bg-transparent">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6 lg:flex-row">

        {/* Left Card: Navy Background, Cream Text */}
        <div className="bg-academy-navy text-academy-cream flex min-h-[400px] shrink-0 flex-col justify-between rounded-[2.5rem] p-10 sm:p-12 lg:w-[420px] ">
          <div>
            <div className="flex items-center gap-2">
              <div className="text-academy-cream h-12 scale-150 pl-5">{logo}</div>
              <span className="text-xl font-bold tracking-tight font-forum hidden">
                {brandName}
              </span>
            </div>

            <div className="mt-16 sm:mt-24">
              <h2 className="text-2xl sm:text-3xl leading-snug font-fraunces font-semibold text-academy-cream">
                {tagline}
              </h2>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <span className="text-sm font-medium opacity-90 tracking-wide font-inter">{socialText}</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="bg-academy-cream/10 hover:bg-academy-cream/20 text-academy-cream rounded-xl p-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card: Cream Background, Navy Text */}
        <div className="bg-academy-cream border border-academy-navy/10 relative flex flex-1 flex-col justify-between overflow-hidden rounded-[2.5rem] p-10 sm:p-12 shadow-sm">
          {floatingIcon && (
            <div className="text-academy-navy/[0.03] pointer-events-none absolute -top-12 -right-12 h-64 w-64 rotate-12">
              {floatingIcon}
            </div>
          )}

          {/* Links Section */}
          <div className="relative z-10 flex flex-wrap gap-12 sm:gap-16 lg:gap-24">
            {linkGroups.map((group, idx) => (
              <div key={idx} className="space-y-5">
                <h3 className="text-academy-navy/60 font-inter text-xs font-bold uppercase tracking-wider">{group.title}</h3>
                <ul className="space-y-3.5">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.href}
                        className="text-academy-navy/80 hover:text-academy-burnt-orange text-sm font-medium transition-colors font-inter"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Row: Copyright + Newsletter */}
          <div className="relative z-10 mt-20 flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-end">
            <div className="text-academy-navy/60 order-2 text-xs xl:order-1 font-inter">
              {copyright}
            </div>

            <div className="order-1 w-full space-y-4 sm:max-w-md xl:order-2">
              <div className="space-y-1">
                <p className="text-academy-navy/70 text-xs font-semibold tracking-wider uppercase font-inter">
                  {newsletterSubtitle}
                </p>
                <h3 className="text-academy-navy text-lg font-bold font-fraunces">
                  {newsletterTitle}
                </h3>
              </div>
              <form
                className="relative flex items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  className="bg-white/80 focus:bg-white border border-academy-navy/15 focus:border-academy-burnt-orange focus:ring-1 focus:ring-academy-burnt-orange w-full rounded-full py-4 pr-32 pl-6 text-sm text-academy-navy placeholder-academy-navy/40 shadow-sm outline-none transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 h-10 bg-academy-burnt-orange hover:bg-academy-burnt-orange/95 text-white rounded-full px-6 text-xs font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academy-burnt-orange"
                >
                  {newsletterButtonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const academyLinks = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Academics', href: '/academics' },
        { label: 'Admissions', href: '/admissions' },
      ],
    },
    {
      title: 'Academy Life',
      links: [
        { label: 'Faculty & Staff', href: '/faculty' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'News & Events', href: '/news' },
      ],
    },
    {
      title: 'Support & Contact',
      links: [
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: '#',
      label: 'Facebook',
    },
    {
      icon: <TwitterIcon />,
      href: '#',
      label: 'Twitter',
    },
    {
      icon: <InstagramIcon />,
      href: '#',
      label: 'Instagram',
    },
    {
      icon: <LinkedinIcon />,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: <YoutubeIcon />,
      href: '#',
      label: 'YouTube',
    },
  ];

  return (
    <FooterComponent
      logo={<img src={AcademyLogo} alt="BrightPath Academy Logo" className="h-12 object-contain brightness-0 invert" />}
      brandName="BrightPath Academy"
      tagline="Empowering minds, shaping futures, and building character."
      socialText="Connect with us"
      socialLinks={socialLinks}
      linkGroups={academyLinks}
      newsletterSubtitle="Stay connected with our community"
      newsletterTitle="Subscribe to the BrightPath Newsletter"
      newsletterPlaceholder="Enter email address"
      newsletterButtonText="Subscribe"
      copyright={`© ${new Date().getFullYear()} BrightPath Academy. All rights reserved.`}
      floatingIcon={<img src={LogoSvg} alt="" className="h-full w-full object-contain opacity-60" aria-hidden="true" />}
    />
  );
}
