/*  test add******************
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * Mbase************* includes this JavaScript file by default within HTML pages authored in Maqetta.
 */
//// User defined Function

// Get Age คำนวณอายุ
function getAge(dateString, dateCal) {
		if (dateCal.length == 0)
		{
			var now = new Date();
		  	var today = new Date(now.getYear(),now.getMonth(),now.getDate());
		  	var yearNow = now.getFullYear();
		  	var monthNow = now.getMonth() + 1;
		  	var dateNow = now.getDate();
		}
		else
		{
			var yearNow = parseInt(dateCal.substr(0, 4));
			var monthNow = parseInt(dateCal.substr(5, 2));
			var dateNow = parseInt(dateCal.substr(8, 2));
		}
		var yearDob = parseInt(dateString.substr(0, 4));
		var monthDob = parseInt(dateString.substr(5, 2));
		var dateDob = parseInt(dateString.substr(8, 2));
		var age = {};
		var ageString = "";
		var yearString = "";
		var monthString = "";
		var dayString = "";
	
	
		yearAge = yearNow - yearDob;
		if (monthNow >= monthDob)
		  var monthAge = monthNow - monthDob;
		else {
		  yearAge--;
		  var monthAge = 12 + monthNow -monthDob;
		}
		
		if (dateNow >= dateDob)
			var dateAge = dateNow - dateDob;
		else {
		    monthAge--;
		    var dateAge = 31 + dateNow - dateDob;
		
		    if (monthAge < 0) {
		      monthAge = 11;
		      yearAge--;
		    }
		}
	
	  age = {
	      years: yearAge,
	      months: monthAge,
	      days: dateAge
	      };
	
	  yearString = " ปี";
	  monthString = " เดือน";
	  dayString = " วัน";
	
	
	  if ( (age.years > 0) &&(age.years < 5) && (age.months > 0) && (age.days > 0) )
	    	ageString = age.years + yearString + " " + age.months + monthString + " " + age.days + dayString;
	  else if ( (age.years > 0) &&(age.years > 5) && (age.months > 0) && (age.days > 0))
	    	ageString = age.years + yearString + " " + age.months + monthString;
	  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
	    	ageString = age.days + dayString;
	  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
	    	ageString = age.years + yearString + " Happy Birthday!!";
	  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
	    	ageString = age.years + yearString + " " + age.months + monthString;
	  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
	    	ageString = age.months + monthString + " " + age.days + dayString;
	  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
	    	ageString = age.years + yearString + " " + age.days + dayString;
	  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
	    	ageString = age.months + monthString;
	  else ageString = "Oops! ไม่สามารถคำนวณอายุได้ !";
	
	  return ageString;
}

function d2d_diff(date1,date2,interval) {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return date2.getFullYear() - date1.getFullYear();
        case "months": return (
            ( date2.getFullYear() * 12 + date2.getMonth() )
            -
            ( date1.getFullYear() * 12 + date1.getMonth() )
        );
        case "weeks"  : return Math.floor(timediff / week);
        case "days"   : return Math.floor(timediff / day); 
        case "hours"  : return Math.floor(timediff / hour); 
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
}

