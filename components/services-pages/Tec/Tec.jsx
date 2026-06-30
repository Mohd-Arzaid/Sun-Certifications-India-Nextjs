import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const TEC_OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const MTCTE_TABLE_HEADERS = ["S. No.","Product Name","Product Variant Name","Category of Product (GCS/SCS)"];

const MTCTE_PHASE_I_PRODUCTS = [
  {
    "sno": 1,
    "product": "2-Wire Telephone Equipment",
    "variant": "2-Line Feature Phone",
    "category": "SCS"
  },
  {
    "sno": 2,
    "product": "2-Wire Telephone Equipment",
    "variant": "CLIP Phone",
    "category": "SCS"
  },
  {
    "sno": 3,
    "product": "2-Wire Telephone Equipment",
    "variant": "Coin Box Telephone",
    "category": "SCS"
  },
  {
    "sno": 4,
    "product": "2-Wire Telephone Equipment",
    "variant": "Coin Box Telephone - Table Top Interface",
    "category": "SCS"
  },
  {
    "sno": 5,
    "product": "2-Wire Telephone Equipment",
    "variant": "Electronic Telephone Instrument",
    "category": "SCS"
  },
  {
    "sno": 6,
    "product": "2-Wire Telephone Equipment",
    "variant": "Executive Telephone Systems",
    "category": "SCS"
  },
  {
    "sno": 7,
    "product": "2-Wire Telephone Equipment",
    "variant": "Key Telephone System",
    "category": "SCS"
  },
  {
    "sno": 8,
    "product": "2-Wire Telephone Equipment",
    "variant": "Key Telephone Systems with proprietary interface",
    "category": "SCS"
  },
  {
    "sno": 9,
    "product": "2-Wire Telephone Equipment",
    "variant": "NSD or ISD Payphone",
    "category": "SCS"
  },
  {
    "sno": 10,
    "product": "2-Wire Telephone Equipment",
    "variant": "Terminals for connecting to PSTN",
    "category": "SCS"
  },
  {
    "sno": 11,
    "product": "G3 Fax Machine",
    "variant": "FAX machine with handset",
    "category": "SCS"
  },
  {
    "sno": 12,
    "product": "G3 Fax Machine",
    "variant": "FAX machine without handset",
    "category": "SCS"
  },
  {
    "sno": 13,
    "product": "Modem",
    "variant": "V.90 or V.92 or V.21 to V.34 Modem",
    "category": "SCS"
  },
  {
    "sno": 14,
    "product": "Cordless Telephone",
    "variant": "Cordless Telephone",
    "category": "SCS"
  },
  {
    "sno": 15,
    "product": "ISDN Customer Premises Equipment",
    "variant": "ISDN Gateway",
    "category": "SCS"
  },
  {
    "sno": 16,
    "product": "ISDN Customer Premises Equipment",
    "variant": "ISDN NT-1 Network Termination",
    "category": "SCS"
  },
  {
    "sno": 17,
    "product": "ISDN Customer Premises Equipment",
    "variant": "ISDN Terminal",
    "category": "SCS"
  },
  {
    "sno": 18,
    "product": "ISDN Customer Premises Equipment",
    "variant": "ISDN Terminal Adapter",
    "category": "SCS"
  },
  {
    "sno": 19,
    "product": "ISDN Customer Premises Equipment",
    "variant": "Multipoint Conferencing Server",
    "category": "SCS"
  },
  {
    "sno": 20,
    "product": "ISDN Customer Premises Equipment",
    "variant": "PC card based ISDN Terminal",
    "category": "SCS"
  },
  {
    "sno": 21,
    "product": "Private Automatic Branch Exchange",
    "variant": "Private Automatic Branch Exchange",
    "category": "SCS"
  }
];

const MTCTE_PHASE_II_PRODUCTS = [
  {
    "sno": 1,
    "product": "PON Family of Broadband Equipment",
    "variant": "PON ONU",
    "category": "SCS"
  },
  {
    "sno": 2,
    "product": "PON Family of Broadband Equipment",
    "variant": "PON ONT",
    "category": "SCS"
  },
  {
    "sno": 3,
    "product": "PON Family of Broadband Equipment",
    "variant": "PON OLT",
    "category": "SCS"
  },
  {
    "sno": 4,
    "product": "Feedback Device",
    "variant": "Feedback Device",
    "category": "SCS"
  },
  {
    "sno": 5,
    "product": "Transmission Terminal Equipment1",
    "variant": "Multiplexing Equipment",
    "category": "SCS"
  },
  {
    "sno": 6,
    "product": "Transmission Terminal Equipment1",
    "variant": "SDH Equipment",
    "category": "SCS"
  }
];

const MTCTE_PHASE_III_PRODUCTS = [
  {
    "sno": 1,
    "product": "Equipments Operating in 2.4 GHz and 5 GHz Band",
    "variant": "PTP PMP Wireless Access Equipment 2.4 or 5 GHz",
    "category": "SCS"
  },
  {
    "sno": 2,
    "product": "Equipments Operating in 2.4 GHz and 5 GHz Band",
    "variant": "Wifi Access Points and CPE",
    "category": "SCS"
  },
  {
    "sno": 3,
    "product": "Equipments Operating in 2.4 GHz and 5 GHz Band",
    "variant": "WLAN Controller Equipment",
    "category": "SCS"
  },
  {
    "sno": 4,
    "product": "IoT Gateway",
    "variant": "IoT Gateway",
    "category": "GCS"
  },
  {
    "sno": 5,
    "product": "Tracking Device",
    "variant": "Asset Tracking Device",
    "category": "SCS"
  },
  {
    "sno": 6,
    "product": "Tracking Device",
    "variant": "Human Tracking Device",
    "category": "SCS"
  },
  {
    "sno": 7,
    "product": "Tracking Device",
    "variant": "Pet Tracking Device",
    "category": "SCS"
  },
  {
    "sno": 8,
    "product": "Tracking Device",
    "variant": "Vehicle Tracking Device",
    "category": "SCS"
  },
  {
    "sno": 9,
    "product": "Smart Electricity Meter",
    "variant": "Smart Electricity Meter",
    "category": "SCS"
  },
  {
    "sno": 10,
    "product": "End Point Device for Environmental Monitoring",
    "variant": "End Point Device for Environmental Monitoring",
    "category": "SCS"
  },
  {
    "sno": 11,
    "product": "Repeater for Cellular Network",
    "variant": "GSM and WCDMA Repeater",
    "category": "GCS"
  },
  {
    "sno": 12,
    "product": "Repeater for Cellular Network",
    "variant": "GSM Repeater",
    "category": "GCS"
  },
  {
    "sno": 13,
    "product": "Repeater for Cellular Network",
    "variant": "GSM WCDMA and LTE Repeater",
    "category": "GCS"
  },
  {
    "sno": 14,
    "product": "Repeater for Cellular Network",
    "variant": "LTE Repeater",
    "category": "GCS"
  },
  {
    "sno": 15,
    "product": "Repeater for Cellular Network",
    "variant": "WCDMA and LTE Repeater",
    "category": "GCS"
  },
  {
    "sno": 16,
    "product": "Repeater for Cellular Network",
    "variant": "WCDMA Repeater",
    "category": "GCS"
  },
  {
    "sno": 17,
    "product": "Base Station for Cellular Network",
    "variant": "BTS for GSM",
    "category": "GCS"
  },
  {
    "sno": 18,
    "product": "Base Station for Cellular Network",
    "variant": "BTS with AAS",
    "category": "GCS"
  },
  {
    "sno": 19,
    "product": "Base Station for Cellular Network",
    "variant": "BTS with MSR",
    "category": "GCS"
  },
  {
    "sno": 20,
    "product": "Base Station for Cellular Network",
    "variant": "eNodeB for LTE",
    "category": "GCS"
  },
  {
    "sno": 21,
    "product": "Base Station for Cellular Network",
    "variant": "NodeB for WCDMA",
    "category": "GCS"
  },
  {
    "sno": 22,
    "product": "Compact Cellular Network",
    "variant": "BTS CCN",
    "category": "GCS"
  },
  {
    "sno": 23,
    "product": "Compact Cellular Network",
    "variant": "eNodeB CCN",
    "category": "GCS"
  },
  {
    "sno": 24,
    "product": "Compact Cellular Network",
    "variant": "NodeB CCN",
    "category": "GCS"
  }
];

