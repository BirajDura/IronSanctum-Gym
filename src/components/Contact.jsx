import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-10">JOIN US</h2>
            <p className="text-2xl space-y-4">
              <span className="block">📍 Pokhara, Khasi Bazar - Nepal</span>
              <span className="block">📞 +977 9800000001</span>
              <span className="block">✉️ info@ironsanctum.in</span>
              <span className="block">🕒 7 AM – 8 PM</span>
            </p>
          </div>
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full p-5 bg-card rounded-xl text-xl" required />
            <input type="email" placeholder="Email" className="w-full p-5 bg-card rounded-xl text-xl" required />
            <textarea placeholder="Message" rows="6" className="w-full p-5 bg-card rounded-xl text-xl" required></textarea>
            <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 rounded-xl text-2xl transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
  )
}

export default Contact
