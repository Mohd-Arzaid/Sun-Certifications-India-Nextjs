"use client";

import { Marquee } from "@/components/ui/marquee";
import {
  AlignLeft,
  ArrowRightIcon,
  Languages,
  Phone,
  User,
  Mail,
  PhoneCall,
  SendHorizontal,
  MessageCircle,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ServiceRightSideHeading,
  ServiceRightSideButton,
  ServiceRightSideCard,
} from "./service-content";


const ServiceRightSideContent = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] font-inter">
      <BIS_QCO_Updates />
      <Client_Testimonials />
      <Why_Choose_Us />
      <Contact_form />
    </div>
  );
};

export default ServiceRightSideContent;

const BIS_QCO_Updates = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS certification for Work chairs",
      alt: "BIS certification for Work chairs",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://shop.hofindia.com/cdn/shop/files/hof_Modern_1_a.jpg?v=1743406844&width=1946",
      title: "BIS certification for Chairs and stools",
      alt: "BIS certification for Chairs and stools",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "BIS Notification for Tables and desks",
      alt: "BIS Notification for Tables and desks",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71rRReJmTiL._AC_UF894,1000_QL80_.jpg",
      title: "BIS Notification for Storage units",
      alt: "BIS Notification for Storage units",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "BIS Notification for Bunk beds",
      alt: "BIS Notification for Bunk beds",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      alt: "BIS Notification for Solar DC Cable and Fire Survival Cable",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      alt: "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for H Acid",
      alt: "BIS Notification for H Acid",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for K Acid",
      alt: "BIS Notification for K Acid",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "BIS Notification for Vinyl Sulphone",
      alt: "BIS Notification for Vinyl Sulphone",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "BIS Notification for Electric Fence Energizers",
      alt: "BIS Notification for Electric Fence Energizers",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BIS Notification for Clothes Washing Machines",
      alt: "BIS Notification for Clothes Washing Machines",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "BIS Notification for Gypsum Plaster Boards",
      alt: "BIS Notification for Gypsum Plaster Boards",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      alt: "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      alt: "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      alt: "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      alt: "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "BIS Notification for Gypsum Plaster Boards",
      alt: "BIS Notification for Gypsum Plaster Boards",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];
  return (
    <ServiceRightSideCard className="p-6 bg-gray-50">
      <ServiceRightSideHeading icon={AlignLeft}>
        BIS QCO Updates
      </ServiceRightSideHeading>

      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className="group flex gap-4 transition-all duration-300 h-20">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.alt || post.title}
                    title={post.alt || post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between h-20 py-1">
                  <div className="flex-1">
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900 leading-tight">
                      {post.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href={post.url} passHref>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        Read More
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-5 w-full flex justify-center">
        <Link href="/bis-qco-updates" className="w-full">
          <ServiceRightSideButton icon={ArrowRightIcon}>
            View All Updates
          </ServiceRightSideButton>
        </Link>
      </div>
    </ServiceRightSideCard>
  );
};

const Client_Testimonials = () => {
  const testimonials = [
    {
      name: "Ms.Eliyawati",
      role: "PT Quty Karunia, BIS Licensee in Vietnam",
      content:
        "Sun Certifications India provided excellent BIS Certification services. Their unparalleled service and sincerity gained our trust. One of the best BIS consultants in India!",
    },
    {
      name: "Ms.Belle",
      role: "Thantawan Industries Ltd, BIS Licensee in Thailand",
      content:
        "Sun Certifications India supported us throughout the BIS certification process. Their responsive customer service and punctuality are exceptional. Highly recommend for hassle-free BIS certification.",
    },
    {
      name: "Ms.Jun Min Sim",
      role: "Leaderart Industries, BIS Licensee in Malaysia",
      content:
        "Sun Certifications India helped us acquire BIS Certification, doubling our engagement in India. Their services are fast, genuine, and up-to-date with latest BIS norms.",
    },
    {
      name: "Ms. Fatima",
      role: "Aluminium Bahrain (ALBA), BIS Licensee in Bahrain",
      content:
        "Excellent BIS certification support, highly reliable consultants.",
    },
    {
      name: "Mr. Yousef",
      role: "Bahrain Aluminium Manufacturing Company, BIS Licensee in Bahrain",
      content: "Smooth BIS registration process with expert consultants.",
    },
    {
      name: "Mr. Satoshi",
      role: "Daiki Aluminium Japan, BIS Licensee in Japan",
      content: "Efficient BIS license assistance, great consultants.",
    },
    {
      name: "Ms. Amanda",
      role: "Honeywell, BIS Licensee in USA",
      content: "Professional BIS certificate guidance, very satisfied.",
    },
    {
      name: "Ms. Amanda",
      role: "Trimble Navigation, BIS Licensee in USA",
      content: "Seamless BIS certification and registration support.",
    },
    {
      name: "Ms. Martina",
      role: "Remsa Italia, BIS Licensee in Italy",
      content: "Helpful BIS consultants, simplified license process.",
    },
    {
      name: "Ms. Nikola",
      role: "Aquazzura, BIS Licensee in Italy",
      content:
        "We got our BIS certificate well within the timelines and at affordable prices, great work team Sun!",
    },
    {
      name: "Ms. Ayu",
      role: "PT Quty, BIS Licensee in Indonesia",
      content: "Excellent BIS registration service, highly recommended.",
    },
    {
      name: "Mr. Huy",
      role: "Danu Vina, BIS Licensee in Vietnam",
      content: "Reliable BIS license consultants, fast process.",
    },
    {
      name: "Mr. Minh",
      role: "Hanh My Production Company, BIS Licensee in Vietnam",
      content: "Expert BIS consultants, certification made easy.",
    },
    {
      name: "Ms. Hoa",
      role: "Sedo Vina, BIS Licensee in Vietnam",
      content: "Smooth BIS certificate registration, great support.",
    },
    {
      name: "Ms. Hana",
      role: "Misumi Japan, BIS Licensee in Japan",
      content: "Trusted BIS consultants, quick certification process.",
    },
    {
      name: "Ms. Nok",
      role: "Thantawan Public Industry Company, BIS Licensee in Thailand",
      content: "Professional BIS certification service, very efficient.",
    },
    {
      name: "Mr. Luis",
      role: "Cortizo Aluminios, BIS Licensee in Spain",
      content: "Excellent BIS registration and license guidance.",
    },
    {
      name: "Ms. Aisha",
      role: "Midal Cables, BIS Licensee in Bahrain",
      content: "Expert BIS consultants, smooth certification process.",
    },
    {
      name: "Ms. Aisha",
      role: "Nobilia Kitchens, BIS Licensee in Bahrain",
      content: "Reliable BIS certificate registration support.",
    },
  ];

  return (
    <ServiceRightSideCard className="overflow-hidden bg-gray-50">
      <div className="pt-6 px-6 pb-4">
        <ServiceRightSideHeading icon={Languages}>
          Client Testimonials
        </ServiceRightSideHeading>
        <div className="mt-8 mb-5 rounded-lg h-[450px] overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:60s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-3">
                <div className="bg-white p-4 rounded-lg border border-neutral-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-4">
                    <div className="font-semibold text-neutral-800 text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-[13px] leading-[17px] text-neutral-600 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="italic text-neutral-800 text-sm ">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </ServiceRightSideCard>
  );
};

