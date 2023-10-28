- CSR 이란?
  클라이언트측에서 렌더링을 하는것
- CSR 의 장점
  한번만 로딩이 되면 빠른 ux 를 사용할 수 있다
  상대적으로 서버 부하가 적다
- 단점
  페이지 로딩시간 (TTV) 가 길다.
  자바스크립트 활성화 필수다
  SEO 최적화가 힘듬
  클라이언트에서 모든 코드를 다운로드받아서 실행되기때문에 보안이 취약함
  CDN에 캐시가 안됨
- TTV 란 FCP 란

- SSG 란?
  정적사이트를 만드는것
  빌드할때 랜더링된다
  CDN 에 캐시됨
- SSG 의 장점
  페이지 로딩시간(TTV)이 빠름
  자바스크립트 필요 없음
  SEO 최적화 좋음
  보안 뛰어남
  CDN에 캐시가 됨
- 단점
  데이터가 정적임
  사용자별 정보 제공의 어려움
- ISR 이란?
  SSG와 동일한 원리
  서버에서 주기적으로 렌더링
- ISR 의 장점
  페이지 로딩시간(TTV)이 빠름
  자바스크립트 필요 없음
  SEO 최적화 좋음
  보안 뛰어남
  CDN에 캐시가 됨
- 단점
  실시간 데이터가 아님
  사용자별 정보 제공의 어려움
- SSR 이란?
  요청시 서버에서 렌더링

- 하이드레이션 이란
  프리랜더링 된 (정적)HTML 후 REACT 컴포넌트로 대체하는 작업
  서버에서 정적 즉 프리랜더링된 HTML 을 먼저 클라이언트에 보낸 이후에
  리액트가 번들링된 JS 코드들을 클라이언트로 전송하게된다
  그 후 HTML DOM 요소위에서 한번더 랜더링 과정을 거치면서 각자 자기의
  자리를 찾아가게 되는데 이를 하이드레이션이라고 한다

- TTI 란?
  사용자가 웹브라우저에서 인터랙션 할수있는시점

- 파일기반 라우팅이란
- 정적 라우팅
- 동적 라우팅
- 각 라우팅 장단점
- 13버전 라우팅 변경점과 변경된 이유
- generateStaticParams() 이란?
- notfound page 설정하는 방법
  13 버전 되면서 pages/404 동작 안하는듯?
  개별 slug 설정
  전역 오류코드별 설정

- 13버전이 되면서 \_app, \_document = layout 으로 변경됨
  다중 중첩 가능
  ex : /products/layout.tsx 로 폴더 안에서 해당 디렉토리의 layout 설정 가능
- metadata
  자식이 부모의 메타데이터를 덮어씌움
  만약 메타데이터가 없다면 부모의 메타데이터를 사용
  동적으로도 사용 가능 generateMetadata()
- next.js 의 장점
  코드스플리팅
  캐싱
  image
- 12버전과 13버전의 차이점
  페이지 단위로 랜더링 방식을 규정 (12) 컴포넌트 단위로 랜더링방식 규정 (13)
  app 폴더에 있는 컴포넌트들은 기본적으로 server 컴포넌트이다

- 서버컴포넌트 클라이언트컴포넌트 특징 및 장단점
  리액트 18부터 서버컴포넌트 지원

- app 폴더에는 가능한 page 컴포넌트만

- 서버컴포넌트
  https://velog.io/@2ast/React-%EC%84%9C%EB%B2%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8React-Server-Component%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0
  서버컴포넌트는 기본적으로 SSG 이다

- revalidate 란?
  fetch 안에서 사용할수있다
- 동적라우트는 ssr 이다
- 정리 서버 컴포넌트는 기본적으로 SSG 이다
  revalidate 를 사용하면 SSR 또는 ISR 을 사용할수있게된다.
  CSR 을 하기위해선 별도의 컴포넌트를 만든뒤 최상위에 "use client"; 를 적어준다
- 12버전에선 무조건 다 rcc
  페이지 랜더링 될 컴포넌트들은 기본적으로 다 rcc 이다
  하지만 스태틱 프롭 쓰면 ssg 로 행동
- 리액트 서스펜스란?

- Loading page
  SSG 에는 동작하지않는다
  리액트 서스펜스를 사용함

- 성능 개선 promise all 을 이용해서 병렬적으로 데이터 패칭
- 13v loading, error page
  page 단위로 적용가능
- Image 사용 방법
  로컬 image / url image
  url image 는 next.config.js 에 설정 해줘야 한다.
  priority 를 통해 이미지 우선순위를 지정해 줄 수 있다

- Font
  nextjs 에서 지원해주는 폰트들이 있다
  className 별로 지정가능
- redirects
  next.config.js 에서 설정해 줄 수있다
  SEO 와 관련있음

- rewrites
  다른 path를 같은 경로로 오버라이드 시키는 기능