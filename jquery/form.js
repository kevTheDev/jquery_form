$(document).ready(function() { 
  
	economy_check = $("#economy_check");
	standard_check = $("#standard_check");
	priority_check = $("#priority_check");
	express_check = $("#express_check");
	special_check = $("#special_check");
	
	total_cost = $("#iteration_total_cost");
	
	
	
	
	economy_check.click(function(){
		total_cost.text("1000");		
		displayPackageDetails("economy");
	});
	
	standard_check.click(function(){
		total_cost.text("1250");
		displayPackageDetails("standard");
	});
	
	priority_check.click(function(){
		total_cost.text("1500");
		displayPackageDetails("priority");
	});
	
	express_check.click(function(){
		total_cost.text("2000");
		displayPackageDetails("express");
	});
	
	special_check.click(function(){
		total_cost.text("3000");
		displayPackageDetails("special");
	});
  
});

function displayPackageDetails(package_details) {
	
	switch(package_details) {
		case "economy":
		  $("#package_details").html("<p>ECONOMY SELECTED</p>");
		break;
		case "standard":
		  $("#package_details").html("<p>standard SELECTED</p>");
		break;
		case "priority":
		  $("#package_details").html("<p>priority SELECTED</p>");
		break;
		case "express":
		  $("#package_details").html("<p>express SELECTED</p>");
		break;
		case "special":
		  $("#package_details").html("<p>special SELECTED</p>");
		break;
	}
	
	
	
}







function initPackageCheckBoxes() {
	
	budget_checkbox = $("#budget_check");
	premium_checkbox = $("#premium_check");
	
	budget_checkbox.click(function(){
		alert("BUDGET CLICKED");
	});
	
	premium_checkbox.click(function(){
		alert("PREMIUM CLICKED");
	});
	
}