'use strict';

function collect_all_even(collection) {

	var collection_a = collection.join();
	var reg = new RegExp("[0-9]+[02468]|\\b[02468]\\b","g");
	var result;
	var i = 0;
	var arr = new Array();
	
	while ((result = reg.exec(collection_a)) != null)  {
		arr[i] = parseInt(result[0]);
		i++;
 	}
	return arr;
}

module.exports = collect_all_even;
