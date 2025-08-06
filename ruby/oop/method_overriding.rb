class Parent
  def say_hi
    p "Hi from Parent."
  end
end

class Child
  def say_hi
    p "Hi from Child."
  end

  def send
    p "send from Child..."
  end

  def instance_of?
    p "I am a fake instance"
  end
end

# lad = Child.new
# lad.send :say_hi  # => Error

child = Child.new
child.say_hi  # => "Hi from Child."

Parent.superclass  # => Object

# c = Child.new
# c.instance_of? Child  # => true
# c.instance_of? Parent  # => false