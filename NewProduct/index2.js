var id = 0;
function sell() 
{
    id++;
    var productname = form.productname.value;
    var quantity = form.quantity.value;
    var unitprice = form.unitprice.value;
    var discount = form.discount.value;
    var sub = quantity*unitprice*(1-discount/100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + productname + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>$" + unitprice + "</td>";
    row += "<td>%" + discount + "</td>";
    row += "<td>$" + sub + "</td>";
    row += "</tr>";
    document.getElementById("table").innerHTML += row;
}
