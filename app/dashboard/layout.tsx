import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen">
        {/* Header */}
        <Header />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </ClerkLoaded>
  );
};
export default DashboardLayout;