const MTCTE_PHASE_IV_PRODUCTS = [
  {
    "sno": 1,
    "product": "LAN Switch",
    "variant": "L2 LAN Switch",
    "category": "SCS"
  },
  {
    "sno": 2,
    "product": "LAN Switch",
    "variant": "L3 LAN Switch",
    "category": "SCS"
  },
  {
    "sno": 3,
    "product": "LAN Switch",
    "variant": "MPLS TP CEN Switch",
    "category": "SCS"
  },
  {
    "sno": 4,
    "product": "LAN Switch",
    "variant": "L2 Unmanaged Switch",
    "category": "SCS"
  },
  {
    "sno": 5,
    "product": "Router",
    "variant": "BNG or BRAS Router",
    "category": "SCS"
  },
  {
    "sno": 6,
    "product": "Router",
    "variant": "Cloud Control Capable Router",
    "category": "SCS"
  },
  {
    "sno": 7,
    "product": "Router",
    "variant": "IPV4 Router",
    "category": "SCS"
  },
  {
    "sno": 8,
    "product": "Router",
    "variant": "IPV6 Router",
    "category": "SCS"
  },
  {
    "sno": 9,
    "product": "Router",
    "variant": "MPLS Router",
    "category": "SCS"
  },
  {
    "sno": 10,
    "product": "IP Security Equipment",
    "variant": "Firewall Equipment",
    "category": "SCS"
  },
  {
    "sno": 11,
    "product": "IP Security Equipment",
    "variant": "Intrusion Detection System Equipment",
    "category": "SCS"
  },
  {
    "sno": 12,
    "product": "IP Security Equipment",
    "variant": "Intrusion Prevention System Equipment",
    "category": "SCS"
  },
  {
    "sno": 13,
    "product": "IP Security Equipment",
    "variant": "Unified Threat Management Equipment",
    "category": "SCS"
  },
  {
    "sno": 14,
    "product": "Media Gateway",
    "variant": "Line Media Gateway",
    "category": "SCS"
  },
  {
    "sno": 15,
    "product": "Media Gateway",
    "variant": "Media Gateway",
    "category": "SCS"
  },
  {
    "sno": 16,
    "product": "Media Gateway",
    "variant": "Media Gateway for CPE",
    "category": "SCS"
  },
  {
    "sno": 17,
    "product": "Signalling Gateway",
    "variant": "Signalling Gateway",
    "category": "SCS"
  },
  {
    "sno": 18,
    "product": "Softswitch",
    "variant": "Softswitch",
    "category": "SCS"
  },
  {
    "sno": 19,
    "product": "Infiniband Switch",
    "variant": "Infiniband Switch",
    "category": "SCS"
  },
  {
    "sno": 20,
    "product": "IP Multimedia Conferencing Equipment",
    "variant": "IP Multimedia Conferencing Equipment",
    "category": "SCS"
  },
  {
    "sno": 21,
    "product": "Conferencing Equipment",
    "variant": "Audio Conference Facility Device",
    "category": "SCS"
  },
  {
    "sno": 22,
    "product": "Conferencing Equipment",
    "variant": "Multi Line Telephone System",
    "category": "SCS"
  },
  {
    "sno": 23,
    "product": "Optical Fibre Cable",
    "variant": "Hybrid Cable - Optical and Metallic",
    "category": "SCS"
  },
  {
    "sno": 24,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - ADSS on Aerial alignment",
    "category": "SCS"
  },
  {
    "sno": 25,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - ADSS over Power line",
    "category": "SCS"
  },
  {
    "sno": 26,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Direct Buried",
    "category": "SCS"
  },
  {
    "sno": 27,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - DSA",
    "category": "SCS"
  },
  {
    "sno": 28,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Duct",
    "category": "SCS"
  },
  {
    "sno": 29,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - In home",
    "category": "SCS"
  },
  {
    "sno": 30,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Indoor",
    "category": "SCS"
  },
  {
    "sno": 31,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Indoor or Outdoor",
    "category": "SCS"
  },
  {
    "sno": 32,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Lashed Aerial",
    "category": "SCS"
  },
  {
    "sno": 33,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Micro-Duct",
    "category": "SCS"
  },
  {
    "sno": 34,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Outdoor",
    "category": "SCS"
  },
  {
    "sno": 35,
    "product": "Optical Fibre Cable",
    "variant": "Optical Fibre Cable - Riser",
    "category": "SCS"
  },
  {
    "sno": 36,
    "product": "Optical Fibre Cable",
    "variant": "Optical Ground Wire - OPGW",
    "category": "SCS"
  },
  {
    "sno": 37,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.652.D",
    "category": "GCS"
  },
  {
    "sno": 38,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.655",
    "category": "GCS"
  },
  {
    "sno": 39,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.656",
    "category": "GCS"
  },
  {
    "sno": 40,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.657.A1",
    "category": "GCS"
  },
  {
    "sno": 41,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.657.A2",
    "category": "GCS"
  },
  {
    "sno": 42,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.657.B3",
    "category": "GCS"
  },
  {
    "sno": 43,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.654.D",
    "category": "GCS"
  },
  {
    "sno": 44,
    "product": "Optical Fibre - Single Mode",
    "variant": "Optical Fibre - G.654.E",
    "category": "GCS"
  },
  {
    "sno": 45,
    "product": "HF Radio",
    "variant": "HF Base Station - Baseband plus Radio",
    "category": "GCS"
  },
  {
    "sno": 46,
    "product": "HF Radio",
    "variant": "HF Base Station - Radio Only",
    "category": "GCS"
  },
  {
    "sno": 47,
    "product": "HF Radio",
    "variant": "HF Baseband Equipment without Radio",
    "category": "GCS"
  },
  {
    "sno": 48,
    "product": "HF Radio",
    "variant": "HF Fixed Station",
    "category": "GCS"
  },
  {
    "sno": 49,
    "product": "HF Radio",
    "variant": "HF Handheld Portable Stations",
    "category": "GCS"
  },
  {
    "sno": 50,
    "product": "HF Radio",
    "variant": "HF Mobile Stations",
    "category": "GCS"
  },
  {
    "sno": 51,
    "product": "Session Border Controller",
    "variant": "Session Border Controller",
    "category": "SCS"
  },
  {
    "sno": 52,
    "product": "Mobile Radio Trunking System",
    "variant": "MRTS Base Station - Baseband plus Radio",
    "category": "GCS"
  },
  {
    "sno": 53,
    "product": "Mobile Radio Trunking System",
    "variant": "MRTS Base Station - Radio Only",
    "category": "GCS"
  },
  {
    "sno": 54,
    "product": "Mobile Radio Trunking System",
    "variant": "MRTS Baseband Equipment without Radio",
    "category": "GCS"
  },
  {
    "sno": 55,
    "product": "Mobile Radio Trunking System",
    "variant": "MRTS Fixed Station",
    "category": "GCS"
  },
  {
    "sno": 56,
    "product": "Mobile Radio Trunking System",
    "variant": "MRTS Handheld Portable Station",
    "category": "GCS"
  },
  {
    "sno": 57,
    "product": "Mobile Radio Trunking System",
    "variant": "MRTS Mobile Station",
    "category": "GCS"
  },
  {
    "sno": 58,
    "product": "VHF UHF Radio System Equipment",
    "variant": "VHF UHF Base Station - Baseband plus Radio",
    "category": "GCS"
  },
  {
    "sno": 59,
    "product": "VHF UHF Radio System Equipment",
    "variant": "VHF UHF Base Station - Radio Only",
    "category": "GCS"
  },
  {
    "sno": 60,
    "product": "VHF UHF Radio System Equipment",
    "variant": "VHF UHF Baseband Equipment without Radio",
    "category": "GCS"
  },
  {
    "sno": 61,
    "product": "VHF UHF Radio System Equipment",
    "variant": "VHF UHF Fixed Station",
    "category": "GCS"
  },
  {
    "sno": 62,
    "product": "VHF UHF Radio System Equipment",
    "variant": "VHF UHF Handheld Portable Stations",
    "category": "GCS"
  },
  {
    "sno": 63,
    "product": "VHF UHF Radio System Equipment",
    "variant": "VHF UHF Mobile Stations",
    "category": "GCS"
  },
  {
    "sno": 64,
    "product": "PTP PMP Microwave Fixed Radio Systems",
    "variant": "PTP or PMP Full Outdoor Microwave Systems",
    "category": "GCS"
  },
  {
    "sno": 65,
    "product": "PTP PMP Microwave Fixed Radio Systems",
    "variant": "PTP or PMP Split MW Indoor Unit",
    "category": "GCS"
  },
  {
    "sno": 66,
    "product": "PTP PMP Microwave Fixed Radio Systems",
    "variant": "PTP or PMP Split MW Outdoor Unit",
    "category": "GCS"
  },
  {
    "sno": 67,
    "product": "DSL Equipments",
    "variant": "DSL NT Modem",
    "category": "SCS"
  },
  {
    "sno": 68,
    "product": "DSL Equipments",
    "variant": "DSLAM COT",
    "category": "SCS"
  },
  {
    "sno": 69,
    "product": "DSL Equipments",
    "variant": "OMSAN",
    "category": "SCS"
  },
  {
    "sno": 70,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite Amplifier",
    "category": "GCS"
  },
  {
    "sno": 71,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite Baseband Mod or Demod or Controller",
    "category": "GCS"
  },
  {
    "sno": 72,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite Baseband Modem",
    "category": "GCS"
  },
  {
    "sno": 73,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite Baseband Modem Controller",
    "category": "GCS"
  },
  {
    "sno": 74,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite BUC",
    "category": "GCS"
  },
  {
    "sno": 75,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite IF Transreceiver",
    "category": "GCS"
  },
  {
    "sno": 76,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite LNA",
    "category": "GCS"
  },
  {
    "sno": 77,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite LNB",
    "category": "GCS"
  },
  {
    "sno": 78,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite Optimisation Equipment",
    "category": "GCS"
  },
  {
    "sno": 79,
    "product": "Satellite Communication Equipment",
    "variant": "Satellite Radio Frequency Transceiver",
    "category": "GCS"
  },
  {
    "sno": 80,
    "product": "Satellite Communication Equipment",
    "variant": "VSAT Terminals",
    "category": "GCS"
  },
  {
    "sno": 81,
    "product": "Precision Timing Protocol Grand Master Equipment",
    "variant": "Precision Timing Protocol Grand Master Equipment",
    "category": "GCS"
  },
  {
    "sno": 82,
    "product": "Mobile Management Entity",
    "variant": "MME for 2G or 3G or 4G",
    "category": "SCS"
  },
  {
    "sno": 83,
    "product": "Mobile Management Entity",
    "variant": "MME for LTE only",
    "category": "SCS"
  },
  {
    "sno": 84,
    "product": "Cell Broadcast Centre",
    "variant": "CBC for GSM",
    "category": "SCS"
  },
  {
    "sno": 85,
    "product": "Cell Broadcast Centre",
    "variant": "CBC for LTE or LTE-A",
    "category": "SCS"
  },
  {
    "sno": 86,
    "product": "Cell Broadcast Centre",
    "variant": "CBC For UMTS",
    "category": "SCS"
  },
  {
    "sno": 87,
    "product": "BSC RNC",
    "variant": "BSC for GSM",
    "category": "GCS"
  },
  {
    "sno": 88,
    "product": "BSC RNC",
    "variant": "RNC for WCDMA",
    "category": "GCS"
  },
  {
    "sno": 89,
    "product": "SMLC or eSMLC",
    "variant": "eSMLC for LTE",
    "category": "SCS"
  },
  {
    "sno": 90,
    "product": "SMLC or eSMLC",
    "variant": "SMLC for GSM",
    "category": "SCS"
  },
  {
    "sno": 91,
    "product": "SMLC or eSMLC",
    "variant": "SMLC for WCDMA",
    "category": "SCS"
  },
  {
    "sno": 92,
    "product": "SGSN or GGSN",
    "variant": "GGSN",
    "category": "SCS"
  },
  {
    "sno": 93,
    "product": "SGSN or GGSN",
    "variant": "SGSN For GSM",
    "category": "SCS"
  },
  {
    "sno": 94,
    "product": "SGSN or GGSN",
    "variant": "SGSN For LTE",
    "category": "SCS"
  },
  {
    "sno": 95,
    "product": "SGSN or GGSN",
    "variant": "SGSN For WCDMA",
    "category": "SCS"
  },
  {
    "sno": 96,
    "product": "HLR AUC HSS",
    "variant": "HLR or AUC",
    "category": "SCS"
  },
  {
    "sno": 97,
    "product": "HLR AUC HSS",
    "variant": "HSS",
    "category": "SCS"
  },
  {
    "sno": 98,
    "product": "MSC or MSC-S or GMSC or GMSC-S including VLR",
    "variant": "MSC-S or GMSC-S",
    "category": "SCS"
  },
  {
    "sno": 99,
    "product": "MSC or MSC-S or GMSC or GMSC-S including VLR",
    "variant": "MSC or GMSC including VLR for GSM",
    "category": "SCS"
  },
  {
    "sno": 100,
    "product": "MSC or MSC-S or GMSC or GMSC-S including VLR",
    "variant": "MSC or GMSC including VLR for WCDMA",
    "category": "SCS"
  },
  {
    "sno": 101,
    "product": "OTA and DM or FOTA",
    "variant": "DM or FOTA",
    "category": "SCS"
  },
  {
    "sno": 102,
    "product": "OTA and DM or FOTA",
    "variant": "OTA",
    "category": "SCS"
  },
  {
    "sno": 103,
    "product": "SCP",
    "variant": "SCP",
    "category": "SCS"
  },
  {
    "sno": 104,
    "product": "OMC or EMS or NMS or OSS",
    "variant": "NMS",
    "category": "SCS"
  },
  {
    "sno": 105,
    "product": "OMC or EMS or NMS or OSS",
    "variant": "OMC or EMS",
    "category": "SCS"
  },
  {
    "sno": 106,
    "product": "S-GW or P-GW",
    "variant": "P-Gateway",
    "category": "GCS"
  },
  {
    "sno": 107,
    "product": "S-GW or P-GW",
    "variant": "S-Gateway",
    "category": "GCS"
  },
  {
    "sno": 108,
    "product": "SMSC",
    "variant": "SMSC",
    "category": "SCS"
  },
  {
    "sno": 109,
    "product": "GMLC",
    "variant": "GMLC for GSM or WCDMA",
    "category": "SCS"
  },
  {
    "sno": 110,
    "product": "GMLC",
    "variant": "GMLC for LTE or LTE-A",
    "category": "SCS"
  },
  {
    "sno": 111,
    "product": "EIR",
    "variant": "EIR for GSM or WCDMA",
    "category": "SCS"
  },
  {
    "sno": 112,
    "product": "EIR",
    "variant": "EIR for LTE",
    "category": "SCS"
  },
  {
    "sno": 113,
    "product": "SIM",
    "variant": "CSIM",
    "category": "GCS"
  },
  {
    "sno": 114,
    "product": "SIM",
    "variant": "eSIM",
    "category": "GCS"
  },
  {
    "sno": 115,
    "product": "SIM",
    "variant": "eUICC",
    "category": "GCS"
  },
  {
    "sno": 116,
    "product": "SIM",
    "variant": "RUIM",
    "category": "GCS"
  },
  {
    "sno": 117,
    "product": "SIM",
    "variant": "SIM",
    "category": "GCS"
  },
  {
    "sno": 118,
    "product": "SIM",
    "variant": "UICC based ISIM",
    "category": "GCS"
  },
  {
    "sno": 119,
    "product": "SIM",
    "variant": "USIM",
    "category": "GCS"
  },
  {
    "sno": 120,
    "product": "Radio Broadcast Receiver RBR",
    "variant": "All Motor vehicle RBRs requiring external power",
    "category": "SCS"
  },
  {
    "sno": 121,
    "product": "Radio Broadcast Receiver RBR",
    "variant": "Radio Broadcast receivers driven with in-built power source.",
    "category": "SCS"
  },
  {
    "sno": 122,
    "product": "Radio Broadcast Receiver RBR",
    "variant": "Other devices having radio broadcast receivers interfaces.",
    "category": "SCS"
  },
  {
    "sno": 123,
    "product": "Transmission Terminal Equipment - 2",
    "variant": "DWDM Equipment",
    "category": "GCS"
  },
  {
    "sno": 124,
    "product": "Transmission Terminal Equipment - 2",
    "variant": "Digital Cross Connect",
    "category": "GCS"
  },
  {
    "sno": 125,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "Base Station 5G NR Type 1C",
    "category": "GCS"
  },
  {
    "sno": 126,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "Base Station 5G NR Type 1O",
    "category": "GCS"
  },
  {
    "sno": 127,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "Active Antenna System - OTA",
    "category": "GCS"
  },
  {
    "sno": 128,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "BTS with Multi Standard Radio",
    "category": "GCS"
  },
  {
    "sno": 129,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "Base Station 5G NR Type 1H",
    "category": "GCS"
  },
  {
    "sno": 130,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "Base Station 5G NR Type 2O",
    "category": "GCS"
  },
  {
    "sno": 131,
    "product": "Base Station for Cellular Network for 5G",
    "variant": "Hybrid Active Antenna System",
    "category": "GCS"
  }
];

