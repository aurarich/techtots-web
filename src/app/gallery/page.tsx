import HeaderTag from '@/components/ui/header-tag';

export default function GalleryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden section bg-gradient-to-b from-[#F5F5DC]/30 to-[#0EA5E9]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#F5F5DC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#0EA5E9]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F5F5DC]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#0EA5E9]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 pt-12">
            <HeaderTag title="A view of our projects and resources" />
            <h1 className="mb-8 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Our Gallery
            </h1>
            <p className="mb-12 text-xl text-gray-600">
              Take a visual journey through our vibrant learning spaces, happy children, and engaging activities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative overflow-hidden section bg-gradient-to-b from-[#0EA5E9]/10 to-[#F5F5DC]/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#0EA5E9]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F5F5DC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Learning Spaces */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 font-heading">Learning Spaces</h2>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1742995782977-ee4b53fecadb?q=80&w=2670&auto=format&fit=crop"
                    alt="Digital Learning Hub"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Digital Learning Hub</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop"
                    alt="Reading Corner"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Reading Corner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play & Recreation */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 font-heading">Play & Recreation</h2>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="https://images.unsplash.com/photo-1715775491904-ef5cdae40f0f?q=80&w=1335&auto=format&fit=crop"
                    alt="Nature Playground"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Nature Playground</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2670&auto=format&fit=crop"
                    alt="Music Studio"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Music & Movement Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities & Events */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 font-heading">Activities & Events</h2>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
                    alt="STEM Activity"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">STEM Activities</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2670&auto=format&fit=crop"
                    alt="Cultural Celebration"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Cultural Celebrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-900 font-heading">Watch Our Story</h2>
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="TechTots Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 