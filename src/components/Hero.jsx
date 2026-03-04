function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070')] bg-cover bg-center flex items-center justify-center text-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-2xl md:text-5xl font-black mb-6 leading-tight">
          ENTER THE<br />IRON SANCTUM
        </h1>
        <p className="text-2xl md:text-4xl mb-10 font-light">
          Where Legends Are Forged
        </p>
        <button className="bg-primary hover:bg-red-700 text-white font-bold py-5 px-14 rounded text-2xl transition transform hover:scale-105">
          JOIN THE SANCTUM
        </button>
      </div>
    </section>
  );
}

export default Hero;