// TsDate แสดงวันที่ไทย แบบย่อ
function tsdate(edate, withtime)
 {
 	if (edate == "") { return "-";}
 	else {
	 	var tday = edate.getDate();
	 	var tmonth0 = edate.getMonth();
	 	var tmonth = "";
	 		if (tmonth0 == 0) {tmonth = "มค.";}
	 		else if (tmonth0 == 1){ tmonth = "กพ.";}
	 		else if (tmonth0 == 2){ tmonth = "มีค.";}
	 		else if (tmonth0 == 3){ tmonth = "เมย.";}
	 		else if (tmonth0 == 4){ tmonth = "พค.";}
	 		else if (tmonth0 == 5){ tmonth = "มิย.";}
	 		else if (tmonth0 == 6){ tmonth = "กค.";}
	 		else if (tmonth0 == 7){ tmonth = "สค.";}
	 		else if (tmonth0 == 8){ tmonth = "กย.";}
	 		else if (tmonth0 == 9){ tmonth = "ตค.";}
	 		else if (tmonth0 == 10){ tmonth = "พย.";}
	 		else{ tmonth = "ธค.";}
	 	var tyear = edate.getFullYear() +543;
	 	var nhour = edate.getHours();
	 	var thour = nhour.toString();
	 	if(thour.length == 1){thour = "0" + thour;}
	 	var nmin = edate.getMinutes();
	 	var tmin = nmin.toString();
	 	if(tmin.length == 1){tmin = "0" + tmin;}
	 	if (typeof(withtime) == 'undefined')
	 	{
	 	return tday.toString() + " " + tmonth + " " + tyear.toString();
	 	}
	 	else
	 	{
	 	return tday.toString() + " " + tmonth + " " + tyear.toString() + "  " + thour.toString() + ":" + tmin + " น.";
	 	}
	 }
 }
 
 // tldate แสดงวันที่ไทย แบบยาว
 function tldate(edate)
 {
 	var tday = edate.getDate();
 	if (tday != 0) {
 	var tmonth0 = edate.getMonth();
 	var tmonth = "";
 		if (tmonth0 == 0) {tmonth = "มกราคม";}
 		else if (tmonth0 == 1){ tmonth = "กุมภาพันธ์";}
 		else if (tmonth0 == 2){ tmonth = "มีนาคม";}
 		else if (tmonth0 == 3){ tmonth = "เมษายน";}
 		else if (tmonth0 == 4){ tmonth = "พฤษภาคม";}
 		else if (tmonth0 == 5){ tmonth = "มิถุนายน";}
 		else if (tmonth0 == 6){ tmonth = "กรกฎาคม";}
 		else if (tmonth0 == 7){ tmonth = "สิงหาคม";}
 		else if (tmonth0 == 8){ tmonth = "กันยายน";}
 		else if (tmonth0 == 9){ tmonth = "ตุลาคม";}
 		else if (tmonth0 == 10){ tmonth = "พฤศจิกายน";}
 		else{ tmonth = "ธันวาคม";}
 	var tyear = edate.getFullYear() +543;
 	return tday.toString() + " " + tmonth + " พ.ศ." + tyear.toString();}
 	else {return "-";}
 }
 
 // แปลง Javascript Date  เป็น Character
 function d2txt(dDate, withtime) {
 	if (dDate == "") {return "0000.00.00 00:00";}
 	else {
		var cYear = dDate.getFullYear().toString();
		var cMonth = (dDate.getMonth() + 1).toString();
		var cDate = dDate.getDate().toString();
		var cTime = dDate.getHours().toString() + ":" + dDate.getMinutes().toString();
		var cReturn = cYear + "." + cMonth + "." + cDate;
		if (withtime != undefined) {cReturn = cReturn + " " + cTime;}
		return cReturn;
	}
}

// แสดงผล Number เป็น 1,000,000.00
function s1000(nnumber) {
	var cRetVal = nnumber.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	return cRetVal;
}

// แสดงผล Array ของการเลือกรายการใน EdgetoEdgeDataList
function selected(cList) {
	var arr = [];
	require([
		"dojo/ready",
		"dijit/registry",
 		"dojo/_base/array"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg, array){
		ready(function(){
			var Listobj = reg.byId(cList);
			arr = array.filter(Listobj.getChildren(), function(w){return w.checked;});
		});
	});
	return arr[0];
}

