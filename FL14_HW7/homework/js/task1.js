let batteries = prompt('Enter amount of batteries'), 
  defectivePers = prompt('Enter the percentage of defective batteries'), 
  workingBatt, 
  defectiveBatt;
const zero = 0, 
  maxPers = 100;
if (batteries !== isNaN && defectivePers !== isNaN && batteries >= zero && 
  defectivePers >= zero && defectivePers <= maxPers) {
    defectiveBatt = batteries * defectivePers / maxPers;
    workingBatt = batteries - defectiveBatt;
    alert('Amount of batteries: ' + batteries + '\nDefective rate: ' + defectivePers + 
    '% \nAmount of defective batteries: ' + defectiveBatt + '\nAmount of working batteries: ' + workingBatt);
} else {
    alert('Invalid input data');
}