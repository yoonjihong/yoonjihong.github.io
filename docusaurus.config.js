// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const makeBlog = key => {
  return [
    '@docusaurus/plugin-content-blog',
    {
      ...sideBarOption,
      id: key,
      routeBasePath: 'dev/' + key,
      path: './dev/' + key,
      authorsMapPath: '../authors.yml',
    },
  ];
};

const sideBarOption = {
  blogSidebarTitle: '최근 게시물',
  blogSidebarCount: 10,
  postsPerPage: 10,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '블로그',
  tagline: 'Dinosaurs are cool',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  url: 'https://yoonjihong.github.io/',
  projectName: 'yoonjihong.github.io', // Usually your repo name.
  organizationName: 'yoonjihong', // Usually your GitHub org/user name.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '전체 게시글',
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    makeBlog('flutter'),
    makeBlog('monorepo'),
    makeBlog('ts'),
    makeBlog('js'),
    makeBlog('etc'),
    makeBlog('nodejs'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      algolia: {
        // 알골리아에서 제공한 appId를 사용하세요.
        appId: 'YOUR_APP_ID',

        // 공개 API 키: 커밋해도 문제가 생기지 않습니다.
        apiKey: 'YOUR_SEARCH_API_KEY',

        indexName: 'YOUR_INDEX_NAME',

        // 옵션: 아래 문서를 참고
        contextualSearch: true,

        // 옵션: history.push 대신 window.location을 통해 탐색해야 하는 도메인을 지정합니다. 여러 문서 사이트를 크롤링하고 window.location.href를 사용하여 해당 사이트로 이동하려는 경우에 유용한 알골리아 설정입니다.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // 옵션: 알골리아 검색 파라미터
        searchParameters: {},

        // 옵션: 기본적으로 활성화된 검색 페이지 경로(비활성화하려면 `false`로 설정)
        searchPagePath: 'search',

        //... 다른 알골리아 파라미터
      },
      navbar: {
        title: '제목 없음',
        hideOnScroll: true,
        items: [
          {
            to: '/dev/flutter',
            label: '개발',
            position: 'left',
            className: 'nav-devMenu',
            items: [
              {
                label: 'Nodejs',
                to: '/dev/nodejs',
              },
              {
                label: 'Monorepo',
                to: '/dev/monorepo',
              },
              {
                label: 'Flutter',
                to: '/dev/flutter',
              },
              {
                label: '기타',
                to: '/dev/etc',
              },
            ],
          },
          {
            to: '/dev/react',
            label: '디자인',
            position: 'left',
          },
          {
            to: '/dev/etc',
            label: '기타',
            position: 'left',
          },
          {
            href: 'https://github.com/yoonjihong',
            label: '깃허브',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
