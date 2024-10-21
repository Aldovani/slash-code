import { Area, Difficult } from "@/graphql/generated/graphql";

export type challenges = {
  id: string;
  slug: string;
  title: string;
  area: Area;
  description: string;
  difficult: Difficult;
  preview: {
    url: string;
  };
};
