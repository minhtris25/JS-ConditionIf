//9.1
var a = Number(prompt("nhập a "))
document.writeln("số "+a+" là ");
if (a>=0) {

    document.write("số nguyên dương <br /> ")
    
}else{
    document.write("số nguyên âm <br /> ")
}
//9.2
var n = Number(prompt("nhập n "))
document.writeln("số "+n);
if(n % 3 == 0 ){
    document.write("chia hết cho 3 ")

}else{
    document.write("không chia hết cho 3 ")
}
if(n % 5 == 0 ){
    document.write("chia hết cho 5 <br />")

}else{
    document.write("không chia hết cho 5 <br />")
}
//9.3
var thang = Number(prompt("Nhập tháng từ 1 đến 12: "));

if (thang < 1 || thang > 12) {
    document.write("Tháng không hợp lệ. Vui lòng nhập giá trị từ 1 đến 12.");
} else {
    document.write("Tháng " + thang + " có ");
    
    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        document.write("31 ngày<br />");
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        document.write("30 ngày<br />");
    } else if (thang === 2) {
        document.write("28 hoặc 29 ngày<br />");
    }
}

//9.4
var soa = Number(prompt("Nhập hệ số a:"))
var sob = Number(prompt("Nhập hệ số b:"))
var soc = Number(prompt("Nhập hệ số c:"))
document.write("phương trinh bât 2 là: "+soa+"X2+"+sob+"X+"+soc+"=0 <br />");
if (soa == 0) {
    if (b != 0) {
        document.write("Phương trình có nghiệm duy nhất x = " + (-soc / sob)+"<br />");
    } else {
        document.write("Phương trình vô nghiệm.<br />");
    }
} else {
    delta = sob * sob - 4 * soa * soc;
    if (delta > 0) {
         x1 = (-sob + Math.sqrt(delta)) / (2 * soa);
         x2 = (-sob - Math.sqrt(delta)) / (2 * soa);
        document.write("Phương trình có 2 nghiệm phân biệt:");
        document.write("x1 = " + x1);
        document.write(" x2 = " + x2);
    } else if (delta == 0) {
         x = -sob / (2 * soa);
        document.write("Phương trình có nghiệm kép x = " + x+"<br />");
    } else {
        document.write("Phương trình vô nghiệm.<br />");
    }
}
//9.5
var sa = parseFloat(prompt("nhập cạnh a:"))
var sb = parseFloat(prompt("nhập cạnh b:"))
var sc = parseFloat(prompt("nhập cạnh c:"))
if(sa>0 && sb>0 && sc>0 ){
    if(sa+sb >sc && sa + sc > sb && sb + sc > sa ){
        document.write(sa+","+sb+","+sc+" là ba cạnh tam giác.")
    }else{
        document.write(sa+","+sb+","+sc+" không phải là ba cạnh tam giác.")
    }
    } else {
        document.write(sa+","+sb+","+sc+" không phải là ba cạnh tam giác.")
    }

