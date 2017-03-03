//Helper functions
function print(){
	var newline="<br>";
	var narg=arguments.length;
	if(arguments[narg-1]==="")newline="";
	for(var i=0;i<narg;i++)document.body.innerHTML+=arguments[i]+" ";
	document.body.innerHTML+=newline;
}

function assert(expr,caller=-1){
 var msg = "assert exception : called by" + caller.name ;
 if (!expr) throw(msg) ;
}

function assertLength(arr1,arr2,caller=-1){
 try{
   assert(arr1.length === arr2.length ,caller);
 }
 catch(e){
   msg = "ERROR: arrays "+arr1.name+" and "+arr2.name+" do not have the same length." ;
   alert(msg) ; 
   console.log(msg) ;
 }
}

function dot(arr1,arr2){
 assertLength(arr1,arr2, dot) ;
 var sp = 0;
 for(var i=0 ; i < arr1.length ; i++){
   sp += arr1[i]*arr2[i] ;
 }
 return sp;
}

function add(arr1, arr2,sgn=1){
 assertLength(arr1,arr2, add) ;
 var sum=[] ;
 for(var i=0; i<arr1.length ; i++){
   sum.push( arr1[i] + sgn*arr2[i] );
 }
 return sum;
}

function pScalar(a,b){
 var mult = function(l,a){
  assert( typeof(a.length) === 'number' && typeof(a) !== 'string' ,pScalar)
  var m=[];
  for(var i =0; i<a.length; i++){
    m.push(l*a[i]) ;
  }
  return m;
 }
 if( typeof(a) === 'number' ){
   return mult(a,b) ;
 }
 return mult(b,a)
}


//Perceptron model
function synPotWeighted(X,W,B){
 var synpot=0 ;
 for(var i=0; i<X.length ; i++){
  synpot += X[i]*W[i] ;
 }
 return synpot+B[0] ;
}

function nlHeaviside(z){
 return (z<0)?0:1 ;
}

function perceptron(X,W,B,activation=nlHeaviside,synpot=synPotWeighted){
  return activation( synpot(X,W,B) ) ;
}

//Learning 
function testLearning(){
var tset=[			//the AND function
	{point:[0,0],label:0},
	{point:[1,0],label:0},
	{point:[0,1],label:0},
	{point:[1,1],label:1}
]
var weights=[0.1,0.2] ;
var bias=[0.3] ;

//#Start learning
print("Start learning/training step:",'weights / bias / Total Error')
var eta=0.01
var debug=0
var nIterations=20

for(var i=1 ;  i<=nIterations ; i++){ //we repeat. Goal: hopefully after studying example many times it stops making mistakes E=0-
    var E=0
    for(var j=0; j<tset.length ; j++){
        var x  = tset[j].point ;
        var yt = tset[j].label ;
        if (debug>1) print(x,yt,weights,bias," : ","")
        y=perceptron(X=x,W=weights,B=bias,activation=nlHeaviside)
        E += Math.pow(y-yt,2)
        if (debug) print(x,y,y-yt,E)
        weights = add(weights, pScalar(eta*(y-yt),x), -1) ; // w -= eta * (y-yt) * x
        bias[0] -= eta*(y-yt) ;
    }

    print("End of iteration i="+i,weights,bias," : E=",E)
}
//#After learning
print('Finished',nIterations,'iterations of learning/training','  eta: ',eta,' : weights:',weights,' : bias:',bias[0])
}


