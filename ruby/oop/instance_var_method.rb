class GoodDog
  def initialize(name)
    @name = name
  end

  def name
    # getter method
    @name
  end

  def name=(update_name)
    # setter method
    @name = update_name
  end

  def speak
    "#{@name} says arf!"
  end
end


# above code can be repactored into
class GoodDog1
  attr_accessor :name
  # create only getter method using attr_reader
  # create only setter method using attr_writer

  def initialize(name)
    @name = name
  end

  def speak
    "#{name} says arf!"
  end
end

sparky = GoodDog1.new("Sparky")
puts sparky.speak
puts sparky.name
sparky.name = "Spartacus"
puts sparky.name