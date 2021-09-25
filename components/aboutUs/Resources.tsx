import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../frontend-config";

// Styles
const SVGGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoint("lg")}) {
    svg {
      width: 70%;
      height: 70%;
    }
  }

  @media (min-width: ${breakpoint("lg")}) {
    svg {
      width: 80%;
      height: 80%;
    }
  }
`;

const SVGSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 66.1px;

  span svg {
    width: 42px;
  }

  @media (max-width: ${breakpoint("xl")}) {
    display: none;
  }
`;

const IconWrapper = styled.span`
  fill: ${props => props.theme.colors.greenPrimary};
  -webkit-order: 2;
  -ms-flex-order: 1;
  order: 2;
`;

const IconWrapperTwo = styled.span`
  fill: ${props => props.theme.colors.greenPrimary};
`;

// Links
const repoLink = (
  <a
    href="https://github.com/chingu-voyages/moonshot-chingu-quiz"
    rel="noreferrer noopener"
    target="_blank"
  >
    repo
  </a>
);

export const repoGitLink = (
  <a
    href="https://github.com/chingu-voyages/moonshot-chingu-quiz"
    rel="noreferrer noopener"
    target="_blank"
  >
    README
  </a>
);

const contributeLink = (
  <Link href="/contribute">
    <a>page on contributing</a>
  </Link>
);

const chinguLink = (
  <a href="https://Chingu.io" rel="noreferrer noopener" target="_blank">
    Chingu
  </a>
);

const chinguIOLink = (
  <a href="https://Chingu.io" rel="noreferrer noopener" target="_blank">
    Chingu.io
  </a>
);

const issueLink = (
  <a
    href="https://github.com/chingu-voyages/moonshot-chingu-quiz/issues"
    rel="noreferrer noopener"
    target="_blank"
  >
    here
  </a>
);

// SVGs
export const MessageSVG = () => {
  return (
    <IconWrapper>
      <svg
        width="215"
        height="164"
        viewBox="0 0 215 164"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M214.3 82C214.3 127.232 166.48 163.9 107.5 163.9C88.5435 163.97 69.8468 160.037 52.9918 152.434L0.699829 163.9L18.5621 127.361C7.28138 114.374 0.699829 98.7778 0.699829 82C0.699829 36.7678 48.5195 0.0999756 107.5 0.0999756C166.48 0.0999756 214.3 36.7678 214.3 82ZM67.4498 70.3H40.7498V93.7H67.4498V70.3ZM174.25 70.3H147.55V93.7H174.25V70.3ZM94.1498 70.3H120.85V93.7H94.1498V70.3Z"
        />
      </svg>
    </IconWrapper>
  );
};

export const LockSVG = () => {
  return (
    <IconWrapperTwo>
      <svg
        width="151"
        height="172"
        viewBox="0 0 151 172"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M75.5 0.794189C61.1973 0.794189 47.4803 6.42288 37.3667 16.442C27.2532 26.4612 21.5714 40.05 21.5714 54.2192V75.5893C15.8503 75.5893 10.3636 77.8408 6.31812 81.8484C2.2727 85.8561 0 91.2916 0 96.9593V150.384C0 156.052 2.2727 161.488 6.31812 165.495C10.3636 169.503 15.8503 171.754 21.5714 171.754H129.429C135.15 171.754 140.636 169.503 144.682 165.495C148.727 161.488 151 156.052 151 150.384V96.9593C151 91.2916 148.727 85.8561 144.682 81.8484C140.636 77.8408 135.15 75.5893 129.429 75.5893H43.1429V54.2192C43.1402 46.4154 46.0113 38.8785 51.2177 33.0221C56.4242 27.1658 63.6084 23.3921 71.423 22.4088C79.2377 21.4255 87.146 23.3002 93.665 27.6812C100.184 32.0622 104.866 38.6487 106.832 46.2055C107.548 48.9501 109.334 51.3008 111.799 52.7405C113.019 53.4534 114.369 53.9212 115.772 54.1172C117.175 54.3131 118.603 54.2335 119.975 53.8827C121.347 53.5319 122.635 52.9168 123.767 52.0727C124.899 51.2285 125.852 50.1718 126.572 48.9628C127.291 47.7538 127.763 46.4163 127.961 45.0265C128.159 43.6367 128.079 42.222 127.724 40.863C124.732 29.3954 117.979 19.2376 108.526 11.985C99.0731 4.7324 87.4562 0.796032 75.5 0.794189Z" />
      </svg>
    </IconWrapperTwo>
  );
};

