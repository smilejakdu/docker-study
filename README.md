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



# Dockerfile & image

- docker 명령어 알기
- docker container 만들고 실행하기 까지의 과정 
- dockerfile 을 만들기
- 만든 dockerfile 을 이용해서 image 만들기
- 만든 image 로 build 해서 container 생성
- 배포 하고 난뒤 코드 수정후 어떻게 할것인지...
- dockerfile 을 변경해서 소스코드만 변경했을시 , 종속성을 제외한 변경된 부분만 적용해서 build 되게 바꿔준다. -> cache 이용
- 하지만 이 방법도 image 를 다시 빌드하게된다. 그렇게 하기보단 volume 을 이용해서 container 안에서 mapping 참조 하게 하면 되지않을까 ??


# 05 Docker Compose

- Docker Compose 는 무엇이고 , 왜 사용하는걸까
- redis 는 무엇인가 ??
- 빌드를 위한 Dockerfile 을 작성한다. -> 이전에 작성했던거랑 비슷하게 작성함
- docker container 끼리 통신을 하고싶은데 아무런 설정없이니 통신이 안된다.
그래서 docker compose 를 통해서 설정을 해줘야 container 끼리 통신이 된다.
- docker compose 구동시키기 위해선 그냥 구동이 안되닌 docker-compose.yml 파일작성
그후 docker compose up
- docker compose down 을 통해서 중단시키는것을 배움
- docker compose up , docker compose --build , docker compose -d --build 차이점에 대해서 배운다.

# 06 어플 배포해보기 실습 (개발 환경부분)

- 리액트 설치
- Dockerfile 과 Dockerfile.dev



