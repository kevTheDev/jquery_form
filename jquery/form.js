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

// function initPackageOptions() {
// 	$(".package_option").click(function(){
// 		
// 		clicked_check = $(this);
// 		
// 		
// 		cost = $(this).attr("cost");
// 		currently_included = $(this).attr("currently_included");		
// 		value = $(this).attr("value");
// 		name = $(this).attr("name");
// 		
// 		if(value == "include") {
// 			
// 			unclicked_check = $("#exclude_" + name);
// 			
// 			cost_label_id = "include_" + name + "_cost";
// 		  cost_label = $("#" + cost_label_id);
// 		  
// 		  partner_cost_label_id = "exclude_" + name + "_cost";
// 			partner_cost_label = $("#" + partner_cost_label_id);
// 
// 			if(currently_included == "yes") {
// 				
// 				cost_label.text("included");
// 				partner_cost_label.text("-" + cost);
// 				//addCostToTotal(cost);
// 				$(this).attr("currently_included", "yes");
// 				unclicked_check.attr("currently_included", "yes");
// 			}
// 			else {
// 				
// 				cost_label.text("+" + cost);
// 				partner_cost_label.text("included");
// 				$(this).attr("currently_included", "yes");
// 				unclicked_check.attr("currently_included", "yes");
// 				addCostToTotal(cost);
// 			}			
// 			
// 		}
// 		else {
// 			
// 			unclicked_check = $("#include_" + name);
// 			
// 			cost_label_id = "exclude_" + name + "_cost";
// 		  cost_label = $("#" + cost_label_id);
// 		  
// 		  partner_cost_label_id = "include_" + name + "_cost";
// 			partner_cost_label = $("#" + partner_cost_label_id);
// 			
// 			if(currently_included == "yes") {
// 				cost_label.text("-" + cost);
// 				partner_cost_label.text("included");
// 				subtractCostFromTotal(cost);
// 				$(this).attr("currently_included", "no");
// 				unclicked_check.attr("currently_included", "no");
// 			}
// 			else {
// 				partner_cost_label.text("+" + cost);
// 				cost_label.text("included");
// 				subtractCostFromTotal(cost);
// 				$(this).attr("currently_included", "no");
// 				unclicked_check.attr("currently_included", "no");
// 				
// 			}
// 		}
// 		
// 		
// 	});
// }

function initPackageOptions() {
	$(".package_option").click(function(){
		  
	  option_name = $(this).attr("name");
	
	  parent_id = "#" + option_name + "_option";
	  
	
	  parent_element = $("#" + option_name + "_option");	
	  cost = parent_element.attr("cost");
	  
	//alert("PARENT cost: "+cost);
	
	  currently_included = parent_element.attr("currently_included");
	  
	  // action can be add [option]
	  action = $(this).attr("action");
	  
	  //alert("clicked package option: "+action+"  currently included: "+currently_included);
	
	  if(action == "add") {
		  
		  //alert("clicked add when CI: "+currently_included);
		
		  if(currently_included == "no") {  // add option to package
			  parent_element.attr("currently_included", "yes");
			
			  html = "<label for='documentation'>Include Documentation</label><br />"
		     + "<input type='radio' name='documentation'  action='add' id='include_documentation' class='package_option' checked='checked' />Yes "
		     + "<label id='include_documentation_cost'>included</label><br />"
	       + "<input type='radio' name='documentation' action='remove' id='exclude_documentation' class='package_option' />No "
	       + "<label id='exclude_documentation_cost'>-10</label><br />"
			
			   parent_element.html(html);
			   initPackageOptions();
    		 addCostToTotal(parseFloat(cost));
		  }
		  // else: do nothing as already added to package
				
	  }
	  else { // remove option from package
		  
		  if(currently_included == "yes") {
			  parent_element.attr("currently_included", "no");
			
			  html = "<label for='documentation'>Include Documentation</label><br />"
		     + "<input type='radio' name='documentation'  action='add' id='include_documentation' class='package_option'  />Yes "
		     + "<label id='include_documentation_cost'>+10</label><br />"
	       + "<input type='radio' name='documentation' action='remove' id='exclude_documentation' class='package_option' checked='checked'/>No "
	       + "<label id='exclude_documentation_cost'>included</label><br />"
	
	
	      parent_element.html(html);
      	initPackageOptions();
        subtractCostFromTotal(parseFloat(cost));
		  }
		  //else: do nothing as already removed from package
		
	  }
		
	});
}


function addCostToTotal(cost) {
	//alert("ADD " +cost);
	
	current_cost = $("#iteration_total_cost").text();
	current_cost = parseFloat(current_cost);
	
	
	//alert("current COST: "+current_cost);
	//alert("COST to add: "+cost);
	
	//alert("current cost class: "+typeof(parseInt(current_cost)));
	//alert("cost class: "+typeof(cost));
	
	new_cost = parseFloat(current_cost) + cost
	//alert("new_cost: "+new_cost);
	$("#iteration_total_cost").text(new_cost);
}

function subtractCostFromTotal(cost) {
	//alert("SUBTRACT " +cost);
	current_cost = $("#iteration_total_cost").parseNumber();
	current_cost = parseFloat(current_cost);
	
	
	new_cost = current_cost - cost;
	//alert("new_cost: "+new_cost);
	$("#iteration_total_cost").text(new_cost);
	
}

function displayEconomyPackage() {
	
	
	html = "<label for='delivery_time'>Delivery Time: On Application</label><br />"
	     + "<label for='initial_consultation'>Initial Consultation: Free</label><br />"
	     + "<label for='delivery_guarantee'>Delivery Time & Budget Guarantee: Yes</label><br />"
	     + "<label for='money_back_guarantee'>Money Back Satisfaction Guarantee: Yes</label><br />"
	     + "<label for='hosting_included'>Hosting Included: 30 days</label><br />"
	     + "<label for='project_management_tool'>Project Management Tool: Yes</label><br />"
	     + "<label for='extended_project_management'>Extended use of Project Management Tool: delivery + 30 days</label><br />"
	     + "<p id='documentation_option' cost='10' currently_included='yes' >"
	     + "<label for='documentation'>Include Documentation</label><br />"
	     + "<input type='radio' name='documentation' value='include' action='add' id='include_documentation' class='package_option' cost='10' currently_included='yes' checked='checked'/>Yes "
	     + "<label id='include_documentation_cost'>included</label><br />"
       + "<input type='radio' name='documentation' value='exclude' action='remove' id='exclude_documentation' class='package_option' cost='10' currently_included='no' />No "
       + "<label id='exclude_documentation_cost'>-10</label><br />"
       + "</p>"
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