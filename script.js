const container = document.querySelector('.container');
for(var i=1; i<= 100; i++)
{
    const hearts = document.createElement('div');
    hearts.classList.add('heart');
    container.appendChild(hearts);

}
function animateHearts(){
    anime({
        targets:'.heart',
        translateX: function(){
            return anime.random(-900,900);
        },
        translateY: function(){
            return anime.random(-700,700);
        },
        rotate:45,
        scale: function(){
            return anime.random(1,4);
        },
        easing:'easeInOutBack',
        duration:3000,
        delay:anime.stagger(10),
        complete: animateHearts,

    })
}

animateHearts()

window.onload = function(){
    document.getElementById("my_audio").onplay();
}