import React from "react";
import styled from "styled-components";
import { breakpoint } from "../frontend-config";
import PageHeader from "../components/shared/PageHeader";

const Headline = styled.h3`
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 12px;
  margin-top: 30px;
`;

const Section = styled.div`
  padding: 35px 75px 38px;
  line-height: 1.5em;

  @media (min-width: ${breakpoint("lg")}) {
    padding: 40px 75px 62px;
  }
`;

export default function DataPrivacy() {
  return (
    <>
      <PageHeader>Data Privacy</PageHeader>
      <Section>
        <Headline>1. Privacy Notice</Headline>
        <p>
          This privacy notice discloses the privacy practices for our website.
          This privacy notice applies solely to information collected by this
          website. It will notify you of the following:
        </p>

        <p>
          What personally identifiable information is collected from you through
          the website, how it is used and with whom it may be shared. What
          choices are available to you regarding the use of your data. The
          security procedures in place to protect the misuse of your
          information. How you can correct any inaccuracies in the information.
        </p>

        <Headline>2. Information Collection, Use, and Sharing</Headline>
        <p>
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you.
        </p>

        <p>
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfill
          requests from you, and we will not sell your information to anyone.
        </p>

        <br />

        <p>
          If you you have questions about this privacy policy contact us at{" "}
          <a href="mailto:support@chingu.io">support@chingu.io</a>
        </p>
      </Section>
    </>
  );
}
