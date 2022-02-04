require "colorize"
require 'colorized_string'



def test
  for i in 1..4
computer=rand(1..4)
if computer==1

x.push(blue)

elsif computer==2


x.push(red)
elsif computer==3

x.push(purple)

elsif computer==4

x.push(yellow)

end

 
 
end
puts "The Code has been made!"
puts "Find the code!"
puts "Write a code of 4 numbers made of 1, 2, 3 and 4 "
for z in 1..12
  puts "\nTurn ##{z}"
  c=[]
  b=[]
  z+=1
  
code=gets.chomp.delete('^0-9')   
  
while code.length>4 or code.include?("1")==false && code.include?("2")==false && code.include?("3")==false && code.include?("4")==false or code.length<4
  puts "The inserted number is invalid!"
  puts "Please try again!"
   code=gets.chomp.delete('^0-9') 
end
 code=code.split(//)
 code.each do |data1| 
  
  c.push(f[data1.to_i])

end

 c.each do |data|
  print data
 end
a=0
 c.each do |item|
 a+=1
 if item==x[a]
 b.push(bulina_rosie)

 else 
  b.push(bulina_goala)

 end

end

b=b.shuffle
b.each do |num|
  print num
end
  print code
if code==x
  puts "Congratulations ,you broke the code!"
else
  
end
end
puts "You didnt break the code!"

end