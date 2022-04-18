# docker-study

# Used for
react , node
github , dockerhub , travis , aws

# docker hub
https://hub.docker.com/

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
