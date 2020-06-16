function generateTable(form){
    let amount;
    let rate;
    let years;
    var table;
    var year = 1;

    let interest;

    amount = document.getElementById('deposit').value;
    rate   = document.getElementById('rate').value;
    years  = document.getElementById('years').value;
    
    // console.log(amount);
    // console.log(rate);
    // console.log(years);

    table = 
    	`<table>
    		<tr>
                <th>Year</th> <th>Starting Value</th> 
                <th>Interest Earned</th> <th>Ending Value</th>
    		</tr>
    	
        `

    while (year <= years) {
        table += '<tr>';
        table += '<td>' + years + '</td>';
        table += `<td> $${amount}</td>`;
        interest = (rate/100)*amount;
        interest = +interest;
        table += `<td>${interest}</td>`;    
        table += `<td>${interest+amount}</td>`;
        table += '</tr>';
        year++
    }    

    table += '</table>';

	document.getElementById("result").innerHTML = table;
}