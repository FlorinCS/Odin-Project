require "json"

def hangman
word_list=[]
i=0
a=0
e=8
dictionar=File.open("5desk.txt","r")
dictionar.each do |data|

  word_list.push(data)
end

puts "This is Hangman!"
puts "Type 1 to start a new game or 2 to load a game!"
game=gets.chomp
while game!="1" && game!="2"
  puts "Value incorrect!Try again!"
game=gets.chomp
end
if game=="1"
puts "Please enter your name!"
player1=gets.chomp
while player1==""
  puts "Please insert a valid name!"
  player1=gets.chomp
end
puts "Welcome to a new game #{player1}!"
puts "You have 4 chances to find the word!"

dictionar.each do |data|

  word_list.push(data)
end
word=[]
 secret_word= word_list.sample
for i in 2...secret_word.length
  word.push("_")
  
end

word=word.join("")
print word
while e!=0
print "  Chances left: #{e}"
puts ""
puts "Please write a letter from a to z or type save!"
letter=gets.chomp
while word.include?(letter)==true
  puts "Your letter is already there!"
  puts "Please try again!"
  letter=gets.chomp
end
if letter=="save"
#file=File.open("save_game.json","w+")
puts "Please write a name for the save!"

save=gets.chomp
File.open("save_name.txt","a+") do |items|
  
  items.write("#{save}\n")
end
 content={
   
   "word" => word,
   "secret"=> secret_word,
   "turn"=> e

 }
 content=content.to_json
 File.open("save_game.json","a+") do |files|
 

 files.write("#{content}\n")
 
 
 end
 hangman
 
elsif secret_word.include?(letter)

 index= secret_word.index(letter)
 
  secret_word=secret_word.chars
  word=word.chars
  index=secret_word.each_index.select { |i| secret_word[i] ==letter }
  index.each{|data| word[data]=letter }
  word=word.join("")
  secret_word=secret_word.join("")
  secret_word.slice! "\r\n"
 print word
 
 else
  e-=1
  puts word
 end
  break if secret_word==word


end
if secret_word==word
  puts
  puts "Congratulations you won the game!"
  
else
  puts
  puts "You lost the game!"

end
puts secret_word
 hangman
else
 puts "These are your saved games!"
 file=File.open("save_name.txt","r+")
  puts  file.readlines()
  file.rewind
   save_choose=gets.chomp
   save_choose=save_choose.to_i
  
  file.close


  #File.open("save_game.json","a+") do |data|

    #puts data.readline.split
#end
fil=File.open("save_game.json","r+")
     to_rb=fil.readlines()[save_choose]
      to_rb=JSON.parse(to_rb)
     
#data_hash=JSON.parse(fil[1])


word= to_rb["word"]
 secret_word=to_rb["secret"]
secret_word.slice! "\r\n"

e=to_rb["turn"]

print word 


while e!=0
print "  Chances left: #{e}"
puts ""
puts "Please write a letter from a to z or type save!"
letter=gets.chomp
while word.include?(letter)==true
  puts "Your letter is already there!"
  puts "Please try again!"
  letter=gets.chomp
end
if letter=="save"
#file=File.open("save_game.json","w+")
 puts "Please write a name for the save!"

save=gets.chomp
File.open("save_name.txt","a+") do |items|
  
  items.write("#{save}\n")
end
 content={
   
   "word" => word,
   "secret"=> secret_word,
   "turn"=> e

 }
 content=content.to_json
 File.open("save_game.json","a+") do |files|
 

 files.write("#{content}\n")
 
 end
 hangman
 
elsif secret_word.include?(letter)

 index= secret_word.index(letter)
 
  secret_word=secret_word.chars
  word=word.chars
  index=secret_word.each_index.select { |i| secret_word[i] ==letter }
  index.each{|data| word[data]=letter }
  word=word.join("")
  secret_word=secret_word.join("")
  secret_word.slice! "\r\n"
 print word
 
 
 else
  e-=1
  puts word
 end
  break if secret_word==word


end
if secret_word==word
  puts ""
  puts "Congratulations you won the game!"
  puts ""
 
else
  puts ""
  puts "You lost the game!"
  puts ""
  
end

puts secret_word
hangman


end
end
hangman

