++ product stuff: 

- check user id, check section id, load that state ajax or load a default state
  if id for section not found

  . JSON endpoint served by meteor for this
  . product name in config fomments.com

- dates are relative from now (2 days ago, etc.)
- translated to text if not english (original english to -> language)
- choose comment section button scrolls down to comment sections
- bg for comment section is good
- gui to switch comments (inputs etc)


- react/redux fomments.com app
- switch to diff comment sections

+++ login to fomments

++ login stuff shows only some things
- generic if not purchased vs purchased download instructions


+++ payment stuff

- stripe hookup
- login

- login/password reset using meteor
- buy comment sections
- auto create account when you buy something from fomments.com


++++ serve fomments json endpoints from a json
endpoint checking user id accessing using mongoose/mongodb


all app stuff
login
buy stuff generic marketing


next week:
- finalize marketing integrate real stuff








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






classification problems:

identifying something is useful

computers can identify like a million things super fast



- any problem where identifying things fast is profitable

landing page scoring
angle strength prediction, if an angle is good or not



classify offer, search offer networks to get approved for it, start running it immediately and message the updates

- chat bot to get approved for the offer, auto input the offer into CJ

- scrape all offers from offer networks on a search, reach out to am via skype chat bot to get approved, insert offer into cj auto, set rate auto

- look at tracking data, determine when to jack and not to based on conversion rate. classify when to jack/not jack to maximize profit
  . automate day parting, ghost click increase, etc

- automatically optimize rate, %, etc. based on traffic for profitability
  . determine how 'good' the traffic is based on traffic source and lander quality
  . if bad traffic don't even jack them if effort to high. calculate a value

-






=========


000

fomments
  . show more on less chars for reply

finish templating
  . left nav tabs (demographics)
  . top right nav (language, vertical, download)
  . sign up for pro design/modal, language packs purchase flow design



- create content for fomments
  . each demographic
    . 25-35, 35-45, 45-55, 55+
    . m/f

    skin doesn't have male
    muscle doesn't have female
    diet is female


  . 100 comments sections with 15-20 comments per section by friday

  . adjust likes, date, edited or not, user, spam

  get lifen: list of accounts, landers csv, link to example comments


meteorize fomments




CJ server from scratch
  . this includes all grey hat
