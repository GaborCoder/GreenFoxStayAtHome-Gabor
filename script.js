let actualPhoto=1;
let oldActualPhoto=2;
let startNumber=8;

let photoGallery =['treeletter.png','bough.png','field.png','hand.png','sunset.png','grassfield.png', 'waterfall.png'];
let titles =['Earth and nature', 'Bough','Field', 'Hand', 'Sunset', 'Grass field', 'Waterfall'];
let descriptions=['Környezetvédelmi ikon falevéllel.','Faág a tavasz tájon', 'Ez egy mező', 'Kezünkben a környezet','Este naplementével', 'Egy füves rét', 'Vízesés']

$(function(){
    if(startNumber == 8){
    startNumber++;
    loadPhoto(actualPhoto);
};});

$('#0').click(()=>{actualPhoto=0;loadPhoto(actualPhoto);});
$('#1').click(()=>{actualPhoto=1;loadPhoto(actualPhoto);});
$('#2').click(()=>{actualPhoto=2;loadPhoto(actualPhoto);});
$('#3').click(()=>{actualPhoto=3;loadPhoto(actualPhoto);});
$('#4').click(()=>{actualPhoto=4;loadPhoto(actualPhoto);});
$('#5').click(()=>{actualPhoto=5;loadPhoto(actualPhoto);});
$('#6').click(()=>{actualPhoto=6;loadPhoto(actualPhoto);});


let loadPhoto = (actualPhoto) => {
    $('#photo').attr('src', photoGallery[actualPhoto]);
    $('#title').text(titles[actualPhoto]);
    $('#description').text(gallery[actualPhoto]);

    $('.pictures').css('border', 'ridge');
    let picturesBorder =  document.getElementById([actualPhoto]);
    $(picturesBorder).css('border-color', '#eeeeee');
};

$('#right').click(() => {
    if(actualPhoto < 6) {
        actualPhoto++;
        loadPhoto(actualPhoto);   
    }else{
        actualPhoto=0;
        loadPhoto(actualPhoto);
    };
});


$('#left').click(() =>{
    if(actualPhoto > 0) {
        actualPhoto--;
        loadPhoto(actualPhoto);
    }else{
        actualPhoto=6;
        loadPhoto(actualPhoto);
    };
});