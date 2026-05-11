import React, { useEffect } from "react";

function SectionOne() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = Array.from(document.querySelectorAll('[data-animate]'));
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const idx = els.indexOf(el);
            el.style.transitionDelay = `${idx * 80}ms`;
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <>
        {/* Hero Section */}
        <section data-animate className="relative py-16 px-6 text-center mt-5">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 contact-glow-text">
            We Are Here{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              For You
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Contact the Electeo Zone team and we'll be happy to assist you.
          </p>
        </section>
        {/* Main Content Grid */}
        <main className="flex-grow container mx-auto px-6 lg:px-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6 lg:col-span-1">
              <div data-animate className="contact-glass-card p-6 rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition duration-300 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 text-xl mb-4 border border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition duration-300">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h3 className="text-xl font-bold mb-2">Company headquarters</h3>
                <p className="text-slate-400">
                  EGYPT , Mansoura
                  <br />
                  Mansoura
                </p>
              </div>
              <div data-animate className="contact-glass-card p-6 rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition duration-300 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 text-xl mb-4 border border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition duration-300">
                  <i className="fas fa-phone-alt" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contact us</h3>
                <p className="text-slate-400 mb-1 text-sm">
                  Available from 9 am to 6 pm
                </p>
                <a
                  href="tel:+201027327960"
                  className="text-cyan-400 font-semibold hover:text-cyan-300 text-lg tracking-wider"
                  dir="ltr"
                >
                  +20 1027327960
                </a>
              </div>
              <div data-animate className="contact-glass-card p-6 rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition duration-300 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 text-xl mb-4 border border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition duration-300">
                  <i className="fas fa-envelope" />
                </div>
                <h3 className="text-xl font-bold mb-2">E-Mail</h3>
                <a
                  href="electrozone@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition break-all"
                >
                  electrozone@gmail.com
                </a>
              </div>
            </div>
            {/* Contact Form */}
            <div data-animate className="lg:col-span-2 contact-glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                Send Us A Message
                <i className="fas fa-paper-plane text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
              </h2>
              <form
                id="contact-page-form"
                onsubmit="contactHandleSubmit(event)"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-base font-semibold text-cyan-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required=""
                      placeholder="Enter your full name"
                      className="w-full rounded-xl px-4 py-3 contact-input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-base font-semibold text-cyan-300 mb-3">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      required=""
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl px-4 py-3 contact-input-field"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-base font-semibold text-cyan-300 mb-3">
                    Message subject
                  </label>
                  <select className="w-full rounded-xl px-4 py-3 contact-input-field cursor-pointer">
                    <option className="bg-slate-900">General inquiry</option>
                    <option className="bg-slate-900">Technical support</option>
                    <option className="bg-slate-900">Request a quote</option>
                    <option className="bg-slate-900">
                      Complaints and suggestions
                    </option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-base font-semibold text-cyan-300 mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required=""
                    placeholder="Write the details of your message here..."
                    className="w-full rounded-xl px-4 py-3 contact-input-field resize-none"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-[0_0_20px_rgba(8,145,178,0.4)] flex items-center justify-center gap-2 border border-cyan-400/20"
                >
                  <span>Send message</span>
                  <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1" />
                </button>
              </form>
            </div>
          </div>
          {/* Map Section */}
          <div data-animate className="mt-16 rounded-3xl overflow-hidden contact-glass-card p-2 shadow-2xl h-[400px] relative grayscale hover:grayscale-0 transition duration-500">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                title="El Mansoura map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218751.71630754665!2d31.28670629898251!3d31.05422294659987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7777bfe771703%3A0xd1aa28f76e87bc34!2sEl%20Mansoura%2C%20Dakahlia%20Governorate!5e0!3m2!1sen!2seg!4v1763727285957!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700 text-sm text-cyan-400 shadow-lg">
              📍Our location on the map
            </div>
          </div>
        </main>
      </>
    </div>
  );
}

export default SectionOne;
