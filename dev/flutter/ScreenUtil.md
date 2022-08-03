---
slug: screenutil
title: screenutil로 다양한 화면 크기 대응하기
authors: [yjh]
tags: []
date: 2022-06-18
---

<div className="preview">
  screenutil 패키지를 사용하면 각기 다른 사이즈의 화면을 쉽게 대응할 수 있다.
</div>

<!--truncate-->
<!-- https://d2.naver.com/helloworld/7553804#ch4 참고 -->

## 패키지 설명

screenutil 패키지를 사용하면 각기 다른 사이즈의 화면을 쉽게 대응할 수 있다.  
기기마다 화면 크기가 달라 모든 사이즈를 대응하는건 쉽지 않다.
이 패키지를 사용하면 쉽게 `모든 기기에서 거의 동일한 화면` 을 보여줄 수 있다.
<br />

### 원리

`디자인 사이즈` 지정해두면 디바이스 화면 사이즈에 맞춰 비율을 계산해 위젯에 사이즈를 부여해준다.
<br />

> MediaQuery를 사용하면 길어지는 수식을 더 쉽고 간단하게 사용할 수 있게 해준다.

## 설치

```
flutter pub add flutter_screenutil
```

> https://pub.dev/packages/flutter_screenutil

## 사용법

### 기준 사이즈 지정

최상위 위젯을 ScreenUtilInit로 감싸고 기준 사이즈를 지정하면된다.

```javascript
ScreenUtilInit(
  designSize: Size(428, 926)
)
```

<br />

### 사이즈 단위

```javascript
.w - 디자인 사이즈 기준 [가로] 길이
.h - 디자인 사이즈 기준 [세로] 길이
.sp - 디자인 사이즈 기준 [폰트] 크기

// .sw .sh .r 등
```

<br />

### 위젯 사이즈 지정

사이즈를 지정할때 아래와 같이 지정하게 되면 모든 디바이스에서 같은 비율로 자동으로 조절된다.

```javascript
// 예시
Container(
  width: 100.w,
  height: 100.h,
  chld: Text(
    '폰트 사이즈',
    style: TextStyle(
      fontSize: 12.sp
    )
  )
)
```

<!-- https://nomaruhan.tistory.com/13 -->

<!-- 그리드 뷰어 사용법 -->
<!-- https://velog.io/@adbr/flutter-GridView-%EC%A0%95%EB%A6%AC#-gridview-widget-%EC%98%88%EC%A0%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%93%B0%EC%9D%B8-%ED%8A%B9%EC%A7%95 -->
<!-- Hero 위젯 사용법 -->
<!-- border radius 사용법 -->
<!-- box-shadow 사용법 -->
