import { features } from "../data.js/data"

const Features = () => {
  return (
    <section>
        <div className="flex flex-col">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">Knight offers everything you need.</h2>
                <p className="text-white max-w-lg py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a, vestibulum nibh.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-y-6 py-6 px-9 place-items-center">
                {features.map((feature, index) => (
                    <div className="bg-slate-700 sm:max-w-md px-4 py-6 space-y-3 rounded-md hover:scale-110 transform transition duration-500" key={index}>
                        <h3 className="text-white text-xl">{feature.msgTitle}</h3>
                        <p className="text-slate-400">{feature.msgDesc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features