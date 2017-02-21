// Rest API serves states to fomments libraries via AJAX

// Enable cross origin requests for all endpoints
JsonRoutes.setResponseHeaders({
  'Cache-Control': 'no-store',
  Pragma: 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
});

JsonRoutes.add('get', '/sections/:sectionId', (req, res) => {
  // const sectionId = req.params.sectionId;

  const state = {
    id: 1,
    defaultCommentsToShow: 1,
    defaultCommentsToLoadAtOnce: 1,
    defaultRepliesToShow: 3,
    defaultRepliesToLoadAtOnce: 10,
    user: {
      id: 134,
      name: 'Customer Comment',
      url: '',
      image: '/images/noprofilepic.jpg',
      affiliation: {
        name: '',
        url: '',
      },
    },
    sortBy: {
      top: true,
      newest: false,
      oldest: false,
    },
    list: {
      98762: {
        id: 98762,
        content: 'And that my friends is why President Elect Donald Trump won. We are sick of it. We are sick of the left claiming to be the ones that are tolerant but at every chance they get they call us racists, bigots, homophobes, zenophobes, and every other phobes and ists you can think of and every time they are running for anything they pull the race card. I am 56 years old and as long as I have been a voter they have been doing this and they have lumped me in with all this long enough. I am so sick of these politically correct babies that I want change and Donald Trump is the one I believe will keep his word to do it because I have no trust in either establishment Democrat or Republican. I am done with them until I see some real change.',
        user: {
          id: 8987,
          name: 'Cristi Selvaggio-Loken',
          url: 'https://www.facebook.com/cristi.loken',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p48x48/10653562_933461080080555_2573322228358397722_n.jpg?oh=b896e112dd202abd81708cf405272c25&oe=59052C88',
          affiliation: {
            name: 'Covina High',
            url: 'https://www.facebook.com/westcovinahighschool/?rf=111303315560263',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 586,
        date: 1318781776406,
        report: false,
        spam: true,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      1: {
        id: 1,
        content: 'asdfsdf President Elect Donald Trump won. We are sick of it. We are sick of the left claiming to be the ones that are tolerant but at every chance they get they call us racists, bigots, homophobes, zenophobes, and every other phobes and ists you can think of and every time they are running for anything they pull the race card. I am 56 years old and as long as I have been a voter they have been doing this and they have lumped me in with all this long enough. I am so sick of these politically correct babies that I want change and Donald Trump is the one I believe will keep his word to do it because I have no trust in either establishment Democrat or Republican. I am done with them until I see some real change.',
        user: {
          id: 98,
          name: 'Cristi Selvaggio-Loken',
          url: 'https://www.facebook.com/cristi.loken',
          image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p48x48/10653562_933461080080555_2573322228358397722_n.jpg?oh=b896e112dd202abd81708cf405272c25&oe=59052C88',
          affiliation: {
            name: 'Covina High',
            url: 'https://www.facebook.com/westcovinahighschool/?rf=111303315560263',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 6,
        date: 1318791776406,
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          3: {
            id: 3,
            parentId: 1,
            content: 'Another damn fool that needs to be schooled. Trump won because the Electoral College voted for him not the people. Hillary would be the president if the people had a say. Right now she has more than one million votes more than Trump. I don\'t think she is the person for the job either so no I\'m not a Hillary supporter. So please climb down off of your high horse because you had absolutely nothing to do with him being the president elect. Also just know that the inauguration hasn\'t occurred yet. 56 years old and still a damn sheep. Dummy doesn have an ist on it does it?',
            user: {
              id: 10,
              name: 'Cassie Jay',
              url: 'https://www.facebook.com/cassandra.jenkins.54',
              image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p48x48/12208311_10207714506010947_4805234041899762623_n.jpg?oh=4f3635bea9ab87812edfc106526dbe95&oe=5906C831',
              affiliation: {
                name: '',
                url: '',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 0,
            date: 1318981876406,
            report: false,
            spam: false,
            edited: false,
          },
          2: {
            id: 2,
            parentId: 1,
            content: 'Another damn fool that needs to be schooled. Trump won because the Electoral College voted for him not the people. Hillary would be the president if the people had a say. Right now she has more than one million votes more than Trump. I don\'t think she is the person for the job either so no I\'m not a Hillary supporter. So please climb down off of your high horse because you had absolutely nothing to do with him being the president elect. Also just know that the inauguration hasn\'t occurred yet. 56 years old and still a damn sheep. Dummy doesn have an ist on it does it?',
            user: {
              id: 66,
              name: 'Cassie Jay',
              url: 'https://www.facebook.com/cassandra.jenkins.54',
              image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p48x48/12208311_10207714506010947_4805234041899762623_n.jpg?oh=4f3635bea9ab87812edfc106526dbe95&oe=5906C831',
              affiliation: {
                name: '',
                url: '',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 0,
            date: 1318981876406,
            report: false,
            spam: false,
            edited: true,
          },
        },
      },
    },
  };


  JsonRoutes.sendResult(res, { data: state });
});
