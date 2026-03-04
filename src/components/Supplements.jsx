import React from "react";

// Import supplement images
import whey from "../assets/whey.jpg";
import massGainer from "../assets/massgainer.jpg";
import creatine from "../assets/creatine.jpg";
import preWorkout from "../assets/preworkout.jpg";
import bcaas from "../assets/bcaas.jpg";
import omega3 from "../assets/omega3.jpg";

const supplementsList = [
  {
    name: "Whey Isolate",
    price: "Rs 3999",
    image: whey,
  },
  {
    name: "Mass Gainer",
    price: "Rs 999",
    image: massGainer,
  },
  {
    name: "Creatine",
    price: "Rs 299",
    image: creatine,
  },
  {
    name: "Pre-Workout",
    price: "Rs 499",
    image: preWorkout,
  },
  {
    name: "BCAAs",
    price: "Rs 199",
    image: bcaas,
  },
  {
    name: "Omega-3",
    price: "Rs 799",
    image: omega3,
  },
];

const Supplements = () => {
  return (
    <section id="supplements" className="py-24 px-6 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-primary mb-16">
          FUEL FOR WARRIORS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {supplementsList.map((s) => (
            <div
              key={s.name}
              className="bg-card p-8 rounded-2xl hover:-translate-y-4 transition shadow-2xl group"
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-56 object-cover rounded-xl mb-6 group-hover:scale-105 transition duration-300"
              />

              <h3 className="text-2xl font-bold">{s.name}</h3>
              <p className="text-primary text-3xl font-black mt-4">
                {s.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supplements;