import styled from "styled-components";
import { Footer } from "../../components/footer";
import { ReviewsSection } from "./reviewSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomePage = (props) => {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </PageContainer> 
  );
}
 