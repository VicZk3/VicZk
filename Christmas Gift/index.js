let snowConteiner = $(".snow-conteiner");


function createSnowFlake(){
    let snowFlake = $('<div></div>');
    snowFlake.addClass('snowFlake');
    snowFlake.text('❆');
    snowFlake.css('left', `${Math.random() * 100}vw`);
    snowFlake.css('font-size', `${Math.random() * 12 + 10}px`);
    snowFlake.css('opacity', Math.random());
    snowFlake.css('animationDuration', `${Math.random() * 3 + 2}s`)
    snowConteiner.append(snowFlake);
    setTimeout(()=>{
        snowFlake.remove();
    }, 5000)
}

setInterval(createSnowFlake, 30);
