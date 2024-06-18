import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useAppContext } from "@/context/AppContext";

export default function Header(props: any) {
  // const { isHeaderFullWidth } = useAppContext();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Auction', href: '/auction' },
    { name: 'Farms', href: '/farms' },
  ];

  return (
    <div
      className="flex w-full items-center justify-around custom-bg-white-color h-20 border-b-[1.5px] custom-border-color"
    >
      <div
        className={`container custom-container flex justify-between items-center custom-bg-invert-color`}
      >
        <div
          className="custom-text-color text-2xl font-bold cursor-pointer"
          onClick={() => router.push('/')}
        >
          NFC HERD
        </div>

        {/* Tabs and Sign Up Button Group */}
        <div className="flex items-center">
          {/* Navigation Tabs */}
          <div className="flex flex-row mr-8 gap-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="custom-text-color text-md cursor-pointer hover:text-red-600"
                onClick={() => router.push(tab.href)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          {/* Sign Up Button */}
          <button
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-black hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}