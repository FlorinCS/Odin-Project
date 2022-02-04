require "colorize"
require 'colorized_string'

def Maker
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

end


  







