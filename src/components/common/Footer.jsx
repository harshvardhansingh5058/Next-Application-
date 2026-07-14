import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const linkGroups = [
  {
    title: "Shop",
    links: [
      { label: "Men", href: "/men" },
      { label: "Women", href: "/women" },
      { label: "Kids", href: "/kids" },
      { label: "Sale", href: "/sale" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Refund Policy", href: "/legal/refund" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: faInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: faFacebookF },
  { label: "X", href: "https://x.com", icon: faXTwitter },
  { label: "YouTube", href: "https://youtube.com", icon: faYoutube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: faLinkedinIn },
];

const paymentIcons = [faCcVisa, faCcMastercard, faCcAmex, faCcPaypal, faApplePay];

const countries = ["India", "United States", "United Kingdom", "United Arab Emirates"];
const languages = ["English", "Hindi", "Arabic", "French"];

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
        <div className="flex flex-col items-center gap-6 border-b border-neutral-900 pb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            Join the Circle
          </span>
          <h2 className="max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Get 10% off your first order
          </h2>
          <p className="max-w-md text-sm text-neutral-400">
            Sign up for early access to drops, member-only pricing, and stories from the field.
          </p>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full flex-1 rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-600 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-orange-500"
            >
              Subscribe
              <FontAwesomeIcon icon={faPaperPlane} className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-5 sm:col-span-3 lg:col-span-1">
            <span className="text-2xl font-black tracking-tight text-white">
              SOLEX<span className="text-orange-600">.</span>
            </span>
            <p className="max-w-xs text-sm text-neutral-500">
              Performance footwear and apparel built for movement, engineered for life.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-9 w-9 place-items-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-orange-600 hover:text-orange-500"
                >
                  <FontAwesomeIcon icon={social.icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-orange-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-neutral-900 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} SOLEX Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {paymentIcons.map((icon, index) => (
              <span
                key={index}
                className="grid h-8 w-11 place-items-center rounded-md border border-neutral-800 text-neutral-400"
              >
                <FontAwesomeIcon icon={icon} className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                className="flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-600"
              >
                <FontAwesomeIcon icon={faGlobe} className="h-3 w-3" />
                India
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {countries.map((country) => (
                  <DropdownMenuItem key={country}>{country}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                type="button"
                className="flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-600"
              >
                English
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36">
                {languages.map((language) => (
                  <DropdownMenuItem key={language}>{language}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </footer>
  );
}