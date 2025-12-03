import React from 'react'

const ParentTestimonialSection = () => {
  return (
    <section className="relative overflow-hidden section bg-white">

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 font-heading md:text-4xl">
              Trusted by Parents Across Ghana
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="p-6 transition-transform border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-gray-200 border-2 border-white rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-gray-900">Parent Name</div>
                    <div className="text-sm text-gray-500">Location</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default ParentTestimonialSection