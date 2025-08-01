# capitalize
"hello".capitalize #=> "Hello"

# include?
"hello".include?("lo")  #=> true

"hello".include?("z")   #=> false

# upcase
"hello".upcase  #=> "HELLO"

# downcase
"Hello".downcase  #=> "hello"

# empty?
"hello".empty?  #=> false

"".empty?       #=> true

# length
"hello".length  #=> 5

# reverse
"hello".reverse  #=> "olleh"

# split
"hello world".split  #=> ["hello", "world"]

"hello".split("")    #=> ["h", "e", "l", "l", "o"]

# strip
" hello, world   ".strip  #=> "hello, world"

# string manipulation
"he77o".sub("7", "l")           #=> "hel7o"

"he77o".gsub("7", "l")          #=> "hello"

"hello".insert(-1, " dude")     #=> "hello dude"

"hello world".delete("l")       #=> "heo word"

"!".prepend("hello, ", "world") #=> "hello, world!"