// Function สำหรับ search_box ////////////////////
function search(cbox, cpane, clist) {
	require([
 	"dojo/ready",
 	"dijit/registry",
 	"dojo/data/ItemFileReadStore",
 	"dojo/data/ItemFileWriteStore",
 	"dojo/on",
 	"dojo/_base/xhr"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg, ifrs, ifws, on, xhr){
		ready(function(){
			var search_box = reg.byId(cbox);
			var search_pane = reg.byId(cpane);
			var search_list = reg.byId(clist);

			// Click ที่ Box เพื่อค้นหา
			on(search_box, "click", function() {
				search_list.setQuery({label:"*"});
				search_pane.set('open', true);
			});
			// Search Lab List
			on(search_box, "keyup", function() {
				lcsearchtext = search_box.get("value").trim().toUpperCase();
	    		search_list.setQuery({label:lcsearchtext + "*"});
			});
		});
	});
}
////////////////////////////////////////////////////////

//// Fill EdgetoEdgeDataList ด้วยข้อมูลจาก PHP
// Function สำหรับ Fill EdgetoEdge List ////////////////////
function list(cobject, cphp, cheader) {
	require([
 	"dojo/ready",
 	"dijit/registry",
 	"dojo/data/ItemFileReadStore",
 	"dojo/data/ItemFileWriteStore",
 	"dojo/_base/xhr"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg, ifrs, ifws, xhr){
		ready(function(){
			var listObj = reg.byId(cobject);
			var new_store = new ifws({data:{items:[]}});
			listObj.setStore(new_store);
			if (typeof(cheader) != "undefined") {var list_add = listObj.store.newItem({label: cheader, value : "0", header: true});}
			xhr.get({
				url: ip_address + cphp,
				headers: { "X-Requested-With": null },
				content: {},
				load: function(result) {
					//if (cobject == "staff_list") {alert (result);}
					// ไม่ควรมี Field ชื่อ id
					php_return = result.replace(/[\n\r]*/g,'');
					cMacro = eval('storeData = ' + php_return);
					listStore = new ifrs({data:storeData});
					listObj.setStore(listStore);
				},
				error: function() {	}
			});
		});
	});
}
////////////////////////////////////////////////////////

function store(cobject) {
	require([
 	"dojo/ready",
 	"dijit/registry",
 	"dojo/data/ItemFileWriteStore"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg, ifws){
		ready(function(){
			var listObj = reg.byId(cobject);
			var new_store = new ifws({data:{items:[]}});
			listObj.setStore(new_store);
		});
	});
}
////////////////////////////////////////////////////////

//// Delete Item จาก RoundRectDataList ต้องระบุ obj_name ก่อนใช้ function
function deleteOneItem(cobject) {
 	require([
 	"dojo/ready",
 	"dijit/registry"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg){
		ready(function(){
			var list_obj = reg.byId(cobject);
		 	function deleteAction(items){
		    	if(items){
		 	       	var i;
					for(i = 0; i < items.length; i++){
			       		var item = items[i];
			       		list_obj.store.deleteItem(item);
		    		}
		       	}
		    }
			var all_list = list_obj.getChildren();
			var list_selected = '';
			for (i=0; i<all_list.length; i++){
				if (all_list[i].checked == true){
					list_selected = all_list[i].label;
				}
			}
			var pitems = list_obj.store._arrayOfAllItems[i];
		    list_obj.store.fetch({query:{label: list_selected}, onComplete: deleteAction, queryOptions: {ignoreCase:true}});
		});
	});
}

//// ลบรายการจาก List ทุกรายการ
function clearList(pcObject) {
	 require([
 	"dojo/ready",
 	"dojo/data/ItemFileWriteStore",
 	"dijit/registry"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, ifws, reg){
		ready(function(){
			var active_list = reg.byId(pcObject);
			var active_store = new ifws({data:{items:[]}});
			active_list.store = null;
			active_list.setStore(active_store);
			function deleteFromList(items, request){
		    	if(items ){
		       		var del;
					for(del = 0; del < items.length; del++){
			   			var item = items[del];
						active_list.store.deleteItem(item);
			   			active_list.store.save();
		    		}
		    	}
	   		}
			var all_list = active_list.getChildren();
	    	var list_selected = '';
		    for (nlist=0; nlist<all_list.length; nlist++){
	   			list_selected = all_list[nlist].label;
	   			eval("active_list.store.fetch({query:{label: list_selected}, onComplete: deleteFromList, queryOptions: {ignoreCase:true}});");
	       	}
		});
	});
}

