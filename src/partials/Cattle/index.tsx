import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface HealthRecord {
  date: { $date: number };
  condition: string;
  treatment: string;
}

interface VaccinationRecord {
  date: { $date: number };
  vaccine_name: string;
  administered_by: string;
}

interface Cow {
  _id: { $oid: string };
  rfid: string;
  animal_id: string;
  breed: string;
  date_of_birth: { $date: number };
  gender: string;
  farm_id: string;
  location: string;
  health_records: HealthRecord[];
  vaccination_records: VaccinationRecord[];
  weight: number;
  last_update: { $date: number };
}

export default function CowDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [cow, setCow] = useState<Cow | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchCow(id as string);
    }
  }, [id]);

  const fetchCow = async (cowId: string) => {
    try {
      const response = await fetch(`${process.env.API_URL}/cattle/${cowId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cow data");
      }

      const cowData = await response.json();
      setCow(JSON.parse(cowData));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: { $date: number }) => {
    const dateObject = new Date(date.$date);
    return dateObject.toLocaleDateString();
  };

  const calculateAge = (dateOfBirth: { $date: number }) => {
    const birthDate = new Date(dateOfBirth.$date);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years ${months} months`;
  };

  return (
    <div className="custom-container w-full min-h-screen bg-gray-100 p-6">
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : cow ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4 p-6">
          <h2 className="text-3xl font-bold text-left text-gray-800 mb-4">{cow.breed}</h2>
          <p className="text-lg text-left text-gray-600">RFID: {cow.rfid}</p>
          <p className="text-lg text-left text-gray-600">Animal ID: {cow.animal_id}</p>
          <p className="text-lg text-left text-gray-600">Gender: {cow.gender}</p>
          <p className="text-lg text-left text-gray-600">Location: {cow.location}</p>
          <p className="text-lg text-left text-gray-600">Weight: {cow.weight} lbs</p>
          {/* <p className="text-lg text-left text-gray-600">Date of Birth: {formatDate(cow.date_of_birth)}</p> */}
          {/* <p className="text-lg text-left text-gray-600">Age: {calculateAge(cow.date_of_birth)}</p> */}
          {/* <p className="text-lg text-left text-gray-600">Last Update: {formatDate(cow.last_update)}</p> */}
          
          <h3 className="text-2xl font-bold text-left text-gray-800 mt-6">Health Records</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
            <div className="grid grid-cols-3 gap-4 p-4 border-b-2 border-gray-200">
              <div className="font-semibold text-gray-700">Date</div>
              <div className="font-semibold text-gray-700">Condition</div>
              <div className="font-semibold text-gray-700">Treatment</div>
            </div>
            {cow.health_records.map((record, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                {/* <div className="text-gray-800">{formatDate(record.date)}</div> */}
                <div className="text-gray-800">{record.condition}</div>
                <div className="text-gray-800">{record.treatment}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-left text-gray-800 mt-6">Vaccination Records</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
            <div className="grid grid-cols-3 gap-4 p-4 border-b-2 border-gray-200">
              <div className="font-semibold text-gray-700">Date</div>
              <div className="font-semibold text-gray-700">Vaccine</div>
              <div className="font-semibold text-gray-700">Administered By</div>
            </div>
            {cow.vaccination_records.map((record, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                {/* <div className="text-gray-800">{formatDate(record.date)}</div> */}
                <div className="text-gray-800">{record.vaccine_name}</div>
                <div className="text-gray-800">{record.administered_by}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No data available</p>
      )}
    </div>
  );
}
