import { legal, partner, help } from "../data.js/data";

const Footer = () => {
  return (
    <footer className="pt-5 bg-stone-900">
      <div className="grid sm:grid-cols-3 grid-cols-2 px-6">
        <div className="py-2">
          <h2 className="text-white  text-lg">LEGAL</h2>
          {legal.map((dets, index) => (
            <ul key={index}>
              <li>
                <a className="text-red-500" href={dets.href}>
                  {dets.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="py-2">
          <h2 className="text-white text-lg">PARTNER</h2>
          {partner.map((dets, index) => (
            <ul key={index}>
              <li>
                <a className="text-red-500" href={dets.href}>
                  {dets.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="py-2">
          <h2 className="text-white text-lg">HELP</h2>
          {help.map((dets, index) => (
            <ul key={index}>
              <li>
                <a className="text-red-500" href={dets.href}>
                  {dets.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
