x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}
    recognition.onresult = function(event)  {

        console.log(event);

        var content = event.results[0][0].transcript;

        document.getElementById("status").innerHTML = "speech has been recognized as:" + content;
        if(content =="Circle")
        {

            x = Math.floor(Math.round() * 900);
            y = Math.floor(Math.round() * 600);
            document.getElementById("status").innerHTML = "Started drawing circle ";
            draw_circle = "set";
        }
        if(content =="Rectangle")
        {

            x = Math.floor(Math.round() * 900);
            y = Math.floor(Math.round() * 600);
            document.getElementById("status").innerHTML = "Started drawing rectangle ";
            draw_circle = "set";
        }
    }

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "circle is drawn. ";
        draw_circle =  "";
    }

    if(draw_rect == "set")
    {
        rect(x, y, 70,50 );
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }

} 

