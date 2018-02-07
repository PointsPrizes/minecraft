var content = '<div class="coupons">'
            +'<span>DELTA100</span>'
            +'<span>ICE50</span>'
            +'<span>MARVELOUSEXCLUSIVE10</span>'
            +'<span>COMET50</span>'
            +'<span>REDDITSUB345</span>'
            +'<span>GOOGCOM294</span>'
            +'<span>BEERMONEY3573</span>'
            +'<span>POINTSPRIZES25</span>'
            +'<span>MIGHTYSALEH25</span>'
            +'<span>TWEETR562</span>'
            +'<span>FACEGROUP900</span>'
            +'<span>QUANTECH3000</span>'
            +'<span>FACEPAGE1920</span>'
            +'<span>FEARLESS50</span>'
            +'<span>SHADOW25</span>'
            +'<span>DELTA50</span>'
            +'<span>POINTYNEWYEAR50</span>'
            +'<span>LACUNA75</span>'
            +'</div>'

var modal = new tingle.modal({
  closeMethods: [
    'overlay', 'button', 'escape'
  ],
  closeLabel: "أغلق",
});
// set content
modal.setContent(content);

var greenButton = document.getElementById('greenButton');
greenButton.addEventListener('click', function __click() {
  modal.open();
  console.log('hi');
});
