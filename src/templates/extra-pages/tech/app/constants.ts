import { TypeScriptIcon } from "icons/technologies/languages/typescript";
import { PythonIcon } from "icons/technologies/languages/python";
import { JavaIcon } from "icons/technologies/languages/java";

import { DockerIcon } from "icons/technologies/infrastructure/docker";
import { GitIcon } from "icons/technologies/infrastructure/git";
import { GitHubIcon } from "icons/technologies/infrastructure/github";
import { AwsIcon } from "icons/technologies/infrastructure/aws";
import { Ec2Icon } from "icons/technologies/infrastructure/ec2";
import { TerraformIcon } from "icons/technologies/infrastructure/terraform";

import { NextJsIcon } from "icons/technologies/web-frontend/next-js";
import { GatsbyIcon } from "icons/technologies/web-frontend/gatsby";
import { SveltekitIcon } from "icons/technologies/web-frontend/sveltekit";

import { ReactNativeIcon } from "icons/technologies/mobile/react-native";
import { ExpoIcon } from "icons/technologies/mobile/expo";
import { IonicIcon } from "icons/technologies/mobile/ionic";
import { CapacitorIcon } from "icons/technologies/mobile/capacitor";
import { AndroidIcon } from "icons/technologies/mobile/android";

import { DjangoIcon } from "icons/technologies/web-backend/django";
import { NestJsIcon } from "icons/technologies/web-backend/nest";
import { FirebaseIcon } from "icons/technologies/web-backend/firebase";
import { ServerlessIcon } from "icons/technologies/web-backend/serverless";

import { DynamoDbIcon } from "icons/technologies/database/dynamo";
import { MongoDbIcon } from "icons/technologies/database/mongo";
import { PostgresIcon } from "icons/technologies/database/postgres";

import { VsCodeIcon } from "icons/technologies/development/vscode";
import { AppleIcon } from "icons/technologies/development/apple";

export enum TECH_PROFICIENCY {
  PRODUCTION = "PRODUCTION",
}

export const TECHNOLOGIES = {
  LANGUAGES: [
    {
      name: "TypeScript",
      icons: [TypeScriptIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Python",
      icons: [PythonIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Java", icons: [JavaIcon] },
  ],
  WEB: [
    {
      name: "Next JS",
      icons: [NextJsIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Gatsby JS", icons: [GatsbyIcon] },
    { name: "SvelteKit", icons: [SveltekitIcon] },
  ],
  MOBILE: [
    {
      name: "React Native and Expo",
      icons: [ReactNativeIcon, ExpoIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Ionic with Capacitor", icons: [IonicIcon, CapacitorIcon] },
    { name: "Android", icons: [AndroidIcon] },
  ],
  BACKEND: [
    {
      name: "Django",
      icons: [DjangoIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Nest JS",
      icons: [NestJsIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Serverless",
      icons: [ServerlessIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Firebase", icons: [FirebaseIcon] },
  ],
  DATABASES: [
    {
      name: "Postgres",
      icons: [PostgresIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "DynamoDB",
      icons: [DynamoDbIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "MongoDB", icons: [MongoDbIcon] },
  ],
  INFRASTRUCTURE: [
    {
      name: "Git and GitHub",
      icons: [GitIcon, GitHubIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "AWS",
      icons: [AwsIcon, Ec2Icon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Docker",
      icons: [DockerIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Terraform",
      icons: [TerraformIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
  ],
  DEVELOPMENT: [
    {
      name: "2021 MacBook Pro M1",
      icons: [AppleIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "VS Code",
      icons: [VsCodeIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
  ],
};
