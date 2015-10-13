300.times do |i|
  datatable = Datatable.new
  
  (1..200).each do |y|
    if y == 2
      prefix = 'integer'
      value = rand(0..200)
    elsif y == 3
      prefix = 'date'
      value = rand(1.year.ago..1.year.from_now)
    else
      prefix = 'string'
      value = "String #{y}"
    end

    num = sprintf '%03d', y
    column_name = prefix + num
    datatable.send("#{column_name}=", value)
  end

  datatable.save
end
