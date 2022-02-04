require "colorize"
require 'colorized_string'
require './Breaker'
require "./Maker.rb"
def mastermind
bulina_rosie=" \e[91m\u25CF\e[0m"
bulina_goala=" \e[37m\u25CB\e[0m"
blue="\e[44m  1  \e[0m"
red="\e[41m  2  \e[0m"
purple="\e[45m  3  \e[0m"
yellow="\e[43m  4  \e[0m"
w=0
d=0
i=0
g=0
z=0
u=0
z=1
j=0
p=0
v=0
s=0
q=0
b=[]
c=[]

f=[nil,blue,red,purple,yellow]
r=[blue,red,purple,yellow]
 x=[]

puts "Please choose 1 for BREAKER or 2 for MAKER"
choose=gets.chomp
while choose != "1" && choose != "2"
  puts "Please insert a valid choice!"
  choose=gets.chomp
end
if choose=="1"
for i in 1..4
computer=rand(1..4)
if computer==1
print blue
x.push(blue)

elsif computer==2
print red

x.push(red)
elsif computer==3
print purple
x.push(purple)

elsif computer==4
print yellow
x.push(yellow)

end


end
puts "The Code has been made!"
puts "Find the code!"
puts "Write a code of 4 numbers made of 1, 2, 3 and 4 "
while z<=12 do
  
  break if c==x
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

 if item==x[a]
 b.push(bulina_rosie)
 a+=1
 else 
  b.push(bulina_goala)
a+=1
 end

end

b=b.shuffle
b.each do |num|
  print num
end
  

end

if c==x
  puts "\nCongratulations ,you broke the code!"
  puts "Press y to play again"
  again=gets.chomp
  while again!="y"
    again=gets.chomp
  end
  mastermind
else
  puts "\nYou didnt break the code!"
puts "Press y to play again"
  again=gets.chomp
  while again!="y"
    again=gets.chomp
  end
  mastermind
end

else
 
  puts "Please make a code made of 4 numbers from 1 to 4!"
code=gets.chomp.delete('^0-9')   

while code.length>4 or code.include?("1")==false && code.include?("2")==false && code.include?("3")==false && code.include?("4")==false or code.include?("5")==true or code.include?("6")==true or code.include?("7")==true or code.include?("8")==true or code.include?("6")==true or code.include?("9")==true  or code.length<4
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


rez=[]
cod=[]
while z<=12 do
  break if rez==c
   puts "\nTurn ##{z}"
z+=1
  if rez.empty?
 for g in 1..4
  rez.push(r.sample)
  end  
else
  
 for s in 0...4
  if rez[s]!=c[s]         #s q w
     rez[s]=r.sample
  end

end
end
rez.each do |date|
  print date
end
for p in 0...4
if rez[p]==c[p]
 rez[p]=c[p]
end


end

end
if rez!=c
  puts "\nCongratulations, the computer couldnt break your code!"
  puts "Press y to play again"
  again=gets.chomp
  while again!="y"
    again=gets.chomp
  end
  mastermind
else
  puts "\nThe Computer broke your code!"
  puts "Press y to play again"
  again=gets.chomp
  while again!="y"
    again=gets.chomp
  end
  mastermind
end

end


end
mastermind