//app/educational/page.tsx//

import CategoryTemplate from "@/components/templates/CategoryTemplate";
import { categoryData } from "@/utils/categoryData";

export default function EducationalPage() {
  return <CategoryTemplate {...categoryData.educational} />;
}