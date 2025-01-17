import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
export const PlusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ['200','300', '400', '500', '600', '700', '800'], 
    style: ['normal', 'italic'], 
    display: 'swap', 
  });
export const OutfitFont = Outfit({
    subsets: ["latin"],
    weight: ['200', '300', '400','500', '600', '700', '800'], 
    style: ['normal'], 
    display: 'swap', 
  })