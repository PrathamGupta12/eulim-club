import { motion } from "framer-motion";
import BentoGallery from "./BentoGallery";
import "../styles/PhotoCollage.css";

export default function PhotoCollage() {
  return (
    <section id="photo-collage" className="collage-section">
      <div className="collage-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="collage-header"
        >
          <span className="collage-badge">
            Gallery
          </span>
          <h2 className="collage-title">
            Moments Captured
          </h2>
          <p className="collage-description">
            A glimpse into the vibrant life of EULIM Science Club — from lab
            experiments to science fairs and beyond.
          </p>
        </motion.div>

        <BentoGallery items={placeholders} />
      </div>
    </section>
  );
}

const placeholders = [
  { span: "md:col-span-2 md:row-span-2", label: "Club Event Photo 1" },
  { span: "", label: "Lab Session" },
  { span: "", label: "Science Fair" },
  { span: "md:col-span-2", label: "Group Photo" },
  { span: "", label: "Workshop" },
  { span: "", label: "Field Trip" },
  { span: "md:col-span-2", label: "Award Ceremony" },
  { span: "", label: "Club Meeting" },
];
