import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import styled from "styled-components";
import { getUserData } from "~/db/users";
import { UserData } from "~/models/user";
import { Headline, Wrapper } from "../components/aboutUs/styles";
import { ContentWrapper } from "../components/quizSingle/styles";
import {ScoreGraphCore} from '../components/quizSingle/ScoreGraph';

const QuizResultListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr;
  margin: 12px 0;
`;

const QuizResultHeaderItem = styled(QuizResultListItem)`
  font-weight: bold;
`;

const ProfilePage = ({ userData }: { userData: UserData | null }) => {
  return (
    <Wrapper>
      <ContentWrapper style={{ color: "black" }}>
        <Headline>User Page</Headline>

        <ul>
          <QuizResultHeaderItem>
            <div>Date</div>
            <div>Name</div>
            <div>Correct</div>
            <div>Total</div>
            <div>Seconds</div>
            <div>Percent</div>
          </QuizResultHeaderItem>
          {userData?.quizResults?.map(result => {
            const percentCorrect = (100 * result.numberCorrect) / result.totalQuestions;
    
            return (
              <QuizResultListItem key={result.date}>
                <div>{result.date}</div>
                <div>{result.name}</div>
                <div>{result.numberCorrect}</div>
                <div>{result.totalQuestions}</div>
                <div>{result.secondsToComplete}</div>
                <ScoreGraphCore percentage={Math.round(percentCorrect)} />
                  
              </QuizResultListItem>
            );
          })}
        </ul>
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
