import React from "react";
import styled from "styled-components";
import { breakpoint } from "~/frontend-config";

const Article = styled.article`
  display: grid;
  place-items: center center;
  line-height: 24px;

  a {
    color: ${props => props.theme.colors.link};
  }
`;

const BigList = styled.ol`
  max-width: 1000px;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.grey};
  padding: 0 10px;
  margin: 0 0 64px 0;

  @media (min-width: ${breakpoint("md")}) {
    padding: 0;
  }
`;

const BigItem = styled.li`
  padding: 16px 0;
  list-style-type: none;
  list-style-position: inside;
`;

const ItemTitle = styled.h3`
  display: inline-block;
  font-size: 31px;
  font-weight: bold;
  margin: 16px 0;
`;

const ItemContent = styled.div`
  font-size: 18px;
  margin: 18px 32px;
  font-weight: normal;

  ol li {
    list-style-type: decimal;
    list-style-position: inside;
  }
`;

const CodeBlock = styled.code`
  white-space: pre-wrap;
  display: inline-block;
  background: ${props => props.theme.colors.lightGrey};
  background: #ebeff3; /* props.theme.colors.lightGrey is currently #ccc - outside of design spec */
  padding: 8px 24px;
  margin: 16px 0;
`;

const issuesLink = (
  <a
    href="https://github.com/chingu-voyages/moonshot-chingu-quiz/issues"
    rel="noreferrer noopener"
    target="_blank"
  >
    issue
  </a>
);

const repoLink = (
  <a
    href="https://github.com/chingu-voyages/moonshot-chingu-quiz"
    rel="noreferrer noopener"
    target="_blank"
  >
    repository
  </a>
);

const linkingAPRToIssueLink = (
  <a
    href="https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue"
    rel="noreferrer noopener"
    target="_blank"
  >
    here
  </a>
);

const branchOverview = `- master (protected)
- dev (protected)
- documentation
- feature
-- feature/FEATURE-NAME
--- feature/#<Issue Number>_<little feature title>
--- feature/#<Issue Number>_<little feature title>
--- feature/#<Issue Number>_<little feature title>
- bugfix (fixing issues that are not urgent)
- hotfix (fixing issues that need to be merged ASAP)
`;

const pRExamplePattern = `<subject> (A title to summarise what this is about)

<body> (A detailed description of your PR, feature idea or issue)

Resolves #ISSUE_NUMBER`;

const InfoSection = () => {
  return (
    <Article>
      <BigList>
        <BigItem>
          <ItemTitle>
            {/* eslint-disable-next-line */}
            Choose an {issuesLink}
          </ItemTitle>
          <ItemContent>
            <p>
              To get started, please feel free to start working on any issues we
              have created and that are not assigned to anyone yet. If you would
              like to pick up an issue, please leave a comment for the other
              contributors to see that this issue is already be worked on.
            </p>
            <p>
              For starters, we recommend to pick up issues labelled good first
              issue.
            </p>
          </ItemContent>
        </BigItem>
        <BigItem>
          <ItemTitle>Get setup</ItemTitle>
          <ItemContent>
            <ol>
              <li>
                {/* eslint-disable-next-line */}
                Fork the {repoLink}
              </li>
              <li>Clone your forked repository onto your local machine</li>
              <li>
                inside your CLI (Command Line Interface), move into your working
                directory
              </li>
              <li>
                run `npm ci` inside the root, client *and* server folder to
                install all dependencies needed for this project
              </li>
              <li>
                inside the client folder, run `npm run dev` to start the
                development server
              </li>
            </ol>
          </ItemContent>
        </BigItem>
        <BigItem>
          <ItemTitle>Create a branch for your feature</ItemTitle>
          <ItemContent>
            <p>Below you can find an overview of the branches we are using.</p>
            <CodeBlock>{branchOverview}</CodeBlock>
            <p>An example for a ToDo list feature could look as following:</p>
            <CodeBlock>-- feature/#1_todo-list</CodeBlock>
          </ItemContent>
        </BigItem>
        <BigItem>
          <ItemTitle>Add your code</ItemTitle>
        </BigItem>
        <BigItem>
          <ItemTitle>Create a Pull Request</ItemTitle>
          <ItemContent>
            <p>
              For consistency and easier readability, we would like to ask
              everyone to use the templates for Pull Requests and Issues that we
              provide. They follow this pattern:
            </p>
            <CodeBlock>{pRExamplePattern}</CodeBlock>
            <p>
              Note: It is important to add the #number for the issue the PR is
              resolving in order to close the issue accordingly once the PR gets
              {/* eslint-disable-next-line */}
              merged. You can read more about this {linkingAPRToIssueLink}
            </p>
          </ItemContent>
        </BigItem>
      </BigList>
    </Article>
  );
};

export default InfoSection;
