import Banner from "@/components/Banner";
import Popular from "@/components/Popular";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Popular></Popular>
      <SummerCareTips></SummerCareTips>
       <TopBrands></TopBrands>

    </div>
  );
}
