import HeaderTag from '@/components/ui/header-tag';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Take a visual journey through our vibrant learning spaces, happy children, and engaging activities at TechTots International School.',
};

export default function GalleryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden section bg-gradient-to-b from-[#F5F5DC]/30 to-[#0EA5E9]/10">
        
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
                    src="/images/learningspace2.jpeg"
                    alt="Our Class Rooms"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Our Class Rooms</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="/images/learnigspace1.jpeg"
                    alt="Reading Corner"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Learning & Play Resources</p>
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
                    src="/images/playground2.jpeg"
                    alt="Football Pitch"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Football Pitch</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="/images/playground.jpeg"
                    alt="Basketball Court."
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Basketball Court.</p>
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
                    src="/images/activity2.jpeg"
                    alt="My First Day at School – I am a TechTot"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">My First Day at School – I am a TechTot!</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video group">
                  <img
                    src="/images/activity3.jpeg"
                    alt="Explorers Cove"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">Explorers Cove</p>
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