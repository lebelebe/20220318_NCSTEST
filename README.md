백엔드로 node.js를 이용하기 위해 express모듈을 설치하고 이를 server.js파일을 메인으로 연결하였다.
또한 routes 폴더 안에 getpost.js 파일을 생성 후 이를 server.js와 라우팅하고 사용하였다.
getpost.js에는 get, post를 사용하여 데이터를 저장하였다.
또한 sql과 연결하기 위해 mysql을 설치하고 db폴더와 그 안에 config.js를 생성해 aws와 연동하고 getpost.js에 react_suppose 스키마의 suppose 테이블을 연결하였다.
이를 리액트로 출력하기 위해 front폴더를 생성하고 리액트를 설치하였다.
src 폴더 안에 nodecontent 폴더를 생성하고 클래스형 컴포넌트와 함수형 컴포넌트를 생성하여 App.js에 삽입하였다.
클래스형 컴포넌트는 Classcontent.js이고 이 안에 get으로 url이 /getpost인 데이터를 받아와 출력하였고
함수형 컴포넌트는 Funccontent.js이고 post로 url이 /getpost/post인 json형식 데이터를 받아와 출력하였다.