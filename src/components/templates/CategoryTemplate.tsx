//components/templates//CategoryTemplate/tsx
import Image from "next/image";
import "./CategoryTemplate.scss";
import InfoCard from "../ui/InfoCard";

interface InfoItem {
  image: string;
  title: string;
  description: string;
}

interface StatItem {
  icon: string;
  label: string;
}

interface CategoryTemplateProps {
  title: string;
  bannerImage?: string;
  stats?: StatItem[];
  infoList?: InfoItem[];
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
  title,
  stats,
  infoList,
}) => {
  return (
    <main className="category_page">
      {/* Banner Section */}
      <section className="category_banner">
        {/* {bannerImage && (
          <Image
            src={bannerImage}
            alt={`${title} banner`}
            width={1600}
            height={600}
            className="banner_img"
            priority
          />
        )} */}
        <div className="banner_overlay">
          <h1>{title}</h1>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <section className="category_stats wrapper_section">
          {stats.map((item, i) => (
            <div key={i} className="stat_card">
              <Image src={item.icon} alt={item.label} width={50} height={50} />
              <p>{item.label}</p>
            </div>
          ))}
        </section>
      )}

      {/* Info Cards Section */}
      {infoList && infoList.length > 0 && (
        <section className="category_cards wrapper_section">
          <div className="cards_grid">
            {infoList.map((item, i) => (
              <InfoCard key={i} {...item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default CategoryTemplate;
