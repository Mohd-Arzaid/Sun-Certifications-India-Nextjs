"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NAVIGATION_DATA } from "@/data/navbar-data/navbar-data";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  LogIn,
  ShieldCheck,
  User,
  Briefcase,
} from "lucide-react";

const STYLES = {
  button:
    "text-[16px] uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors px-3 h-9",
  navContentItem:
    "text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center",
  mobileButton:
    "text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3",
  mobileNavContentItem:
    "text-sm text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 hover:bg-black/10 rounded-md transition-all duration-200",
};

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const faqIntervalRef = useRef(null);

  const closeAllDropdowns = useCallback(() => {
    setServicesOpen(false);
    setUpdatesOpen(false);
    setGalleryOpen(false);
    setAboutOpen(false);
    setLoginOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    closeAllDropdowns();
  }, [closeAllDropdowns]);

  const handleFaqNavigation = (link) => {
    if (link.includes("#faqs")) {
      const [pathname, hash] = link.split("#");

      router.push(pathname);

      sessionStorage.setItem("scrollToHash", hash);

      const scrollToFaq = () => {
        const element = document.getElementById(hash);
        if (element) {
          sessionStorage.removeItem("scrollToHash");

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setTimeout(() => {
            const rect = element.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
              top: scrollTop + rect.top - 80,
              behavior: "smooth",
            });
          }, 100);

          return true;
        }
        return false;
      };

      setTimeout(scrollToFaq, 100);

      setTimeout(() => {
        if (!scrollToFaq()) {
          if (document.readyState === "complete") {
            scrollToFaq();
          } else {
            window.addEventListener("load", scrollToFaq, { once: true });
          }
        }
      }, 500);

      if (faqIntervalRef.current) {
        clearInterval(faqIntervalRef.current);
      }

      let attempts = 0;
      faqIntervalRef.current = setInterval(() => {
        attempts++;
        if (scrollToFaq() || attempts > 20) {
          clearInterval(faqIntervalRef.current);
          faqIntervalRef.current = null;
        }
      }, 200);

      closeMobileMenu();
      return true;
    }
    return false;
  };

  const handleDropdownToggle = (title, isOpen, setOpen) => {
    if (!isOpen) {
      closeAllDropdowns();
    }
    setOpen(!isOpen);
  };

  useEffect(() => {
    return () => {
      if (faqIntervalRef.current) {
        clearInterval(faqIntervalRef.current);
        faqIntervalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = sessionStorage.getItem("scrollToHash");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          sessionStorage.removeItem("scrollToHash");
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        }
      }
    };

    handleHashScroll();

    window.addEventListener("popstate", handleHashScroll);

    return () => {
      window.removeEventListener("popstate", handleHashScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    const handleScroll = () => {
      closeMobileMenu();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, closeMobileMenu]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setLoginOpen(false);
      }
    };

    if (loginOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginOpen]);

  const LOGIN_OPTIONS = [
    {
      label: "Admin Login",
      icon: ShieldCheck,
      href: "https://crm.bis-certifications.com/admin",
      external: true,
    },
    {
      label: "Client Login",
      icon: User,
      href: "https://crm.bis-certifications.com/",
      external: true,
    },
    {
      label: "Employee Login",
      icon: Briefcase,
      href: "https://crm.bis-certifications.com/coordinator-login",
      external: false,
    },
  ];

  const createNavContent = (items) =>
    items.map((item) => (
      <NavigationMenuLink key={item.id} asChild>
        <Link href={item.link} className="block">
          <div className={STYLES.navContentItem}>
            <item.icon className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
        </Link>
      </NavigationMenuLink>
    ));

  const createFaqNavContent = (items) =>
    items.map((item) => (
      <NavigationMenuLink key={item.id} asChild>
        <button
          onClick={() => handleFaqNavigation(item.link)}
          className="block w-full text-left"
        >
          <div className={STYLES.navContentItem}>
            <item.icon className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
        </button>
      </NavigationMenuLink>
    ));

  const categoriesDesktop = [...NAVIGATION_DATA.categories].sort(
    (a, b) => a.desktopOrder - b.desktopOrder
  );
  const categoriesMobile = [...NAVIGATION_DATA.categories].sort(
    (a, b) => a.mobileOrder - b.mobileOrder
  );

  const navContent = {
    categories: createNavContent(categoriesDesktop),
    categoriesMobile: categoriesMobile,
    updates: createNavContent(NAVIGATION_DATA.updates),
    updatesMobile: NAVIGATION_DATA.updates,
    gallery: createNavContent(NAVIGATION_DATA.gallery),
    galleryMobile: NAVIGATION_DATA.gallery,
    about: createNavContent(NAVIGATION_DATA.about),
    aboutMobile: NAVIGATION_DATA.about,
    faqs: createFaqNavContent(NAVIGATION_DATA.faqs),
    faqsMobile: NAVIGATION_DATA.faqs,
  };

  return (
    <nav className="z-50 sticky top-0 md:top-[44px] w-full bg-white/70 backdrop-blur-lg border-b border-neutral-200">
      <div className="flex items-center justify-between px-4 md:px-8 h-20 max-w-[88rem] mx-auto">
        <Link
          href="/"
          className="selection:bg-emerald-600 flex items-center justify-center space-x-1.5 text-2xl font-bold py-6 text-center text-neutral-600 md:mr-10"
        >
          <img
            src="/company-logo/company-logo.webp"
            alt="Sun Certifications India logo"
            title="Sun Certifications India logo"
            className="w-10 h-10 md:w-12 md:h-12"
            loading="eager"
            decoding="async"
          />
          <div className="py-2 text-center">
            <div className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
              Sun Certifications India
            </div>
            <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-roboto font-normal min-h-[10px] md:min-h-[13px]">
              Simplifying Certifications
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center justify-end">
          <NavigationMenu>
            <NavigationMenuList className="space-x-0">
              <NavigationMenuItem>
                <Link href="/">
                  <Button variant="link" className={STYLES.button}>
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[340px]">{navContent.about}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-2 w-[700px] p-6">
                    {navContent.categories}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList className="space-x-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">{navContent.updates}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList className="space-x-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-60">{navContent.gallery}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList className="space-x-0">
              <NavigationMenuItem>
                <Link href="/faqs">
                  <Button variant="link" className={STYLES.button}>
                    FAQ&apos;S
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <Button variant="link" className={STYLES.button}>
                    Contact Us
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative ml-2" ref={loginDropdownRef}>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-[14px] font-roboto font-medium uppercase tracking-wide border-neutral-300 hover:bg-neutral-100 transition-colors px-3 py-2 h-9"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              <LogIn className="w-4 h-4" />
              Login
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  loginOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {loginOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg border border-neutral-200 shadow-lg py-1.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                {LOGIN_OPTIONS.map((option) =>
                  option.external ? (
                    <a
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-roboto text-foreground/70 hover:text-foreground hover:bg-neutral-100 transition-colors"
                      onClick={() => setLoginOpen(false)}
                    >
                      <option.icon className="w-4 h-4" />
                      {option.label}
                    </a>
                  ) : (
                    <a
                      key={option.label}
                      href={option.href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-roboto text-foreground/70 hover:text-foreground hover:bg-neutral-100 transition-colors"
                      onClick={() => setLoginOpen(false)}
                    >
                      <option.icon className="w-4 h-4" />
                      {option.label}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => (isOpen ? closeMobileMenu() : setIsOpen(true))}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-b border-neutral-200 shadow-lg z-40 max-h-[80vh] overflow-y-auto scrollbar-hide"
        >
          <div className="px-4 py-4 space-y-1">
            <Link href="/" className="block w-full" onClick={closeMobileMenu}>
              <Button variant="ghost" className={STYLES.mobileButton}>
                Home
              </Button>
            </Link>

            {[
              {
                title: "About",
                items: navContent.aboutMobile,
                isOpen: aboutOpen,
                setOpen: setAboutOpen,
              },
              {
                title: "Services",
                items: navContent.categoriesMobile,
                isOpen: servicesOpen,
                setOpen: setServicesOpen,
              },
              {
                title: "Updates",
                items: navContent.updatesMobile,
                isOpen: updatesOpen,
                setOpen: setUpdatesOpen,
              },
              {
                title: "Gallery",
                items: navContent.galleryMobile,
                isOpen: galleryOpen,
                setOpen: setGalleryOpen,
              },
            ].map(({ title, items, isOpen, setOpen }) => (
              <div key={title} className="w-full">
                <Button
                  variant="ghost"
                  className={`${STYLES.mobileButton} justify-between`}
                  onClick={() => handleDropdownToggle(title, isOpen, setOpen)}
                >
                  {title}
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {isOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {items.map((item) => {
                      if (title === "FAQs" && item.link.includes("#faqs")) {
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleFaqNavigation(item.link)}
                            className="block w-full text-left"
                          >
                            <Button
                              variant="ghost"
                              className={STYLES.mobileNavContentItem}
                            >
                              <item.icon className="w-4 h-4 mr-2" />
                              {item.name}
                            </Button>
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={item.id}
                          href={item.link}
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <item.icon className="w-4 h-4 mr-2" />
                            {item.name}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <Link href="/faqs" className="block w-full" onClick={closeMobileMenu}>
              <Button variant="ghost" className={STYLES.mobileButton}>
                FAQ&apos;S
              </Button>
            </Link>

            <Link
              href="/contact"
              className="block w-full"
              onClick={closeMobileMenu}
            >
              <Button variant="ghost" className={STYLES.mobileButton}>
                Contact Us
              </Button>
            </Link>

            <div className="border-t border-neutral-200 pt-3 mt-2">
              <div className="w-full">
                <Button
                  variant="ghost"
                  className={`${STYLES.mobileButton} justify-between`}
                  onClick={() =>
                    handleDropdownToggle("Login", loginOpen, setLoginOpen)
                  }
                >
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Login
                  </span>
                  {loginOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {loginOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {LOGIN_OPTIONS.map((option) =>
                      option.external ? (
                        <a
                          key={option.label}
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <option.icon className="w-4 h-4 mr-2" />
                            {option.label}
                          </Button>
                        </a>
                      ) : (
                        <a
                          key={option.label}
                          href={option.href}
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <option.icon className="w-4 h-4 mr-2" />
                            {option.label}
                          </Button>
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