const MTCTE_PHASE_V_PRODUCTS = [
  {
    "sno": 1,
    "product": "Base station for cellular network for 5G",
    "variant": "BTS with Multi Standard Radio",
    "category": "GCS"
  },
  {
    "sno": 2,
    "product": "Base station for cellular network for 5G",
    "variant": "Active Antenna System-OTA",
    "category": "GCS"
  },
  {
    "sno": 3,
    "product": "Base station for cellular network for 5G",
    "variant": "Base Station 5G NR Type 1C",
    "category": "GCS"
  },
  {
    "sno": 4,
    "product": "Base station for cellular network for 5G",
    "variant": "Base Station 5G NR Type 1H",
    "category": "GCS"
  },
  {
    "sno": 5,
    "product": "Base station for cellular network for 5G",
    "variant": "Base Station 5G NR Type 1H",
    "category": "GCS"
  },
  {
    "sno": 6,
    "product": "Base station for cellular network for 5G",
    "variant": "Base Station 5G NR Type 1O",
    "category": "GCS"
  },
  {
    "sno": 7,
    "product": "Base station for cellular network for 5G",
    "variant": "Base Station 5G NR Type 2O",
    "category": "GCS"
  },
  {
    "sno": 8,
    "product": "Base station for cellular network for 5G",
    "variant": "Hybrid Active Antenna System",
    "category": "GCS"
  },
  {
    "sno": 9,
    "product": "5G Core",
    "variant": "AMF",
    "category": "SCS"
  },
  {
    "sno": 10,
    "product": "5G Core",
    "variant": "AUSF",
    "category": "SCS"
  },
  {
    "sno": 11,
    "product": "5G Core",
    "variant": "BSF",
    "category": "SCS"
  },
  {
    "sno": 12,
    "product": "5G Core",
    "variant": "CHF",
    "category": "SCS"
  },
  {
    "sno": 13,
    "product": "5G Core",
    "variant": "NEF",
    "category": "SCS"
  },
  {
    "sno": 14,
    "product": "5G Core",
    "variant": "NSSF",
    "category": "SCS"
  },
  {
    "sno": 15,
    "product": "5G Core",
    "variant": "PCF",
    "category": "SCS"
  },
  {
    "sno": 16,
    "product": "5G Core",
    "variant": "SMF",
    "category": "SCS"
  },
  {
    "sno": 17,
    "product": "5G Core",
    "variant": "SMSF",
    "category": "SCS"
  },
  {
    "sno": 18,
    "product": "5G Core",
    "variant": "UDM",
    "category": "SCS"
  },
  {
    "sno": 19,
    "product": "5G Core",
    "variant": "UDR",
    "category": "SCS"
  },
  {
    "sno": 20,
    "product": "5G Core",
    "variant": "UPF",
    "category": "SCS"
  },
  {
    "sno": 21,
    "product": "Hypervisor",
    "variant": "Hypervisor",
    "category": "SCS"
  },
  {
    "sno": 22,
    "product": "E-band Fixed Radio Relay System",
    "variant": "E-Band MW Full Outdoor System",
    "category": "GCS"
  },
  {
    "sno": 23,
    "product": "E-band Fixed Radio Relay System",
    "variant": "E-Band MW Outdoor System plus Indoor System",
    "category": "GCS"
  },
  {
    "sno": 24,
    "product": "Converged Multi service Application Access Equipment (C-MSAAE)",
    "variant": "C-MSAAE",
    "category": "SCS"
  },
  {
    "sno": 25,
    "product": "IP Terminal",
    "variant": "SIP Terminal",
    "category": "SCS"
  },
  {
    "sno": 26,
    "product": "Hybrid Set Top Box",
    "variant": "Hybrid Set Top Box",
    "category": "SCS"
  }
];