export const LinkSVG = () => {
  return (
    <IconWrapper>
      <svg
        width="152"
        height="152"
        viewBox="0 0 152 152"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.938 24.3377C102.681 22.5326 104.767 21.0927 107.072 20.1022C109.378 19.1117 111.858 18.5903 114.368 18.5685C116.877 18.5467 119.366 19.0249 121.689 19.9752C124.012 20.9255 126.122 22.3289 127.897 24.1034C129.671 25.878 131.074 27.9882 132.025 30.311C132.975 32.6337 133.453 35.1225 133.431 37.632C133.41 40.1415 132.888 42.6216 131.898 44.9275C130.907 47.2333 129.467 49.3189 127.662 51.0623L99.3122 79.4123C95.768 82.9555 90.9615 84.946 85.9499 84.946C80.9383 84.946 76.1319 82.9555 72.5876 79.4123C70.8053 77.6909 68.4183 76.7384 65.9405 76.7599C63.4627 76.7815 61.0925 77.7753 59.3404 79.5274C57.5883 81.2795 56.5945 83.6497 56.573 86.1275C56.5514 88.6052 57.5039 90.9923 59.2253 92.7746C66.3139 99.861 75.9267 103.842 85.9499 103.842C95.9731 103.842 105.586 99.861 112.675 92.7746L141.025 64.4246C147.91 57.2955 151.72 47.7471 151.634 37.836C151.548 27.925 147.573 18.4443 140.564 11.4359C133.556 4.42744 124.075 0.452055 114.164 0.365931C104.253 0.279807 94.7045 4.08983 87.5753 10.9754L73.4003 25.1504C72.4978 26.0221 71.7778 27.0649 71.2826 28.2178C70.7873 29.3708 70.5266 30.6108 70.5157 31.8656C70.5048 33.1203 70.7439 34.3647 71.2191 35.5261C71.6942 36.6875 72.3959 37.7426 73.2832 38.6298C74.1705 39.5171 75.2256 40.2188 76.387 40.694C77.5483 41.1691 78.7927 41.4082 80.0475 41.3973C81.3022 41.3864 82.5423 41.1257 83.6952 40.6305C84.8481 40.1352 85.8909 39.4153 86.7626 38.5127L100.938 24.3377ZM53.6876 71.5877C57.2319 68.0445 62.0383 66.0541 67.0499 66.0541C72.0615 66.0541 76.868 68.0445 80.4122 71.5877C81.284 72.4903 82.3267 73.2102 83.4797 73.7055C84.6326 74.2007 85.8726 74.4614 87.1274 74.4723C88.3821 74.4832 89.6265 74.2441 90.7879 73.769C91.9493 73.2938 93.0044 72.5921 93.8917 71.7049C94.779 70.8176 95.4806 69.7625 95.9558 68.6011C96.431 67.4397 96.6701 66.1953 96.6591 64.9406C96.6482 63.6858 96.3876 62.4458 95.8923 61.2928C95.397 60.1399 94.6771 59.0971 93.7745 58.2254C86.686 51.139 77.0731 47.1581 67.0499 47.1581C57.0267 47.1581 47.4139 51.139 40.3253 58.2254L11.9753 86.5754C8.36503 90.0623 5.48535 94.2334 3.50429 98.8451C1.52323 103.457 0.480466 108.417 0.436852 113.436C0.393238 118.455 1.34964 123.433 3.25026 128.078C5.15088 132.724 7.95765 136.944 11.5068 140.493C15.0559 144.042 19.2764 146.849 23.9219 148.75C28.5673 150.65 33.5448 151.607 38.5639 151.563C43.583 151.519 48.5431 150.477 53.1548 148.496C57.7666 146.515 61.9376 143.635 65.4245 140.025L79.5995 125.85C80.5021 124.978 81.222 123.935 81.7173 122.782C82.2125 121.629 82.4732 120.389 82.4841 119.134C82.495 117.88 82.256 116.635 81.7808 115.474C81.3056 114.313 80.604 113.257 79.7167 112.37C78.8294 111.483 77.7743 110.781 76.6129 110.306C75.4515 109.831 74.2072 109.592 72.9524 109.603C71.6976 109.614 70.4576 109.874 69.3047 110.37C68.1517 110.865 67.109 111.585 66.2372 112.487L52.0622 126.662C50.3188 128.467 48.2332 129.907 45.9274 130.898C43.6215 131.888 41.1414 132.41 38.6319 132.432C36.1224 132.453 33.6336 131.975 31.3109 131.025C28.9882 130.075 26.8779 128.671 25.1034 126.897C23.3288 125.122 21.9254 123.012 20.9751 120.689C20.0248 118.366 19.5466 115.878 19.5684 113.368C19.5902 110.859 20.1116 108.378 21.1021 106.073C22.0926 103.767 23.5325 101.681 25.3376 99.9377L53.6876 71.5877Z"
        />
      </svg>
    </IconWrapper>
  );
};

