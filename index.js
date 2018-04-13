var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
  
  katzDeliLine.push(newPerson);
  var index = katzDeliLine.length;
   return "Welcome, "+newPerson+". You are number " +index+ " in line.";
}

function nowServing(katzDeliLine) {
  var name=katzDeliLine.shift();
  if(katzDeliLine.length>0) {
    return  'Currently serving ' +name+'.';
  }else{
    return "There is nobody waiting to be served!";
  }
}  