const toMtcteRows = (products) =>
  products.map(({ sno, product, variant, category }) => [
    `${sno}.`,
    product,
    variant,
    category,
  ]);

const MtcteProductTable = ({ products }) => (
  <ServiceTable headers={MTCTE_TABLE_HEADERS} rows={toMtcteRows(products)} />
);

const hero = {
  heading: (
    <>
      <span className="relative">
        TEC Registration in India
        <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" />
      </span>
      <br />
      <span className="text-[#1A8781]">MTCTE Scheme</span>
    </>
  ),
  headingAs: "h1",
  description:
    "TEC Registration is an important means of regulating telecom equipment in India under the MTCTE Scheme.",
};

const OverviewSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is TEC?</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Full form of TEC: Telecommunication Engineering Centre
    </SectionHeadingThree>

    <ServiceParagraph>
      The evolution of the telecommunication industry has been implemented in
      various ways across the globe. From the first telegram service in the
      1830s to the advanced communication satellites and wireless networking
      systems of today. The Indian telecom industry started to evolve in the
      90&apos;s with industry liberalization and the subsequent rise of innovation
      and global participation and the fast pace growth of infrastructure in
      India.
    </ServiceParagraph>

    <ServiceParagraph>
      With the growth of telecom infrastructure, there became a greater need
      for a framework of standards and practices for the functional and formal
      regulation of the telecom ecosystem. To ensure secure communication,
      privacy of data, stability of the network, and interoperability among
      devices, systems and networks, the Minister of Communications of the
      Government of India set up the Telecommunication Engineering Centre
      (TEC) of the Department of Telecommunications (DoT) to provide for the
      secure and reliable ecosystem of telecommunications.
    </ServiceParagraph>

    <ServiceParagraph>
      TEC Registration is an important means of regulating telecom equipment
      in India. No manufacturer or importer can sell telecom products in the
      Indian marketplace unless a TEC Certificate is obtained under the
      Mandatory Testing and Certification of Telecom Equipment (MTCTE Scheme)
      of the Government of India.
    </ServiceParagraph>

    <ServiceParagraph>
      This comprehensive guide elaborates and simplifies TEC Certification,
      MTCTE Registration, its eligibility, products, application procedure,
      cost, time, exemptions, compliance, and other constraints.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">TEC safeguards the following:</SectionHeadingThree>

    <ServiceList
      points={[
        "Safe and secure telecom networks",
        "Telecom equipment quality control",
        "Adherence to the Essential Requirements (ERs)",
        "Global standards",
        "The interests of consumers",
      ]}
    />

    <ServiceImage
      src={TEC_OVERVIEW_IMAGE}
      alt="TEC Registration in India"
      title="TEC Registration in India - MTCTE Scheme"
      className="w-full md:max-w-[400px]"
    />

    <SectionHeadingThree as="h3">
      Examples of specifications published by TEC:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Generic Requirements (GR)",
        "Interface Requirements (IR)",
        "Service Requirements (SR)",
      ]}
    />

    <ServiceParagraph>
      These technical standards govern the performance, safety,
      electro-magnetic compatibility, and environmental concerns regarding
      telecom equipment.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">What is a TEC Certificate?</SectionHeadingTwo>

    <ServiceParagraph>
      A TEC Certificate is an approval/authorization given by the
      Telecommunication Engineering Centre for telecom equipment. A TEC
      certificate ensures the conformity of telecom devices with the essential
      requirements required by MTCTE.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">The TEC certificate is compulsory to:</SectionHeadingThree>

    <ServiceList
      points={[
        "Manufacture telecom equipment in India",
        "Import telecom equipment to India",
        "Trade telecom equipment in the Indian market",
      ]}
    />

    <ServiceParagraph>
      Telecom products that do not possess a valid TEC Certification cannot
      legally be marketed or used in India. After the TEC Registration process
      is completed successfully, a unique registration number is generated.
      This number acts as an identifier for the product and can be affixed on
      the apparatus as proof of compliance with regulations.
    </ServiceParagraph>
  </>
);

