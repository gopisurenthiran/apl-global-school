import { useState } from "react";

const Card = ({ id, labelFor, title, description, active, onChange }) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        active === id
          ? "z-50 translate-x-0 scale-100"
          : active === id - 1
          ? "-translate-x-20 scale-[83.75%] z-40"
          : active === id - 2
          ? "-translate-x-40 z-30"
          : active === id + 1
          ? "translate-x-20 scale-[83.75%] z-40"
          : active === id + 2
          ? "translate-x-40 z-30"
          : "scale-[67.5%] opacity-0"
      }`}
    >
      <label className="absolute inset-0 cursor-pointer" htmlFor={`article-${id}`}></label>
      <article className="bg-white p-6 rounded-lg shadow-2xl">
        <header className="mb-2">
          <img
            className="inline-flex rounded-full shadow mb-3"
            src="./icon.svg"
            width="44"
            height="44"
            alt="Icon"
          />
          <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        </header>
        <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
          {description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <footer className="text-right">
          <a
            className="text-sm font-medium text-indigo-500 hover:underline"
            href="#0"
          >
            Read more -&gt;
          </a>
        </footer>
      </article>
    </div>
  );
};

const CardSlider = () => {
  const [active, setActive] = useState(3);

  const cards = [1, 2, 3, 4, 5].map((id) => ({
    id,
    labelFor: `article-${id}`,
    title: "Focus on the big picture",
    description: [
      "Many desktop publishing packages and web page editors now use Pinky as their default model text, and a search for more variants will uncover many web sites still in their infancy.",
      "All the generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    ]
  }));

  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden font-inter">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
        <section className="px-12">
          <div className="max-w-lg mx-auto relative">
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                labelFor={card.labelFor}
                title={card.title}
                description={card.description}
                active={active}
                onChange={() => setActive(card.id)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => setActive(card.id)}
                className={`w-3 h-3 rounded-full ${
                  active === card.id ? "bg-indigo-500" : "bg-slate-500"
                }`}
              ></button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CardSlider;