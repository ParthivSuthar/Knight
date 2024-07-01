import { personal, agency, enterprise } from "../data.js/data";

const Pricing = () => {
  return (
    <section className="pt-12">
      <div className="flex flex-col">
        <div className="mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Choose your pricing plan.
          </h2>
          <p className="text-white max-w-lg py-5">
            Simply pricing - 7 Days free trial
          </p>
        </div>
        <div className="grid sm:grid-cols-3 place-items-center py-4 gap-6">
          <div className="bg-gradient-to-r from-slate-900 to-blue-600 p-6 w-64 text-center space-y-3 rounded-md">
            <div className="space-y-2">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Personal</h2>
              <h3 className="text-xl text-orange-500">
                $59<span className="text-sm text-white">/Month</span>
              </h3>
            </div>
            {personal.map((dets, index) => (
              <div key={index}>
                <p className="text-white">{dets.details}</p>
              </div>
              
            ))}
            <button className="bg-orange-500 rounded-lg hover:text-white text-black px-3 py-2">START FREE TRIAL</button>
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-green-600 p-6 w-64 text-center space-y-3 rounded-md">
            <div className="space-y-2">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Agency</h2>
              <h3 className="text-xl text-yellow-200">
                $159<span className="text-sm text-white">/Month</span>
              </h3>
            </div>
            {agency.map((dets, index) => (
              <div key={index}>
                <p className="text-white">{dets.details}</p>
              </div>
              
            ))}
            <button className="bg-red-600 rounded-lg hover:text-white text-white px-3 py-2">START FREE TRIAL</button>
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-blue-600 p-6 w-64 text-center space-y-3 rounded-md">
            <div className="space-y-2">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Enterprise</h2>
              <h3 className="text-xl text-orange-500">
                $499<span className="text-sm text-white">/Month</span>
              </h3>
            </div>
            {enterprise.map((dets, index) => (
              <div key={index}>
                <p className="text-white">{dets.details}</p>
              </div>
              
            ))}
            <button className="bg-orange-500 rounded-lg hover:text-white text-black px-3 py-2">START FREE TRIAL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
