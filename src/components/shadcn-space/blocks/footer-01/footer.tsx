import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";

const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="X"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26L22.827 21.75h-6.602l-5.17-6.755-5.91 6.755H1.835l7.73-8.835L1.173 2.25H7.943l4.673 6.169L18.244 2.25ZM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77Z"
      fill="currentColor"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Follow Gernova on Facebook"
  >
    <path
      d="M24 12C24 5.373 18.627 0 12 0S0 5.373 0 12c0 5.989 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.926-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.989 24 12Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Follow Gernova on Instagram"
  >
    <path
      d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413a3.727 3.727 0 0 1 1.38.898c.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228a3.727 3.727 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.727 3.727 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.054-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38s.82-.68 1.38-.898c.423-.164 1.058-.36 2.228-.413C8.416 2.175 8.796 2.163 12 2.163Zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.9 5.9 0 0 0-2.126 1.384A5.9 5.9 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.059 1.277.261 2.15.558 2.912a5.9 5.9 0 0 0 1.384 2.126A5.9 5.9 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.15-.261 2.912-.558a5.9 5.9 0 0 0 2.126-1.384 5.9 5.9 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.059-1.277-.261-2.15-.558-2.912a5.9 5.9 0 0 0-1.384-2.126A5.9 5.9 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
      fill="currentColor"
    />
  </svg>
);


type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Sitemap",
    links: [
      {
        title: "Contact us",
        href: "/contact",
      },
      {
        title: "About us",
        href: "/about-us",
      },
      {
        title: "Portfolio",
        href: "/portfolio",
      },
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
    ],
  },
  {
    title: "Other Pages",
    links: [
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                {/* Logo */}
                <a href="#">
                  <Logo />
                </a>

                <p className="text-base font-normal text-muted-foreground">
                  Empowering businesses with innovative solutions. Let&apos;s create
                  something amazing together.
                </p>

                {/* social links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <XIcon />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden"></div>

            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                  <p className="text-base font-medium text-foreground">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <a
                          href={href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <p className="text-base font-medium text-foreground">
                  Contact Details
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="mailto:info@gernova.net"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      info@gernova.net
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+254769848012"
                      className="text-base font-normal text-muted-foreground hover:text-foreground"
                    >
                      0769848012
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <p className="text-sm font-normal text-muted-foreground text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            ©2026 GerNova
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
