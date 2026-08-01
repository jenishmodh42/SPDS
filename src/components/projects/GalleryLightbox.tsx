import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

interface GalleryLightboxProps {
  open: boolean;
  close: () => void;
  slides: { src: string; title?: string; description?: string }[];
  index: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  open,
  close,
  slides,
  index,
}) => {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      plugins={[Zoom, Thumbnails, Captions]}
      zoom={{ maxZoomPixelRatio: 3 }}
      styles={{
        container: { backgroundColor: 'rgba(8, 8, 8, 0.96)' },
      }}
    />
  );
};
