/* 
  1.编写一个正则  可以匹配用户输入的手机号是否合法
  var  reg=/\d{0,11}
  console.log(reg.text('13501115426'));
  2.编写一个正则  可以匹配有效数字
  var reg=/^\d/;
  console.log(reg.test(123nihao));
  3.编写一个正则  可以匹配QQ邮箱
  var reg = /^\d+.\d{3}$
  4.编写一个正则  可以匹配身份证号码
  var reg=/^\d[a-z];
  5.编写一个正则  可以匹配 18-65 之间的整数
  var reg=/^18|65$/;
  6.编写一个正则  可以匹配用户输入的密码是否符合规则；（8-18位 既有大写字母 又有小写字母 还得有数字） 不做要求
  var reg=/\d\w{8,18}/;
*/