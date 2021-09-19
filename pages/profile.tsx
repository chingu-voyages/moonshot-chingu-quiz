import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import styled from "styled-components";
import { getUserData } from "~/db/users";
import { UserData } from "~/models/user";
import { Headline, Wrapper } from "../components/aboutUs/styles";
import { ContentWrapper } from "../components/quizSingle/styles";
import { ScoreGraphCore } from "../components/quizSingle/ScoreGraph";

const QuizResultListItem = styled.li`
  border: 1px dotted #ccc;
  margin: 8px 0px;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin: 0px;
  }

  & > div {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 100px;
  }
  h3 {
    font-weight: bold;
    margin: 12px 0;
  }
  p {
    margin: 12px 0;
    line-height: 1.4rem;
  }

  align-items: center;

  padding: 12px;

  footer {
    font-style: italic;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.8);
    margin: 8px 0;
  }
`;

const QuizResultList = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 12px;
    row-gap: 12px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProfilePage = ({ userData }: { userData: UserData | null }) => {
  return (
    <Wrapper>
      <ContentWrapper style={{ color: "black" }}>
        <Headline>Your Quiz Results</Headline>

        <QuizResultList>
          {userData?.quizResults?.map(result => {
            const percentCorrect =
              (100 * result.numberCorrect) / result.totalQuestions;

            return (
              <QuizResultListItem key={result.date}>
                <div>
                  <div>
                    <h3>{result.name}</h3>
                    <p>
                      You got {result.numberCorrect} out of{" "}
                      {result.totalQuestions} correct in{" "}
                      {result.secondsToComplete} seconds!
                    </p>
                  </div>

                  <ScoreGraphCore percentage={Math.round(percentCorrect)} />
                </div>

                <footer>Taken {result.date}</footer>
              </QuizResultListItem>
            );
          })}
        </QuizResultList>
      </ContentWrapper>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      props: {},
      notFound: true,
    };
  }

  const userData = await getUserData(session.user?.email as string);

  return {
    props: {
      userData,
    },
  };
};

export default ProfilePage;
