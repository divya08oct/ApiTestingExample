// JSON coming from server to display list of available customers

var customerData = {
    "status": 200,
    "username": "Deepak Chaurasia",
    "lastLogin": "6:30PM 23 Nov 2019",
    "listOfCustomers": [
        {
            "sno": 1,
            "customerName": "Rakesh Pandey1",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        },
        {
            "sno": 2,
            "customerName": "Vikas",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Kanpur",
                "currentAddress": "Delhi"
            }
        },
        {
            "sno": 3,
            "customerName": "Rakesh Pandey",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        },
        {
            "sno": 4,
            "customerName": "Rakesh Pandey",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        },
        {
            "sno": 5,
            "customerName": "Rakesh Pandey",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        },
        {
            "sno": 6,
            "customerName": "Rakesh Pandey",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        },
        {
            "sno": 7,
            "customerName": "Rakesh Pandey",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        },
        {
            "s_no": 8,
            "customerName": "Rakesh Pandey",
            "mobile": "9088898989",
            "address": {
                "permanentAddress": "Allhabad",
                "currentAddress": "Delhi"
            }
        }
    ]
}

function showCustomerData(){

    var len = customerData.listOfCustomers.length;

    var myData = "";
    for(var i=0; i< len; i++){
        myData = myData + "<tr><td>"+customerData.listOfCustomers[i].sno+"</td><td>"+customerData.listOfCustomers[i].customerName+"</td><td>"+customerData.listOfCustomers[i].mobile+"</td><td>"+customerData.listOfCustomers[i].address.permanentAddress+"-"+customerData.listOfCustomers[i].address.currentAddress+"</td></tr>"
    }

    document.getElementById("tableData").innerHTML = myData;
}

