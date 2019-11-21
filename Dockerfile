FROM codeschool/projects-cli:${PROJECTS_CLI_BUILD_TAG:-latest} as projects-cli
FROM ubuntu

SHELL ["/bin/bash", "-c"]
WORKDIR /opt/
RUN mkdir -p /opt/cache/HTMLCSS-LandingPage/
ADD package.json .nvmrc /opt/cache/HTMLCSS-LandingPage/

RUN apt-get update \
  && chmod -R 777 * \
  && apt-get -y install curl git bsdtar

# Create a psprojects user to default the running container to
RUN \
  useradd -b /opt -c "psprojects" -M psprojects && \
  chown -R psprojects:psprojects /opt && \
  mkdir -p /home/psprojects && \
  chown -R psprojects:psprojects /home/psprojects


ENV HOME=/home/psprojects

USER psprojects

# copy the projects-cli from it's container image.
COPY --from=projects-cli /opt/projects-cli /opt/projects-cli

# setup nvm
RUN \
  mkdir -p ~/ && \
  touch ~/.bash_profile && \
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash && \
  source ~/.bash_profile && \
  nvm install $(cat /opt/projects-cli/.nvmrc) && \
  nvm alias default $(cat /opt/projects-cli/.nvmrc) && \
  cp ~/.bash_profile ~/.bashrc && \
  cp ~/.bash_profile ~/.profile && \
  pushd /opt/projects-cli/ && \
  npm install && \
  popd && \
  pushd /opt/cache/HTMLCSS-LandingPage/ && \
  source ~/.bash_profile && nvm install && \
  source ~/.bash_profile && nvm use && npm install --production && \
  popd && \
  nvm use default