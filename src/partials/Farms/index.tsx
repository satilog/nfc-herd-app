import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";
import { ScaleIcon, UserIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Farms({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const isScreenHeight = true;
  const router = useRouter();
  const farms = [
    {
      name: "Farm",
      location: "Address",
      cattle_amount: 67,
    },
    {
      name: "Farm2",
      location: "Address2",
      cattle_amount: 150,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 ">
        Farms
      </h1>
      <div className="flex flex-wrap justify-center gap-6 overflow-x-auto p-4">
        {farms.map((farm) => (
          <div
            key={farm.name}
            onClick={() => router.push(`/farm/${farm.name}`)}
            className="pb-6 bg-orange-500 text-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer w-80 transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105 "
          >
            <h2 className="mb-4 px-6 pb-6 flex items-center pt-6 bg-orange-400 rounded-t-lg">
              {farm.name}
            </h2>
            <div className="text-md px-6 mb-2 flex items-center">
              <h3 className="text-lg text-gray-600 mb-1">{farm.location}</h3>
            </div>
            <div className="text-md px-6 flex items-center">
              <h3 className="text-lg text-gray-600">
                Cattle: {farm.cattle_amount}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