const ProductsSection = () => (
  <>
    <SectionHeadingTwo as="h2">What is MTCTE Certification</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      MTCTE refers to Mandatory Testing and Certification of Telecom
      Equipment.
    </SectionHeadingThree>

    <ServiceParagraph>
      As per the Indian Telegraph (Amendment) Rules, 2017, telecom equipment
      has to go through mandatory testing and certification before it can be
      sold, imported, or used in India.
    </ServiceParagraph>

    <ServiceParagraph>
      This certification scheme framework is aimed at assuring compliance of
      telecom equipment against the following Essential Requirements:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Essential Requirements under MTCTE:</SectionHeadingThree>

    <ServiceList
      points={[
        "Safety",
        "Electromagnetic compatibility (EMC)",
        "Technical performance",
        "Environmental",
        "Security of the networks",
      ]}
    />

    <ServiceParagraph>
      The process of becoming compliant to these rules is commonly known as
      MTCTE certification.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      What is the importance of MTCTE Registration?
    </SectionHeadingTwo>

    <ServiceParagraph>
      The telecommunications space comprises very sensitive infrastructure,
      including mobile networks, the internet, satellites, and enterprise
      communication systems. Non-compliant or faulty equipment can result in
      the following situations:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Risks of non-compliant equipment:</SectionHeadingThree>

    <ServiceList
      points={[
        "Disrupt Network Services",
        "Cause Interference",
        "Endanger National Security",
        "Cause Safety Risks",
      ]}
    />

    <ServiceParagraph>
      To mitigate these risks, MTCTE Registration ensures all telecom
      equipment within the borders of the Indian subcontinent is compliant
      with the standards set forth by the Indian Member of Parliament.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">
      The Regulatory framework outlines the benefits for:
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Telecom service providers",
        "Consumers",
        "Network operators",
        "National infrastructure",
      ]}
    />
  </>
);

