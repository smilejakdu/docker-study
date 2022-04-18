# docker-study

# Used for
react , node
github , dockerhub , travis , aws

# docker hub
https://hub.docker.com/

# AWS

한대의 컴퓨터를 임대한다고 생각하면 된다.
그리고 그 컴퓨터에 OS 를 설치하고 웹 서비스를 위한 프로그램들 (웹서버 , DB) 를
설치해서 사용 하면 된다.
1대의 컴퓨터를 하나의 EC2 인스턴스라고 한다.

1. 우선 회원가입을 해야한다.
2. Elastic BeanStalk 검색

## EB란 무엇인가. (Elastic BeanStalk )
AWS Elastic Beanstalk 는 Apache, Nginx 같은 친숙한 서버에서 Java , NET , PHP , Node.js , python ,Ruby ,Go 및 Docker 와 함께 개발된 웹 응용 프로그램 및 서비스를 배포하고 확장하기 쉬운 서비스이다.


# travis
https://travis-ci.org/

travis 는 오픈소스 프로젝트를 위한 지속적인 통합 서비스이다.
Travis CI 를 이용하면 Github repository 에 있는 프로젝트를 
특정 이벤트에 따라 자동으로 테스트 , 빌드하거나 배포할 수 있다. 

1. 로컬 git 에 있는 소스를 Github 저장소에 Push 를 한다.
2. Github main 저장소에 소스가 Push 가 되면 , 
Travis CI 에게 소스가 Push 되었다고 얘기해 준다.
3. Travis CI 는 업데이트 된 소스를 Github 에서 가지고 온다.
4. 깃헙에서 가져온 소스의 테스트 코드를 실행해 본다.
5. 테스트 코드 실행 후 테스트가 성공하면 AWS 같은 호스팅 사이트로 보내서 배포한다.
