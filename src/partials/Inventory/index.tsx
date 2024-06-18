import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ScaleIcon, UserIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useAppContext } from "@/context/AppContext";

export default function Inventory({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const isScreenHeight = true;
  const router = useRouter();
  const cows = [
    {
      animal_id: 1,
      breed: "whiBos indicus (Zebu)te",
      sex: "male",
      weight: "130",
    },
    {
      animal_id: 2,
      breed: "Bos taurus (Taurine)",
      sex: "female",
      weight: "104",
    },
    {
      animal_id: 3,
      breed: "Hybrid",
      sex: "male",
      weight: "166",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="relative">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 ">
          Cattle
        </h1>
        <div className="absolute top-0 left-5">
          <button
            className="bg-orange-600 py-1 px-2 text-white rounded-lg flex hover:bg-orange-500"
            onClick={() => router.push("/farms")}
          >
            <ArrowLeftIcon className="h-6 w-6 mr-2" />
            <span>Farms</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 overflow-x-auto p-4">
        {cows.map((cow) => (
          <div
            key={cow.animal_id}
            onClick={() => router.push(`/cow/${cow.animal_id}`)}
            className="pb-6 bg-orange-500 text-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer w-80 hover:scale-105"
          >
            <div className="mb-4 px-6 pb-6 flex items-center pt-6 bg-orange-400 rounded-t-lg ">
              <Image
                src="/cow.svg"
                alt="Cow"
                width={24}
                height={24}
                className="mr-2"
                style={{ filter: "invert(1)" }}
              />
              <span className="text-md">
                {cow.animal_id} {cow.breed}
              </span>
            </div>
            <div className="text-md px-6 mb-2 flex items-center">
              <UserIcon className="h-5 w-5 text-gray-200 mr-2" />
              <span>{cow.sex}</span>
            </div>
            <div className="text-md px-6 flex items-center">
              <ScaleIcon className="h-5 w-5 text-gray-200 mr-2" />
              <span>{cow.weight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