export const ArrowSVG = () => {
  return (
    <span>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle cx="20.9199" cy="20.9199" r="20.9199" fill="#333333" />
        <path
          fill="white"
          d="M19.3549 11.4886L20.4451 10.3588C20.9067 9.88041 21.6531 9.88041 22.1098 10.3588L31.6562 20.2469C32.1178 20.7253 32.1178 21.4988 31.6562 21.9721L22.1098 31.8653C21.6482 32.3437 20.9018 32.3437 20.4451 31.8653L19.3549 30.7356C18.8884 30.2521 18.8982 29.4633 19.3745 28.99L25.292 23.1477H11.1786C10.5254 23.1477 10 22.6032 10 21.9263V20.2978C10 19.621 10.5254 19.0764 11.1786 19.0764H25.292L19.3745 13.2341C18.8933 12.7608 18.8835 11.972 19.3549 11.4886Z"
        />
      </svg>
    </span>
  );
};

export const ShareSVG = () => {
  return (
    <SVGGroup>
      <IconWrapper>
        <svg
          width="233"
          height="233"
          viewBox="0 0 233 233"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M189.25 87.4C198.113 87.4002 206.766 84.7024 214.059 79.6652C221.351 74.6279 226.938 67.4901 230.075 59.2007C233.212 50.9114 233.752 41.8634 231.622 33.2599C229.492 24.6565 224.793 16.9054 218.151 11.0372C211.509 5.1691 203.237 1.46208 194.437 0.409135C185.636 -0.643812 176.724 1.00721 168.885 5.14265C161.045 9.27808 154.651 15.702 150.551 23.56C146.452 31.4181 144.841 40.338 145.934 49.1335L74.0575 85.072C67.8916 79.1262 60.1127 75.1259 51.6897 73.5694C43.2666 72.0129 34.5718 72.9691 26.6883 76.3187C18.8048 79.6684 12.081 85.2635 7.35457 92.4071C2.62815 99.5507 0.107971 107.927 0.107971 116.493C0.107971 125.058 2.62815 133.435 7.35457 140.578C12.081 147.722 18.8048 153.317 26.6883 156.667C34.5718 160.016 43.2666 160.972 51.6897 159.416C60.1127 157.859 67.8916 153.859 74.0575 147.913L145.934 183.852C144.661 194.069 147.041 204.408 152.653 213.041C158.266 221.673 166.749 228.044 176.604 231.027C186.459 234.01 197.051 233.413 206.509 229.342C215.966 225.271 223.68 217.987 228.287 208.779C232.894 199.57 234.097 189.03 231.684 179.02C229.271 169.01 223.397 160.175 215.1 154.077C206.804 147.979 196.618 145.011 186.345 145.696C176.071 146.381 166.37 150.676 158.957 157.822L87.0797 121.883C87.5201 118.308 87.5201 114.692 87.0797 111.116L158.957 75.178C166.785 82.744 177.464 87.4 189.25 87.4Z" />
        </svg>
        <SVGSub>
          <p>Visit our GitHub</p>
          <a
            href="https://github.com/chingu-voyages/moonshot-chingu-quiz"
            rel="noreferrer noopener"
            target="_blank"
          >
            <ArrowSVG />
          </a>
        </SVGSub>
      </IconWrapper>
    </SVGGroup>
  );
};

