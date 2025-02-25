import { PrismaClient } from "@prisma/client";
import { GhibliAPI } from "./datasources/GhibliAPI";
import { TrackAPI } from "./datasources/TrackAPI";
import { AuthenticatedUser } from "./modules/auth";

export type Context = {
  dataSources: {
    trackAPI: TrackAPI;
    ghibliAPI: GhibliAPI;
    db: PrismaClient,
  };
  user: AuthenticatedUser | null
};