const Why_Choose_Us = () => {
  const stats = {
    experience: { value: "10+", label: "Years Exp." },
    clients: { value: "1599+", label: "Our Clients" },
    successRate: { value: "100%", label: "Success Rate" },
    countries: { value: "20+", label: "Countries Served" },
  };

  const reasons = [
    {
      title: "Expert Guidance",
      description:
        "Our team brings 10e4+ years of experience in CDSCO and BIS compliance.",
    },
    {
      title: "Time Efficient",
      description:
        "We reduce approval time by up to 40% with streamlined processes.",
    },
    {
      title: "Proven Success",
      description: "100% success rate with 1500+ successful registrations.",
    },
    {
      title: "Client-Centric",
      description: "Dedicated account manager ensuring personalized service.",
    },
  ];

  const performance = {
    title: "Our Performance",
    metrics: {
      speed: { label: "Speed", value: "95" },
      success: { label: "Success", value: "99" },
      satisfaction: { label: "Satisfaction", value: "98" },
    },
  };

  const reasonIcons = {
    0: <Shield className="h-8 w-8 text-blue-600" />,
    1: <Clock className="h-8 w-8 text-emerald-600" />,
    2: <Award className="h-8 w-8 text-amber-600" />,
    3: <HeartHandshake className="h-8 w-8 text-purple-600" />,
  };

  return (
    <ServiceRightSideCard className="p-5 bg-gradient-to-br from-slate-50 to-gray-50">
      <ServiceRightSideHeading icon={Lightbulb}>
        Why Choose Us
      </ServiceRightSideHeading>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <div className="text-2xl font-bold text-blue-600">
            {stats.experience.value}
          </div>
          <p className="text-xs text-gray-600">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <div className="text-2xl font-bold text-emerald-600">
            {stats.clients.value}
          </div>
          <p className="text-xs text-gray-600">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <div className="text-2xl font-bold text-amber-600">
            {stats.successRate.value}
          </div>
          <p className="text-xs text-gray-600">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <div className="text-2xl font-bold text-purple-600">
            {stats.countries.value}
          </div>
          <p className="text-xs text-gray-600">
            {stats.countries.label}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-200"
          >
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50">
                {reasonIcons[index]}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">
                  {reason.title}
                </div>
                <p className="text-xs text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <div className="flex items-center gap-1 mb-2">
          <BarChart className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">
            {performance.title}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${performance.metrics.speed.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600">
              {performance.metrics.speed.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: `${performance.metrics.success.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600">
              {performance.metrics.success.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{
                  width: `${performance.metrics.satisfaction.value}%`,
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-600">
              {performance.metrics.satisfaction.label}
            </span>
          </div>
        </div>
      </div>
    </ServiceRightSideCard>
  );
};

const Contact_form = () => {
  return (
    <ServiceRightSideCard className="md:sticky md:top-[128px] md:self-start p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <ServiceRightSideHeading icon={PhoneCall}>
        Request a Free Callback
      </ServiceRightSideHeading>

      <p className="mt-3 text-sm text-gray-600">
        Leave your details below and our experts will call you back within 24
        hours to discuss your regulatory compliance needs.
      </p>

      <form className="mt-5 space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <User className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Your Name*"
            className="w-full py-2.5 pl-10 pr-3 text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Phone className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            required
            placeholder="Phone Number*"
            className="w-full py-2.5 pl-10 pr-3 text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Mail className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address*"
            className="w-full py-2.5 pl-10 pr-3 text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-4 w-4 text-gray-400" />
          </div>
          <textarea
            name="message"
            required
            placeholder="Required Certification*"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>

        <ServiceRightSideButton type="submit" className="mt-5" icon={SendHorizontal}>
          Request Callback
        </ServiceRightSideButton>
      </form>

      <p className="mt-3 text-xs text-center text-gray-500">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        and consent to being contacted.
      </p>
    </ServiceRightSideCard>
  );
};
