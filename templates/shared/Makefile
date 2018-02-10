http=80
https=443

##########################################################################################
# prerequisites:
#   - ENV:`image`
##########################################################################################

default: build

bash:
	docker exec -it $$(docker ps -q --filter ancestor=$(image)) /bin/bash

build:
	docker build -t $(image) .

start:
	docker run -d -p $(http):$(http) -p $(https):$(https) $(image)

stop:
	docker stop $$(docker ps -q --filter ancestor=$(image))