//// Pad String Parameter pad = รูปแบบเต็ม 00000000
function pad(str, pad) {
  if (typeof str === 'undefined') 
    return pad;
else {
    return (pad + str).slice(-pad.length);
  }
}

//// Select List Item Parameter1 List Object คืนค่า Obj ที่มี Field ตาม Record ที่เลือก, Parameter2 = 1 แสดงเฉพาะ record number ที่เลือก เริ่มต้นจาก 0
function selected_row(clist, nrec) {
	var s = 0;
	var return_obj = [];
	require([
 	"dojo/ready",
 	"dijit/registry"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg){
		ready(function(){
			var active_list = reg.byId(clist);
			return_obj = active_list.getChildren();
		    for (s=0; s<return_obj.length; s++){
		   		if (return_obj[s].get("focused") == true){
					break;}
		   	}
		});
	});
	if (nrec == 1) {return s;}
	else {return return_obj[s];}
}
//////////////////////////////////////////////////////////////////////
// Function สำหรับ Query ข้อมูลจาก mySQL                                   ///////////
// Parameter = php และ เงื่อนไข xxx.php?yyy=999                     ///////////
// Returng เพียง 1 Record เป็น Object ที่มีชื่อ Field เป็น Properties ////////////
//////////////////////////////////////////////////////////////////////
function php2obj(cphp) {
 	 var xhrArgs = {
    	url: ip_address + cphp,
    	handleAs: "text",
    	sync: true,
    	load: function(data){},
    	error: function(error){}
  	}
  	// Call the asynchronous xhrGet
  	var deferred = dojo.xhrGet(xhrArgs);
  	var creturn = deferred.results;
  	ccheck = creturn.toString();
  	ccheck = ccheck.trim();
  	if (ccheck.substr(0, 1) == "{") {
	   	var creturn = creturn[0].replace(/[\n\r]*/g,'');
	   	var cmacro = "ret_obj = " + creturn;
	   	eval(cmacro);
		return ret_obj;
	}
	else {return ccheck.replace(",", "").trim();}
}
/////////////////////////////////////////////////////////////////////////////////////////////

//// แสดงกราฟ ส่งค่า DataList, Field ค่าที่จะแสดง, ชื่อ div ที่จะแสดงกราฟ และ ประเภทของกราฟ
function graph(clistobj, cvalfield, cdiv, ctype, nstep1, nstep2) {
	if (nstep1 == undefined) {nstep1 = 10};
	if (nstep2 == undefined) {nstep2 = 1};
	require([
 	"dojo/ready",
 	"dijit/registry",
 	"dojo/dom",
    "dojox/charting/Chart",
    "dojox/charting/axis2d/Default",
    "dojox/charting/plot2d/Lines",	
    "dojox/charting/plot2d/StackedColumns",	
	"dojox/charting/plot2d/Grid"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg, dom, Chart, Axis, Lines, Columns, Grid){
		ready(function(){
			var list_obj = reg.byId(clistobj);
			var item = list_obj.getChildren();
		   	var item_list = [];
		   	var item_label = [];
		   	var item_cnt = item.length;
			for (i = 0; i < item_cnt; i++)
			{
				item_list[i] = parseFloat(item[i][cvalfield]);
				item_label[i] = {value: i, text: item[i].label};
			}
			var x_chart = Chart(dom.byId(cdiv));
			x_chart.destroy();
			var x_chart = Chart(dom.byId(cdiv)).
		        addAxis("x", { fixLower: "minor", fixUpper: "minor", natural: true, majorTickStep: nstep1, minorTickStep: nstep2, labels: item_label }).
		        addAxis("y", { vertical: true, fixLower: "major", fixUpper: "major", includeZero: true }).
		        addPlot("default", { type: ctype }).
		        addPlot("grid", { type: Grid, renderOnAxis: false, majorVLine: { color: "black", width: 1 }, majorHLine: { color: "black", width: 1 } }).
		        addSeries("จำนวน", item_list, {stroke: {color: "blue", width: 3}}).
		        render();
		});
	});
}

