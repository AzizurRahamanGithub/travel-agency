export function Footer() {
  return (
    <footer className="container mx-auto px-6 py-24 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-16 border-b border-black/10 pb-20">
        <div>
          <h4 className="text-lg font-medium mb-6">CPF Newsletter</h4>
          <div className="flex border-b border-black/20">
            <input placeholder="Enter email" className="bg-transparent py-2 flex-1 outline-none text-sm" />
            <button className="px-6 py-2 bg-[#2D472C] text-white rounded-t-lg text-[10px] font-bold uppercase tracking-widest">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <ul className="space-y-2 text-black/60">
            <li className="font-bold text-black mb-4">Studio</li>
            <li>
              <a href="#" className="hover:text-black">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Privacy
              </a>
            </li>
          </ul>
          <ul className="space-y-2 text-black/60">
            <li className="font-bold text-black mb-4">Connect</li>
            <li>
              <a href="#" className="hover:text-black">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                LinkedIn Nikolaus
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                LinkedIn Sara
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-end items-end">
          <p className="text-[10px] font-bold uppercase tracking-widest text-right max-w-[200px] leading-relaxed">
            CASA PORTUFORNIA, DEDICATED TO CREATIVITY, CULTURE & GROWTH.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-[28vw] leading-none font-serif text-[#2D472C] text-center tracking-tighter pointer-events-none select-none">
          CPF
        </h1>
      </div>

      <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-black/40 mt-12">
        <span>2024 ALL RIGHT RESERVED.</span>
        <span>DESIGNED BY CLOSET CREATIONS STUDIO</span>
      </div>
    </footer>
  )
}
