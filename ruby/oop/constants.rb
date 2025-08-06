class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    @name = n
    @age = a * DOG_YEARS
  end

  def to_s
        "#{name} is #{age} years old."
  end
end

sparky = GoodDog.new("Sparky", 4)
puts sparky.age
puts sparky