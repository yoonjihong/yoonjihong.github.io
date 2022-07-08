---
slug: Nx로React개발환경구성하기
title: Nx로 React 개발환경 구성하기
authors: [yjh]
tags: [Nx, 모노레포, 개발환경, React]
date: 2022-06-08
---

<div className="preview">
  기본적인 Nx사용법과 Nx로 개발환경 구성하기 : Next와 Nest앱
</div>

<!--truncate-->

## Nx CLI 설치

```
npm install -g nx
```

## Nx 레포 설치하기

```
npx create-nx-workspace@latest

#react --preset=react|next|gatsby

Need to install the following packages:
  create-nx-workspace@14.2.1

// --preset설정 시 옵션 선택
> 선택하기
Ok to proceed? (y) y
✔ Workspace name (e.g., org name)     · app
✔ What to create in the new workspace · next
✔ Application name                    · user
✔ Default stylesheet format           · styled-components
✔ Use Nx Cloud? (It's free and doesn't require registration.) · Yes or No
```

## Next앱 추가

```
// Next 패키지 추가
yarn add --dev @nrwl/next

// Next 앱 추가
nx g @nrwl/next:app [AppName]
```

## Nx 환경파일

프로젝트별 성정 정보는 각 프로젝트 폴더 내 `project.json` 파일에 작성된다.  
project.json파일이 없을경우 `workspace.json` 파일에 작성됨

workspace에서 프로젝트별 위치정보를 작성해주면 각 프로젝트별 project.json을 인지한다.

## Libaray 파일 생성

generate를 사용해서 lib파일을 생성하는 방법

```
nx generate @nrwl/js:lib my-lib
nx generate @nrwl/react:lib shared-button
nx generate @nrwl/react:storybook-configuration shared-button
nx g @nrwl/next:page my-new-page --project=my-new-app
nx g @nrwl/next:component my-new-component --project=my-new-app
```

> https://d2.naver.com/helloworld/7553804

<!-- 비타민 가품비율 구글링 -->
