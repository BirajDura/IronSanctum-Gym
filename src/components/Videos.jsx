import React from 'react'

const Videos = () => {
  return (
      <section id="videos" className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-16">WATCH & LEARN</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              'https://www.youtube.com/embed/IODxDxX7oi4',
              'https://www.youtube.com/embed/3p8EBPVZ2Iw',
            ].map((link, i) => (
              <div key={i} className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
                <iframe className="absolute inset-0 w-full h-full" src={link} title="workout" allowFullScreen></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Videos