const ApplicantsSection = () => (
  <>
    <SectionHeadingTwo as="h2">Types of TEC Certifications</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      In addition to the compulsory MTCTE Registration, TEC provides optional
      certification, which varies according to the nature of the product and
      the technical regulations.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">1. Type Approval</SectionHeadingThree>

    <ServiceParagraph>
      Type approval consists of the testing and certification of
      telecommunications equipment, according to TEC&apos;s Test Schedule &amp;
      Test Procedure (TSTP), to evaluate compliance with the Generic Requirement
      (GR). It verifies safety, reliability, and functionality for public
      network use.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Testing could be done:</SectionHeadingThree>

    <ServiceList
      points={[
        "At the original equipment manufacturer (OEM) location",
        "In specific laboratories",
        "At laboratories that are recognized by the International Laboratory Accreditation Cooperation (ILAC) for testing on electromagnetic compatibility (EMC) and for safety and environmental testing.",
      ]}
    />

    <SectionHeadingThree as="h3">2. Interface Approval</SectionHeadingThree>

    <ServiceParagraph>
      Interface Approval determines that the equipment meets the Interface
      Requirements (IR). This is usually demanded by Services Providers,
      Government agencies, and Authorities in charge of licensing.
    </ServiceParagraph>

    <ServiceParagraph>
      Testing is done according to TEC&apos;s Test Schedule &amp; Test Procedure (TSTP)
      and is mandatory in certain situations. It ensures that equipment
      connects correctly with existing public networks, focusing on interface
      compatibility.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">3. Certificate of Approval (CoA)</SectionHeadingThree>

    <ServiceParagraph>
      A Certificate of Approval (CoA) is a type of certification issued for
      products—particularly in the telecommunications sector—when no standard
      Generic Requirements (GR) or Interface Requirements (IR) exist. This
      type of approval bases the certification on the manufacturer&apos;s own
      technical specifications rather than established industry standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">4. Technology Approval</SectionHeadingThree>

    <ServiceParagraph>
      Technology Approval is granted for prototype telecommunications products
      approved by C-DoT or other Research and Development Organizations. This
      Approval validates new or emerging technologies developed by
      organizations like C-DoT to ensure they meet standards for
      implementation in networks.
    </ServiceParagraph>
  </>
);

