import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  // Instagram,
  // Facebook,
  // Youtube,
} from "lucide-react";
import { navLinks } from "../data/Content";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div>
                <div className="font-medium">Manohar Orchard</div>
                <div className="text-xs text-neutral-500">
                  Chhajpur, Jubbal – Himachal Pradesh
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mt-4">
              Growing premium Himalayan apples and pears since 1990. Nestled in
              the heart of Jubbal valley at an altitude of 6,500 ft, where crisp
              mountain air and pristine water create the finest fruit.
            </p>
            {/* <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  Chhajpur, Jubbal, District Shimla,
                  <br />
                  Himachal Pradesh – 171205
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <span>info@manoharorchard.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © 2025 Manohar Orchard Chhajpur. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Grown with love in the Himalayas 🍎
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
