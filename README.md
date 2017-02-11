- modal needs to show only within the white part

- reset button for comments on marketing
  . clears key and reloads the comments

- random button loads random section from vertical

- select box but has arrows on each side to quickly
go through each item

- background too large for comment area when expanded
  . make main bg color grey, make a white section for the
  current white section. aka give growing area the grey

- relative time in fomments... set time relative to now

- choose comment section button scrolls down to comment section






download area



- for non english show 'translated to <language>' message



on load read the data-id to get the comments and load those comments up

script waits until loaded then inits all fomments divs based on their data-id




init on load, fomments script + div in the view on carosal change remove that view to kill it, init new view
- make sure when killing fomments view unregister event from html


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
