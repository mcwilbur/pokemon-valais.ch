# syntax=docker/dockerfile:1
#FROM gitpod/workspace-full
#WORKDIR /app
#EXPOSE 4000
#COPY Gemfile Gemfile
#COPY Gemfile.lock Gemfile.lock
#RUN /bin/bash -l -c "bundle install"
#COPY . .
#CMD /bin/bash -l -c "bundle exec jekyll serve"
FROM ruby:2.7
#RUN apk add --no-cache gcc musl-dev libstdc++ g++ make
WORKDIR /app
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install
EXPOSE 4000:4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
