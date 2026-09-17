import { createFileRoute } from "@tanstack/react-router";
import { PortalPage } from "@/components/portal-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PortalPage />;
}
