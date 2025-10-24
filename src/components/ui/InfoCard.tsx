//components//ui//InfoCard.tsx

import Image from "next/image";
import "./InfoCard.scss"

interface InfoCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ image, title, description, link }) => {
  console.log(link);
  
  return (
    <div className="info_card">
      <div className="image_container">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={250}
          className="card_image"
        />
      </div>
      <div className="info_content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* {link && ( */}
          <button className="read_more">
            Read More
          </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default InfoCard;
