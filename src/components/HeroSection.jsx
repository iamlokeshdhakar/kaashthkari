import React from "react";
import "../styles/herosection.css";
import img from "../../public/shankar.jpeg";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="first-hero">
        <div className="first-img">
          <Image src={img} width={500} />
        </div>

        <div className="image-text">
          <h1 className="image-text-h1">MEET THE ARTISANS</h1>
          <p className="image-text-p">
            Varanasi is known for its rich tradition of wood carving, which is
            an art form that has been practiced for many years. The craftsmen of
            Varanasi are highly skilled and create beautiful, intricate wood
            carvings that are often used in furniture, sculptures, decorative
            items, and architectural features. These artisans come from families
            with a long history in the craft, and they pass down their knowledge
            and practices from one generation to the next, ensuring that this
            traditional art form continues to thrive.
          </p>
        </div>
      </div>

      <div className="first-hero-img">
        <div className="imgs"></div>
        <div className="imgs"></div>
      </div>

      {/* colage */}
      <div className="second-hero">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
          numquam inventore. Assumenda itaque harum soluta fuga recusandae
          veritatis ab. Recusandae fugiat accusantium, adipisci odio optio
          corporis obcaecati nemo ratione tenetur?
        </p>

        <div className="second-hero-text">
          <p>
            In recent years, the craft industry has faced difficulties due to
            the introduction of modern manufacturing techniques and changing
            consumer preferences. The COVID-19 pandemic has also had a
            significant impact on the export market, resulting in fewer
            opportunities for the growth of the craft. Despite these challenges,
            efforts have been made by the government and cultural organizations
            to encourage and preserve this unique art form. However, many
            artisans are unaware of these initiatives and are often exploited.
          </p>
        </div>
      </div>

      {/* Govenrment Scheme */}
      <div className="third-hero">
        <h1>GOVERNMENT SCHEMES</h1>
        <div>
          <div className="third-text">
            <Image src={img} width={250} />
            <p>
              Over the years, the Government has employed various schemes to
              help the Artisans of Uttar Pradesh grow and showcase their art to
              the public. One such scheme is ODOP, (One District One Product),
              which promotes specific goods from each district in Uttar Pradesh.
              It seeks to encourage local craftsmen and businesses in
              traditional crafts and industries by offering financial help,
              marketing assistance, and infrastructural development. The
              artisans can register for and avail these schemes at the District
              Industries Center.
            </p>
          </div>
        </div>
      </div>

      <div className="gif"></div>
    </div>
  );
};

export default HeroSection;
