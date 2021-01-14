import React, { useEffect } from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
  ServicesContainer,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1
          data-aos="fade-up"
          data-aos-anchor-placement="services"
          data-aos-once>
          Why use us?
        </ServicesH1>
        <ServicesWrapper
          data-aos="fade-up"
          data-aos-anchor-placement="services"
          data-aos-once>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Tamper Proof</ServicesH2>
            <ServicesP>
              Connect highly accurate and available data/APIs to any smart
              contract.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Seamless Connection</ServicesH2>
            <ServicesP>
              Build on a flexible framework that can retrieve data from any API.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Transparent Computation</ServicesH2>
            <ServicesP>
              Independently monitor and verify Chainlink’s open-source code.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