export const CodeSVG = () => {
  return (
    <IconWrapper>
      <svg
        width="236"
        height="184"
        viewBox="0 0 236 184"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148.34 0.968519C149.973 1.5118 151.483 2.37146 152.783 3.49838C154.084 4.62531 155.149 5.99742 155.919 7.53632C156.689 9.07523 157.149 10.7508 157.271 12.4672C157.393 14.1837 157.176 15.9075 156.632 17.54L104.232 174.74C103.134 178.037 100.772 180.763 97.6639 182.318C94.5561 183.873 90.9579 184.13 87.6608 183.032C84.3636 181.934 81.6376 179.572 80.0825 176.464C78.5274 173.356 78.2706 169.758 79.3685 166.461L131.768 9.26082C132.312 7.62801 133.171 6.11824 134.298 4.81775C135.425 3.51726 136.797 2.45155 138.336 1.68149C139.875 0.911429 141.551 0.45211 143.267 0.329776C144.984 0.207442 146.707 0.424491 148.34 0.968519ZM61.7621 43.4387C64.2179 45.8953 65.5976 49.2268 65.5976 52.7004C65.5976 56.1741 64.2179 59.5055 61.7621 61.9621L31.7238 92.0004L61.7621 122.039C63.0132 123.247 64.0112 124.693 64.6978 126.291C65.3843 127.889 65.7457 129.608 65.7608 131.348C65.7759 133.087 65.4445 134.812 64.7858 136.422C64.1271 138.032 63.1544 139.494 61.9244 140.724C60.6944 141.954 59.2318 142.927 57.6218 143.586C56.0119 144.245 54.2869 144.576 52.5475 144.561C50.8081 144.546 49.0891 144.184 47.4909 143.498C45.8926 142.811 44.4471 141.813 43.2387 140.562L3.93865 101.262C1.48278 98.8055 0.103149 95.4741 0.103149 92.0004C0.103149 88.5268 1.48278 85.1953 3.93865 82.7387L43.2387 43.4387C45.6953 40.9828 49.0267 39.6032 52.5004 39.6032C55.974 39.6032 59.3054 40.9828 61.7621 43.4387ZM174.239 43.4387C176.695 40.9828 180.027 39.6032 183.5 39.6032C186.974 39.6032 190.305 40.9828 192.762 43.4387L232.062 82.7387C234.518 85.1953 235.898 88.5268 235.898 92.0004C235.898 95.4741 234.518 98.8055 232.062 101.262L192.762 140.562C191.554 141.813 190.108 142.811 188.51 143.498C186.912 144.184 185.193 144.546 183.453 144.561C181.714 144.576 179.989 144.245 178.379 143.586C176.769 142.927 175.306 141.954 174.076 140.724C172.846 139.494 171.874 138.032 171.215 136.422C170.556 134.812 170.225 133.087 170.24 131.348C170.255 129.608 170.616 127.889 171.303 126.291C171.989 124.693 172.987 123.247 174.239 122.039L204.277 92.0004L174.239 61.9621C171.783 59.5055 170.403 56.1741 170.403 52.7004C170.403 49.2268 171.783 45.8953 174.239 43.4387Z"
        />
      </svg>
    </IconWrapper>
  );
};

// Constant Data
export const HEADER_DATA = {
  id: 0,
  title: "How did this project start?",
  text: (
    <>
      The idea started with a group of ({chinguLink}) developers who saw a need
      in the community for a tool to help people prepare for technical
      interviews. <br />
      <br />
      This app aims to help fellow developers get a better sense of weak points
      in their knowledge base, provide resources to improve in those areas, and
      offer some ways to better prepare for technical interviews
    </>
  ),
};

export const ABOUT_DATA = [
  {
    id: 1,
    svg: <MessageSVG />,
    title: "What in the world is Chingu?",
    text: (
      <>
        Chingu is a developer community that strives to help people level-up by
        building real projects in a team setting with others focused on
        improving their skill set. The benefits extend past tech and into
        getting a better grip on the soft-skills needed when working in a team
        environment; things like working through project ideas, resolving merge
        conflicts, and planning sprints. Learn more at ({chinguIOLink})
      </>
    ),
  },
  {
    id: 2,
    svg: <LockSVG />,
    title: "Why Open Source?",
    text: (
      <>
        In keeping with the theme of helping fellow developers, the project
        itself serves as a way to improve confidence and ability when
        contributing to open source. This project is open to contributors at all
        skill levels, and the maintainers / community are here to help when
        questions arise.
      </>
    ),
  },
  {
    id: 3,
    svg: <LinkSVG />,
    title: "How can I contribute?",
    text: (
      <>
        Ready to jump in and contribute? Check out our ({contributeLink}) or
        take a look at the ({repoLink})!
      </>
    ),
  },
  {
    id: 4,
    svg: <ShareSVG />,
    title: `How should I report a bug or incorrect information?`,
    text: (
      <>
        First of all, thanks for taking the time to report any issues you find
        with our app! We are using GitHub issues to track any bugs or incorrect
        information so they can be resolved by the community.
        <br />
        Please be sure to check through the issues to make sure the one you are
        seeing hasn’t already been reported. If it has please feel free to add
        comments to the conversation inside the existing issue.
        <br />
        If creating a new issue, please follow the issue template that is in
        place.
        <br />
        Report issues / bugs / incorrect information ({issueLink})
      </>
    ),
  },
  {
    id: 5,
    svg: <CodeSVG />,
    title: `What are you using to build this app?`,
    text: (
      <p>
        It's a <a href="https://nextjs.org/docs">Next.js</a> app powered by a{" "}
        <a href="https://www.postgresql.org/">PostgreSQL</a> database.
      </p>
    ),
  },
];
