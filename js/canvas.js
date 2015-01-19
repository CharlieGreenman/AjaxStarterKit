document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');

    ctx.fillStyle = 'f00';
    ctx.fillRect(100,100,300,400);

}
