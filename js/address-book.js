/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/
$(".btn").click(sortButton);
$(sortFunc("last"));
function sortButton(){
	var sBtn = $(this);
	$(".btn").removeClass("active");
	sBtn.addClass("active");
	var sortProp = sBtn.attr("data-sortby");
	sortFunc(sortProp);
}
function sortFunc(sortProp){
	$(".address-book").empty();
	var arr = Employees.entries;
	sortObjArray(Employees.entries, sortProp);
	$.each(arr, loopFunc1);
}
function loopFunc1(){
	//$.each(this, loopFunc2);
	var i = $(".template").clone();
	var j;
	for(j in this){
		if(j == "pic"){
			i.find(".pic").attr("src", this["pic"]);
		} else {
			i.find("."+j).html(this[j]);
		}
	}
	$(".address-book").append(i);
	i.removeClass("template");
}

function loopFunc2(){
	var i = $(".template").clone();
	//i.find(".pic").attr("src",this.pic);
	//i.find(".first").html(this.first);
	$(".address-book").append(i);
	i.removeClass("template");
}

/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()