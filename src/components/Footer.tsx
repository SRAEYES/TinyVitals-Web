"use client";

import { Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Download", href: "https://apps.apple.com/us/app/tinyvitals-track-grow-protect/id6759552466", external: true },
      { label: "Roadmap", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Security", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "mailto:support@tinyvitals.com" },
      { label: "Email Support", href: "mailto:support@tinyvitals.com" },
    ],
  };

  const socials = [
    { icon: "GH", href: "https://github.com", label: "GitHub" },
    { icon: "LI", href: "https://linkedin.com", label: "LinkedIn" },
    { icon: "TW", href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:support@tinyvitals.com", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-border/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <p className="text-2xl font-bold text-accent">TinyVitals</p>
              <p className="text-sm text-foreground/60 mt-2">Track. Grow. Protect.</p>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 py-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/60">
            © {currentYear} TinyVitals. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/50 transition-colors"
                aria-label={social.label}
              >
                {typeof social.icon === "string" ? (
                  <span className="text-xs font-bold">{social.icon}</span>
                ) : (
                  social.icon
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
