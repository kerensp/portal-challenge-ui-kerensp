import { ComponentType } from "react";
import { VitaminsIcon } from "@/components/core/icons/categories/vitamins-icon";
import { AnalgesicsIcon } from "@/components/core/icons/categories/analgesics-icon";
import { AntiInfectiousIcon } from "@/components/core/icons/categories/anti-infectious-icon";
import { AntitussivesIcon } from "@/components/core/icons/categories/antitussives-icon";
import { AntacidsIcon } from "@/components/core/icons/categories/antacids-icon";
import { AntidiarrhealsIcon } from "@/components/core/icons/categories/antidiarrheals-icon";
import { AntipyreticsIcon } from "@/components/core/icons/categories/antipyretics-icon";
import { AntiallergicsIcon } from "@/components/core/icons/categories/antiallergics-icon";

export const iconsMap: Record<string, ComponentType<{ className?: string }>> = {
  VitaminsIcon,
  AnalgesicsIcon,
  AntiInfectiousIcon,
  AntitussivesIcon,
  AntacidsIcon,
  AntidiarrhealsIcon,
  AntipyreticsIcon,
  AntiallergicsIcon,
};
