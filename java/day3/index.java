import java.util.*;

public class Collectionbi{
    public static void main(String[] args){
        ArrayList<String> list = new ArrayList<String>();
        list.add("mahesh");
        list.add("munna");
        list.add("mayur");
 int index=Collections.binarySearch(list, "munna");
System.out.println(index);

    }
}