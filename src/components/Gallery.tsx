import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import gallery images
import galleryWelding from '@/assets/gallery-welding.jpg';
import galleryPipes from '@/assets/gallery-pipes.jpg';
import galleryConstruction from '@/assets/gallery-construction.jpg';
import galleryTesting from '@/assets/gallery-testing.jpg';
import galleryShipWork from '@/assets/gallery-ship-work.jpg';

const galleryImages = [
  {
    src: galleryWelding,
    title: 'Profesjonalne spawanie TIG/MAG',
    description: 'Spawanie rur ze stali kwasoodpornej z zastosowaniem technologii TIG',
  },
  {
    src: galleryPipes,
    title: 'Instalacje rurowe w maszynowni',
    description: 'Kompleksowe systemy rurociągów z armaturą przemysłową',
  },
  {
    src: galleryConstruction,
    title: 'Prefabrykacja konstrukcji stalowych',
    description: 'Warsztat prefabrykacji elementów stalowych o wysokiej precyzji',
  },
  {
    src: galleryTesting,
    title: 'Testy ciśnieniowe instalacji',
    description: 'Profesjonalne urządzenia do prób szczelności systemów rurowych',
  },
  {
    src: galleryShipWork,
    title: 'Montaż na jednostkach pływających',
    description: 'Zespół monterski podczas instalacji systemów na statku',
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item group"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="gallery-overlay group-hover:opacity-100">
              <div className="text-white">
                <h4 className="font-montserrat font-semibold text-lg mb-2">
                  {image.title}
                </h4>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-5xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Zamknij lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image info */}
            <div
              className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-sm opacity-90">
                {galleryImages[selectedImage].description}
              </p>
              <p className="text-xs opacity-70 mt-2">
                {selectedImage + 1} z {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};