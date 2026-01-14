def invert(lst):
  result = [];
  for num in lst:
    num *= -1;
    result.append(num);
  print(result);
  return result;