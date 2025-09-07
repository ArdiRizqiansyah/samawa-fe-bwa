import Header from "@/components/Header";
import WeddingPackageWrapper from "@/components/WeddingPackages";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 lg:px-4">
      <Header />

      <WeddingPackageWrapper show="popular" type="slider" />
    </main>
  );
}
