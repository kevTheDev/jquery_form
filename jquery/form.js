$(document).ready(function() { 
  
	budget_checkbox = $("#budget_check");
	premium_checkbox = $("#premium_check");
	
	total_cost = $("#iteration_total_cost");
	
	budget_checkbox.click(function(){
		total_cost.text("10");		
		
	});
	
	premium_checkbox.click(function(){
		total_cost.text("50");
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