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
		  displayEconomyPackage();
		break;
		case "standard":		  
		  displayStandardPackage();
		break;
		case "priority":		  
		  displayPriorityPackage();
		break;
		case "express":		  
		  displayExpressPackage();
		break;
		case "special":		  
		  displaySpecialPackage();
		break;
	}

}

function displayEconomyPackage() {
	
	
	html = "<label for='delivery_time'>Delivery Time: On Application</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 30 days</label><br />"
	$("#package_details").html(html);
	
}

function displayStandardPackage() {
	
	html = "<label for='delivery_time'>Delivery Time: Up to 1 month</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 2 months</label><br />"
	$("#package_details").html(html);
}

function displayPriorityPackage() {
	html = "<label for='delivery_time'>Delivery Time: Up to 2 weeks</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 3 months</label><br />"
	$("#package_details").html(html);
}

function displayExpressPackage() {
	html = "<label for='delivery_time'>Delivery Time: Up to 1 week</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 6 months</label><br />"
	$("#package_details").html(html);
}

function displaySpecialPackage() {
	html = "<label for='delivery_time'>Delivery Time: Up to 3 days</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 12 months</label><br />"
	$("#package_details").html(html);
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