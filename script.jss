
canvas = document.getElementById("canvas")

radius=50;
xc=100
yc=100
theta= Math.PI/2
x=xc
y=yc

if(canvas.getContext){
    ctx = canvas.getContext("2d")
    ctx.translate(xc,yc)
    //move to tranlated center
    xc=0
    yc=0
    ctx.beginPath()
    ctx.arc( xc, yc, radius +10, 0, 2*Math.PI)
    ctx.lineWidth=6
    ctx.strokeStyle='rgb(255,0,255)'
    ctx.stroke()
    
    // Hour marks
    ctx.save()
    for (i=0 ; i<= 12; i++){
        ctx.beginPath()
        ctx.rotate(Math.PI/6.0)
        ctx.moveTo( radius-5, 0)
        ctx.lineTo (radius+10,0)
        ctx.strokeStyle='rgb(0,255,255)'
        ctx.stroke()
    }
    ctx.restore()
}

setInterval(drawDial, 1000)

function drawDial(){
    
    if (theta < 2*Math.PI){
        theta -= (Math.PI/30)
    }else{ 
        theta = Math.PI/2.0
    }
    //erase old dial position
      ctx.strokeStyle='white'
      ctx.lineWidth=4
      ctx.stroke()
    
    //compute new dial position
    x=xc + radius * Math.cos(theta)
    y=yc - radius * Math.sin(theta)

    //draw new dial position
    ctx.beginPath(xc,yc)
    ctx.moveTo(xc,yc)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.lineTo (x-1,y-1)
    ctx.stroke()
}

