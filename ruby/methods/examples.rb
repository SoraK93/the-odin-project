# Example 1
a = [1, 2, 3]
def mutate(array)
  array.pop
end
p "Before mutate method: #{a}"
p mutate(a)
p "After mutate method: #{a}"

# Exercise 2
def add_three(number)
  return number + 3
  number + 4
end
returned_value = add_three(4)
puts returned_value

# Example 3
def just_assignement(number)
  foo = number + 3
end
puts just_assignement(2)

# Example 4
puts add_three(5).times {puts "this should print 8 times"}

# Example 5
def first
  puts "first method"
end
def second
  first
  puts "second method"
end
second

