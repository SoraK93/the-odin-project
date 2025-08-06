# Modules, Classes, Inheritance
class Mammal
    def heartbeat?()
      true
    end
end

class Dog < Mammal
    def initialize(name)
      @name = name
    end

    def bark()
      return "Ruff ruff"
    end

    def speak()
      return "woof woof"
    end
end

sparky = Dog.new("Sparky")
puts sparky.bark()
puts sparky.speak()
puts sparky.heartbeat?()
puts sparky.methods().include?(:heartbeat?) # Checks if a module is present



class Insect
  def initialize(age_in_days)
    @age_in_days = age_in_days
  end

  def age_in_years()
    @age_in_days / 365
  end
end

class Lamp
  def self.about_me()
    "We brighten up people's lives."
  end
end

class WaterBottle
  def initialize(size)
    @size = size
  end

  def bottle_size()
    @size
  end
end

bottle = WaterBottle.new(100)
puts bottle.bottle_size()



module HappyHappy
  def say_something()
    return("Happy happy, joy joy")
  end
end

class Alien
  include HappyHappy
end

class Person
  attr_accessor :age
  attr_reader :first_name, :last_name
  include HappyHappy

  def initialize(first_name, last_name, age)
    @first_name = first_name
    @last_name = last_name
    @age = age
  end

  def full_name
    "Full Name: #{self.first_name} #{self.last_name}"
  end
end

sora = Person.new("Sora", "Kage", 23)
sora.age=(32)
puts sora.age
puts sora.say_something()
puts sora.full_name

tenti = Alien.new()
puts tenti.say_something()



module MathHelper
    def multiply_by_two(a)
      a * 2
    end

    def exponent(a, b)
      a ** b
    end
end

class Homework
  include MathHelper
end

class Calculator
  include MathHelper

  def square_root(num)
    exponent(num, 0.5)
  end
end

study = Homework.new()
puts study.multiply_by_two(10)
calc = Calculator.new()
puts "Square root: #{calc.square_root(25)}"
puts Array.ancestors()



class Box
end

my_box = Box.new
puts my_box.methods().count()



class BaseballPlayer
  attr_accessor :hits, :walks, :at_bats

  def initialize(hits, walks, at_bats)
    @hits = hits
    @walks = walks
    @at_bats = at_bats
  end

  def batting_average
    self.hits / self.at_bats.to_f
  end

  def on_base_percentage
    (self.hits + self.walks) / self.at_bats.to_f
  end
end

ricky = BaseballPlayer.new(10, 12, 18)
puts ricky.batting_average
puts ricky.on_base_percentage
