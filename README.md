# Notes
## List of Dotnet 
```cs
var collection = new List<string>();
collection.Add("sun");
collection.Add("mun");
collection.Clear();
collection.Remove("sun");
collection.RemoveAt("sun");
collection.RemoveRange("sun");
collection.IndexOf("sun");
collection.Count();
collection.RemoveAll();
collection.RemoveAll(newArray);

foreach (var item in collection)
    {
        Console.WriteLine(item);
    }

```
## Dotnet List of Class
```cs
using System;
// using System.Linq;
using System.Collections.Generic;

public class Program
{
	public static void Main()
	{
		var students = new List<Student>() { 
                new Student(){ Id = 1, Name="Bill" },
                new Student(){ Id = 2, Name="Steve" },
                new Student(){ Id = 3, Name="Ram" },
                new Student(){ Id = 4, Name="Abdul" },
				new Student(){ Id = 5, Name="Bill" }
		};
		
		//get all students whose name is Bill
		// var studNames = from s in students where s.Name == "Bill" select s;
		
		foreach(var student in students)
			Console.WriteLine(student.Id + ", " +student.Name);
	}
}

public class Student
{ 
	public int Id { get; set; }
	public string Name { get; set; }
}

```

## Java Array List
```java
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {

      ArrayList<String> items= new ArrayList<String>();
      
      items.add("ok");
      items.add("dmru");
      items.remove("dmru");
      for(String item:items){
        System.out.println(item);
      }
    }
}
 

```


`EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization`