import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";

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
      cattle_amount: 12,
    },
    {
      name: "Farm2",
      location: "Address2",
      cattle_amount: 12212,
    },
    {
      name: "Farm2",
      location: "Address2",
      cattle_amount: 12212,
    },
    {
      name: "Farm2",
      location: "Address2",
      cattle_amount: 12212,
    },
    {
      name: "Farm2",
      location: "Address2",
      cattle_amount: 12212,
    },
    {
      name: "Farm2",
      location: "Address2",
      cattle_amount: 12212,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {farms.map((farm) => (
          <div
            key={farm.name}
            onClick={() => router.push("/{farm.name}")}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{farm.name}</h2>
            <h3 className="text-lg text-gray-700 mb-1">{farm.location}</h3>
            <h3 className="text-lg text-gray-700">
              Cattle Amount: {farm.cattle_amount}
            </h3>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
