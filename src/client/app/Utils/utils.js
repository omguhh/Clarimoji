module.exports = {
  // Clarifai helpers
  getCredentials: function(cb) {
    var data = {
      'grant_type': 'client_credentials',
      'client_id': '',
      'client_secret': ''
    };

    return $.ajax({
        'url': 'https://api.clarifai.com/v1/token',
        'data': data,
        'type': 'POST'
      })
      .then(function(r) {
        localStorage.setItem('token', r.access_token);
        localStorage.setItem('tokenTimestamp', Math.floor(Date.now() / 1000));
        cb();
      });
  },
  // ugly
  postImage: function(imgurl) {
    var tags = [];
    var probs = [];
    var accessToken = localStorage.getItem('token');
    return $.ajax({
      'url': 'https://api.clarifai.com/v1/tag?&url=' + imgurl,
      'headers': {
        'Authorization': 'Bearer ' + accessToken
      },
      'type': 'GET'
    }).then(function(resp) {
      if (resp.status_code === 'OK') {
        var results = resp.results;
        probs = results[0].result.tag.classes;
      } else {
        console.log('Sorry, something is wrong.');
      }
    });
    return probs;
  },

  getImageTags: function(imgurl) {
    if (localStorage.getItem('tokenTimeStamp') - Math.floor(Date.now() / 1000) > 86400 || localStorage.getItem('token') === null) {
      getCredentials(function() {
        // this.postImage(imgurl);
        console.log(this.postImage(imgurl));
      });
    } else {
        console.log(this.postImage(imgurl));
    }
  }
};
