ar katzDeli = [];

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

function currentLine(katzDeliLine) {
 var newLine=[];
 var str='The line is currently: ';
  if(katzDeliLine.length>0) {
    for(let i=0;i<katzDeliLine.length;i++){
   newLine[i] = `${[i+1]}. ${katzDeliLine[i]}`;
   str += newLine.join(', ');
    return str;
  } 
  }
  else {
    return "The line is currently empty.";
  }
}
