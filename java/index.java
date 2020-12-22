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
 