const ScopeSection = () => (
  <>
    <SectionHeadingTwo as="h2">Products Covered under MTCTE Scheme</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      A wide range of telecom equipment falls under the MTCTE certification
      scheme.
    </SectionHeadingThree>

    <div className="mt-4">
      <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="phase-1" className="border-none">
            <AccordionTrigger className="bg-[#1a4f8b] hover:bg-[#163f6e] text-white font-geist font-bold text-[14px] md:text-[16px] uppercase tracking-wider px-4 py-3 rounded-md [&[data-state=open]>svg]:text-white [&>svg]:text-white">
              Products Covered Under Phase I of MTCTE:
            </AccordionTrigger>
            <AccordionContent className="pt-3 pb-0">
              
              <MtcteProductTable products={MTCTE_PHASE_I_PRODUCTS} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phase-2" className="border-none">
            <AccordionTrigger className="bg-[#1a4f8b] hover:bg-[#163f6e] text-white font-geist font-bold text-[14px] md:text-[16px] uppercase tracking-wider px-4 py-3 rounded-md [&[data-state=open]>svg]:text-white [&>svg]:text-white">
              Products Covered Under Phase II of MTCTE:
            </AccordionTrigger>
            <AccordionContent className="pt-3 pb-0">
              <ServiceParagraph>Effective from 1 October 2020, it is mandatory to obtain TEC certification for the products covered under MTCTE Phase 2 before selling them in India. Phase 2 of the MTCTE scheme encompassed a wide range of telecom equipment, including routers, switches, network interface devices, optical transport equipment, and more. List Of Products (Essential Requirements) Covered Under Phase-II of MTCTE are:</ServiceParagraph>
              <MtcteProductTable products={MTCTE_PHASE_II_PRODUCTS} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phase-3" className="border-none">
            <AccordionTrigger className="bg-[#1a4f8b] hover:bg-[#163f6e] text-white font-geist font-bold text-[14px] md:text-[16px] uppercase tracking-wider px-4 py-3 rounded-md [&[data-state=open]>svg]:text-white [&>svg]:text-white">
              Products Covered Under Phase III of MTCTE:
            </AccordionTrigger>
            <AccordionContent className="pt-3 pb-0">
              <ServiceParagraph>Starting from 1 October 2023, manufacturers or importers of 10 specific telecom products will be obligated to obtain certification before selling them in India. Additionally, starting from 1 January 2024, an additional 14 products will come under the mandatory certification requirement.</ServiceParagraph>
              <MtcteProductTable products={MTCTE_PHASE_III_PRODUCTS} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phase-4" className="border-none">
            <AccordionTrigger className="bg-[#1a4f8b] hover:bg-[#163f6e] text-white font-geist font-bold text-[14px] md:text-[16px] uppercase tracking-wider px-4 py-3 rounded-md [&[data-state=open]>svg]:text-white [&>svg]:text-white">
              Products Covered Under Phase IV of MTCTE:
            </AccordionTrigger>
            <AccordionContent className="pt-3 pb-0">
              <ServiceParagraph>The date of mandatory certification for products covered under MTCTE Phase IV varies, with some products requiring mandatory TEC certification from 1 October 2023, while others will need certification starting from 1 January 2024.</ServiceParagraph>
              <MtcteProductTable products={MTCTE_PHASE_IV_PRODUCTS} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phase-5" className="border-none">
            <AccordionTrigger className="bg-[#1a4f8b] hover:bg-[#163f6e] text-white font-geist font-bold text-[14px] md:text-[16px] uppercase tracking-wider px-4 py-3 rounded-md [&[data-state=open]>svg]:text-white [&>svg]:text-white">
              Products Covered Under Phase V of MTCTE:
            </AccordionTrigger>
            <AccordionContent className="pt-3 pb-0">
              <ServiceParagraph>In accordance with the Indian Telegraph (Amendment) Rules 2017, pertaining to the Mandatory Testing & Certification of Telecom Equipment (MTCTE) regime, the acceptance of applications for Phase-V on the MTCTE portal will commence from July 1, 2023. Furthermore, certification for Phase-V products (ERs) becomes mandatory from July 1, 2024.</ServiceParagraph>
              <MtcteProductTable products={MTCTE_PHASE_V_PRODUCTS} />
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>

    <SectionHeadingTwo as="h2">MTCTE Exempted Products</SectionHeadingTwo>

    <ServiceParagraph>
      On January 8, 2024 the Telecommunication Engineering Centre (TEC) under
      the Department of Telecommunication published a Notification regarding
      certain products being exempted from the compulsory TEC Certification. A
      wide array of exemption from the submission of test reports for specific
      test parameters/interfaces pertaining to various Essential Requirements
      (ERs) under MTCTE has been granted an extension till 30th June 2024, or
      further notice.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Who is Required to Get MTCTE/TEC Registration?
    </SectionHeadingTwo>

    <ServiceParagraph>
      Under the Telecommunication Engineering Centre (TEC), Telecommunication
      Equipment (MTCTE) testing and certification are prerequisites for
      Original Equipment Manufacturers (OEMs), importers, and Indian
      authorized representatives for the sale, import, or use of certain
      telecom equipment in India. Mobile handsets, routers, and switches, and
      modems are included, and they must comply with Indian safety and
      performance standards.
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Who needs to register:</SectionHeadingThree>

    <ServiceList
      points={[
        "OEMs: Includes all telecom equipment manufacturers in India.",
        "Foreign Manufacturers: Foreign OEMs must get their equipment certified, usually through an Authorized Indian Representative (AIR).",
        "Importers & Dealers: Any person importing or selling telecom equipment listed in the notification.",
      ]}
    />

    <SectionHeadingTwo as="h2">Basic Requirements for TEC Certification</SectionHeadingTwo>

    <ServiceParagraph>
      The following must be in order to obtain a TEC Certificate:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Required for TEC Certificate:</SectionHeadingThree>

    <ServiceList
      points={[
        "Authorized signatory of an Indian company",
        "Company registration certificate",
        "MoU between foreign OEM and Indian representative (if applicable)",
        "TEC-designated laboratory test report",
        "Brand and trademark registration",
        "Manufacturing address",
      ]}
    />

    <ServiceParagraph>
      For the TEC certification, proper and complete documentation is required
      for a successful approval.
    </ServiceParagraph>
  </>
);

const ProcessSection = () => (
  <>
    <SectionHeadingTwo as="h2">TEC Registration Process on MTCTE Portal</SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Step-by-step guide to completing your TEC Registration.
    </SectionHeadingThree>

    <ServiceParagraph>
      To initiate the MTCTE registration process, one must create an account
      on an official TEC portal. Next, they must enter company and product
      details, upload the Bill of Materials (BoM), and pay registration fees.
      Products undergo testing at TEC&apos;s approved laboratories, known as CABs,
      and reports on EMI/EMC, safety, and performance are evaluated to
      determine eligibility for certification.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">
      Steps to MTCTE Registration and Certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">MTCTE Registration Steps:</SectionHeadingThree>

    <ServiceList
      points={[
        "Step 1. Portal Registration: Register on the MTCTE portal using a company email ID to create a user account. You may be asked to provide a company and manufacturing location.",
        "Step 2. Approval of Product & BoM: You may be required to choose the product category, product type, and product variants. Submit the Bill of Materials and product specifications for initial review.",
        "Step 3. Payment of Application & Fees: Complete the application, and pay the administrative and evaluation fees on the Bharat Kosh portal.",
        "Step 4. Testing of Products: Send product samples to a Designated Conformity Assessment Body (CAB) for ER testing.",
        "Step 5. Submission of Test Report: Upload to the Portal the user's test report, and other technical documentation.",
        "Step 6. TEC Certification and Evaluation: After review of the test reports and other documentation, if TEC finds the documentation to be compliant, a certificate that is valid for 10 years is issued to the user.",
      ]}
    />

    <SectionHeadingTwo as="h2">Required Documents for TEC Registration</SectionHeadingTwo>

    <SectionHeadingThree as="h3">The following are required of the applicants:</SectionHeadingThree>

    <ServiceList
      points={[
        "Company registration certificate",
        "Authorization letter",
        "Memorandum of Association (MoA)",
        "Articles of Association (AoA)",
        "Shareholding pattern",
        "MOU between foreign OEM and AIR",
        "Test reports",
        "Product data sheet",
      ]}
    />

    <ServiceParagraph>
      Delays in the MTCTE Registration process will be caused by incomplete
      documentation.
    </ServiceParagraph>

    <SectionHeadingTwo as="h2">TEC Certification Timeline</SectionHeadingTwo>

    <ServiceParagraph>
      The certification process can take a maximum of 60 days which is
      determined by:
    </ServiceParagraph>

    <SectionHeadingThree as="h3">Factors affecting timeline:</SectionHeadingThree>

    <ServiceList
      points={[
        "Complexity of the product",
        "Number of parameters to be tested",
        "Time available at the laboratory",
        "Completeness of documents",
      ]}
    />

    <ServiceParagraph>
      Most delays are attributed to insufficient documents or tests that do
      not meet the required standard.
    </ServiceParagraph>
  </>
);

