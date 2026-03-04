import React from "react";

// Import images
import hammerStrength from "../assets/hammerstrength.jpg";
import rogueRacks from "../assets/rogueracks.jpg";
import eleikoBarbells from "../assets/eleikobarbells.jpg";
import technoGym from "../assets/technogym.jpg";
import lifeFitness from "../assets/lifefitness.jpg";
import concept2Rowers from "../assets/concept2rowers.jpg";

const equipmentList = [
  {
    name: "Hammer Strength",
    image: hammerStrength
  },
  {
    name: "Rogue Racks",
    image: rogueRacks
  },
  {
    name: "Eleiko Barbells",
    image: eleikoBarbells
  },
  {
    name: "Technogym",
    image: technoGym
  },
  {
    name: "Life Fitness",
    image: lifeFitness
  },
  {
    name: "Concept2 Rowers",
    image: concept2Rowers
  }
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-primary mb-16">
          TEMPLE OF IRON
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {equipmentList.map((eq) => (
            <div
              key={eq.name}
              className="bg-card p-8 rounded-2xl hover:-translate-y-4 transition shadow-2xl"
            >
              <img
                src={eq.image}
                alt={eq.name}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <p className="text-2xl font-bold">{eq.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;