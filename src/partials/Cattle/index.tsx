import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";

export default function CattleList(
//   {
//   children,
// }: {
//   children: ReactNode | ReactNode[];
// }
) {
  const isScreenHeight = true;
  const router = useRouter();
  
  const cows = [
    {
      animal_id: 1,
      breed: "breed1",
      dob: "10-10-2021",
      sex: "male",
      weight: "10",
      owner_info: "somwefo",

    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cows.map((cow) => (
          <div
            key={cow.animal_id}
            onClick={() => router.push("/{cow.id}")}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{cow.animal_id}</h2>
            <h3 className="text-lg text-gray-700 mb-1">{cow.breed}</h3>
            <h3 className="text-lg text-gray-700">{cow.sex}</h3>
            <h3 className="text-lg text-gray-700">{cow.weight}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
