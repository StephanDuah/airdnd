import Banner from "@/Components/Banner";
import Header from "@/Components/Header";
import LargeCard from "@/Components/LargeCard";
import MeduimCard from "@/Components/MediumCard";
import SmallCard from "@/Components/SmallCard";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      <main className="">
        {/* Banner */}
        <Banner />

        {/* Category */}
        <section className="max-w-[1024px] mx-auto px-6 md:px-16 ">
          <div className="pt-6">
            <h2 className="font-bold text-2xl">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array(8)
                .fill(0)
                .map((_, id) => (
                  <SmallCard key={id} />
                ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3">
              {Array(5)
                .fill(0)
                .map((_, id) => (
                  <MeduimCard key={id} />
                ))}
            </div>
          </div>

          <LargeCard />
        </section>
      </main>
    </>
  );
}
