import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppContext } from "@/context/AppContext";

interface Farm {
  _id: string;
  name: string;
  location: string;
  size_acres: number;
  farmer_id: string;
  cattle_list: string[];
}

const Farms: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { farmerId } = useAppContext();

  const [farms, setFarms] = useState<Farm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id || farmerId) {
      fetchFarms((id || farmerId) as string);
    }
  }, [id, farmerId]);

  const fetchFarms = async (farmerId: string) => {
    try {
      const response = await fetch(`${process.env.API_URL}/farmer/${farmerId}/farms`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch farms data");
      }

      const farmsData = await response.json();
      console.log(farmsData)
      setFarms(farmsData.map((e: any) => JSON.parse(e)));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="custom-container min-h-screen w-full bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-8 text-left text-gray-800">Farms</h1>
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farms.map((farm) => (
            <div
              key={farm._id}
              onClick={() => router.push(`/farm/${farm._id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{farm.name}</h2>
                <p className="text-md text-gray-600 mb-2">
                  <strong>Location:</strong> {farm.location}
                </p>
                <p className="text-md text-gray-600 mb-2">
                  <strong>Size:</strong> {farm.size_acres} acres
                </p>
                <p className="text-md text-gray-600">
                  <strong>Cattle Count:</strong> 5
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Farms;
