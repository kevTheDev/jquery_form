$(document).ready(function() { 
	
	standard_options = $("#standard_options").html();
	setupPackageChoices(standard_options);	
  //alert("SO: "+standard_options);
  $("#standard_options").html("");
});

function setupPackageChoices(standard_options) {
	total_cost = $("#iteration_total_cost");
	
	package_choices = $(".package_choice");
	
	package_choices.click(function() {
		//total_cost.text("2000");
		package_name = $(this).attr("value");
		label_id = package_name + "_check_label";
		label = $("#" + label_id);
		
		cost = label.parseNumber();
		
		total_cost.text(""+cost);
		displayPackageDetails(package_name, standard_options);
	});

	
}

function displayPackageDetails(package_details, standard_options) {
	
	
	
	
	
	switch(package_details) {
		case "economy":		  
		  displayEconomyPackage(standard_options);
		break;
		case "standard":		  
		  displayStandardPackage(standard_options);
		break;
		case "priority":		  
		  displayPriorityPackage(standard_options);
		break;
		case "express":		  
		  displayExpressPackage(standard_options);
		break;
		case "special":		  
		  displaySpecialPackage(standard_options);
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

function standardPackageOptionHTML(option_name, option_title) {
	return "<label for='" + option_name + "'>" + option_title + "</label><br />"
}

function displayEconomyPackage(standard_options) {

  html = standard_options
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");


	$("#package_details").html(html);
	
}

function displayStandardPackage(standard_options) {
	
	html = standard_options
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");
	$("#package_details").html(html);
}

function displayPriorityPackage(standard_options) {
	html = standard_options
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");
	$("#package_details").html(html);
}

function displayExpressPackage(standard_options) {
	html = standard_options
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");
	$("#package_details").html(html);
}

function displaySpecialPackage(standard_options) {
	html = standard_options
	     + packageOptionHTML("documentation", 10, "yes", "Include Documentation");	
	$("#package_details").html(html);
}

