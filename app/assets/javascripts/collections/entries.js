NewsReader.Collections.Entries = Backbone.Collection.extend ({

  model: NewsReader.Models.Entry,

  initialize: function (options) {
    // debugger
    this.feed = options.feed;
  },

  url: function () {
    this.feed.url() + '/entries';
  },

});
