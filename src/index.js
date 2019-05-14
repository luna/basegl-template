import * as basegl from 'basegl'
import {circle} from 'basegl/display/Shape'

let scene = basegl.scene({domElement: 'scene'});

let myShape = basegl.expr(function(){
  return circle(100) - circle(80);
})

let mySymbol  = basegl.symbol(myShape);
let mySymbol1 = scene.add(mySymbol);