const ConsultancySection = () => (
  <>
    <SectionHeadingTwo as="h2">
      TEC MTCTE Certification Benefits for Enterprises
    </SectionHeadingTwo>

    <SectionHeadingThree as="h3">
      Key advantages of obtaining TEC MTCTE Certification.
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">Benefits of TEC MTCTE Certification:</SectionHeadingThree>

    <ServiceList
      points={[
        "Accessing Markets: Certifications legally permit firms to sell, import, and distribute telecom products within Indian borders.",
        "Compliance with Laws and Mitigating Risks: Certifications mean compliance with Indian Laws (EMI/EMC, safety) and mitigates the risk of bans, monetary fines, and customs hold.",
        "Company Image and Reputation: Certification of a Company's product will portray the product as safe and reliable which will help in building a Company's Image and Reputation.",
        "Edge Over Competitors: The product certification will help the company gain preference in government, B2B and operator tenders.",
        "Hardware Quality: Quality of the hardware will be better as the testing helps in recognizing all shortfalls.",
        "Modernized Networks: The public network performance will be at its peak as the equipment will not compromise its performance.",
      ]}
    />

    <SectionHeadingTwo as="h2">Conclusion</SectionHeadingTwo>

    <ServiceParagraph>
      The telecommunications sector is the most crucial for the functioning of
      the entire communication system, the entire business system, and the
      system for protecting the nation. In order to protect the quality,
      safety and integrity of the networks, the Indian government strictly
      enforces compliance with the TEC MTCTE certification.
    </ServiceParagraph>

    <ServiceParagraph>
      Based on the telecom regulations, obtaining a TEC Certificate by a TEC
      Registration and MTCTE Registration is not just fulfilling a compliance
      requirement, but also an entry strategy for businesses who want to be
      competitive in the telecom sector in India.
    </ServiceParagraph>

    <ServiceParagraph>
      The process of documentation, testing and evaluation provides assurance
      that the telecom equipment is compliant with the prescribed technical
      standards. Thus, it applies to telecom equipment and compliance to the
      TEC Certification standards applies to both domestic manufacturers and
      foreign OEMs.
    </ServiceParagraph>

    <ServiceParagraph>
      For businesses to retain their TEC Registration, compliance to the
      requirements for testing, documentation, and evaluation is essential.
      Businesses must also monitor the updates on the MTCTE Portal to
      facilitate this.
    </ServiceParagraph>

    <ServiceParagraph>
      As India&apos;s telecom landscape is rapidly evolving, TEC Certification,
      along with regulatory compliance, will continue to contribute to a safe
      and effective communication ecosystem.
    </ServiceParagraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", section: <OverviewSection /> },
  { id: "products", label: "Products", section: <ProductsSection /> },
  { id: "applicants", label: "Applicants", section: <ApplicantsSection /> },
  { id: "scope", label: "Scope", section: <ScopeSection /> },
  { id: "process", label: "Process", section: <ProcessSection /> },
  {
    id: "consultancy",
    label: "Consultancy",
    section: <ConsultancySection />,
  },
];

const faqs = [
  {
    question: "What is TEC?",
    answer:
      "TEC is short for Telecommunication Engineering Center, a section of the Department of Telecommunications (DoT), Government of India. It focuses on the creation of technical standards and specifications for telecom equipment to help ensure the protection, quality, and reliability of the equipment for end users.",
  },
  {
    question: "What is TEC Certification?",
    answer:
      "TEC Certification is an approval that is necessary and mandatory for telecom equipment that is sold, manufactured, or imported into India, and is given by TEC. Under the MTCTE scheme, a valid TEC Certificate is necessary for any manufacturer or importer to market telecom products in India.",
  },
  {
    question: "Are consumer products required to be certified under MTCTE?",
    answer:
      "Currently, consumer products that are not primary telecom products, such as TVs or refrigerators, are excluded from MTCTE Registration, even if they have telecom functionalities such as Wi-Fi or Bluetooth. However, manufacturers are advised to monitor the MTCTE Portal for any updates in scope.",
  },
  {
    question: "Who can be considered an applicant for MTCTE Registration?",
    answer:
      "The applicant is the company's authorized executive as stated in the authorization letter. In the MTCTE Portal registration, their name and title are to be stated accurately in the profile section.",
  },
  {
    question: "What is your TEC Certification advantage?",
    answer:
      "TEC MTCTE certification is proof that the telecom equipment has satisfied the requirements set by the government. The advantages are: Legally authorized manufacturing and importing, Enhanced credibility for the product, Improved confidence for the customer, Assurance of safety and performance, and Uncut market access into India.",
  },
  {
    question: "What should an AIR do in case there are several foreign OEMs?",
    answer:
      "If there is one Authorized Indian Representative (AIR) for several foreign OEMs, different MoUs or authorization letters should be given for each OEM. Furthermore, distinct MTCTE Registration accounts should be created for each foreign manufacturer on the MTCTE Portal.",
  },
  {
    question: "What types of business entities can act as an AIR?",
    answer:
      "An AIR can be a registered business entity in India as a: Proprietorship Firm – Establishment License needed, Partnership Firm – Notarized Partnership Deed needed, Private or Public Limited Company – Required is a Certificate of Incorporation from the ROC. Registration documents should be complete when submitting the TEC Registration.",
  },
  {
    question: "How can an applicant make offline payment on the MTCTE Portal?",
    answer:
      "While submitting an application for TEC Certification, an applicant can decide on an online payment method or an offline payment method. The MTCTE applicant user instructions on the portal details the steps for offline payment.",
  },
  {
    question:
      "Is multiple simultaneous login allowed on the same MTCTE account?",
    answer:
      "No. Multiple users cannot log into the same account simultaneously on the MTCTE Portal. Each account can only have one active session.",
  },
  {
    question: "What is the TEC Registration fee?",
    answer:
      "TEC Registration fee consists of: Government charges, Testing fees, Evaluation of Test Report fees, Professional or consultancy fees, if any. Depending on the type of equipment and the Essential Requirements that need to be met for TEC MTCTE certification, the fees can vary.",
  },
];

const Tec = () => (
  <ServicePageLayout
    breadcrumbLabel="TEC Registration"
    hero={hero}
    sections={sections}
    faqs={faqs}
  />
);

export default Tec;
