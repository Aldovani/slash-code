import { Area, Difficult } from "@/graphql/generated/graphql";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Challenge = {
  title: string;
  slug: string;
  preview: string | StaticImport;
  area: Area;
  difficult: Difficult;
  description: string;
};

export type ChallengeItemProps = {
  data: Challenge;
};

