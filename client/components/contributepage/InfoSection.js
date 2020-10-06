import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: grid;
  place-items: center center;
  line-height: 24px;
  a {
    color: blue;
  }
`;

const BigList = styled.ol`
  max-width: 1000px;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.grey};
  margin: 64px 0;
`;

const BigItem = styled.li`
  padding: 16px 0;
  margin-left: 31px;
  font-size: 31px;
  font-weight: bold;
  list-style-type: decimal;
`;

const ItemTitle = styled.h3`
  font-weight: bold;
  margin: 16px;
`;

const ItemContent = styled.div`
  font-size: 18px;
  margin: 18px;
  font-weight: normal;
  ol li {
    margin-left: 18px;
    list-style-type: decimal;
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

const InfoSection = () => {
  return (
    <Article>
      <BigList>
        <BigItem>
          <ItemTitle>
            Choose an{" "}
            <a
              href="https://github.com/chingu-voyages/moonshot-chingu-quiz/issues"
              rel="noreferrer noopener"
              target="_blank"
            >
              issue
            </a>
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
          <ItemTitle>Get yourself setup</ItemTitle>
          <ItemContent>
            <ol>
              <li>Fork the repository</li>
              <li>Clone your forked repository onto your local machine</li>
              <li>
                inside your CLI (Command Line Interface), move into your working
                directory
              </li>
              <li>
                run `npm i` inside the root, client *and* server folder to
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
            <CodeBlock>{`- master (protected)
- dev (protected)
- documentation
- feature
-- feature/FEATURE-NAME
--- feature/#<Issue Number>_<little feature title> 
--- feature/#<Issue Number>_<little feature title>
--- feature/#<Issue Number>_<little feature title>
- bugfix (fixing issues that are not urgent)
- hotfix (fixing issues that need to be merged ASAP)`}</CodeBlock>
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
            <CodeBlock>{`<subject> (A title to summarise what this is about)

<body> (A detailed description of your PR, feature idea or issue)

Resolves #ISSUE_NUMBER`}</CodeBlock>
            <p>
              Note: It is important to add the #number for the issue the PR is
              resolving in order to close the issue accordingly once the PR gets
              merged. You can read more about this{" "}
              <a
                href="https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue"
                rel="noreferrer noopener"
                target="_blank"
              >
                here
              </a>
            </p>
          </ItemContent>
        </BigItem>
      </BigList>
    </Article>
  );
};

export default InfoSection;