// Function สำหรับ Fill EdgetoEdge List ////////////////////
function mysave(cphp, ccode) {
	require([
 	"dojo/_base/xhr"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(xhr){
		xhr.get({
			url: ip_address + cphp,
			headers: { "X-Requested-With": null },
			content: {},
			load: function(result) {
				//alert (result);
				var cmacro = ccode;
				eval(cmacro);
			},
			error: function() {alert ("บันทึกข้อมูลไม่สำเร็จ !!!");}
		});
	});
}
////////////////////////////////////////////////////////
function ctot(cdate) {
	var lcdate = cdate.split(/\-|\s/);
    var ldReturn = new Date(lcdate.slice(0,3).join('/')+' '+lcdate[3]);
    if (ldReturn == "Invalid Date") {return "";}
    else {return ldReturn;}
}

///////////////////////////////////////////////////////

function sw_status(clist, cswitch) {
	var cmacro = "ctext = " + clist + ".children." + cswitch + ".innerHTML";
	eval(cmacro);
	var nposition = ctext.search("value=") + 6;
	var creturn0 = ctext.substr(nposition, 5).replace(/"/g, '').trim();
	var creturn = creturn0.replace(/>/g, '').trim();
	return creturn;
}

function sw2list(clist, cswitch, clabel, nvalue) {
	require([
 	"dojo/ready",
 	"dijit/registry"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg){
		ready(function() {
			var active_list = reg.byId(clist);
			var item = new dojox.mobile.ListItem({
			        id: cswitch,
			        label: clabel
			});
			var cmacro1 = "var " + cswitch + " = new dojox.mobile.Switch({class: 'mblSwRoundShape1 color1'})";
			eval(cmacro1);
			var cmacro2 = cswitch + ".set('leftLabel', 'YES')";
			eval(cmacro2);
			var cmacro3 = cswitch + ".set('rightLabel', 'NO')";
			eval(cmacro3);
			if (nvalue == 1) {
				var cmacro4 = cswitch + ".set('value', 'on')";
				eval(cmacro4);}
			else {
				var cmacro5 = cswitch + ".set('value', 'off')";
				eval(cmacro5);}
			var cmacro6 = "item.addChild(" + cswitch + ")";
			eval(cmacro6);
			active_list.addChild(item);
		});
	});
}

// Read Text File
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
///////////////////////////////////////////////////////

// Function สำหรับ search_box ////////////////////
function txt_search(cbox, clist) {
	require([
 	"dojo/ready",
 	"dijit/registry",
 	"dojo/data/ItemFileReadStore",
 	"dojo/data/ItemFileWriteStore",
 	"dojo/on",
 	"dojo/_base/xhr"
 	// ชื่อ Function ที่จะนำไปใช้ มาจาก Require เรียงตามลำดับ ตั้งชื่อใหม่ได้
	 ], function(ready, reg, ifrs, ifws, on, xhr){
		ready(function(){
			var search_box = reg.byId(cbox);
			var search_list = reg.byId(clist);

			// Click ที่ Box เพื่อค้นหา
			on(search_box, "click", function() {
				search_list.setQuery({label:"*"});
			});
			// Search Lab List
			on(search_box, "keyup", function() {
				lcsearchtext = search_box.get("value").trim().toUpperCase();
	    		search_list.setQuery({label:lcsearchtext + "*"});
			});
		});
	});
}

// Decode Password
function decode(ccode) {
	var pnumber = parseInt(ccode.substr(0, 1));
	var lnLength = ccode.length;
	var psw = '';
	for (lnCnt = 1;  lnCnt <= lnLength -1; lnCnt++)
		{psw = psw + String.fromCharCode(ccode.charCodeAt(lnCnt) - 17 - pnumber - lnCnt - 1);}
	// All Upper Case
	return psw
}
////////////////////////////////////////////////////////