import bain from "../public/companies/bain.png";
import bfg from "../public/companies/bfg.png";
import bi from "../public/companies/bi.png";
import cbre from "../public/companies/cbre.png";
import deloitte from "../public/companies/deloitte.png";
import euronet from "../public/companies/euronet.png";
import imit from "../public/companies/imit.png";
import ipg from "../public/companies/ipg.png";
import mars from "../public/companies/mars.png";
import mf from "../public/companies/mf.png";
import nikon from "../public/companies/nikon.png";
import novoNordisk from "../public/companies/novo-nordisk.png";
import orange from "../public/companies/orange.png";
import ruch from "../public/companies/ruch.png";
import saturn from "../public/companies/saturn.png";
import schindler from "../public/companies/schindler.png";
import uw from "../public/companies/uw.png";
import { StaticImageData } from "next/image";

interface Company {
  name: string;
  logo: StaticImageData; // <-- define a type for the `logo` property
}

export const companies: Company[] = [
  { name: "Bain", logo: bain },
  { name: "BFG", logo: bfg },
  { name: "BI", logo: bi },
  { name: "CBRE", logo: cbre },
  { name: "Deloitte", logo: deloitte },
  { name: "Euronet", logo: euronet },
  { name: "IMIT", logo: imit },
  { name: "IPG", logo: ipg },
  { name: "Mars", logo: mars },
  { name: "MF", logo: mf },
  { name: "Nikon", logo: nikon },
  { name: "Novo Nordisk", logo: novoNordisk },
  { name: "Orange", logo: orange },
  { name: "Ruch", logo: ruch },
  { name: "Saturn", logo: saturn },
  { name: "Schindler", logo: schindler },
  { name: "UW", logo: uw },
];

// interface Company {
//   name: string;
//   logo: string; // <-- define a type for the `logo` property
// }
//
// export const companies: Company[] = [
//   { name: "Bain", logo: "../public/companies/bain.svg" },
//   { name: "BFG", logo: "../public/companies/bfg.png" },
//   { name: "BI", logo: "../public/companies/bi.png" },
//   { name: "CBRE", logo: "../public/companies/cbre.png" },
//   { name: "Deloitte", logo: "../public/companies/deloitte.svg" },
//   { name: "Euronet", logo: "../public/companies/euronet.svg" },
//   { name: "IMIT", logo: "../public/companies/imit.png" },
//   { name: "IPG", logo: "../public/companies/ipg.png" },
//   { name: "Mars", logo: "../public/companies/mars.svg" },
//   { name: "MF", logo: "../public/companies/mf.svg" },
//   { name: "Nikon", logo: "../public/companies/nikon.png" },
//   { name: "Novo Nordisk", logo: "../public/companies/novo-nordisk.svg" },
//   { name: "Orange", logo: "../public/companies/orange.png" },
//   { name: "Ruch", logo: "../public/companies/ruch.png" },
//   { name: "Saturn", logo: "../public/companies/saturn.png" },
//   { name: "Schindler", logo: "../public/companies/schindler.png" },
//   { name: "UW", logo: "../public/companies/uw.png" },
// ];
