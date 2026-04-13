import PageLayout from "@/components/PageLayout";
import ActivitiesSection from "@/components/ActivitiesSection";
import SpecialEvents from "@/components/SpecialEvents";

const Activities = () => (
  <PageLayout>
    <div className="page-pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <SpecialEvents />
      </div>
      <ActivitiesSection />
    </div>
  </PageLayout>
);

export default Activities;
