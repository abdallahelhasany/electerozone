import React from "react";

function SectionTwo() {
  return (
    <div>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="project-card rounded-lg overflow-hidden ">
              <img
                src="https://placehold.co/600x400/000000/0084ff?text=Project+1"
                alt="Project 1 Screenshot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Name One</h3>
                <p className="themed-text-muted mb-4">
                  A brief description of the project and its main goals. It
                  could be an e-commerce store, a CMS, or an interactive web
                  app.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 spanss">
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    React
                  </span>
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    Node.js
                  </span>
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    MongoDB
                  </span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#0084ff] hover:text-[#ff9100] flex items-center gap-2"
                  >
                    <i data-lucide="github" />
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#0084ff] hover:text-[#ff9100] flex items-center gap-2"
                  >
                    <i data-lucide="external-link" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400/000000/0084ff?text=Project+2"
                alt="Project 2 Screenshot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Name Two</h3>
                <p className="themed-text-muted mb-4">
                  A brief description of the project and its main goals. It
                  could be an e-commerce store, a CMS, or an interactive web
                  app.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 spanss">
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    Vue.js
                  </span>
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    Laravel
                  </span>
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    MySQL
                  </span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#0084ff] hover:text-[#ff9100] flex items-center gap-2"
                  >
                    <i data-lucide="github" />
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#0084ff] hover:text-[#ff9100] flex items-center gap-2"
                  >
                    <i data-lucide="external-link" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400/000000/0084ff?text=Project+3"
                alt="Project 3 Screenshot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Name Three</h3>
                <p className="themed-text-muted mb-4">
                  A brief description of the project and its main goals. It
                  could be an e-commerce store, a CMS, or an interactive web
                  app.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 spanss">
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    Next.js
                  </span>
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    GraphQL
                  </span>
                  <span className="text-xs bg-blue-100 text-[#0084ff] px-2 py-1 rounded-md">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#0084ff] hover:text-[#ff9100] flex items-center gap-2"
                  >
                    <i data-lucide="github" />
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-[#0084ff] hover:text-[#ff9100] flex items-center gap-2"
                  >
                    <i data-lucide="external-link" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
