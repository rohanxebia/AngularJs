
function getInfo(){
 
 var ks = $('#notes').val().split("\n");
	var someObj = {};
  someObj.labelIds = [];

$.each(ks, function(k){
      $("#finalList").append("<div class='list-box' > <input type='checkbox'  id='"+ks[k]+"'><label for='check' id='label"+ks[k]+"' >"+ks[k]+"</label></div>");
		someObj.labelIds.push("label"+ks[k]);

           });

$('#notes').val('');
check(someObj.labelIds);
}


function check(labelIds){
 $("input:checkbox").change(function() {
   
 var someObj = {};
    someObj.taskDone = [];
   someObj.taskRemaining = [];
    $("input:checkbox").each(function() {

        if ($(this).is(":checked")) {
		
		$(this).hide();
		var id = $(this).attr("id");
			
		$("#label"+id).remove();
	
            someObj.taskDone.push($(this).attr("id"));
	    doneList(someObj.taskDone);;
          }
    });
});
}

function doneList(checkedItem){
$("#doneList").empty();

$.each(checkedItem,function(k){

$("#doneList").append("<div class='list-box'><input type='checkbox'  class='check-with-label'  id='"+checkedItem[k]+"'><label for='check' class='label-for-check' >"+checkedItem[k]+"</label></div>");


});

$("#checkedItem").empty();
}



