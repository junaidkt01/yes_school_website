import CategoryTemplate from "@/components/templates/CategoryTemplate";
import { categoryData } from "@/utils/categoryData";



export default function HumanePage() {
  return <CategoryTemplate {...categoryData.humane} />;
}
