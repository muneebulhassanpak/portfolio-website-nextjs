import DevTypeNavigation from "@/components/DevTypeNavigation";
import Hero from "@/components/Hero";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Hero />
      <DevTypeNavigation />
      {children}
    </>
  );
}
