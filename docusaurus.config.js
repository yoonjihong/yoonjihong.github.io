// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const sideBarOption = {
  blogSidebarTitle: '전체 게시글',
  blogSidebarCount: 'ALL',
  postsPerPage: 10,
  // blogListComponent: '@theme/BlogListPage',
  // blogPostComponent: '@theme/BlogPostPage',
  // blogTagsListComponent: '@theme/BlogTagsListPage',
  // blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
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
    [
      '@docusaurus/plugin-content-blog',
      {
        ...sideBarOption,
        id: 'flutter-blog',
        routeBasePath: 'dev/flutter',
        path: './dev/flutter',
        authorsMapPath: '../authors.yml',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        ...sideBarOption,
        id: 'jsts-blog',
        routeBasePath: 'dev/js-ts',
        path: './dev/js-ts',
        authorsMapPath: '../authors.yml',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        ...sideBarOption,
        id: 'react-blog',
        routeBasePath: 'dev/react',
        path: './dev/react',
        authorsMapPath: '../authors.yml',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        ...sideBarOption,
        id: 'swift-blog',
        routeBasePath: 'dev/swift',
        path: './dev/swift',
        authorsMapPath: '../authors.yml',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: '그냥제목이생각안나서',
        hideOnScroll: true,
        items: [
          {
            to: '/dev/flutter',
            label: '개발',
            position: 'left',
            className: 'nav-devMenu',
            items: [
              {
                type: 'html',
                value: '<div class="nav-subTitle">웹</div>',
                className: 'nav-subTitleWrap',
              },
              {
                label: 'Js/Ts',
                to: '/dev/js-ts',
              },
              {
                label: 'React',
                to: '/dev/react',
              },
              {
                label: 'HTML',
                to: '/dev/html',
              },
              {
                label: 'CSS',
                to: '/dev/css',
              },
              {
                label: 'Capacitor',
                to: '/dev/capacitor',
              },
              {
                type: 'html',
                value: '<div class="nav-subTitle">안드로이드</div>',
                className: 'nav-subTitleWrap',
              },
              {
                label: 'Kotlin',
                to: '/dev/kotlin',
              },
              {
                type: 'html',
                value: '<div class="nav-subTitle">IOS</div>',
                className: 'nav-subTitleWrap',
              },
              {
                label: '스위프트',
                to: '/dev/swift',
              },
              {
                type: 'html',
                value: '<div class="nav-subTitle">크로스플랫폼</div>',
                className: 'nav-subTitleWrap',
              },
              {
                label: 'Flutter',
                to: '/dev/flutter',
              },
              {
                label: 'ReactNative',
                to: '/dev/reactnative',
              },
              {
                type: 'html',
                value: '<div class="nav-subTitle">서버</div>',
                className: 'nav-subTitleWrap',
              },
              {
                label: 'AWS',
                to: '/dev/aws',
              },
              {
                label: 'Docker',
                to: '/dev/docker',
              },
              {
                label: 'NestJs',
                to: '/dev/nestjs',
              },
            ],
          },
          {
            to: '/',
            label: '디자인',
            position: 'left',
          },
          {
            to: '/',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
