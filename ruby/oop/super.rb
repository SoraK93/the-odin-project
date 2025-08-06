class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class GoodDog < Animal
  def initialize(color)
    super
    @color = color
  end
end

class BadDog < Animal
  def initialize(age, name)
    super(name)
    @age = age
  end
end

module Swimmable
  def swim
    "I'm swimming!"
  end
end

class Fish < Animal
  include Swimmable  # mixing in Swimmable module
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable  # mixing in Swimmable module
end

BadDog.new(2, "bear")  # => #<BadDog:0x007fb40b2beb68 @age=2, @name="bear">
GoodDog.new("brown")  # => #<GoodDog:0x007fb40b1e6718 @color="brown", @name="brown">
