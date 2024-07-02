import { blogs } from "../data.js/data"

const Blogs = () => {
  return (
    <section className="pt-12">
        <div className="flex flex-col">
            <div className="mx-auto space-y-2 text-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">News from Knight</h2>
                <p className="text-gray-400 text-lg">What's new at Knight</p>
            </div>
            <div className="pt-10">
                <div className="grid sm:grid-cols-3 place-items-center gap-5">
                    {blogs.map((dets, index) => (
                        <div className="max-w-md bg-slate-950 border rounded-lg" key={index}>
                            <img src={dets.image} alt="images" />
                            <div className="py-2 space-y-4 text-center">
                            <h3 className="text-white text-xl">{dets.title}</h3>
                            <span className="text-gray-300">{dets.date}</span>
                            <p className="text-red-200">{dets.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </section>
  )
}

export default Blogs