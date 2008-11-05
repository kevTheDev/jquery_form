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

  initPackageOptions();

}


function initPackageOptions() {
	$(".package_option").click(function(){
		  
	  option_name = $(this).attr("name");
	  option_title = $("#" + option_name + "_label").text();
	
	  parent_element = $("#" + option_name + "_option");	
	  cost = parent_element.attr("cost");

	
	  currently_included = parent_element.attr("currently_included");
	  
	  // action can be add [option]
	  action = $(this).attr("action");
	  
	  if(action == "add") {
		
		  if(currently_included == "no") {  // add option to package
			  parent_element.attr("currently_included", "yes");
			
         html = packageOptionChoiceHTML(option_name, cost, "yes", option_title);
			
			   parent_element.html(html);
			   initPackageOptions();
    		 addCostToTotal(parseFloat(cost));
		  }
		  // else: do nothing as already added to package
				
	  }
	  else { // remove option from package
		  
		  if(currently_included == "yes") {
			  parent_element.attr("currently_included", "no");
	
	      html = packageOptionChoiceHTML(option_name, cost, "no", option_title);
	
	      parent_element.html(html);
      	initPackageOptions();
        subtractCostFromTotal(parseFloat(cost));
		  }
		  //else: do nothing as already removed from package
		
	  }
		
	});
}

function currentCost() {
	current_cost = $("#iteration_total_cost").text();
	return  parseFloat(current_cost);
}

function addCostToTotal(cost) {
	new_cost = currentCost() + cost
	$("#iteration_total_cost").text(new_cost);
}

function subtractCostFromTotal(cost) {
	new_cost = currentCost() - cost;
	$("#iteration_total_cost").text(new_cost);	
}

function packageOptionChoiceHTML(option_name, cost, currently_included, option_title) {
	if(currently_included == "no") {
		
		html = "<label for='" + option_name + "' id='" + option_name + "_label'>" + option_title +"</label><br />"
	       + "<input type='radio' name='" + option_name + "' action='add' class='package_option' />Yes "
	       + "<label>+" + cost + "</label><br />"
	       + "<input type='radio' name='" + option_name + "' action='remove' class='package_option' checked='checked' />No "
	       + "<label>included</label><br />"
	}
	else { // currently included == yes
		
		html = "<label for='" + option_name + "' id='" + option_name + "_label'>" + option_title +"</label><br />"
	       + "<input type='radio' name='" + option_name + "' action='add' class='package_option' checked='checked'/>Yes "
	       + "<label id='include_documentation_cost'>included</label><br />"
	       + "<input type='radio' name='" + option_name + "' action='remove' class='package_option' />No "
	       + "<label id='exclude_documentation_cost'>-" + cost + "</label><br />"
	}
	
	return html;
}

// currently_included should be yes or no
// default is yes
function packageOptionHTML(option_name, cost, currently_included, option_title) {
	
	if(currently_included == "no") {
		
		html = "<p id='documentation_option' cost='" + cost + "' currently_included='no' >"
	       + packageOptionChoiceHTML(option_name, cost, currently_included, option_title)
	       + "</p>"
	}
	else { // currently included == yes
		
		html = "<p id='documentation_option' cost='" + cost + "' currently_included='yes' >"
	       + packageOptionChoiceHTML(option_name, cost, currently_included, option_title)
	       + "</p>"
	}
	
	return html;
	
}

function displayEconomyPackage() {

  html = "<label for='delivery_time'>Delivery Time: On Application</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 30 days</label><br />"
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");


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
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");
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
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");
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
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");
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
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");	
	$("#package_details").html(html);
}

