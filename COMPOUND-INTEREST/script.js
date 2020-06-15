


function generateTable(form){
    var amount;
    var rate;
    var years;
    var interest; 
    var table;
    var year = 1;

    amount = document.getElementById('deposit').value;
    rate   = document.getElementById('rate').value;
    years  = document.getElementById('years').value;
    
    console.log(amount);
    console.log(rate);
    console.log(years);

    table = 
    	`<table>
    		<tr>
    			<th>Year</th>
    		</tr>
    	 </table>	
    	`

	document.getElementById("result").innerHTML = table;
}

