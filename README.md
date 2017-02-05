
. load fomments into the div by putting an iframe in there and hosting a html file with

. many different states, same code. store these states in github and serve through rawgit

code reads state from container param, reaches out to get initial state from github saved state files
sets the data-fomments-id attr on iframe itself

<div id="fomments"
  fomments-default-to-load=10
  default-to-show=5
  default-replies-to-show=3
  fomments-default-replies-to-load=10
  foments-id="muscle-m-1825">
  <iframe src="<source to html hosted on github>" />
</div>

loader:
. find the container
. if found put iframe inside of it if not throw error on console
. pass id & other attributes into the iframe

. when real fomments loads it checks for these attributes if it is in an iframe, if not or if no id found use initial state which will just be a generic comment section

. localstorage uses fomments-id as unique storage place not just fomments as key
=======


- comment section container, everything but comment plugin in there

- comment plugin iframe integration


- download local/remote button mock up



- create fake github account for fomments
- fake github stars etc

- connect to fomments


- fast cdn rawgit or local download
- comment section inserted and buttons
- reset button and download button drop down

- meteor app finish, apply for free VIP design
