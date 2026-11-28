import ApplicationApp from "@/components/Application";
import { getApplications } from "./lib/applications";

export default async function Home() {
  const applicationData = await getApplications();
  return <ApplicationApp applicationData={applicationData} />;
}
