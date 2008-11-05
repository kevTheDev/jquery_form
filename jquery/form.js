$(document).ready(function() { 
  
	economy_check = $("#economy_check");
	standard_check = $("#standard_check");
	priority_check = $("#priority_check");
	express_check = $("#express_check");
	special_check = $("#special_check");
	
	total_cost = $("#iteration_total_cost");
	
	
	
	
	economy_check.click(function(){
		total_cost.text("1000");		
		
	});
	
	standard_check.click(function(){
		total_cost.text("1250");
	});
	
	priority_check.click(function(){
		total_cost.text("1500");
	});
	
	express_check.click(function(){
		total_cost.text("2000");
	});
	
	special_check.click(function(){
		total_cost.text("3000");
	});
  
});

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