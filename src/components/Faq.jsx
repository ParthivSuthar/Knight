import { faq } from "../data.js/data"

const Faq = () => {
  return (
    <section className="pt-12">
        <div className="flex flex-col">
            <div className="mx-auto space-y-2">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-center text-lg">Answers to most common questions.</p>
            </div>
            <div className="py-10 mx-auto">
                <div className="grid sm:grid-cols-2 sm:px-12 gap-5 place-items-center">
                    {faq.map((dets, index) => (
                        <div className="bg-slate-900 rounded-lg p-4 space-y-2 border" key={index}>
                            <h3 className="text-xl text-white">{dets.que}</h3>
                            <p className="text-gray-400">{dets.ans}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq