my_order = ["medium Big Mac", "medium fries", "medium milkshake"]
puts my_order.map{ | item | item.gsub("medium", "extra large")}

salaries = [1200, 1500, 1100, 1800]
puts salaries.map{| salary | salary - 700}

