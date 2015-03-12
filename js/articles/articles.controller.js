angular
  .module('news')
  .controller('ArticlesController', ArticlesController)

function ArticlesController() {
  var vm = this;

  vm.data = JSON.parse('{"a": {"imageUrl": "http://b.thumbs.redditmedia.com/k8Y8HB4wo-apxK-dXltea2rsg6cKNCnFugM3qqzikak.jpg","postDate": "","title": "Robert Downey Jr. presents a real bionic Iron Man arm to a special kid","submittedBy": "holyphoton","votes": {"up": 10000,"down": 5000},"linkUrl": "https://www.youtube.com/watch?v=oEx5lmbCKtY"},"b": {"imageUrl": "http://b.thumbs.redditmedia.com/XnIpoLoGi9Yu0_-wQtS3u37LHN8E_zZEURhKj3e9GxA.jpg","postDate": "","title": "RIP Terry Pratchett, always wore this shirt to conventions.","submittedBy": "stuagray","votes": {"up": 9000,"down": 4500},"linkUrl": "http://cdn3.fashionablygeek.com/wp-content/uploads/2013/10/terry-pratchetts-t-shirt.jpg?22a92a"},"c": {"imageUrl": "","postDate": "","title": "Terry Pratchett Has Died [MegaThread]","submittedBy": "boib","votes": {"up": 8000,"down": 7000},"linkUrl": "http://www.reddit.com/r/books/comments/2ysvzb/terry_pratchett_has_died_megathread/"},"d": {"imageUrl": "","postDate": "","title": "Fantasy author Pratchett dies aged 66","submittedBy": "Suofficer","votes": {"up": 7000,"down": 2000},"linkUrl": "http://www.bbc.co.uk/news/entertainment-arts-31858156"},"e": {"imageUrl": "http://b.thumbs.redditmedia.com/DvmJ7OVkMkD70JhQCEbtDZ3jMtRZMd6Zq2-gZYBiS9A.jpg","postDate": "","title": "That\'s why you don\'t run near the pool","submittedBy": "MikeyTheDinosaur","votes": {"up": 25000,"down": 1},"linkUrl": "http://i.imgur.com/UWJeOyy.gifv"}}');

}
