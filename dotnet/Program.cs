using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
namespace dotnet{
    public class Program{
        static void Main(string[] args){

            var arr =  new ArrayList();
            arr.Add("a");
            arr.Add(1);
            Console.WriteLine(arr);

            // List Of Data
            var collection = new List<string>();
            collection.Add("a");
            collection.Add("b");
            collection.Remove("b");
            foreach (var item in collection)
            {
                Console.WriteLine(item);
            }


        }
    }
}